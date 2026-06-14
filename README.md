# runtypex-demo

Vue 3 + Vite demo for `runtypex@0.2.5`.

The demo shows a realistic address search flow:

- `makeValidate` validates the user input form.
- `defineMap`, `source`, `mapperHelpers.transform`, and `makeMapper` map provider DTOs into view-ready address candidates.
- The Vite plugin generates mapper documentation into `addressSearch.generated.ts`.

## Commit walkthrough

Each step is intentionally split so the code diff shows what changes before and after the build/demo behavior changes. Commit links resolve after this branch is pushed.

| Step | Commit | What changes |
| --- | --- | --- |
| step1 | [configure runtypex 0.2.5 docs generation](https://github.com/KumJungMin/runtypex-demo/commit/472e51c862f0a467ac8bca7e4937a7e39d863869) | Configures Vite docs generation for every feature mapper, so builds can emit per-mapper `*.generated.ts` files. |
| step2 | [add virtual address provider APIs](https://github.com/KumJungMin/runtypex-demo/commit/eaf4eaca71029f1e97ab5d077b9f9aa6bbf84fda) | Adds realistic address-directory and delivery-availability DTOs plus mock provider APIs. This gives a clear "before mapping" payload shape. |
| step3 | [validate address search forms with makeValidate](https://github.com/KumJungMin/runtypex-demo/commit/3e90e449e92fe5a50d5b913437c3ddb986a58b94) | Adds `makeValidate<AddressSearchForm>()` and parsing rules before provider calls, so invalid runtime input fails before mapping begins. |
| step4 | [map provider responses with makeMapper](https://github.com/KumJungMin/runtypex-demo/commit/626b0a9e00227bd8ac9913c30e4365d14c2537d9) | Adds `defineMap`, `source`, `mapperHelpers.transform`, `makeMapper`, generated mapper docs, and tests that show DTO input becoming view-ready address candidates. |
| step5 | [render the address search demo app](https://github.com/KumJungMin/runtypex-demo/commit/f59e6cc20305528934ba766f2ecac6b96c419880) | Replaces the old demo surface with the new address search UI and removes obsolete sample layers. After this step, `tsc`, `vitest`, and `vite build` pass with the new demo. |

## makeValidate walkthrough

This sequence isolates the `makeValidate` flow from raw API data to build output.

| Step | Commit | What changes |
| --- | --- | --- |
| step1 | [add makeValidate mock account APIs](https://github.com/KumJungMin/runtypex-demo/commit/486f777627ae87b4afd5ca4cc5bcfec808597a10) | Adds a virtual account verification API that returns `unknown` provider payloads, including one valid response and one invalid response. |
| step2 | [guard account responses with makeValidate](https://github.com/KumJungMin/runtypex-demo/commit/c062040067bd6620b14413c667d4c0218faf0b88) | Adds `makeValidate<AccountVerificationApiResponseDto>()`, a parser, a service boundary, and tests that show valid payloads becoming typed results while invalid payloads fail. |
| step3 | expose makeValidate runtime guards in dist | The `makeValidate<AccountVerificationApiResponseDto>()` call site explains that `npm run build` emits the generated runtime guard into `dist/assets/index-*.js`. |

After `npm run build`, this source call:

```ts
export const isAccountVerificationApiResponse =
  makeValidate<AccountVerificationApiResponseDto>();
```

is emitted into `dist/assets/index-*.js` as an inline runtime guard like this:

```js
const isAccountVerificationApiResponse = (value) =>
  typeof value === "object" &&
  value !== null &&
  typeof value.REQUEST_ID === "string" &&
  typeof value.RESULT === "object" &&
  value.RESULT !== null &&
  typeof value.RESULT.ACCOUNT_NUMBER === "string" &&
  (value.RESULT.BANK_CODE === "KB" ||
    value.RESULT.BANK_CODE === "SHINHAN") &&
  typeof value.RESULT.HOLDER_NAME === "string" &&
  (value.RESULT.RISK_FLAGS === undefined ||
    Array.isArray(value.RESULT.RISK_FLAGS)) &&
  typeof value.RESULT.VERIFIED === "boolean" &&
  typeof value.RESULT.VERIFIED_AT === "string";
```

Run the demo:

```bash
npm install
npm run dev
```

Verify it:

```bash
npx vitest run
npm run build
```
