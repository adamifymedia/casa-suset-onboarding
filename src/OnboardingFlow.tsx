"use client";

import { useState } from "react";
import OnboardingForm from "./OnboardingForm";
import ConfirmationScreen from "./ConfirmationScreen";

type Props = {
  stripeSessionId: string;
};

export default function OnboardingFlow({ stripeSessionId }: Props) {
  const [completed, setCompleted] = useState(false);

  if (completed) {
    return <ConfirmationScreen />;
  }

  return (
    <OnboardingForm
      stripeSessionId={stripeSessionId}
    />
  );
}
