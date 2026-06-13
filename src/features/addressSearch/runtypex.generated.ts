export interface AddressCandidate {
  /**
   * Stable address identifier used by checkout and shipping APIs.
   *
   * - DTO: `AddressCandidateDto.ADDRESS_ID`
   * - DTO description: Provider address identifier.
   * - DTO type: `string`
   * - Origin: `addresses.address_id`
   * - Domain type: `string`
   */
  id: string;

  /**
   * Short address title shown in result rows.
   *
   * - DTO: `AddressCandidateDto.DISPLAY.TITLE`
   * - DTO description: Primary address label from the provider.
   * - DTO type: `string`
   * - Domain type: `string`
   */
  title: string;

  /**
   * Full address text shown after selection.
   *
   * - DTO: `AddressCandidateDto.DISPLAY.DETAIL`
   * - DTO description: Full formatted address from the provider.
   * - DTO type: `string`
   * - Domain type: `string`
   */
  detail: string;

  /**
   * Postal code used by delivery validation.
   *
   * - DTO: `AddressCandidateDto.DISPLAY.POSTAL_CODE`
   * - DTO description: Postal code used for delivery validation.
   * - DTO type: `string`
   * - Origin: `addresses.postal_code`
   * - Domain type: `string`
   */
  postalCode: string;

  /**
   * Country code attached to the address result.
   *
   * - DTO: `AddressCandidateDto.LOCATION.COUNTRY`
   * - DTO description: Country code from the provider result.
   * - DTO type: `"KR" | "US"`
   * - Domain type: `string`
   */
  country: string;

  /**
   * City name used for regional grouping and display.
   *
   * - DTO: `AddressCandidateDto.LOCATION.CITY`
   * - DTO description: City name from the provider result.
   * - DTO type: `string`
   * - Domain type: `string`
   */
  city: string;

  /**
   * Whether this address can currently receive delivery.
   *
   * - DTO: `AddressCandidateDto.DELIVERY.AVAILABLE`
   * - DTO description: Whether delivery is available for this address.
   * - DTO type: `boolean`
   * - Domain type: `boolean`
   */
  deliverable: boolean;

  /**
   * Delivery priority returned by the address provider.
   *
   * - DTO: `AddressCandidateDto.DELIVERY.PRIORITY`
   * - DTO description: Provider ranking used to order candidates.
   * - DTO type: `number`
   * - Domain type: `number`
   */
  priority: number;

  /**
   * Small label derived from address type and country.
   *
   * - DTO: `AddressCandidateDto.ADDRESS_TYPE`
   * - DTO description: Address type used to build a compact display badge.
   * - DTO type: `"ROAD" | "PARCEL"`
   * - Domain type: `string`
   */
  badge: string;

  /**
   * Optional operational note from the address provider.
   *
   * - DTO: `AddressCandidateDto.META.MEMO`
   * - DTO description: Optional provider note for operations.
   * - DTO type: `string | undefined`
   * - Domain type: `string`
   */
  note: string;

  /**
   * Last update date from the provider.
   *
   * - DTO: `AddressCandidateDto.META.UPDATED_AT`
   * - DTO description: Last provider update time.
   * - DTO type: `string`
   * - Domain type: `string`
   */
  updatedAt: string;

}
