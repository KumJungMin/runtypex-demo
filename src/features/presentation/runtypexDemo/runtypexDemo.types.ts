import type { SearchAddressDomain as GeneratedSearchAddressDomain } from "./runtypex.generated";

export type { SearchAddressDomain } from "./runtypex.generated";

export interface SearchAddressDto {
  SEARCH_TXT: string;
  FIELDS: string;
  SORT: boolean;
  COUNTRY: "KR" | "US";
  STATUS: "ACTIVE" | "INACTIVE";
  RESULT: {
    ID: string;
    TYPE: "ROAD" | "JIBUN";
    TITLE: string;
    DETAIL: string;
    ZIP_CODE: string;
  };
  META: {
    MEMO?: string;
  };
  TAGS: Array<{
    ID: number;
    LABEL: string;
  }>;
}

export interface SearchAddressDomainSource {
  /** Address id */
  id: string;
  /** Address title */
  title: string;
  /** Detailed address text */
  detail: string;
  /** Postal code */
  zipCode: string;
  /** Country code */
  country: string;
  /** Sort direction */
  sortedBy: "asc" | "desc";
  /** First tag id */
  firstTagId: number;
  /** Display badge */
  badge: string;
  /** Whether the address can be shown as a search result */
  isSearchable: boolean;
  /** User-facing memo */
  memo: string;
}

export interface TransformRow {
  field: string;
  path: string;
  result: string;
}

export interface MetadataRow {
  field: string;
  dto: string;
  db: string;
}

export interface AddressSearchApiResponse {
  items: SearchAddressDto[];
  requestedAt: string;
}

export interface AddressSearchViewResult {
  addresses: GeneratedSearchAddressDomain[];
  keyword: string;
  requestedAt: string;
  selectedAddress: GeneratedSearchAddressDomain | null;
  totalCount: number;
}

export interface VerificationRow {
  actual: string;
  expected: string;
  label: string;
  passed: boolean;
}
