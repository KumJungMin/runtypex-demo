import { fetchAccountVerificationApi } from "./makeValidateDemo.api";
import { parseAccountVerificationResponse } from "./makeValidateDemo.validation";
import type {
  AccountVerificationRequest,
  AccountVerificationResult,
} from "./makeValidateDemo.types";

export async function verifyAccountWithRuntimeGuard(
  request: AccountVerificationRequest,
): Promise<AccountVerificationResult> {
  const payload = await fetchAccountVerificationApi(request);

  return parseAccountVerificationResponse(payload);
}
