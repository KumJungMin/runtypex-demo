import { defineMap, makeMapper, mapperHelpers, source } from "runtypex/mapper";
import type {
  AddressCandidateDto,
  AddressCandidateSource,
} from "./addressSearch.types";

const helpers = mapperHelpers<AddressCandidateDto>();

export const addressCandidateMap = defineMap<
  AddressCandidateDto,
  AddressCandidateSource
>()({
  id: source("ADDRESS_ID", {
    db: "addresses.address_id",
    dtoDescription: "Provider address identifier.",
  }),
  title: source("DISPLAY.TITLE", {
    dtoDescription: "Primary address label from the provider.",
  }),
  detail: source("DISPLAY.DETAIL", {
    dtoDescription: "Full formatted address from the provider.",
  }),
  postalCode: source("DISPLAY.POSTAL_CODE", {
    db: "addresses.postal_code",
    dtoDescription: "Postal code used for delivery validation.",
  }),
  country: source("LOCATION.COUNTRY", {
    dtoDescription: "Country code from the provider result.",
  }),
  city: source("LOCATION.CITY", {
    dtoDescription: "City name from the provider result.",
  }),
  deliverable: source("DELIVERY.AVAILABLE", {
    dtoDescription: "Whether delivery is available for this address.",
  }),
  priority: source("DELIVERY.PRIORITY", {
    dtoDescription: "Provider ranking used to order candidates.",
  }),
  badge: helpers.transform(
    "ADDRESS_TYPE",
    (value, dto) => `${dto.LOCATION.COUNTRY}:${String(value).toLowerCase()}`,
    {
      dtoDescription: "Address type used to build a compact display badge.",
    },
  ),
  note: source("META.MEMO", {
    default: "No provider note",
    dtoDescription: "Optional provider note for operations.",
  }),
  updatedAt: source("META.UPDATED_AT", {
    dtoDescription: "Last provider update time.",
  }),
});

export const toAddressCandidate = makeMapper<
  AddressCandidateDto,
  AddressCandidateSource
>(addressCandidateMap);
