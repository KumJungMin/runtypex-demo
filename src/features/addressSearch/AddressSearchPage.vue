<template>
  <main class="address-page">
    <section class="search-column">
      <header class="page-header">
        <p>Shipping address</p>
        <h1>Find a deliverable address</h1>
      </header>

      <form class="search-form" @submit.prevent="submitSearch">
        <label for="address-keyword">Search keyword</label>
        <div class="search-row">
          <input id="address-keyword" v-model="keyword" autocomplete="off" />
          <button type="submit" :disabled="loading">
            {{ loading ? "Searching" : "Search" }}
          </button>
        </div>
      </form>

      <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>

      <section class="result-list" aria-label="Address candidates">
        <button
          v-for="candidate in result?.candidates"
          :key="candidate.id"
          :class="['address-result', { selected: candidate.id === selectedAddress?.id }]"
          type="button"
          @click="selectAddress(candidate.id)"
        >
          <span class="result-title">{{ candidate.title }}</span>
          <span class="result-detail">{{ candidate.detail }}</span>
          <span class="result-meta">
            <strong>{{ candidate.badge }}</strong>
            {{ candidate.postalCode }}
          </span>
        </button>
      </section>
    </section>

    <aside class="detail-panel" aria-label="Selected address">
      <template v-if="selectedAddress">
        <div class="detail-heading">
          <span>{{ selectedAddress.badge }}</span>
          <strong>{{ selectedAddress.id }}</strong>
        </div>
        <h2>{{ selectedAddress.title }}</h2>
        <p>{{ selectedAddress.detail }}</p>

        <dl>
          <div>
            <dt>Postal code</dt>
            <dd>{{ selectedAddress.postalCode }}</dd>
          </div>
          <div>
            <dt>City</dt>
            <dd>{{ selectedAddress.city }}</dd>
          </div>
          <div>
            <dt>Priority</dt>
            <dd>{{ selectedAddress.priority }}</dd>
          </div>
          <div>
            <dt>Updated</dt>
            <dd>{{ selectedAddress.updatedAt }}</dd>
          </div>
        </dl>

        <div class="note-box">
          {{ selectedAddress.note }}
        </div>
      </template>

      <p v-else class="empty-state">No deliverable address selected.</p>
    </aside>
  </main>
</template>

<script lang="ts" setup>
import { useAddressSearch } from "./useAddressSearch";

const {
  errorMessage,
  keyword,
  loading,
  result,
  selectedAddress,
  selectAddress,
  submitSearch,
} = useAddressSearch();
</script>

<style scoped>
:global(*) {
  box-sizing: border-box;
}

:global(body) {
  margin: 0;
  background: #eef2f6;
  color: #18212f;
  font-family:
    Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
    sans-serif;
}

.address-page {
  display: grid;
  grid-template-columns: minmax(0, 1.2fr) minmax(360px, 0.8fr);
  gap: 24px;
  min-height: 100vh;
  padding: 40px;
}

.search-column,
.detail-panel {
  min-width: 0;
  border: 1px solid #d7e0ea;
  border-radius: 8px;
  background: #ffffff;
  box-shadow: 0 18px 40px rgb(24 33 47 / 10%);
}

.search-column {
  padding: 28px;
}

.page-header {
  margin-bottom: 24px;
}

.page-header p {
  margin: 0 0 8px;
  color: #0f766e;
  font-size: 13px;
  font-weight: 800;
  letter-spacing: 0;
  text-transform: uppercase;
}

.page-header h1 {
  margin: 0;
  font-size: clamp(34px, 6vw, 64px);
  line-height: 1;
  letter-spacing: 0;
}

.search-form {
  display: grid;
  gap: 10px;
  margin-bottom: 20px;
}

.search-form label {
  color: #465568;
  font-size: 14px;
  font-weight: 800;
}

.search-row {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 120px;
  gap: 10px;
}

input,
button {
  min-height: 44px;
  border-radius: 8px;
  font: inherit;
}

input {
  width: 100%;
  border: 1px solid #cbd5df;
  padding: 0 14px;
}

button {
  border: 0;
  background: #0f766e;
  color: #ffffff;
  font-weight: 800;
  cursor: pointer;
}

button:disabled {
  cursor: wait;
  opacity: 0.65;
}

.error-message {
  margin: 0 0 16px;
  color: #b91c1c;
  font-weight: 700;
}

.result-list {
  display: grid;
  gap: 12px;
}

.address-result {
  display: grid;
  gap: 6px;
  width: 100%;
  min-height: 108px;
  padding: 16px;
  border: 1px solid #d7e0ea;
  background: #f8fafc;
  color: #18212f;
  text-align: left;
}

.address-result.selected {
  border-color: #0f766e;
  background: #ecfdf5;
}

.result-title {
  font-size: 17px;
  font-weight: 900;
}

.result-detail {
  color: #596a7d;
  font-size: 14px;
}

.result-meta {
  display: flex;
  gap: 10px;
  color: #475569;
  font-size: 13px;
}

.detail-panel {
  align-self: start;
  padding: 24px;
}

.detail-heading {
  display: flex;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 16px;
  color: #0f766e;
  font-size: 13px;
  font-weight: 900;
  text-transform: uppercase;
}

.detail-panel h2 {
  margin: 0;
  font-size: 28px;
  line-height: 1.15;
}

.detail-panel p {
  margin: 10px 0 22px;
  color: #596a7d;
  line-height: 1.55;
}

dl {
  display: grid;
  gap: 12px;
  margin: 0 0 18px;
}

dl div {
  display: flex;
  justify-content: space-between;
  gap: 18px;
  padding-bottom: 10px;
  border-bottom: 1px solid #e4eaf1;
}

dt {
  color: #64748b;
  font-size: 13px;
  font-weight: 800;
}

dd {
  margin: 0;
  text-align: right;
  font-weight: 800;
}

.note-box,
.empty-state {
  border-radius: 8px;
  background: #f1f5f9;
  padding: 16px;
  color: #334155;
  font-weight: 700;
}

@media (max-width: 900px) {
  .address-page {
    grid-template-columns: 1fr;
    padding: 20px;
  }

  .search-row {
    grid-template-columns: 1fr;
  }
}
</style>
