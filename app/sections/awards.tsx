import { AwardsList } from "@/components/awards-list";

export function Awards() {
  return (
    <section className="flex flex-col gap-3 w-full min-w-0">
      <h2 className="text-xs text-fg-tertiary">
        🏆 AWARDS{" "}
        <span className="text-[9px]">— click any award for details</span>
      </h2>
      <AwardsList />
    </section>
  );
}
