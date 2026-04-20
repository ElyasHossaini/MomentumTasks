/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** Full origin of the contact API when not same-origin (e.g. https://api.example.com). Leave unset in dev to use Vite proxy. */
  readonly VITE_CONTACT_API_URL?: string
}
