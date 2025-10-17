
export interface SearchAddressRequestDTO {
    SEARCH_TXT: string;
    FIELDS: string;
    SORT: boolean;
    COUNTRY: string;
}

export interface SearchAddressResponseDTO {
    ID: string;
    TYPE: string;
    TITLE: string;
    DETAIL: string;
}