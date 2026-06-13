import {
  defineMap,
  defineMappingPolicy,
  makeMapper,
  mapperHelpers,
  source,
  transform,
} from "runtypex/mapper";
import type {
  SearchAddressDomain,
  SearchAddressDto,
} from "./runtypexDemo.types";

const helpers = mapperHelpers<SearchAddressDto>();

export const addressMap = defineMap<SearchAddressDto, SearchAddressDomain>()({
  id: source("RESULT.ID", {
    db: "address.id",
    description: "Address id",
    dtoDescription: "Address identifier from the API response.",
  }),
  title: source("RESULT.TITLE", {
    db: "address.title",
    description: "Address title",
    dtoDescription: "Human-readable address title from the API response.",
  }),
  detail: source("RESULT.DETAIL", {
    dtoDescription: "Detailed address text from the API response.",
  }),
  zipCode: source("RESULT.ZIP_CODE", {
    db: "address.zip_code",
    description: "Postal code",
    dtoDescription: "Postal code returned by the address API.",
  }),
  country: source("COUNTRY", {
    dtoDescription: "Country code for the searched address.",
  }),
  sortedBy: transform("SORT", (value) => (value === true ? "asc" : "desc"), {
    dtoDescription: "Boolean sort flag where true means ascending order.",
  }),
  firstTagId: source("TAGS.0.ID", {
    default: 0,
    dtoDescription: "Identifier of the first tag attached to the result.",
  }),
  badge: helpers.transform(
    "RESULT.TYPE",
    (value, dto) => {
      return `${dto.COUNTRY}:${String(value).toLowerCase()}`;
    },
    {
      dtoDescription: "Address result type used to build the display badge.",
    },
  ),
  isSearchable: helpers.transform(
    "STATUS",
    (value, dto) => {
      return value === "ACTIVE" && dto.SEARCH_TXT.trim().length > 0;
    },
    {
      dtoDescription: "Search status from the API response.",
    },
  ),
  memo: source("META.MEMO", {
    default: "메모 없음",
    dtoDescription: "Optional memo included in response metadata.",
  }),
});

export const addressPolicy = defineMappingPolicy<SearchAddressDto>()({
  id: source("RESULT.ID"),
  zipCode: source("RESULT.ZIP_CODE"),
  searchText: source("SEARCH_TXT"),
});

export const toAddress = makeMapper(addressMap, {
  policy: addressPolicy,
  policyMode: "error",
});

export function createPolicyViolationMessage() {
  return captureError(() => {
    const badMap = defineMap<SearchAddressDto, { addressIdentifier: string }>()({
      addressIdentifier: source("RESULT.ID"),
    });
    makeMapper(badMap, { policy: addressPolicy, policyMode: "error" });
  });
}

function captureError(run: () => unknown) {
  try {
    run();
    return "No policy violation";
  } catch (error) {
    return error instanceof Error ? error.message : String(error);
  }
}
