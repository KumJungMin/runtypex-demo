import { makeValidate } from "runtypex";
import type { AddressSearchForm } from "./addressSearch.types";

export const isAddressSearchForm = makeValidate<AddressSearchForm>();

export function parseAddressSearchForm(value: unknown): Required<AddressSearchForm> {
  if (!isAddressSearchForm(value)) {
    throw new TypeError("Address search form must include a keyword string.");
  }

  const keyword = value.keyword.trim();

  if (!keyword) {
    throw new Error("Enter a search keyword.");
  }

  if (keyword.length > 80) {
    throw new Error("Search keyword must be 80 characters or less.");
  }

  return {
    keyword,
    includeUnavailable: value.includeUnavailable ?? false,
  };
}
