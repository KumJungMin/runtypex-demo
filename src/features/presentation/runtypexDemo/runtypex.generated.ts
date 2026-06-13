export interface SearchAddressDomain {
  /**
   * Address id
   *
   * - DTO: `SearchAddressDto.RESULT.ID`
   * - DTO description: Address identifier from the API response.
   * - DTO type: `string`
   * - Origin: `address.id`
   * - Domain type: `string`
   */
  id: string;

  /**
   * Address title
   *
   * - DTO: `SearchAddressDto.RESULT.TITLE`
   * - DTO description: Human-readable address title from the API response.
   * - DTO type: `string`
   * - Origin: `address.title`
   * - Domain type: `string`
   */
  title: string;

  /**
   * Detailed address text
   *
   * - DTO: `SearchAddressDto.RESULT.DETAIL`
   * - DTO description: Detailed address text from the API response.
   * - DTO type: `string`
   * - Domain type: `string`
   */
  detail: string;

  /**
   * Postal code
   *
   * - DTO: `SearchAddressDto.RESULT.ZIP_CODE`
   * - DTO description: Postal code returned by the address API.
   * - DTO type: `string`
   * - Origin: `address.zip_code`
   * - Domain type: `string`
   */
  zipCode: string;

  /**
   * Country code
   *
   * - DTO: `SearchAddressDto.COUNTRY`
   * - DTO description: Country code for the searched address.
   * - DTO type: `"KR" | "US"`
   * - Domain type: `string`
   */
  country: string;

  /**
   * Sort direction
   *
   * - DTO: `SearchAddressDto.SORT`
   * - DTO description: Boolean sort flag where true means ascending order.
   * - DTO type: `boolean`
   * - Domain type: `"asc" | "desc"`
   */
  sortedBy: "asc" | "desc";

  /**
   * First tag id
   *
   * - DTO: `SearchAddressDto.TAGS.0.ID`
   * - DTO description: Identifier of the first tag attached to the result.
   * - DTO type: `number`
   * - Domain type: `number`
   */
  firstTagId: number;

  /**
   * Display badge
   *
   * - DTO: `SearchAddressDto.RESULT.TYPE`
   * - DTO description: Address result type used to build the display badge.
   * - DTO type: `"ROAD" | "JIBUN"`
   * - Domain type: `string`
   */
  badge: string;

  /**
   * Whether the address can be shown as a search result
   *
   * - DTO: `SearchAddressDto.STATUS`
   * - DTO description: Search status from the API response.
   * - DTO type: `"ACTIVE" | "INACTIVE"`
   * - Domain type: `boolean`
   */
  isSearchable: boolean;

  /**
   * User-facing memo
   *
   * - DTO: `SearchAddressDto.META.MEMO`
   * - DTO description: Optional memo included in response metadata.
   * - DTO type: `string | undefined`
   * - Domain type: `string`
   */
  memo: string;

}
