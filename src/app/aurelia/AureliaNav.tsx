import Link from "next/link";

type AureliaTab = "kingdom" | "jessara" | "episode-1" | "episode-2";

const items = [
  { key: "kingdom", label: "Kingdom Aurelia", href: "/aurelia/" },
  { key: "jessara", label: "Princess Jessara", href: "/aurelia/jessara/" },
  { key: "episode-1", label: "Story · Episode I", href: "/aurelia/episode-1/" },
  { key: "episode-2", label: "Story · Episode II", href: "/aurelia/episode-2/" },
] as const;

export default function AureliaNav({ active }: { active: AureliaTab }) {
  return (
    <nav className="aureliaTabs" aria-label="Aurelia sections">
      {items.map((item) => (
        <Link
          key={item.key}
          href={item.href}
          className={item.key === active ? "active" : ""}
          aria-current={item.key === active ? "page" : undefined}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
