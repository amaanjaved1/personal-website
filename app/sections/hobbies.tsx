import { TravelCarousel } from "@/components/travel-carousel";

const HOBBIES = [
  { emoji: "🎾", label: "Tennis",                detail: null                 },
  { emoji: "⚽", label: "Soccer",                detail: "Position: Goalkeeper"},
  { emoji: "🏋️", label: "Weightlifting",        detail: null                 },
  { emoji: "🧗", label: "Climbing",              detail: null                 },
  { emoji: "🏃", label: "Running",               detail: null                 },
  { emoji: "🍦", label: "Ice Cream Connoisseur", detail: null                 },
  { emoji: "📷", label: "Photography",           detail: null                 },
  { emoji: "🧱", label: "Lego",                  detail: null                 },
];

export function Hobbies() {
  return (
    <section className="flex flex-col gap-4 w-full mt-8 overflow-hidden">
      <h2 className="text-xs text-fg-tertiary">HOBBIES &amp; INTERESTS</h2>

      <TravelCarousel />

      <div className="bento-card">
        <div className="flex flex-wrap gap-3">
          {HOBBIES.map(({ emoji, label, detail }) => (
            <div
              key={label}
              className="flex items-center gap-2.5 bg-bg-tertiary rounded-lg px-3 py-2"
            >
              <span className="text-lg leading-none">{emoji}</span>
              <div className="flex flex-col">
                <span className="text-[10px] text-fg-primary leading-tight">{label}</span>
                {detail && (
                  <span className="text-[9px] text-fg-tertiary leading-tight">{detail}</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
