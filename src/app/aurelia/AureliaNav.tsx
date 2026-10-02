import Link from "next/link";

type AureliaTab = "kingdom" | "characters" | "places" | "palace" | "jessara" | "episode-1" | "episode-2";

const items = [
  { key: "kingdom", label: "Overview", href: "/aurelia/" },
  { key: "characters", label: "Characters", href: "/aurelia/characters/" },
  { key: "places", label: "Places", href: "/aurelia/places/" },
  { key: "palace", label: "Royal Palace", href: "/aurelia/palace/" },
] as const;

export default function AureliaNav({ active }: { active: AureliaTab }) {
  return (
    <nav className="aureliaTabs" aria-label="Aurelia sections">
      {items.map((item) => {
        const isActive =
          item.key === active ||
          (item.key === "characters" && active === "jessara");

        return (
          <Link
            key={item.key}
            href={item.href}
            className={isActive ? "active" : ""}
            aria-current={isActive ? "page" : undefined}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
