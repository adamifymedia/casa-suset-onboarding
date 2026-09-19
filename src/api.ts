const API_URL = process.env.NEXT_PUBLIC_API_URL;

if (!API_URL) {
  throw new Error("NEXT_PUBLIC_API_URL is not configured");
}

export type OnboardingData = {
  name: string;
  phone: string;
  timezone: string;
  preferred_time: string;
  stripe_session_id: string;
};

export async function submitOnboarding(data: OnboardingData) {
  const response = await fetch(`${API_URL}/onboarding`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result?.error || "Onboarding failed");
  }

  return result;
}
