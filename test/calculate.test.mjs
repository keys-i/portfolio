import assert from "node:assert/strict";
import test from "node:test";

import { calculate } from "../lib/calculate.mjs";

test("evaluates arithmetic without executing code", () => {
  assert.equal(calculate("2 + 3 * 4"), 14);
  assert.equal(calculate("-(2 + 3)^2"), -25);
  assert.throws(() => calculate("globalThis.alert(1)"), /Invalid expression/);
  assert.throws(() => calculate("1 / 0"), /Invalid expression/);
});
