import test from "node:test"
import assert from "node:assert/strict"
import { cleanContactValue, validateContactIdentity } from "./contactValidation.ts"

test("normalises a valid contact identity", () => {
  assert.deepEqual(validateContactIdentity("  Asha  ", " ASHA@EXAMPLE.COM "), {
    name: "Asha",
    email: "asha@example.com",
    valid: true,
  })
})

test("rejects missing names and malformed email addresses", () => {
  assert.equal(validateContactIdentity("", "asha@example.com").valid, false)
  assert.equal(validateContactIdentity("Asha", "invalid").valid, false)
})

test("trims and limits untrusted values", () => {
  assert.equal(cleanContactValue("  abcdef  ", 3), "abc")
  assert.equal(cleanContactValue(null), "")
})
