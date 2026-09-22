import Link from "next/link";

const stories = [
  { slug: "aurelia", note: "一位公主。一頂王冠。一個陷入戰火的王國。", status: "12 首樂曲" },
  { slug: "brenalia", note: "森林王國、古老聖器，以及一場越過國境的旅程。", status: "故事製作中" },
  { slug: "cazenia", note: "一位聰慧的公主、一條銀線，以及尚待揭曉的王國。", status: "即將推出" },
];

export default function ZhHome() {
  return (
    <main>
      <nav className="siteNav">
        <a className="brandMark" href="#top" aria-label="Music Atelier Rowan 首頁">
          <picture>
            <source media="(max-width: 700px)" srcSet="/brand/mar-emblem.png" />
            <img className="headerLogo" src="/brand/mar-header-logo.png" alt="Music Atelier Rowan" />
          </picture>
        </a>
        <div className="navLinks">
          <a href="#stories">世界</a>
          <Link href="/zh/triveria/">Triveria</Link>
          <a href="#about">關於</a>
          <Link href="/">EN</Link>
          <Link href="/ja/">日本語</Link>
        </div>
      </nav>

      <section className="hero" id="top">
        <div className="heroArtwork" role="img" aria-label="Music Atelier Rowan 奇幻音樂工坊" />
        <div className="heroFade" />
        <a className="scrollCue" href="#stories">進入故事世界</a>
      </section>

      <section className="stories" id="stories">
        <div className="sectionHeading">
          <span>Triveria 大陸</span>
          <h1>選一個故事，走進一個世界。</h1>
          <p>三個王國從不同的地方開始。總有一天，它們的音樂、傳說與公主，會走上同一條道路。</p>
        </div>

        <div className="storyGrid">
          {stories.map((story) => (
            <Link
              className={`storyCard ${story.slug}`}
              href={story.slug === "aurelia" ? "/zh/aurelia/" : `/${story.slug}/`}
              key={story.slug}
              aria-label={`進入 ${story.slug}`}
            >
              <div className="storyLogoArea">
                <img className="storyLogo" src={`/logos/${story.slug}-logo.webp`} alt="" />
              </div>
              <div className="storyContent">
                <span className="storyStatus">{story.status}</span>
                <p className="storyNote">{story.note}</p>
                <span className="enter">進入故事 →</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="atelier" id="about">
        <div className="atelierFrame">
          <div className="atelierIntro">
            <span className="sectionKicker">關於 Music Atelier Rowan</span>
            <h2>讓音樂成為一個世界。</h2>
          </div>

          <div className="atelierCopy">
            <p>
              Music Atelier Rowan 是原創音樂、想像世界，以及無言故事的棲身之所。
              在這裡，奇幻王國、遙遠星球、被遺忘的記憶與安靜的人間片刻，
              透過電影感音樂與視覺敘事被重新賦予生命。
            </p>
            <p>
              每一張專輯都不只是一組曲目，而是一段旅程、一個場景，以及一個等待展開的故事。
              從奇幻管弦樂到氛圍音景，每個作品都圍繞著同一個核心：
              <strong> Stories, Told Through Music.</strong>
            </p>
          </div>

          <div className="listenerNote">
            <span className="listenerNoteLabel">聆聽・想像・發現</span>
            <p>
              我們希望你可以先單純地聽音樂，讓旋律在自己的想像裡生成畫面、地方與故事。
              如果你想走得更深，也可以在這個網站找到每個作品背後原始的世界觀與故事設定。
            </p>
            <a href="#stories">探索原始故事設定 →</a>
          </div>
        </div>
      </section>

      <footer>
        <div>
          <strong>M.A.R. — Music Atelier Rowan</strong>
          <span>Stories, Told Through Music.</span>
        </div>
        <span>Triveria 大陸</span>
      </footer>
    </main>
  );
}
