import Link from "next/link";
import JaAureliaNav from "../JaAureliaNav";

export default function JaJessaraPage() {
  return (
    <main className="aureliaPage">
      <header className="aureliaTop">
        <div>
          <Link className="back" href="/ja/">← Music Atelier Rowan に戻る</Link>
          <div className="languageChoices">
            <Link className="languageLink" href="/aurelia/jessara/">English</Link>
            <Link className="languageLink" href="/zh/aurelia/jessara/">中文</Link>
          </div>
        </div>
        <img className="aureliaWordmark" src="/logos/aurelia-logo.webp" alt="Aurelia — The Princess and the Silver Wings" />
      </header>

      <JaAureliaNav active="jessara" />

      <section className="aureliaCharacterHero aureliaCharacterSplit">
        <div className="aureliaCharacterArt">
          <img src="/images/Jessara.png" alt="Aurelia 王国の Princess Jessara" />
        </div>
        <div className="aureliaCharacterIntro">
          <span className="sectionKicker">Aurelia の姫</span>
          <h1>Jessara</h1>
          <p className="aureliaLead">
            父王に守られて育った少女。世界の向こう側を知りたがる若い姫。
            やがて父を失い、心の準備ができるより先に、一国の女王として立つことを求められます。
          </p>
        </div>
      </section>

      <section className="aureliaDetails">
        <article>
          <span className="sectionKicker">はじまり</span>
          <h2>王宮の庭園を駆ける少女</h2>
          <p>
            Jessara は愛情と安全、そして Aurelia の美しさに包まれて育ちます。
            幼いころの彼女は宮殿や庭園を走り回り、王冠や戦争、責任の重さをまだ知りません。
            成長するにつれ、城壁の外を見つめ、自分がどんな人間になるのかを考え始めます。
          </p>
        </article>
        <article>
          <span className="sectionKicker">銀の翼</span>
          <h2>庭園で出会った小さな友だち</h2>
          <p>
            少女時代、Jessara は王宮の庭で銀色の翼を持つ不思議な小妖精と出会います。
            最初は警戒と好奇心から始まった関係が、少しずつ友情へ変わっていきます。
            その妖精は、Jessara の人生に残された童話、無邪気さ、不可能なものへの信頼を象徴し、
            やがて王国の運命にも思いがけない形で関わっていきます。
          </p>
        </article>
        <article>
          <span className="sectionKicker">王冠</span>
          <h2>まだ準備はできていない。それでも戻る道はない。</h2>
          <p>
            父王が戦場から瀕死の状態で戻り、やがて息を引き取ると、
            Jessara は父だけでなく、守られていた少女時代そのものを失います。
            彼女は戦争の続く王国を引き継がなければなりません。
            これは最強の戦士になる物語ではなく、愛する人を失うことを恐れながらも、
            責任を引き受け、他者を守ることを学ぶ物語です。
          </p>
        </article>
        <article>
          <span className="sectionKicker">騎士</span>
          <h2>幼なじみから、前線の指揮官へ</h2>
          <p>
            Cedric は、かつて Jessara と一緒に庭の塀を越えようとしていた幼なじみから、
            Aurelia を代表する若き騎士、そして軍の指揮官へと成長します。
            父を失った後も Cedric が何度も戦場へ戻ることで、
            戦争は Jessara にとって国家の危機であるだけでなく、
            もう一人の大切な人を失うかもしれないという個人的な恐怖にもなっていきます。
          </p>
        </article>
      </section>

      <div className="aureliaNext">
        <Link href="/ja/aurelia/episode-1/">第一章を読む →</Link>
      </div>
    </main>
  );
}
