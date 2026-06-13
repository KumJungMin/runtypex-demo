import type { AddressSearchResponseDto } from "./addressSearch.types";

const addressResponses: Record<string, AddressSearchResponseDto> = {
  seoul: {
    REQUEST_ID: "req-seoul-001",
    KEYWORD: "Seoul Station",
    ITEMS: [
      {
        ADDRESS_ID: "addr-1001",
        ADDRESS_TYPE: "ROAD",
        DISPLAY: {
          TITLE: "Seoul Station Exit 1",
          DETAIL: "405 Hangang-daero, Jung-gu, Seoul",
          POSTAL_CODE: "04509",
        },
        LOCATION: {
          COUNTRY: "KR",
          CITY: "Seoul",
        },
        DELIVERY: {
          AVAILABLE: true,
          PRIORITY: 1,
        },
        META: {
          UPDATED_AT: "2026-06-13T09:10:00+09:00",
          MEMO: "Main entrance delivery point",
        },
      },
      {
        ADDRESS_ID: "addr-1002",
        ADDRESS_TYPE: "PARCEL",
        DISPLAY: {
          TITLE: "Dongja-dong Parcel Address",
          DETAIL: "Dongja-dong, Yongsan-gu, Seoul",
          POSTAL_CODE: "04301",
        },
        LOCATION: {
          COUNTRY: "KR",
          CITY: "Seoul",
        },
        DELIVERY: {
          AVAILABLE: false,
          PRIORITY: 3,
        },
        META: {
          UPDATED_AT: "2026-06-12T17:45:00+09:00",
        },
      },
    ],
  },
  busan: {
    REQUEST_ID: "req-busan-001",
    KEYWORD: "Busan Port",
    ITEMS: [
      {
        ADDRESS_ID: "addr-2001",
        ADDRESS_TYPE: "ROAD",
        DISPLAY: {
          TITLE: "Busan Port International Terminal",
          DETAIL: "206 Chungjang-daero, Dong-gu, Busan",
          POSTAL_CODE: "48751",
        },
        LOCATION: {
          COUNTRY: "KR",
          CITY: "Busan",
        },
        DELIVERY: {
          AVAILABLE: true,
          PRIORITY: 2,
        },
        META: {
          UPDATED_AT: "2026-06-10T15:20:00+09:00",
          MEMO: "Harbor gate access required",
        },
      },
    ],
  },
};

export async function searchAddressApi(keyword: string) {
  await wait(180);
  const normalized = keyword.trim().toLowerCase();

  if (normalized.includes("busan")) {
    return addressResponses.busan;
  }

  return addressResponses.seoul;
}

function wait(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
