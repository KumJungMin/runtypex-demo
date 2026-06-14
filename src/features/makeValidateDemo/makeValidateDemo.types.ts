export interface AccountVerificationRequest {
  accountNumber: string;
  bankCode: "KB" | "SHINHAN";
  holderName: string;
}

export interface AccountVerificationApiResponseDto {
  REQUEST_ID: string;
  RESULT: {
    ACCOUNT_NUMBER: string;
    BANK_CODE: "KB" | "SHINHAN";
    HOLDER_NAME: string;
    RISK_FLAGS?: string[];
    VERIFIED: boolean;
    VERIFIED_AT: string;
  };
}

export interface AccountVerificationResult {
  accountNumber: string;
  bankCode: string;
  holderName: string;
  requestId: string;
  riskFlags: string[];
  verified: boolean;
  verifiedAt: string;
}

export interface MakeValidateScenario {
  label: string;
  payload: unknown;
}

export interface MakeValidateScenarioResult {
  errorMessage: string | null;
  label: string;
  result: AccountVerificationResult | null;
  valid: boolean;
}
