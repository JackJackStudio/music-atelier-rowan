import Link from "next/link";

type AureliaTab = "kingdom" | "jessara" | "episode-1" | "episode-2";

const items = [
  { key: "kingdom", label: "Aurelia 王國", href: "/zh/aurelia/" },
  { key: "jessara", label: "Jessara 公主", href: "/zh/aurelia/jessara/" },
  { key: "episode-1", label: "故事 · 第一章", href: "/zh/aurelia/episode-1/" },
  { key: "episode-2", label: "故事 · 第二章", href: "/zh/aurelia/episode-2/" },
] as const;

export default function ZhAureliaNav({ active }: { active: AureliaTab }) {
  return (
    <nav className="aureliaTabs" aria-label="Aurelia 中文章節">
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
