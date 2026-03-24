"use client";

import { useState } from "react";
import { motion } from "motion/react";

type Destination = {
  city: string;
  country: string;
  countryCode: string;
  photoSrc?: string;
};

const DESTINATIONS: Destination[] = [
  { city: "Madrid",      country: "Spain",        countryCode: "es", photoSrc: "/travel-photos/madrid.jpeg"    },
  { city: "Barcelona",   country: "Spain",        countryCode: "es", photoSrc: "/travel-photos/barcelona.jpeg" },
  { city: "Blanes",      country: "Spain",        countryCode: "es", photoSrc: "/travel-photos/blanes.jpeg"    },
  { city: "Toledo",      country: "Spain",        countryCode: "es", photoSrc: "/travel-photos/toledo.jpeg"    },
  { city: "Segovia",     country: "Spain",        countryCode: "es", photoSrc: "/travel-photos/segovia.jpeg"   },
  { city: "Rome",        country: "Italy",        countryCode: "it", photoSrc: "/travel-photos/rome.jpeg"      },
  { city: "Vatican",     country: "Vatican City", countryCode: "va", photoSrc: "/travel-photos/vatican.jpeg"   },
  { city: "Naples",      country: "Italy",        countryCode: "it", photoSrc: "/travel-photos/naples.jpeg"    },
  { city: "Sorrento",    country: "Italy",        countryCode: "it", photoSrc: "/travel-photos/sorrento.jpeg"  },
  { city: "Pompeii",     country: "Italy",        countryCode: "it", photoSrc: "/travel-photos/pompei.jpeg"    },
  { city: "London",      country: "UK",           countryCode: "gb", photoSrc: "/travel-photos/london.jpeg"    },
  { city: "Kuwait City", country: "Kuwait",       countryCode: "kw", photoSrc: "/travel-photos/kuwait.jpeg"    },
  { city: "Florida",     country: "USA",          countryCode: "us", photoSrc: "/travel-photos/florida.jpg"   },
  { city: "Dubai",       country: "UAE",          countryCode: "ae", photoSrc: "/travel-photos/dubai.jpg"     },
  { city: "Abu Dhabi",   country: "UAE",          countryCode: "ae", photoSrc: "/travel-photos/abu-dhabi.jpg" },
];

function FlagImage({ code, city }: { code: string; city: string }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={`https://flagcdn.com/24x18/${code}.png`}
      srcSet={`https://flagcdn.com/48x36/${code}.png 2x`}
      width={24}
      height={18}
      alt={`${city} flag`}
      className="rounded-[2px] object-cover"
    />
  );
}

function NoPhotoSlot({ city }: { city: string }) {
  return (
    <div className="w-full h-28 rounded-lg overflow-hidden relative bg-bg-tertiary border border-border flex flex-col items-center justify-center gap-2">
      <div className="absolute inset-0 bg-linear-to-br from-accent/10 via-transparent to-accent/5" />
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-accent/60 relative z-10"
      >
        <path
          d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="12" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.5" />
      </svg>
      <span className="text-[9px] text-fg-tertiary relative z-10 uppercase tracking-wider">{city}</span>
    </div>
  );
}

function DestinationCard({ city, country, countryCode, photoSrc }: Destination) {
  return (
    <motion.div
      whileHover={{ y: -4, transition: { duration: 0.18 } }}
      className="flex flex-col gap-2 shrink-0"
      style={{ width: 148 }}
    >
      {photoSrc ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={photoSrc}
          alt={city}
          className="w-full h-28 object-cover rounded-lg pointer-events-none"
        />
      ) : (
        <NoPhotoSlot city={city} />
      )}

      <div className="flex items-center gap-1.5 px-0.5">
        <FlagImage code={countryCode} city={city} />
        <div>
          <p className="text-[10px] text-fg-primary leading-tight">{city}</p>
          <p className="text-[9px] text-fg-tertiary leading-tight">{country}</p>
        </div>
      </div>
    </motion.div>
  );
}

export function TravelCarousel() {
  const [paused, setPaused] = useState(false);

  return (
    <div className="bento-card flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <p className="text-xs">✈️ Travel</p>
          <span className="text-fg-tertiary text-[9px] uppercase tracking-wider">
            {DESTINATIONS.length} destinations
          </span>
        </div>
        <span className="text-fg-tertiary text-[9px]">Hover to pause</span>
      </div>

      <div
        className="overflow-hidden -mx-4 px-4"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div className={`flex gap-3 w-max marquee-track${paused ? " paused" : ""}`}>
          {[...DESTINATIONS, ...DESTINATIONS].map((dest, i) => (
            <DestinationCard key={`${dest.city}-${i}`} {...dest} />
          ))}
        </div>
      </div>
    </div>
  );
}
