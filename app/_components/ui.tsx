import Image from "next/image";
import { type ReactNode } from "react";

/* Shared UI primitives — dipakai di semua section */

export function SectionImage({
  src,
  alt,
  aspect = "video",
  className = "",
  priority = false,
}: {
  src: string;
  alt: string;
  aspect?: "video" | "square" | "portrait";
  className?: string;
  priority?: boolean;
}) {
  const aspectClass =
    aspect === "square"
      ? "aspect-square"
      : aspect === "portrait"
        ? "aspect-[3/4]"
        : "aspect-video";

  return (
    <div
      className={`relative overflow-hidden rounded-3xl shadow-[0_8px_30px_rgba(31,26,23,0.08)] ${aspectClass} ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 50vw"
        priority={priority}
      />
    </div>
  );
}

export function SectionHeading({
  label,
  title,
  description,
  align = "center",
}: {
  label: string;
  title: string;
  description?: string;
  align?: "center" | "left";
}) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";
  return (
    <div className={`max-w-3xl mb-12 md:mb-16 ${alignClass}`}>
      <span className="inline-block rounded-full bg-peach px-3 py-1 text-xs font-semibold uppercase tracking-wide text-orange-600">
        {label}
      </span>
      <h2 className="mt-4 text-3xl font-bold leading-tight text-ink md:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-lg text-ink/70 leading-relaxed">{description}</p>
      )}
    </div>
  );
}

export function SectionContainer({
  id,
  children,
  className = "",
}: {
  id?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`py-20 md:py-28 ${className}`}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}

export function Card({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-3xl bg-white p-6 shadow-[0_8px_30px_rgba(31,26,23,0.06)] ${className}`}
    >
      {children}
    </div>
  );
}

export function PrimaryButton({
  href,
  children,
  className = "",
  onClick,
  type = "button",
}: {
  href?: string;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full bg-orange-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-orange md:text-base";
  if (href) {
    return (
      <a href={href} className={`${base} ${className}`}>
        {children}
      </a>
    );
  }
  return (
    <button type={type} onClick={onClick} className={`${base} ${className}`}>
      {children}
    </button>
  );
}

export function SecondaryButton({
  href,
  children,
  className = "",
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center rounded-full border border-ink/15 bg-white px-6 py-3 text-sm font-semibold text-ink transition hover:border-ink/40 md:text-base ${className}`}
    >
      {children}
    </a>
  );
}
