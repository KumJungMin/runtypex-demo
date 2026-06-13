import { toAddress } from "./runtypexDemo.mapper";
import type {
  AddressSearchApiResponse,
  AddressSearchViewResult,
} from "./runtypexDemo.types";

export const addressSearchApiResponse: AddressSearchApiResponse = {
  requestedAt: "2026-06-13T20:50:00+09:00",
  items: [
    {
      SEARCH_TXT: "서울역",
      FIELDS: "road,jibun",
      SORT: true,
      COUNTRY: "KR",
      STATUS: "ACTIVE",
      RESULT: {
        ID: "addr-1001",
        TYPE: "ROAD",
        TITLE: "서울특별시 중구 세종대로",
        DETAIL: "서울역 1번 출구 인근",
        ZIP_CODE: "04524",
      },
      META: {
        MEMO: "사용자에게 우선 노출",
      },
      TAGS: [{ ID: 7, LABEL: "primary" }],
    },
    {
      SEARCH_TXT: "서울역",
      FIELDS: "road,jibun",
      SORT: true,
      COUNTRY: "KR",
      STATUS: "INACTIVE",
      RESULT: {
        ID: "addr-1002",
        TYPE: "JIBUN",
        TITLE: "서울특별시 용산구 동자동",
        DETAIL: "비활성 주소 후보",
        ZIP_CODE: "04301",
      },
      META: {},
      TAGS: [],
    },
  ],
};

export function createAddressSearchViewResult(
  keyword: string,
  response: AddressSearchApiResponse,
): AddressSearchViewResult {
  const addresses = response.items
    .map((dto) => toAddress(dto))
    .filter((address) => address.isSearchable);

  return {
    addresses,
    keyword,
    requestedAt: response.requestedAt,
    selectedAddress: addresses[0] ?? null,
    totalCount: addresses.length,
  };
}
