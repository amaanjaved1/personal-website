import { type ReactNode } from "react";

export function Experience({
  image,
  date,
  location,
  title,
  description,
  extra,
}: {
  image: ReactNode;
  date: string;
  location: string;
  title: string;
  description: string;
  extra?: string;
}) {
  return (
    <div className="flex bento-card gap-4 lg:h-19 h-auto items-center lg:items-stretch">
      <div className="shrink-0">{image}</div>
      <div className="flex flex-col justify-center gap-1 w-full min-w-0">
        <div className="flex lg:flex-row flex-col lg:items-center lg:justify-between gap-0.5">
          <p className="text-xs">{title}</p>
          <p className="text-fg-tertiary lg:text-xs text-[10px] uppercase shrink-0">
            {date}
          </p>
        </div>
        <p className="lg:text-xs text-fg-tertiary text-[10px] wrap-break-word">{description}</p>
        <div className="flex lg:flex-row flex-col lg:justify-between lg:items-center gap-0.5">
          {extra && (
            <p className="text-[9px] text-fg-tertiary font-bold wrap-break-word min-w-0">{extra}</p>
          )}
          <p className="lg:text-xs text-fg-tertiary text-[10px] uppercase lg:ml-auto shrink-0">
            {location}
          </p>
        </div>
      </div>
    </div>
  );
}
