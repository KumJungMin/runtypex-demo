import { computed, ref } from "vue";
import {
  addressMap,
  createPolicyViolationMessage,
  toAddress,
} from "./runtypexDemo.mapper";
import {
  basicMapperCode,
  generatedJSDocExample,
} from "./runtypexDemo.snippets";
import {
  addressSearchApiResponse,
  createAddressSearchViewResult,
} from "./runtypexDemo.realUsage";
import type {
  MetadataRow,
  SearchAddressDomain,
  SearchAddressDto,
  TransformRow,
} from "./runtypexDemo.types";
import { verifyPureRuntypexFeatures } from "./runtypexDemo.verification";

export function useRuntypexDemo() {
  const isActiveDto = ref(true);
  const includeOptionalMemo = ref(false);
  const includeTags = ref(true);

  const currentDto = computed<SearchAddressDto>(() => ({
    SEARCH_TXT: "서울역",
    FIELDS: "road,jibun",
    SORT: true,
    COUNTRY: "KR",
    STATUS: isActiveDto.value ? "ACTIVE" : "INACTIVE",
    RESULT: {
      ID: "addr-1001",
      TYPE: "ROAD",
      TITLE: "서울특별시 중구 세종대로",
      DETAIL: "서울역 인근",
      ZIP_CODE: "04524",
    },
    META: includeOptionalMemo.value ? { MEMO: "현장 확인 완료" } : {},
    TAGS: includeTags.value ? [{ ID: 7, LABEL: "primary" }] : [],
  }));

  const mappedAddress = computed<SearchAddressDomain>(() =>
    toAddress(currentDto.value),
  );

  const transformRows = computed<TransformRow[]>(() => [
    {
      field: "sortedBy",
      path: "SORT",
      result: mappedAddress.value.sortedBy,
    },
    {
      field: "badge",
      path: "RESULT.TYPE + dto.COUNTRY",
      result: mappedAddress.value.badge,
    },
    {
      field: "isSearchable",
      path: "STATUS + dto.SEARCH_TXT",
      result: String(mappedAddress.value.isSearchable),
    },
  ]);

  const metadataRows: MetadataRow[] = [
    {
      field: "id",
      dto: `${addressMap.id.from} - ${addressMap.id.dtoDescription}`,
      db: addressMap.id.db ?? "-",
    },
    {
      field: "title",
      dto: addressMap.title.from,
      db: addressMap.title.db ?? "-",
    },
    {
      field: "zipCode",
      dto: addressMap.zipCode.from,
      db: addressMap.zipCode.db ?? "-",
    },
  ];

  return {
    basicMapperCode,
    currentDto,
    generatedJSDocExample,
    includeOptionalMemo,
    includeTags,
    isActiveDto,
    mappedAddress,
    metadataRows,
    policyViolationMessage: createPolicyViolationMessage(),
    realUsageResult: createAddressSearchViewResult(
      "서울역",
      addressSearchApiResponse,
    ),
    transformRows,
    verificationRows: verifyPureRuntypexFeatures(),
  };
}
