import { describe, expect, it } from "vitest";
import { getMakeValidateScenarioPayloads } from "./makeValidateDemo.api";
import { verifyAccountWithRuntimeGuard } from "./makeValidateDemo.service";
import {
  isAccountVerificationApiResponse,
  parseAccountVerificationResponse,
  summarizeMakeValidateScenarios,
} from "./makeValidateDemo.validation";

describe("makeValidate account verification example", () => {
  it("accepts the valid provider response and narrows it for parsing", () => {
    const [scenario] = getMakeValidateScenarioPayloads();

    expect(isAccountVerificationApiResponse(scenario.payload)).toBe(true);
    expect(parseAccountVerificationResponse(scenario.payload)).toEqual({
      accountNumber: "110123456789",
      bankCode: "KB",
      holderName: "Kim Minji",
      requestId: "verify-account-001",
      riskFlags: [],
      verified: true,
      verifiedAt: "2026-06-14T10:00:00+09:00",
    });
  });

  it("rejects invalid provider fields before the result is used", () => {
    const [, scenario] = getMakeValidateScenarioPayloads();

    expect(isAccountVerificationApiResponse(scenario.payload)).toBe(false);
    expect(() => parseAccountVerificationResponse(scenario.payload)).toThrow(
      "Account verification response has an invalid shape.",
    );
  });

  it("summarizes before and after validation results", () => {
    expect(
      summarizeMakeValidateScenarios(getMakeValidateScenarioPayloads()),
    ).toEqual([
      expect.objectContaining({
        label: "valid provider response",
        valid: true,
      }),
      expect.objectContaining({
        errorMessage: "Account verification response has an invalid shape.",
        label: "invalid provider response",
        result: null,
        valid: false,
      }),
    ]);
  });

  it("guards virtual API responses in the service boundary", async () => {
    await expect(
      verifyAccountWithRuntimeGuard({
        accountNumber: "110123456789",
        bankCode: "KB",
        holderName: "Kim Minji",
      }),
    ).resolves.toEqual(
      expect.objectContaining({
        accountNumber: "110123456789",
        verified: true,
      }),
    );

    await expect(
      verifyAccountWithRuntimeGuard({
        accountNumber: "110123456780",
        bankCode: "KB",
        holderName: "Kim Minji",
      }),
    ).rejects.toThrow("Account verification response has an invalid shape.");
  });
});
