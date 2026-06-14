import {
  fetchDeliveryAvailabilityApi,
  searchAddressDirectoryApi,
} from "./addressSearch.api";
import { toAddressCandidate } from "./addressSearch.mapper";
import type { AddressSearchForm, AddressSearchResult } from "./addressSearch.types";
import { parseAddressSearchForm } from "./addressSearch.validation";

export async function searchAddressCandidates(
  form: AddressSearchForm,
): Promise<AddressSearchResult> {
  const query = parseAddressSearchForm(form);
  const addressResponse = await searchAddressDirectoryApi(query.keyword);
  const deliveryResponse = await fetchDeliveryAvailabilityApi(
    addressResponse.ITEMS.map((item) => item.ADDRESS_ID),
  );
  const deliveryByAddressId = new Map(
    deliveryResponse.ITEMS.map((item) => [item.ADDRESS_ID, item]),
  );
  const candidates = addressResponse.ITEMS
    .flatMap((address) => {
      const delivery = deliveryByAddressId.get(address.ADDRESS_ID);

      return delivery
        ? [toAddressCandidate({ ADDRESS: address, DELIVERY: delivery })]
        : [];
    })
    .filter((candidate) => query.includeUnavailable || candidate.deliverable)
    .sort((left, right) => left.priority - right.priority);

  return {
    candidates,
    includeUnavailable: query.includeUnavailable,
    keyword: addressResponse.KEYWORD,
    requestId: `${addressResponse.REQUEST_ID}/${deliveryResponse.REQUEST_ID}`,
    selected: candidates[0] ?? null,
    totalCount: candidates.length,
  };
}
