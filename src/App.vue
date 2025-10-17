 <template>
  <router-view />
</template>

<script lang="ts" setup>
import { makeValidate } from "runtypex";

// 런타임 검증기 예시
const assertString = makeValidate<string>();

const result = assertString("Hello, Runtypex!"); // 통과
const fail = assertString(123); // 실패: 런타임 오류 발생

console.log("검증 결과:", result);
console.log("검증 실패 예시:", fail);
</script>
