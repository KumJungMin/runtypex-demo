import { makeValidate } from "runtypex";

// 런타임 검증기 예시
type User = {
  id: number;
  name: string;
  email: string;
};

const assertUser = makeValidate<User>();

const result = assertUser({ id: 1, name: "John Doe", email: "john@example.com" }); // 통과
const fail = assertUser({ id: 2, name: "Jane Doe", email: 123 }); // 실패: 런타임 오류 발생

console.log("검증 결과:", result);
console.log("검증 실패 예시:", fail);



const assertString = makeValidate<string>();

const result2 = assertString("Hello, Runtypex!"); // 통과
const fail2 = assertString(123); // 실패: 런타임 오류 발생

console.log("검증 결과:", result2);
console.log("검증 실패 예시:", fail2);

