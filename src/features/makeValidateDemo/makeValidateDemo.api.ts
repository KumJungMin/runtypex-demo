import type {
  AccountVerificationRequest,
  MakeValidateScenario,
} from "./makeValidateDemo.types";

const validResponse = {
  REQUEST_ID: "verify-account-001",
  RESULT: {
    ACCOUNT_NUMBER: "110123456789",
    BANK_CODE: "KB",
    HOLDER_NAME: "Kim Minji",
    RISK_FLAGS: [],
    VERIFIED: true,
    VERIFIED_AT: "2026-06-14T10:00:00+09:00",
  },
};

const invalidResponse = {
  REQUEST_ID: "verify-account-002",
  RESULT: {
    ACCOUNT_NUMBER: 110123456789,
    BANK_CODE: "KB",
    HOLDER_NAME: "Kim Minji",
    VERIFIED: "yes",
    VERIFIED_AT: "2026-06-14T10:05:00+09:00",
  },
};

export async function fetchAccountVerificationApi(
  request: AccountVerificationRequest,
): Promise<unknown> {
  await wait(40);

  return request.accountNumber.endsWith("0") ? invalidResponse : validResponse;
}

export function getMakeValidateScenarioPayloads(): MakeValidateScenario[] {
  return [
    {
      label: "valid provider response",
      payload: validResponse,
    },
    {
      label: "invalid provider response",
      payload: invalidResponse,
    },
  ];
}

function wait(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
