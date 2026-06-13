import { searchAddressApi } from "./addressSearch.api";
import { toAddressCandidate } from "./addressSearch.mapper";
import type { AddressSearchResult } from "./addressSearch.types";

export async function searchAddressCandidates(
  keyword: string,
): Promise<AddressSearchResult> {
  const response = await searchAddressApi(keyword);
  const candidates = response.ITEMS
    .map((item) => toAddressCandidate(item))
    .filter((candidate) => candidate.deliverable)
    .sort((left, right) => left.priority - right.priority);

  return {
    candidates,
    keyword: response.KEYWORD,
    requestId: response.REQUEST_ID,
    selected: candidates[0] ?? null,
    totalCount: candidates.length,
  };
}
