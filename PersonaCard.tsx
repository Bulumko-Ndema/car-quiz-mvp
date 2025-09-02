import { Outcome } from "@/data/quiz";

export default function PersonaCard({ outcome }: { outcome: Outcome }) {
  return (
    <div className="card space-y-3">
      <h2 className="text-2xl font-bold">{outcome.title}</h2>
      <p className="text-gray-700">{outcome.description}</p>
      <div>
        <h3 className="font-semibold mb-2">Example cars:</h3>
        <ul className="list-disc list-inside text-gray-800">
          {outcome.recommended_cars.map((c) => (
            <li key={c}>{c}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
