export interface VerifyAccountRequestDTO {
    ACCOUNT_ID: string;
    ACCOUNT_TYPE: string;
    COUNTRY: string;
}   

export interface VerifyAccountResponseDTO {
    ACCOUNT_ID: string;
    ACCOUNT_TYPE: string;
    STATUS: string;
    MESSAGE: string;
}
