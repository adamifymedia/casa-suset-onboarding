"use client";

import { useState } from "react";
import { submitOnboarding } from "./api";

type Props = {
  stripeSessionId: string;
};

export default function OnboardingForm({ stripeSessionId }: Props) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [timezone, setTimezone] = useState(
    Intl.DateTimeFormat().resolvedOptions().timeZone
  );
  const [preferredTime, setPreferredTime] = useState("09:00");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setLoading(true);

    try {
      await submitOnboarding({
        name,
        phone,
        timezone,
        preferred_time: preferredTime,
        stripe_session_id: stripeSessionId,
      });

      window.location.href = "/confirmation";
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
        />
      </div>

      <div>
        <label htmlFor="phone">WhatsApp number</label>
        <input
          id="phone"
          type="tel"
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
          placeholder="+421..."
          required
        />
      </div>

      <div>
        <label htmlFor="preferredTime">Preferred time</label>
        <input
          id="preferredTime"
          type="time"
          value={preferredTime}
          onChange={(event) => setPreferredTime(event.target.value)}
          required
        />
      </div>

      {error && <p>{error}</p>}

      <button type="submit" disabled={loading}>
        {loading ? "Setting up..." : "Start my Spanish practice"}
      </button>
    </form>
  );
}
