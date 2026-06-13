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

export interface SearchAddressDomain {
  /**
   * Address id
   *
   * DTO: SearchAddressDto.RESULT.ID Address identifier from the API response.
   * DTO type: string
   * DB: address.id
   * Domain type: string
   */
  id: string;

  /**
   * Address title
   *
   * DTO: SearchAddressDto.RESULT.TITLE Human-readable address title from the API response.
   * DTO type: string
   * DB: address.title
   * Domain type: string
   */
  title: string;

  /**
   * DTO: SearchAddressDto.RESULT.DETAIL Detailed address text from the API response.
   * DTO type: string
   * Domain type: string
   */
  detail: string;

  /**
   * Postal code
   *
   * DTO: SearchAddressDto.RESULT.ZIP_CODE Postal code returned by the address API.
   * DTO type: string
   * DB: address.zip_code
   * Domain type: string
   */
  zipCode: string;

  /**
   * DTO: SearchAddressDto.COUNTRY Country code for the searched address.
   * DTO type: "KR" | "US"
   * Domain type: string
   */
  country: string;

  /**
   * DTO: SearchAddressDto.SORT Boolean sort flag where true means ascending order.
   * DTO type: boolean
   * Domain type: "asc" | "desc"
   */
  sortedBy: "asc" | "desc";

  /**
   * DTO: SearchAddressDto.TAGS.0.ID Identifier of the first tag attached to the result.
   * DTO type: number
   * Domain type: number
   */
  firstTagId: number;

  /**
   * DTO: SearchAddressDto.RESULT.TYPE Address result type used to build the display badge.
   * DTO type: "ROAD" | "JIBUN"
   * Domain type: string
   */
  badge: string;

  /**
   * DTO: SearchAddressDto.STATUS Search status from the API response.
   * DTO type: "ACTIVE" | "INACTIVE"
   * Domain type: boolean
   */
  isSearchable: boolean;

  /**
   * DTO: SearchAddressDto.META.MEMO Optional memo included in response metadata.
   * DTO type: string | undefined
   * Domain type: string
   */
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
  addresses: SearchAddressDomain[];
  keyword: string;
  requestedAt: string;
  selectedAddress: SearchAddressDomain | null;
  totalCount: number;
}

export interface VerificationRow {
  actual: string;
  expected: string;
  label: string;
  passed: boolean;
}
