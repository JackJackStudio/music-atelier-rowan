"use client";

import type { MouseEvent, ReactNode } from "react";
import Link from "next/link";

type AnalyticsLinkProps = {
  href: string;
  eventName: string;
  params?: Record<string, string | number | boolean>;
  children: ReactNode;
  className?: string;
  target?: string;
  rel?: string;
  ariaLabel?: string;
};

export default function AnalyticsLink({
  href, eventName, params = {}, children, className, target, rel, ariaLabel,
}: AnalyticsLinkProps) {
  function track(_event: MouseEvent<HTMLAnchorElement>) {
    const gtag = (window as typeof window & { gtag?: (...args: unknown[]) => void }).gtag;
    gtag?.("event", eventName, params);
  }

  return (
    <Link href={href} className={className} target={target} rel={rel} aria-label={ariaLabel} onClick={track}>
      {children}
    </Link>
  );
}
