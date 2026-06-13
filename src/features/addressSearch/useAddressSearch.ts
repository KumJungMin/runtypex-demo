import { computed, onMounted, ref } from "vue";
import { searchAddressCandidates } from "./addressSearch.service";
import type { AddressCandidate, AddressSearchResult } from "./addressSearch.types";

export function useAddressSearch() {
  const keyword = ref("Seoul Station");
  const result = ref<AddressSearchResult | null>(null);
  const selectedId = ref<string | null>(null);
  const loading = ref(false);
  const errorMessage = ref("");

  const selectedAddress = computed<AddressCandidate | null>(() => {
    return (
      result.value?.candidates.find((candidate) => candidate.id === selectedId.value) ??
      result.value?.selected ??
      null
    );
  });

  async function submitSearch() {
    loading.value = true;
    errorMessage.value = "";

    try {
      const nextResult = await searchAddressCandidates(keyword.value);
      result.value = nextResult;
      selectedId.value = nextResult.selected?.id ?? null;
    } catch (error) {
      errorMessage.value =
        error instanceof Error ? error.message : "Address search failed.";
    } finally {
      loading.value = false;
    }
  }

  function selectAddress(addressId: string) {
    selectedId.value = addressId;
  }

  onMounted(() => {
    void submitSearch();
  });

  return {
    errorMessage,
    keyword,
    loading,
    result,
    selectedAddress,
    selectAddress,
    submitSearch,
  };
}
