import { getMakeValidateScenarioPayloads } from "./makeValidateDemo.api";
import { summarizeMakeValidateScenarios } from "./makeValidateDemo.validation";

export const makeValidateRuntimeSummary = summarizeMakeValidateScenarios(
  getMakeValidateScenarioPayloads(),
)
  .map((scenario) => `${scenario.valid ? "pass" : "fail"}: ${scenario.label}`)
  .join(" / ");
