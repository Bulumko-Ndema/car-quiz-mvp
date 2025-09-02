"use client";
import { useSearchParams } from "next/navigation";
import { outcomes } from "@/data/quiz";
import PersonaCard from "@/components/PersonaCard";

export default function ResultsPage() {
  const params = useSearchParams();
  const p = params.get("p") || "";
  const outcome = outcomes.find((o) => o.id === p);

  return (
    <section className="mx-auto max-w-3xl px-4 py-10">
      {!outcome ? (
        <div className="card">
          <h1 className="text-2xl font-bold">No result found</h1>
          <p className="mt-2 text-gray-700">Please take the quiz to see your car personality.</p>
          <div className="mt-4">
            <a href="/quiz" className="button-primary">Start Quiz</a>
          </div>
        </div>
      ) : (
        <>
          <h1 className="text-3xl font-bold mb-6">Your Car Personality: {outcome.title}</h1>
          <PersonaCard outcome={outcome} />
          <div className="mt-8 card">
            <h3 className="text-xl font-semibold">Next step</h3>
            <p className="mt-2 text-gray-700">
              Want a personalised list of cars currently on the market that match your profile? Enter your email and we'll follow up.
            </p>
            <form className="mt-4 grid sm:grid-cols-[1fr_auto] gap-3" onSubmit={(e) => { e.preventDefault(); alert("Thanks! We'll be in touch."); }}>
              <input className="rounded-2xl border border-gray-300 px-4 py-3" placeholder="you@example.com" type="email" required />
              <button className="button-primary" type="submit">Notify Me</button>
            </form>
            <p className="mt-2 text-xs text-gray-500">This is a demo form (no backend yet).</p>
          </div>
        </>
      )}
    </section>
  );
}
