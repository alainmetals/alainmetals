export const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function cleanContactValue(value: unknown, max = 5000) {
  return typeof value === "string" ? value.trim().slice(0, max) : ""
}

export function validateContactIdentity(nameValue: unknown, emailValue: unknown) {
  const name = cleanContactValue(nameValue, 120)
  const email = cleanContactValue(emailValue, 254).toLowerCase()
  return { name, email, valid: Boolean(name && EMAIL_PATTERN.test(email)) }
}
