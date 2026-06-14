import { makeValidate } from "runtypex";
import type {
  AccountVerificationApiResponseDto,
  AccountVerificationResult,
  MakeValidateScenario,
  MakeValidateScenarioResult,
} from "./makeValidateDemo.types";

export const isAccountVerificationApiResponse =
  makeValidate<AccountVerificationApiResponseDto>();

export function parseAccountVerificationResponse(
  value: unknown,
): AccountVerificationResult {
  if (!isAccountVerificationApiResponse(value)) {
    throw new TypeError("Account verification response has an invalid shape.");
  }

  return {
    accountNumber: value.RESULT.ACCOUNT_NUMBER,
    bankCode: value.RESULT.BANK_CODE,
    holderName: value.RESULT.HOLDER_NAME,
    requestId: value.REQUEST_ID,
    riskFlags: value.RESULT.RISK_FLAGS ?? [],
    verified: value.RESULT.VERIFIED,
    verifiedAt: value.RESULT.VERIFIED_AT,
  };
}

export function summarizeMakeValidateScenarios(
  scenarios: MakeValidateScenario[],
): MakeValidateScenarioResult[] {
  return scenarios.map((scenario) => {
    try {
      return {
        errorMessage: null,
        label: scenario.label,
        result: parseAccountVerificationResponse(scenario.payload),
        valid: true,
      };
    } catch (error) {
      return {
        errorMessage: error instanceof Error ? error.message : String(error),
        label: scenario.label,
        result: null,
        valid: false,
      };
    }
  });
}
