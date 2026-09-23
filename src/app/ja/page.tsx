import Link from "next/link";
import AnalyticsLink from "../AnalyticsLink";

const stories = [
  { slug: "aurelia", note: "ひとりの姫。ひとつの王冠。戦火に包まれる王国。", status: "12 Tracks" },
  { slug: "brenalia", note: "森の王国。古代の聖遺物。そして国境を越える旅。", status: "物語制作中" },
  { slug: "cazenia", note: "聡明な姫。銀の糸。まだ明かされていない王国。", status: "近日公開" },
];

export default function JaHome() {
  return (
    <main>
      <nav className="siteNav">
        <a className="brandMark" href="#top" aria-label="Music Atelier Rowan ホーム">
          <picture>
            <source media="(max-width: 700px)" srcSet="/brand/mar-emblem.png" />
            <img className="headerLogo" src="/brand/mar-header-logo.png" alt="Music Atelier Rowan" />
          </picture>
        </a>
        <div className="navLinks">
          <a href="#stories">世界</a>
          <Link href="/ja/triveria/">Triveria</Link>
          <a href="#about">About</a>
          <Link href="/">EN</Link>
          <Link href="/zh/">中文</Link>
        </div>
      </nav>

      <section className="hero" id="top">
        <div className="heroArtwork" role="img" aria-label="Music Atelier Rowan 幻想音楽のアトリエ" />
        <div className="heroFade" />
        <a className="scrollCue" href="#stories">物語の世界へ</a>
      </section>

      <section className="stories" id="stories">
        <div className="sectionHeading">
          <span>トリヴェリア大陸</span>
          <h1>ひとつの物語を選び、ひとつの世界へ。</h1>
          <p>三つの王国は、それぞれ別の場所から始まります。やがて音楽、伝説、そして三人の姫は、同じ道の上で交わっていきます。</p>
        </div>

        <div className="storyGrid">
          {stories.map((story) => (
            <div className="storyItem" key={story.slug}>
              <AnalyticsLink className={`storyCard ${story.slug}`} href={`/ja/${story.slug}/`} ariaLabel={`物語へ: ${story.slug}`} eventName="enter_story" params={{ kingdom: story.slug, language: "ja", source: "homepage" }}>
                <div className="storyLogoArea">
                  <img className="storyLogo" src={`/logos/${story.slug}-logo.webp`} alt="" />
                </div>
                <div className="storyContent">
                  <span className="storyStatus">{story.status}</span>
                  <p className="storyNote">{story.note}</p>
                  <span className="enter">物語へ →</span>
                </div>
              </AnalyticsLink>
              {story.slug === "aurelia" && (
                <div className="storyMusicLinks">
                  <AnalyticsLink href="https://youtu.be/aufR8Y0sHTs" target="_blank" rel="noopener noreferrer" eventName="listen_soundtrack" params={{ kingdom: "aurelia", episode: 1, tracks: "01-06", language: "ja", source: "homepage", platform: "youtube" }}>
                    <span>▶</span> ストーリー音楽 — Episode I — Track 01–06
                  </AnalyticsLink>
                  <AnalyticsLink href="https://youtu.be/bf-5DsIqcGE" target="_blank" rel="noopener noreferrer" eventName="listen_soundtrack" params={{ kingdom: "aurelia", episode: 2, tracks: "07-12", language: "ja", source: "homepage", platform: "youtube" }}>
                    <span>▶</span> ストーリー音楽 — Episode II — Track 07–12
                  </AnalyticsLink>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="atelier" id="about">
        <div className="atelierFrame">
          <div className="atelierIntro">
            <span className="sectionKicker">Music Atelier Rowan について</span>
            <h2>音楽が、ひとつの世界になる場所。</h2>
          </div>

          <div className="atelierCopy">
            <p>
              Music Atelier Rowan は、オリジナル音楽、想像された世界、そして言葉を使わずに語られる物語のための場所です。
              幻想の王国、遠い惑星、忘れられた記憶、静かな人間の瞬間が、シネマティックな音楽とビジュアル・ストーリーテリングによって形になります。
            </p>
            <p>
              ひとつのアルバムは、単なる楽曲の集合ではありません。旅であり、舞台であり、これから開かれていく物語です。
              オーケストラによるファンタジーからアンビエントな音風景まで、すべての作品の中心にある考えはひとつです：
              <strong> Stories, Told Through Music.</strong>
            </p>
          </div>

          <div className="listenerNote">
            <span className="listenerNoteLabel">聴く・想像する・発見する</span>
            <p>
              まずは音楽だけを聴き、旋律から自分自身の風景や場所、物語を自由に想像してもらえたら嬉しいです。
              そして、もしもっと深く知りたくなったなら、このサイトで各作品の原案となった世界観や物語設定を読むことができます。
            </p>
            <a href="#stories">物語の原案を読む →</a>
          </div>
        </div>
      </section>

      <footer>
        <div>
          <strong>M.A.R. — Music Atelier Rowan</strong>
          <span>Stories, Told Through Music.</span>
        </div>
        <span>トリヴェリア大陸</span>
      </footer>
    </main>
  );
}
