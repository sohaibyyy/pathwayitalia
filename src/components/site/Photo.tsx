import type { Photo as PhotoData } from "@/data/photos";

/** Responsive, lazy-loaded photo with an optional licence credit caption. */
export function Photo({
  photo,
  sizes = "(min-width: 1024px) 40vw, 100vw",
  className = "",
  imgClassName = "",
  eager = false,
  credit = true,
}: {
  photo: PhotoData;
  sizes?: string;
  className?: string;
  imgClassName?: string;
  eager?: boolean;
  credit?: boolean;
}) {
  const smWidth = Math.round(photo.width / 2);
  return (
    <figure className={className}>
      <img
        src={photo.lg}
        srcSet={`${photo.sm} ${smWidth}w, ${photo.lg} ${photo.width}w`}
        sizes={sizes}
        width={photo.width}
        height={photo.height}
        alt={photo.alt}
        loading={eager ? "eager" : "lazy"}
        decoding="async"
        {...(eager ? { fetchPriority: "high" as const } : {})}
        className={imgClassName}
      />
      {credit && <PhotoCredit photo={photo} className="mt-2" />}
    </figure>
  );
}

export function PhotoCredit({
  photo,
  className = "",
  onDark = false,
}: {
  photo: PhotoData;
  className?: string;
  onDark?: boolean;
}) {
  const link = onDark
    ? "underline decoration-ivory/40 underline-offset-2 hover:text-ivory"
    : "underline decoration-ink-soft/40 underline-offset-2 hover:text-ocean";
  return (
    <figcaption
      className={`text-xs leading-snug ${onDark ? "text-ivory/75" : "text-ink-soft"} ${className}`}
    >
      {photo.caption}. Photo:{" "}
      <a href={photo.source} target="_blank" rel="noreferrer" className={link}>
        {photo.author}
      </a>
      ,{" "}
      <a href={photo.licenseUrl} target="_blank" rel="noreferrer license" className={link}>
        {photo.license}
      </a>
    </figcaption>
  );
}

/** Clearly marked stand-in for a university with no properly licensed photo. */
export function PhotoPlaceholder({ name, className = "" }: { name: string; className?: string }) {
  return (
    <div
      className={`placeholder-box flex flex-col items-center justify-center gap-1 p-4 text-center ${className}`}
      role="img"
      aria-label={`Photo of ${name} not yet available`}
    >
      <span className="text-xs font-bold uppercase tracking-[0.14em]">Photo placeholder</span>
      <span className="text-xs">No licensed photo of {name} found yet</span>
    </div>
  );
}
