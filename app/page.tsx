import OnboardingFlow from "../src/OnboardingFlow";

type PageProps = {
  searchParams: Promise<{
    session_id?: string;
  }>;
};

export default async function Page({ searchParams }: PageProps) {
  const params = await searchParams;
  const stripeSessionId = params.session_id || "";

  if (!stripeSessionId) {
    return (
      <main>
        <h1>Complete your payment first</h1>
        <p>This page requires a valid Stripe checkout session.</p>
      </main>
    );
  }

  return <OnboardingFlow stripeSessionId={stripeSessionId} />;
}
