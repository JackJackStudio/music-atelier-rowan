import Link from "next/link";
import ZhAureliaNav from "../ZhAureliaNav";

export default function ZhJessaraPage() {
  return (
    <main className="aureliaPage">
      <header className="aureliaTop">
        <div>
          <Link className="back" href="/zh/">← 返回 Music Atelier Rowan</Link>
          <div><Link className="languageLink" href="/aurelia/jessara/">English</Link></div>
        </div>
        <img className="aureliaWordmark" src="/logos/aurelia-logo.webp" alt="Aurelia — The Princess and the Silver Wings" />
      </header>

      <ZhAureliaNav active="jessara" />

      <section className="aureliaCharacterHero aureliaCharacterSplit">
        <div className="aureliaCharacterArt">
          <img src="/images/Jessara.png" alt="Aurelia 王國的 Jessara 公主" />
        </div>
        <div className="aureliaCharacterIntro">
          <span className="sectionKicker">Aurelia 的公主</span>
          <h1>Jessara</h1>
          <p className="aureliaLead">
            她曾是被父王保護著長大的孩子，是對世界充滿好奇的少女；
            後來失去父親，並在還沒有準備好的時候，被迫學會如何成為一位女王。
          </p>
        </div>
      </section>

      <section className="aureliaDetails">
        <article>
          <span className="sectionKicker">她的起點</span>
          <h2>王宮花園裡的女孩</h2>
          <p>
            Jessara 在安全、疼愛與 Aurelia 的美景中長大。小時候的她在宮殿與花園裡奔跑，
            幾乎不理解王冠、戰爭或責任的重量。隨著年齡增長，她開始看向城牆之外，
            思考自己未來會成為什麼樣的人。
          </p>
        </article>
        <article>
          <span className="sectionKicker">銀色翅膀</span>
          <h2>花園裡的小小朋友</h2>
          <p>
            少女時期，Jessara 在王宮花園遇見一位有著銀色翅膀的神秘小精靈。
            最初的試探與好奇逐漸成為友誼。小精靈代表著她生命裡仍屬於童話、純真與不可能的那一部分，
            而這位朋友後來也將意外地影響整個王國的命運。
          </p>
        </article>
        <article>
          <span className="sectionKicker">王冠</span>
          <h2>她還沒有準備好，但已經沒有退路。</h2>
          <p>
            父王在戰爭中重傷返城並最終離世，Jessara 同時失去了父親，也失去了被保護的少女時代。
            她必須接下仍在戰火中的王國。她的故事不是成為最強的戰士，
            而是學會在害怕失去所愛之人的同時，仍然願意承擔責任、保護其他人。
          </p>
        </article>
        <article>
          <span className="sectionKicker">騎士</span>
          <h2>從童年玩伴，到前線指揮官</h2>
          <p>
            Cedric 從陪 Jessara 翻花園圍牆的童年好友，成長為 Aurelia 最重要的年輕騎士與軍隊指揮官之一。
            在失去父王之後，Cedric 一次又一次返回戰場，使戰爭對 Jessara 而言不再只是國家的危機，
            也是她害怕再次失去重要之人的私人恐懼。
          </p>
        </article>
      </section>

      <div className="aureliaNext">
        <Link href="/zh/aurelia/episode-1/">開始第一章 →</Link>
      </div>
    </main>
  );
}
