export const PHONE_REGEX = /^\d{10}$/

export const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@(gmail\.com|outlook\.com|hotmail\.com|yahoo\.(com|co\.in)|icloud\.com|live\.com|msn\.com|aol\.com|protonmail\.com|rediffmail\.com|zoho\.com)$/i

export const isValidPhone = (phone) => PHONE_REGEX.test(String(phone).trim())

export const isValidEmail = (email) => EMAIL_REGEX.test(String(email).trim())

export const PHONE_ERROR = 'Please enter a valid 10-digit phone number.'

export const EMAIL_ERROR = 'Please enter a valid email address (Gmail, Outlook, Hotmail, Yahoo, etc.).'
