import { describe, expect, it } from "vitest";
import { addressMap, createPolicyViolationMessage, toAddress } from "./runtypexDemo.mapper";
import {
  addressSearchApiResponse,
  createAddressSearchViewResult,
} from "./runtypexDemo.realUsage";
import type { SearchAddressDto } from "./runtypexDemo.types";
import { verifyPureRuntypexFeatures } from "./runtypexDemo.verification";

const dto: SearchAddressDto = {
  SEARCH_TXT: "서울역",
  FIELDS: "road,jibun",
  SORT: true,
  COUNTRY: "KR",
  STATUS: "ACTIVE",
  RESULT: {
    ID: "addr-1001",
    TYPE: "ROAD",
    TITLE: "서울특별시 중구 세종대로",
    DETAIL: "서울역 인근",
    ZIP_CODE: "04524",
  },
  META: {},
  TAGS: [],
};

describe("pure runtypex runtime mapper", () => {
  it("maps source paths, transforms values, applies defaults, and uses helpers", () => {
    expect(toAddress(dto)).toEqual({
      id: "addr-1001",
      title: "서울특별시 중구 세종대로",
      detail: "서울역 인근",
      zipCode: "04524",
      country: "KR",
      sortedBy: "asc",
      firstTagId: 0,
      badge: "KR:road",
      isSearchable: true,
      memo: "메모 없음",
    });
  });

  it("enforces mapping policy and keeps metadata available", () => {
    expect(createPolicyViolationMessage()).toContain("Mapping policy violation");
    expect(addressMap.id.dtoDescription).toBe(
      "Address identifier from the API response.",
    );
  });

  it("reports every runtime verification as pass", () => {
    expect(verifyPureRuntypexFeatures()).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ label: "source path", passed: true }),
        expect.objectContaining({ label: "transform", passed: true }),
        expect.objectContaining({ label: "mapperHelpers", passed: true }),
        expect.objectContaining({ label: "default value", passed: true }),
        expect.objectContaining({ label: "safe missing array path", passed: true }),
        expect.objectContaining({ label: "policy violation", passed: true }),
        expect.objectContaining({ label: "metadata dtoDescription", passed: true }),
      ]),
    );
  });

  it("maps an API response into view-ready domain state", () => {
    expect(createAddressSearchViewResult("서울역", addressSearchApiResponse)).toEqual({
      keyword: "서울역",
      requestedAt: "2026-06-13T20:50:00+09:00",
      totalCount: 1,
      selectedAddress: expect.objectContaining({
        id: "addr-1001",
        badge: "KR:road",
        memo: "사용자에게 우선 노출",
      }),
      addresses: [
        expect.objectContaining({
          id: "addr-1001",
          isSearchable: true,
          sortedBy: "asc",
        }),
      ],
    });
  });
});
