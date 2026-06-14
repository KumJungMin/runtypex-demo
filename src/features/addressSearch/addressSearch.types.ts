export interface AddressDirectoryCandidateDto {
  ADDRESS_ID: string;
  ADDRESS_TYPE: "ROAD" | "PARCEL";
  DISPLAY: {
    TITLE: string;
    DETAIL: string;
    POSTAL_CODE: string;
  };
  LOCATION: {
    COUNTRY: "KR" | "US";
    CITY: string;
  };
}

export interface AddressDirectorySearchResponseDto {
  REQUEST_ID: string;
  KEYWORD: string;
  ITEMS: AddressDirectoryCandidateDto[];
}

export interface DeliveryAvailabilityDto {
  ADDRESS_ID: string;
  DELIVERY_AVAILABLE: boolean;
  DELIVERY_PRIORITY: number;
  OPERATION_MEMO?: string;
  UPDATED_AT: string;
}

export interface DeliveryAvailabilityResponseDto {
  REQUEST_ID: string;
  ITEMS: DeliveryAvailabilityDto[];
}

export interface AddressCandidateDto {
  ADDRESS: AddressDirectoryCandidateDto;
  DELIVERY: DeliveryAvailabilityDto;
}

export interface AddressSearchForm {
  keyword: string;
  includeUnavailable?: boolean;
}

export interface AddressCandidateSource {
  /** Stable address identifier used by checkout and shipping APIs. */
  id: string;
  /** Short address title shown in result rows. */
  title: string;
  /** Full address text shown after selection. */
  detail: string;
  /** Postal code used by delivery validation. */
  postalCode: string;
  /** Country code attached to the address result. */
  country: string;
  /** City name used for regional grouping and display. */
  city: string;
  /** Whether this address can currently receive delivery. */
  deliverable: boolean;
  /** Delivery priority returned by the address provider. */
  priority: number;
  /** Small label derived from address type and country. */
  badge: string;
  /** Optional operational note from the address provider. */
  note: string;
  /** Last update date from the provider. */
  updatedAt: string;
}

export interface AddressCandidate extends AddressCandidateSource {}

export interface AddressSearchResult {
  candidates: AddressCandidate[];
  includeUnavailable: boolean;
  keyword: string;
  requestId: string;
  selected: AddressCandidate | null;
  totalCount: number;
}
