export type ContactFormPayload = {
  name: string
  email: string
  phone: string
  topic: string
  urgency: string
  ahsCaseManager: string
  message: string
}

function contactEndpoint(): string {
  const base = import.meta.env.VITE_CONTACT_API_URL?.trim().replace(/\/$/, '') ?? ''
  if (base) return `${base}/api/contact`
  return '/api/contact'
}

export async function submitContactForm(
  payload: ContactFormPayload,
): Promise<{ ok: true } | { ok: false; message: string }> {
  const url = contactEndpoint()

  let res: Response
  try {
    res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        name: payload.name,
        email: payload.email,
        phone: payload.phone,
        topic: payload.topic,
        urgency: payload.urgency,
        ahs_case_manager: payload.ahsCaseManager,
        message: payload.message,
      }),
    })
  } catch {
    return { ok: false, message: 'Network error. Check your connection or try calling intake.' }
  }

  let data: { error?: string } = {}
  try {
    data = await res.json()
  } catch {
    /* ignore */
  }

  if (res.ok) return { ok: true }

  const message =
    typeof data.error === 'string' && data.error.length > 0
      ? data.error
      : 'Something went wrong. Please try again or call the intake line.'

  return { ok: false, message }
}
