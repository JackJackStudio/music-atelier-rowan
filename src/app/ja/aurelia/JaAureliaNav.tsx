import Link from "next/link";

type AureliaTab = "kingdom" | "jessara" | "episode-1" | "episode-2";

const items = [
  { key: "kingdom", label: "アウレリア王国", href: "/ja/aurelia/" },
  { key: "jessara", label: "ジェッサラ姫", href: "/ja/aurelia/jessara/" },
  { key: "episode-1", label: "物語 · 第一章", href: "/ja/aurelia/episode-1/" },
  { key: "episode-2", label: "物語 · 第二章", href: "/ja/aurelia/episode-2/" },
] as const;

export default function JaAureliaNav({ active }: { active: AureliaTab }) {
  return (
    <nav className="aureliaTabs" aria-label="Aurelia 日本語セクション">
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
