import Link from "next/link";
import JaAureliaNav from "../JaAureliaNav";

const tracks = [
  { number:"01", title:"Once Upon a Morning", jaTitle:"ある朝、むかしむかし", summary:"王宮の庭で過ごす何気ない幸せな朝が、Jessara の生涯に残る記憶になります。", story:[
    "物語は Aurelia の、ごく普通で幸せな朝から始まります。谷の霧が晴れ、白い塔に朝日が差し込み、王宮では姿を消した姫を侍女たちが探し回っています。",
    "Jessara はまた朝の授業を抜け出し、幼い Cedric と庭に隠れていました。二人は庭の外壁をこっそり越えようとします。遠くから侍女の声が聞こえ、Cedric は小声で「No, they can’t see us.」と言います。次の瞬間、「…Now they can.」",
    "二人は逃げ出し、庭の奥で父王にぶつかりそうになります。王は泥だらけの Jessara のドレスと、気まずそうな Cedric の顔を見て、ただ『どこへ行くつもりだった？』と尋ねます。Jessara は谷の向こうを指さして、真剣に「Outside.」と答えます。",
    "その後、父王は Jessara を王国全体が見渡せる高いテラスへ連れて行き、「One day, all of this will be yours.」と告げます。意味をまだ理解できない Jessara は山々を指して「Even those?」と尋ねます。王は笑って、「No. I don’t think even kings own mountains.」",
    "曲の終わり、Jessara はまた Cedric を探して走り去ります。何の影もない幸福——『失う』ということをまだ本当に知らなかった、彼女の人生でも最後に近い時間です。"
  ]},
  { number:"02", title:"The Girl by the Window", jaTitle:"窓辺の少女", summary:"Jessara は初めて、宮殿の外の世界が教えられていた以上に広く、そして危険であることに気づきます。", story:[
    "数年後、Jessara は十五、六歳になっています。外交、歴史、礼儀、政治を学び始め、この日初めて王国の評議会を後方から見学することを許されます。",
    "退屈で眠りそうになっていた彼女の目を覚ましたのは、一人の軍人が卓上に広げた国境地図でした。東部国境の近くに、見覚えのない赤い印がいくつもあります。",
    "父王はただ「Border incidents.」と答えます。どの国との問題なのかと聞いても、『お前が心配することではない』としか言いません。Jessara はその答えがすぐに嫌いになります。",
    "午後、正式な騎士訓練を始めた Cedric が軽い訓練用の鎧を着て現れます。Jessara は彼を見て「You look ridiculous.」Cedric は「I was told I look very respectable.」と返し、彼女は即座に「They lied.」",
    "二人は王都の外の高台まで馬を走らせます。Jessara が東の山脈の向こうには何があるのかと聞くと、Cedric はわざと「More mountains.」と答え、それからさらに先に国境があると教えます。",
    "Jessara は戦争になると思うかと尋ねます。Cedric は父親が『ならない』と言っていると答えます。Jessara は「My father says I don’t need to worry.」二人は顔を見合わせます。『心配しなくていい』という言葉は、本当に心配すべき何かがある時にこそ大人が使うのだと、二人とも少しずつ理解し始めています。"
  ]},
  { number:"03", title:"Wings in the Garden", jaTitle:"庭園の銀の翼", summary:"小さな不思議な訪問者が、Jessara の青春に残された最後の魔法を王宮の庭にもたらします。", story:[
    "王宮の庭で、小さな奇妙な出来事が続きます。苺には小さな一口の跡がつき、Jessara のリボンは部屋から消え、翌日には薔薇の枝に掛かっています。花の奥から、小さな笑い声まで聞こえることがあります。",
    "Jessara が最初に疑うのは Cedric です。Cedric は呆れて「Why would I steal half a strawberry?」Jessara は「Because you’re annoying.」Cedric は「That is not evidence.」",
    "Jessara は犯人を自分で捕まえることにします。石のテーブルに蜂蜜ケーキを少し置き、近くに隠れます。長い時間のあと、銀色で透き通った翼を持つ小さな姿が花の間から飛び出してきます。",
    "Jessara はうっかり枝を踏んでしまい、小妖精を驚かせて逃がしてしまいます。追いかける代わりに、彼女は翌日も、その次の日も同じ場所へ戻り、食べ物を少し置いて離れたところで本を読みます。",
    "ついに小妖精が Jessara の指に止まる日が来ます。Jessara は「Hello.」とささやきます。名前があるのか、話せるのかと尋ねても、小妖精は瞬きをするだけ。Jessara は笑って、「That’s fine. Cedric talks enough for everyone.」",
    "この時点で小妖精は武器でも力の源でもありません。ただ Jessara の秘密の友だちです。政治と戦争が近づいてくる世界の中に残された、童話と好奇心と無邪気さの最後の小さな場所でした。"
  ]},
  { number:"04", title:"The King Rides to War", jaTitle:"王、戦場へ", summary:"国境の緊張がついに戦争へ変わり、Jessara は父王と Cedric が同じ門から去っていくのを見送ります。", story:[
    "戦争は突然始まるのではありません。まず国境の村が襲われ、次に交易路が途絶え、やがて二人の使者が真夜中に王宮へ到着します。評議会の明かりは夜明けまで消えません。",
    "翌朝、王都の鐘が鳴ります。祝祭ではなく、動員の鐘です。Jessara が評議会へ駆け込むと、戦争地図には印が増え、父王は彼女が見たことのない本物の戦装束を身につけています。",
    "Jessara は「You’re going.」父王は「I have to.」と答えます。彼女は初めて本気で父に怒ります。「No, you don’t. You’re the king. Send someone else.」",
    "王は娘を見つめ、「A king cannot ask others to stand where he is unwilling to stand himself.」と答えます。Jessara はその言葉が正しいと分かってしまうからこそ、嫌いになります。",
    "城外では青と金の旗の下に兵が集まっています。Cedric もその中にいます。初めて本物の戦へ向かう若い騎士です。Jessara は思わず「You too?」Cedric は苦笑して「Apparently this is what knights do.」Jessara は「That is a stupid answer.」Cedric は「I know.」",
    "城門が開きます。父王は軍の先頭を進み、最後に一度だけ振り返って娘へ手を上げます。Jessara も手を上げますが、振ることはできません。父と Cedric の姿が道の向こうへ消えるまで、その場を動きません。"
  ]},
  { number:"05", title:"The Empty Throne", jaTitle:"空の玉座", summary:"父王の帰還を待つ Jessara は、『王都へ戻る』ことと『本当に帰ってくる』ことは同じではないと知ります。", story:[
    "戦争は誰も予想しなかったほど長引きます。Jessara はますます多くの評議会に呼ばれ、死傷者、補給、難民、援軍という言葉の意味を現実として理解し始めます。",
    "Cedric から時折、前線から短い便りが届きます。Jessara が最初に確認するのはいつも二つ。父王が生きていること、そして Cedric が生きていることです。",
    "ある朝、王が帰還するという知らせが届きます。Jessara は戦争が終わったのだと思い、王宮をほとんど走って外庭へ向かいます。",
    "しかし歓声も音楽も勝利の旗もありません。帰還した兵士たちは沈黙し、王家の旗は低く垂れています。",
    "父王は馬に乗っていません。担架の上に横たわっています。",
    "Jessara は初めて『王』ではなく、ただの父親を見ます。血を流し、傷つき、死ぬことのできる一人の人間として。",
    "父王が一時的に目を覚ますと、Jessara は「You’re going to be fine.」と言い張ります。父は嘘だと分かっています。「Jessara… listen to me.」彼女は首を振り、「No. You can tell me later.」しかし、その『あとで』は来ません。",
    "父王の死後、Jessara は一人で玉座の間へ入ります。椅子は空です。銀翼の小妖精が静かに肘掛けに座っています。Jessara は長い間そこに立ち、やがて初めて声を押さえずに泣きます。"
  ]},
  { number:"06", title:"The Crown Is Heavy", jaTitle:"王冠は重い", summary:"Aurelia は Jessara の悲しみが終わるまで待ってはくれません。戦争は続き、姫は女王にならなければなりません。", story:[
    "葬儀が終わっても、戦争は終わりません。毎朝 Jessara を待つのは、請願書、死傷者名簿、食糧不足、軍からの要求、避難民、税、そして誰も代わりに答えてくれない問題です。",
    "父王の机に座った Jessara は静かに「How did he do this every day?」と尋ねます。誰も答えません。",
    "小妖精は自分より大きな書類を運ぼうとして、その下敷きになります。Jessara は思わず笑い、その直後に泣き出します。父を失ってから初めて笑った瞬間でした。",
    "戴冠の日、王冠が卓上に置かれています。美しいのに、ほとんど残酷なほど重く見えます。Cedric は式に出るため、前線から短い時間だけ戻ってきます。",
    "Jessara は「Do I look terrified?」と尋ねます。Cedric は「Yes.」彼女が睨むと、「But only to people who know you.」と付け加えます。",
    "Jessara は明日まで残ってほしいと言います。Cedric は答えません。二人とも、戦争が戴冠式のために一日止まることなどないと分かっています。",
    "式は華やかな歓喜ではなく、喪に包まれた静かなものです。王冠が彼女の頭に置かれ、Princess Jessara は Queen Jessara of Aurelia になります。",
    "式のあと、彼女は自室へ戻らず、そのまま評議会へ向かいます。全員が立ち上がり、父王が最後に見ていた戦争地図がまだ机に広げられています。",
    "初めて部屋中の声が止まり、全員が彼女の決定を待ちます。Jessara は東部戦線を見つめ、「Show me the eastern front.」と言います。"
  ]}
];

export default function JaEpisodeOnePage() {
  return (
    <main className="aureliaPage">
      <header className="aureliaTop">
        <div>
          <Link className="back" href="/ja/">← Music Atelier Rowan に戻る</Link>
          <div className="languageChoices">
            <Link className="languageLink" href="/aurelia/episode-1/">English</Link>
            <Link className="languageLink" href="/zh/aurelia/episode-1/">中文</Link>
          </div>
        </div>
        <img className="aureliaWordmark" src="/logos/aurelia-logo.webp" alt="Aurelia — The Princess and the Silver Wings" />
      </header>
      <JaAureliaNav active="episode-1" />
      <a className="episodeMusicBanner" href="https://youtu.be/aufR8Y0sHTs" target="_blank" rel="noopener noreferrer">
        <span className="episodeMusicIcon">▶</span>
        <span><strong>第一章の音楽を聴く</strong><small>YouTube でサウンドトラックを開き、音楽とともに物語をお楽しみください。</small></span>
        <em>YouTube ↗</em>
      </a>

      <section className="aureliaEpisodeHeader">
        <span className="sectionKicker">第一章 · Tracks 01–06</span>
        <h1>姫が女王になるまで</h1>
        <p className="aureliaLead">幼年期は、好奇心、友情、戦争、喪失へと姿を変え、Jessara はあまりにも早く王冠を受け取ることになります。</p>
      </section>
      <section className="aureliaStoryChapters">
        {tracks.map((track) => (
          <article className="aureliaStoryChapter" key={track.number}>
            <div className="aureliaStoryChapterHead">
              <div className="trackNumber">{track.number}</div>
              <div><h2>{track.title}</h2><h3 className="chapterLocalTitle">{track.jaTitle}</h3><p className="chapterSummary">{track.summary}</p></div>
            </div>
            <div className="chapterStory">{track.story.map((p,i)=><p key={i}>{p}</p>)}</div>
          </article>
        ))}
      </section>
      <div className="aureliaNext"><Link href="/ja/aurelia/episode-2/">第二章へ →</Link></div>
    </main>
  );
}
