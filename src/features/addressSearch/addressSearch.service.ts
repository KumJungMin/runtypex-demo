import { searchAddressApi } from "./addressSearch.api";
import { toAddressCandidate } from "./addressSearch.mapper";
import type { AddressSearchForm, AddressSearchResult } from "./addressSearch.types";
import { parseAddressSearchForm } from "./addressSearch.validation";

export async function searchAddressCandidates(
  form: AddressSearchForm,
): Promise<AddressSearchResult> {
  const query = parseAddressSearchForm(form);
  const response = await searchAddressApi(query.keyword);
  const candidates = response.ITEMS
    .map((item) => toAddressCandidate(item))
    .filter((candidate) => query.includeUnavailable || candidate.deliverable)
    .sort((left, right) => left.priority - right.priority);

  return {
    candidates,
    includeUnavailable: query.includeUnavailable,
    keyword: response.KEYWORD,
    requestId: response.REQUEST_ID,
    selected: candidates[0] ?? null,
    totalCount: candidates.length,
  };
}
