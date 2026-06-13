import {
  addressMap,
  createPolicyViolationMessage,
  toAddress,
} from "./runtypexDemo.mapper";
import type {
  SearchAddressDto,
  VerificationRow,
} from "./runtypexDemo.types";

export function verifyPureRuntypexFeatures(): VerificationRow[] {
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

  const domain = toAddress(dto);
  const policyViolation = createPolicyViolationMessage();

  return [
    verify("source path", "addr-1001", domain.id),
    verify("transform", "asc", domain.sortedBy),
    verify("mapperHelpers", "KR:road", domain.badge),
    verify("default value", "메모 없음", domain.memo),
    verify("safe missing array path", "0", String(domain.firstTagId)),
    verify(
      "policy violation",
      "contains Mapping policy violation",
      String(policyViolation.includes("Mapping policy violation")),
    ),
    verify(
      "metadata dtoDescription",
      "Address identifier from the API response.",
      addressMap.id.dtoDescription ?? "",
    ),
  ];
}

function verify(label: string, expected: string, actual: string): VerificationRow {
  return {
    actual,
    expected,
    label,
    passed:
      expected === "contains Mapping policy violation"
        ? actual === "true"
        : actual === expected,
  };
}
