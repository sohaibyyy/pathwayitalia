import { Link } from "@tanstack/react-router";
import { ArrowRight, MapPin } from "lucide-react";
import type { University } from "@/data/universities";
import { photos } from "@/data/photos";
import { PhotoPlaceholder } from "./Photo";

export function UniversityCard({ u }: { u: University }) {
  const photo = u.photo ? photos[u.photo] : null;
  return (
    <article className="card card-hover group relative flex h-full flex-col overflow-hidden">
      <div className="relative aspect-[3/2] overflow-hidden bg-sand">
        {photo ? (
          <img
            src={photo.sm}
            srcSet={`${photo.sm} 640w, ${photo.lg} 1280w`}
            sizes="(min-width: 1024px) 380px, (min-width: 640px) 50vw, 100vw"
            width={640}
            height={Math.round((photo.height / photo.width) * 640)}
            alt={photo.alt}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        ) : (
          <PhotoPlaceholder name={u.name} className="h-full w-full rounded-none border-0" />
        )}
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="flex items-center gap-1.5 text-sm font-medium text-ink-soft">
          <MapPin size={16} aria-hidden="true" /> {u.city} · {u.kind}
        </p>
        <h3 className="h-card mt-2 text-ocean">
          <Link
            to="/universities/$slug"
            params={{ slug: u.slug }}
            className="after:absolute after:inset-0 after:content-[''] focus-visible:outline-none"
          >
            {u.name}
          </Link>
        </h3>
        <div className="mt-3 flex flex-wrap gap-2">
          {u.tags.map((t) => (
            <span key={t} className="chip">
              {t}
            </span>
          ))}
        </div>
        <p className="mt-auto flex items-center justify-between pt-6 text-sm">
          <span className="font-medium text-ink-soft">
            {u.programs.length} English-taught programme{u.programs.length === 1 ? "" : "s"}
          </span>
          <span className="link-arrow" aria-hidden="true">
            View <ArrowRight size={16} />
          </span>
        </p>
      </div>
    </article>
  );
}
