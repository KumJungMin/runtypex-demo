import type { AddressCandidate as GeneratedAddressCandidate } from "./runtypex.generated";

export type { AddressCandidate } from "./runtypex.generated";

export interface AddressCandidateDto {
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
  DELIVERY: {
    AVAILABLE: boolean;
    PRIORITY: number;
  };
  META: {
    UPDATED_AT: string;
    MEMO?: string;
  };
}

export interface AddressSearchResponseDto {
  REQUEST_ID: string;
  KEYWORD: string;
  ITEMS: AddressCandidateDto[];
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

export interface AddressSearchResult {
  candidates: GeneratedAddressCandidate[];
  keyword: string;
  requestId: string;
  selected: GeneratedAddressCandidate | null;
  totalCount: number;
}
