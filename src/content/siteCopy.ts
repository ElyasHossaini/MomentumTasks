export const contact = {
  phone: '403-978-2004',
  phoneTel: 'tel:+14039782004',
  email: 'momentumtasks2025@gmail.com',
  website: 'https://momentumtask.homecare.ca',
  facebookUrl: 'https://www.facebook.com/share/1EFNMd4FHF/',
  facebookLabel: 'Facebook',
  /** Free option: opens Google search for reviews until a direct Google Business Profile link is available */
  googleReviewsSearchUrl:
    'https://www.google.com/search?q=Momentum+Tasks+Homecare+Calgary+reviews',
}

/** Approved wording for AHS / Alberta Blue Cross (not an endorsement) */
export const approvedSupportWording =
  'We support families navigating Alberta Health Services Continuing Care and Alberta Blue Cross coverage where applicable.'

export const hero = {
  title: 'Trusted Home Care in Calgary Supporting Families Through AHS and Continuing Care Pathways',
  subtitle:
    'We help seniors remain safe and comfortable at home while guiding families through private care options and publicly supported care systems where applicable.',
  primaryCta: 'Request Care Consultation',
  secondaryCta: 'Check Eligibility for Support Services',
}

/** Shown near funding mentions — careful language per discovery */
export const fundingDisclaimer =
  'Public supports such as CDHCI may be available for eligible clients for a defined period, subject to AHS assessment and authorization. Nothing on this site is a guarantee of funding or hours.'

/** Short line for highlighted callouts (Sahaba-style emphasis without “free”) */
export const publicFundingTeaser =
  'You may be eligible for publicly supported home care (including CDHCI) depending on assessment and clinical criteria.'

export const valueProposition =
  'We provide compassionate, culturally respectful home care while helping families safely navigate private services and publicly funded AHS-linked pathways where they apply.'

export const differentiation =
  'An integrated approach: culturally responsive caregiving, rapid post-discharge support when capacity allows, and practical help understanding Alberta Health Services Continuing Care and Alberta Blue Cross–supported programs.'

export const services = [
  {
    id: 'personal-care',
    title: 'Personal care',
    summary: 'Respectful assistance with daily living, within your AHS case manager care plan and non-clinical scope.',
    bullets: [
      'Bathing, grooming, toileting, mobility support, and safe transfers',
      'Home exercises, nutrition support, and medication assistance only as defined in your plan (reminders vs. clinical tasks follow authorization and licensing rules)',
      'No invasive medical procedures or regulated nursing acts unless appropriately licensed staff are assigned',
    ],
  },
  {
    id: 'homemaking',
    title: 'Homemaking',
    summary: 'Sanitation and household tasks that support health and safety in the living space—never a standalone service.',
    bullets: [
      'Essential tasks such as client bathroom cleaning, dishes, mobility equipment cleaning, laundry, vacuuming, and garbage removal as authorized',
      'Light meal preparation and grocery support where included in your plan',
      'Not offered alone: homemaking must accompany personal care or respite. Deep cleaning, commercial work, and hazardous tasks are excluded',
    ],
  },
  {
    id: 'respite',
    title: 'Respite care',
    summary: 'Day, evening, or night support so unpaid caregivers can rest—authorized hours apply.',
    bullets: [
      'Hourly, daytime, and evening support; overnight and weekend subject to staffing availability',
      'Planned relief aligned with your case manager’s service plan',
      'Clear communication with families before and after visits',
    ],
  },
  {
    id: 'companionship',
    title: 'Companionship & social connection',
    summary: 'Warm engagement for seniors experiencing isolation—always within the authorized scope of care.',
    bullets: [
      'Conversation, routines, and meaningful activities at home',
      'Culturally respectful companionship that honours preference and pace',
      'Escalation to the care coordinator when needs appear to change',
    ],
  },
  {
    id: 'condition-support',
    title: 'Dementia, mobility, post-discharge & isolation support',
    summary: 'Condition-focused help is provided according to your standardized assessment and signed care plan.',
    bullets: [
      'Dementia-informed approaches, mobility assistance, post-hospital transition support, and companionship for isolated seniors—when included in your plan',
      'Service types and hours are determined by your AHS case manager; we do not replace assessment decisions',
    ],
  },
  {
    id: 'medication-transport',
    title: 'Medication reminders & transportation support',
    summary: 'Non-clinical reminders and practical escort support only.',
    bullets: [
      'Medication reminders only—caregivers do not administer medications unless licensed professionals are formally involved',
      'Transportation: escort and accompaniment support only; not medical transport unless a partnered provider is arranged',
    ],
  },
] as const

/** Services page — Sahaba-style hero + cards (short lines, three bullets each) */
export const servicesPageHeading = {
  title: 'Our Services',
  subtitle:
    'Culturally tailored support for your family—and practical, respectful help at home, including pathways connected to AHS and Alberta Blue Cross where they apply.',
} as const

export const servicesShowcaseIds = ['personal-care', 'homemaking', 'respite', 'companionship'] as const

export const servicesMoreIds = ['condition-support', 'medication-transport'] as const

export const servicesShowcaseCopy = {
  'personal-care': {
    icon: 'heart' as const,
    tagline: 'One-on-one help to keep your loved one safe and comfortable at home.',
    bullets: [
      'Assistance with bathing, dressing, toileting & mobility',
      'Medication reminders & simple wellness checks within your plan',
      'Routines and gentle movement support aligned with authorization',
    ],
  },
  homemaking: {
    icon: 'home' as const,
    tagline: 'Light housekeeping that keeps the home healthy—and gives your family breathing room.',
    bullets: [
      'Sanitation tasks in the living space (bathroom, dishes, laundry, floors)',
      'Meal preparation and essential errands when included in your plan',
      'Never standalone: homemaking accompanies personal care or respite',
    ],
  },
  respite: {
    icon: 'clock' as const,
    tagline: 'Short-term relief for family caregivers—with hours set by your case manager.',
    bullets: [
      'Daytime, evening, or night support as authorized',
      'Flexible visit lengths when staffing allows',
      'Clear handoffs so you can rest or run errands with confidence',
    ],
  },
  companionship: {
    icon: 'people' as const,
    tagline: 'Warm companionship that reduces isolation and honours pace, culture, and choice.',
    bullets: [
      'Conversation, hobbies, and meaningful time at home',
      'Respectful cultural sensitivity on every visit',
      'Care coordinator loop when needs seem to be changing',
    ],
  },
  'condition-support': {
    icon: 'shield' as const,
    tagline: 'Focused support for dementia, mobility, post-discharge recovery, and isolation—when in your plan.',
    bullets: [
      'Dementia-aware approaches and safer mobility habits',
      'Help settling in after hospital discharge when authorized',
      'Always aligned to your AHS assessment and signed care plan',
    ],
  },
  'medication-transport': {
    icon: 'route' as const,
    tagline: 'Reminders and escorted support—non-clinical, within the boundaries of your authorization.',
    bullets: [
      'Medication reminders only (no administration unless licensed roles apply)',
      'Escort and accompaniment for errands and appointments',
      'Not medical transport unless a separate partner is arranged',
    ],
  },
} as const

/** AHS / CDHCI service framing — critical for Services + Home */
export const servicePlanExplainer = {
  title: 'Your services follow your AHS care plan',
  body:
    'Services are determined by the standardized assessment completed with an AHS Home Care case manager and may include any combination of personal care, homemaking, or respite as defined in your plan. The case manager provides a care plan that lists the maximum hours of care per month you have been approved for. Clients who choose CDHCI also receive (and must sign) a letter of agreement from AHS that specifies the hours of personal care, homemaking, and/or respite initially authorized. Momentum Tasks Homecare delivers non-medical care within that authorized scope.',
}

export const cdhciExplainer = {
  title: 'CDHCI & publicly supported care',
  lead:
    'Client Directed Home Care Invoicing (CDHCI) is a 100% publicly funded pathway for clients who qualify, for the authorization period set out in their paperwork—administered through Alberta Blue Cross. We also support private-pay or parallel services when families choose additional help beyond what is authorized.',
  bullets: [
    'Coverage and hours depend on AHS assessment and clinical criteria—not on a website form',
    'Homemaking is only covered alongside personal care or respite—we state this clearly for transparency',
    'We help you understand realistic next steps; final decisions rest with AHS and applicable programs',
  ],
}

export const howItWorksIntro = {
  kicker: 'Getting started',
  title: 'How It Works',
  subtitle:
    'From your first call to ongoing care, we keep the process simple and stress-free—while guiding you through AHS Continuing Care steps where they apply.',
} as const

export const howItWorks = [
  {
    step: '1',
    title: 'Initial Contact',
    body: 'Reach us by phone, email, or our contact forms. We listen to your situation, explain realistic options, and outline next steps—without promising funding or hours we cannot authorize.',
  },
  {
    step: '2',
    title: 'AHS Assessment',
    body: 'An AHS Home Care case manager assesses needs and approves care hours when publicly supported pathways apply. We help you understand what to expect and how to prepare—without replacing official clinical decisions.',
  },
  {
    step: '3',
    title: 'Care Plan & Your Caregiver',
    body: 'Once your care plan and any CDHCI letter of agreement are in place, we align visits, introduce respectful caregivers matched to your preferences, and confirm schedules with your family.',
  },
  {
    step: '4',
    title: 'Ongoing Support',
    body: 'Dependable visits, clear communication with families and partners, and thoughtful adjustments as routines or needs change—always within your approved scope of service.',
  },
] as const

export const whyChooseUs = [
  'Culturally responsive, community-minded care in Calgary and nearby areas when capacity allows',
  'Rapid support for urgent post-discharge or high-need situations when staffing permits (often 24–72 hours after plan confirmation)',
  'Help navigating AHS Continuing Care and Alberta Blue Cross pathways where applicable—without implying government affiliation',
  'Caregivers screened with criminal record checks and orientation to client safety protocols',
  'Training emphasis: personal care skills, dementia awareness, mobility assistance, infection prevention, and respectful communication',
  '24/7 inquiry availability; visit schedules follow staffing and your authorized hours',
] as const

export const compliance = {
  bullets: [
    'Business registration, liability insurance, and documented caregiver screening protocols',
    'Operations aligned with Alberta Continuing Care Health Service Standards and applicable requirements—we are an independent provider, not a government agency',
    'Caregivers must pass criminal record checks; we describe screening as a standard requirement (not an absolute guarantee of outcomes)',
    'Commitment to client rights, dignity, safety, and ethical non-medical care',
  ],
  concernsIntro:
    'For regulated concerns you may also contact the Continuing Care Licensing Office or AHS Patient Relations.',
  internalPathway: [
    'Step 1: Contact your care coordinator / intake case manager with the details of your concern.',
    'Step 2: We acknowledge promptly, review the file with leadership, and propose next steps in plain language.',
    'Step 3: If you are not satisfied with the resolution, you may request escalation in writing for senior review.',
    'Step 4: Serious or unresolved matters may be directed to the Continuing Care Licensing Office or AHS Patient Relations.',
  ],
}

export const aboutNarrative = {
  storyLead:
    'Momentum Tasks Homecare exists to close gaps in post-discharge home support and to offer culturally responsive care for seniors who deserve stability after functional change or hospital discharge.',
  experience:
    'Our team draws on more than fifteen years of combined experience across primary care, acute care, and community settings—supporting families at the bedside, in the home, and inside complex navigation moments.',
  values: ['Dignity', 'Cultural respect', 'Safety', 'Family-centred partnership', 'System accessibility'],
  mission:
    'Deliver compassionate, non-medical home care that honours culture, strengthens safety, and helps families understand both private services and publicly supported pathways.',
  vision:
    'Be a trusted Calgary partner for seniors and families who want dependable caregivers and honest guidance while Alberta systems do their work.',
  leadershipNote:
    'Leadership bios can be added when you are ready; for now we focus on how we care, how we screen, and how we communicate.',
}

export const operations = {
  area: 'Calgary Zone primarily, with limited nearby coverage depending on capacity.',
  startTime: 'Many families begin within 24–72 hours once assessment, authorization, and staffing are aligned; same-day or next-day support may be possible for urgent post-discharge cases when capacity allows.',
  intake: 'New inquiries arrive by phone, email, the website contact form, or professional referral. Website leads route to central intake / the care coordinator.',
}

export const faqItems = [
  {
    q: 'Do you guarantee publicly funded care?',
    a: 'No. You may be eligible for publicly supported programs (including CDHCI) depending on AHS assessment, clinical criteria, and authorization. We use clear “may be eligible” language and never promise “fully funded” or “guaranteed free” care.',
  },
  {
    q: 'What is CDHCI?',
    a: 'Client Directed Home Care Invoicing (CDHCI) is a publicly funded option administered by Alberta Blue Cross for eligible clients, for a defined period. Hours and tasks follow your signed letter of agreement and case manager direction.',
  },
  {
    q: 'Can homemaking be the only service?',
    a: 'No. Homemaking must accompany personal care or respite. That rule protects families and matches continuing-care expectations for funded packages.',
  },
  {
    q: 'Do caregivers administer medications?',
    a: 'Caregivers may provide reminders only. Administration belongs to licensed professionals when formally part of your plan.',
  },
  {
    q: 'What transportation help is available?',
    a: 'Escort and accompaniment support for errands and appointments—not medical transport unless a separate partnered provider is involved.',
  },
  {
    q: 'Do you offer live-in or 24-hour care?',
    a: 'Not as a standard offering today. We can discuss future options if your needs change.',
  },
  {
    q: 'Do you provide medical or nursing care?',
    a: 'We provide non-medical home care within authorized scope. Clinical services require appropriate licensing and are outside our standard model.',
  },
  {
    q: 'Who decides service hours?',
    a: 'Your AHS case manager documents the maximum approved hours. CDHCI clients also sign AHS documentation that states authorized personal care, homemaking, and/or respite hours.',
  },
] as const
