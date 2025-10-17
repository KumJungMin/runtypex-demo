export interface SearchAddressRequest {
    searchText: string;
    fields: string;
    sortedBy: 'desc' | 'asc';
    country: string;
}


export interface SearchAddressResponse {
    id: string;
    type: string;
    title: string;
    detail: string;
}