import { describe, expect, it } from "vitest";
import { toAddressCandidate } from "./addressSearch.mapper";
import { searchAddressCandidates } from "./addressSearch.service";
import type { AddressCandidateDto } from "./addressSearch.types";
import {
  isAddressSearchForm,
  parseAddressSearchForm,
} from "./addressSearch.validation";

const dto: AddressCandidateDto = {
  ADDRESS_ID: "addr-test",
  ADDRESS_TYPE: "ROAD",
  DISPLAY: {
    TITLE: "Test Address",
    DETAIL: "123 Test Road",
    POSTAL_CODE: "10000",
  },
  LOCATION: {
    COUNTRY: "KR",
    CITY: "Seoul",
  },
  DELIVERY: {
    AVAILABLE: true,
    PRIORITY: 2,
  },
  META: {
    UPDATED_AT: "2026-06-13T09:00:00+09:00",
  },
};

describe("address search example", () => {
  it("maps provider DTOs into address candidates", () => {
    expect(toAddressCandidate(dto)).toEqual({
      id: "addr-test",
      title: "Test Address",
      detail: "123 Test Road",
      postalCode: "10000",
      country: "KR",
      city: "Seoul",
      deliverable: true,
      priority: 2,
      badge: "KR:road",
      note: "No provider note",
      updatedAt: "2026-06-13T09:00:00+09:00",
    });
  });

  it("returns view-ready address search results", async () => {
    const result = await searchAddressCandidates({
      keyword: "Busan Port",
      includeUnavailable: false,
    });

    expect(result).toEqual({
      includeUnavailable: false,
      keyword: "Busan Port",
      requestId: "req-busan-001",
      totalCount: 1,
      selected: expect.objectContaining({
        id: "addr-2001",
        badge: "KR:road",
      }),
      candidates: [
        expect.objectContaining({
          id: "addr-2001",
          deliverable: true,
        }),
      ],
    });
  });

  it("validates the search form before calling the address provider", () => {
    expect(isAddressSearchForm({ keyword: "Seoul Station" })).toBe(true);
    expect(isAddressSearchForm({ keyword: 123 })).toBe(false);
    expect(parseAddressSearchForm({ keyword: "  Seoul Station  " })).toEqual({
      keyword: "Seoul Station",
      includeUnavailable: false,
    });
    expect(() => parseAddressSearchForm({ keyword: "" })).toThrow(
      "Enter a search keyword.",
    );
  });

  it("can include unavailable candidates when the validated form allows it", async () => {
    const result = await searchAddressCandidates({
      keyword: "Seoul Station",
      includeUnavailable: true,
    });

    expect(result.includeUnavailable).toBe(true);
    expect(result.totalCount).toBe(2);
    expect(result.candidates).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          id: "addr-1002",
          deliverable: false,
        }),
      ]),
    );
  });
});
