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
  id: source("ADDRESS.ADDRESS_ID", {
    db: "addresses.address_id",
    dtoDescription: "Provider address identifier.",
  }),
  title: source("ADDRESS.DISPLAY.TITLE", {
    dtoDescription: "Primary address label from the provider.",
  }),
  detail: source("ADDRESS.DISPLAY.DETAIL", {
    dtoDescription: "Full formatted address from the provider.",
  }),
  postalCode: source("ADDRESS.DISPLAY.POSTAL_CODE", {
    db: "addresses.postal_code",
    dtoDescription: "Postal code used for delivery validation.",
  }),
  country: source("ADDRESS.LOCATION.COUNTRY", {
    dtoDescription: "Country code from the provider result.",
  }),
  city: source("ADDRESS.LOCATION.CITY", {
    dtoDescription: "City name from the provider result.",
  }),
  deliverable: source("DELIVERY.DELIVERY_AVAILABLE", {
    dtoDescription: "Whether delivery is available for this address.",
  }),
  priority: source("DELIVERY.DELIVERY_PRIORITY", {
    dtoDescription: "Provider ranking used to order candidates.",
  }),
  badge: helpers.transform(
    "ADDRESS.ADDRESS_TYPE",
    (value, dto) =>
      `${dto.ADDRESS.LOCATION.COUNTRY}:${String(value).toLowerCase()}`,
    {
      dtoDescription: "Address type used to build a compact display badge.",
    },
  ),
  note: source("DELIVERY.OPERATION_MEMO", {
    default: "No provider note",
    dtoDescription: "Optional provider note for operations.",
  }),
  updatedAt: source("DELIVERY.UPDATED_AT", {
    dtoDescription: "Last provider update time.",
  }),
});

export const toAddressCandidate = makeMapper<
  AddressCandidateDto,
  AddressCandidateSource
>(addressCandidateMap);
