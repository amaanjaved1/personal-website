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
    <div className="flex bento-card gap-4 h-19">
      {image}
      <div className="flex flex-col justify-center gap-1 w-full">
        <div className="flex items-center justify-between">
          <p className="text-xs">{title}</p>
          <p className="text-fg-tertiary lg:text-xs text-[10px] uppercase">
            {date}
          </p>
        </div>
        <p className="lg:text-xs text-fg-tertiary text-[10px]">{description}</p>
        <div className="flex justify-between items-center">
          {extra && (
            <p className="text-[9px] text-fg-tertiary font-bold">{extra}</p>
          )}
          <p className="lg:text-xs text-fg-tertiary text-[10px] uppercase ml-auto">
            {location}
          </p>
        </div>
      </div>
    </div>
  );
}
