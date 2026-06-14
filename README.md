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
| step1 | [configure runtypex 0.2.5 docs generation](https://github.com/KumJungMin/runtypex-demo/commit/472e51c862f0a467ac8bca7e4937a7e39d863869) | Upgrades `runtypex` from `0.2.3` to `0.2.5` and configures Vite docs generation for every feature mapper, so builds can emit per-mapper `*.generated.ts` files. |
| step2 | [add virtual address provider APIs](https://github.com/KumJungMin/runtypex-demo/commit/eaf4eaca71029f1e97ab5d077b9f9aa6bbf84fda) | Adds realistic address-directory and delivery-availability DTOs plus mock provider APIs. This gives a clear "before mapping" payload shape. |
| step3 | [validate address search forms with makeValidate](https://github.com/KumJungMin/runtypex-demo/commit/3e90e449e92fe5a50d5b913437c3ddb986a58b94) | Adds `makeValidate<AddressSearchForm>()` and parsing rules before provider calls, so invalid runtime input fails before mapping begins. |
| step4 | [map provider responses with makeMapper](https://github.com/KumJungMin/runtypex-demo/commit/626b0a9e00227bd8ac9913c30e4365d14c2537d9) | Adds `defineMap`, `source`, `mapperHelpers.transform`, `makeMapper`, generated mapper docs, and tests that show DTO input becoming view-ready address candidates. |
| step5 | [render the address search demo app](https://github.com/KumJungMin/runtypex-demo/commit/f59e6cc20305528934ba766f2ecac6b96c419880) | Replaces the old demo surface with the new address search UI and removes obsolete sample layers. After this step, `tsc`, `vitest`, and `vite build` pass with the new demo. |

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
