import Link from "next/link";
import JaAureliaNav from "../JaAureliaNav";

const tracks = [
  { number:"07", title:"The Knight of Aurelia", jaTitle:"Aurelia の騎士", summary:"Cedric は王都へ戻ります。しかし滞在は短く、Jessara は彼が再び去ることをどれほど恐れているか思い知らされます。", story:[
    "何年も前、Cedric は Jessara と庭の塀を越えて遊んでいた少年でした。今では Aurelia を代表する若き騎士であり、戦場の指揮官の一人です。",
    "第二章は Cedric が短期間だけ王都へ戻るところから始まります。Jessara はすでに女王の外見を身につけています。評議会では冷静に、兵士の前では迷いなく、民の前では常に落ち着いています。",
    "Cedric は今でも時々、彼女を「Your Majesty」ではなく「Jess」と呼ぶ数少ない人の一人です。王冠をかぶる前の彼女を覚えています。",
    "二人は幼い頃に遊んだ庭を歩きます。Jessara が「It looks smaller.」と言うと、Cedric は「We got taller.」",
    "その静かな時間は長く続きません。前線から新たな命令が届き、Cedric は再び出発しなければなりません。",
    "城門で Jessara は「How long?」と聞きます。Cedric は「I don’t know.」彼女は「That is a terrible answer.」Cedric は「It is an honest one.」",
    "Jessara はもっと多くのことを言いたいのに、最後に口にできるのは「Come back.」だけです。Cedric は「I always do.」Jessara は彼を見る。「That’s not a promise.」Cedric は認めます。「No.」",
    "軍が動き出し、Cedric は一度だけ城を振り返ります。Jessara はまだそこに立っています。同じ門から、すでに一人の大切な人を失った彼女は、もう一人が同じ戦争へ消えていくのを見送ります。"
  ]},
  { number:"08", title:"Her Wish Under the Moon", jaTitle:"月の下の願い", summary:"昼の Jessara は答えのない決断を下す女王。夜になって初めて、自分だけの願いを口にします。", story:[
    "戦争は最も長く、最も消耗する段階へ入ります。この章の中心は一つの大事件ではなく、女王の日常です。",
    "夜明けには食糧を確認し、午前は戦況報告を受け、昼には国境から逃れてきた家族と会い、午後は徴兵を増やすべきか大臣たちと議論し、夜には負傷者と死者の名簿を読みます。",
    "ある日、軍事的に維持が難しい国境の町を放棄すべきだと進言されます。Jessara は「How many people are still there?」と尋ねます。答えはおよそ四千人。",
    "Jessara は「Then it is not empty.」と言い、その町を見捨てることを拒みます。その決断によって別の戦線がより危険になることを理解した上で。",
    "彼女は、統治とは単に正しいことを選ぶことではないと知ります。どの選択肢でも誰かが傷つくとき、どの結果を自分が背負うのかを決めることなのだと。",
    "深夜、ようやく自室のバルコニーへ戻ります。王宮から戦場は見えず、山の上に月だけが浮かんでいます。",
    "Cedric がどこにいるのか分かりません。生きているのかさえ分かりません。",
    "Jessara はささやきます。「I don’t need victory tonight.」少し間を置いて、「Just… bring them home.」",
    "窓辺で眠っていた小妖精が目を覚まし、Jessara の肩に止まります。ここは、女王が『怖い』と認めることのできる数少ない場所です。"
  ]},
  { number:"09", title:"When the Knight Fell", jaTitle:"騎士が倒れた日", summary:"重傷の Cedric が王宮へ運び込まれ、Jessara は父王を失った日の記憶と再び向き合うことになります。", story:[
    "Jessara が評議会にいると、一人の軍人が慌てて入り、礼をすることすら忘れます。「Your Majesty…」その表情だけで、Jessara は何かが起きたと悟ります。",
    "Cedric は鎧を切り開かれ、血にまみれた状態で王宮へ運び込まれます。",
    "恐ろしい一瞬、Jessara の目に映るのは Cedric ではありません。何年も前に担架で運ばれた父王です。同じ廊下、同じ急ぐ足音、同じように走る医師たち。",
    "誰かが「Your Majesty?」と呼び、ようやく彼女は再び動き出します。",
    "Cedric は何時間も意識を失っています。Jessara はいくつもの評議会の呼び出しを断り、そばに残ります。",
    "小妖精は Cedric の胸元に止まり、自分に使えるわずかで穏やかな魔法を使います。死を覆す奇跡ではありません。ただ、彼の呼吸を少しずつ安定させるだけの力です。",
    "Jessara は「Can you save him?」と尋ねます。小妖精は答えられません。ただ魔法を続けます。",
    "やがて Cedric が目を開けます。最初の言葉は「You look terrible.」Jessara は睨みます。「You almost died.」Cedric は弱々しく「Yes. That would explain it.」",
    "Jessara は泣きながら笑います。",
    "しかしベッドのそばに留まり続ける時間はありません。新しい報告が届きます。Aurelia 東部戦線が崩れ始めている。Jessara は Cedric を見て、それから戦況室の方向を見ます。もう待っているだけでは何も守れないと理解します。"
  ]},
  { number:"10", title:"The Little Wing Beyond the Lines", jaTitle:"戦線を越える小さな銀の翼", summary:"銀翼の小妖精は初めて、自分自身の冒険を選びます。ひとりで戦線を越え、敵陣へ。", story:[
    "小妖精は Jessara と将軍たちが危機について話すのを聞きます。Aurelia は兵力も情報も足りず、敵が次にどこを攻めるのか分かりません。",
    "その夜、Jessara に何も告げず、小妖精は王宮を離れ、軍道に沿って前線へ向かいます。",
    "彼女の目線では、人間の世界は巨大です。天幕は建物のようにそびえ、馬の蹄は雷のように地面を揺らし、巡回兵の足音が近づくたびに草むらや荷車の陰へ逃げ込まなければなりません。",
    "塹壕を越え、火の灯る野営地を抜け、補給箱の近くでは猫に動きを気づかれそうになります。",
    "ついに敵の司令幕舎へ入り込み、翌日の攻撃計画を話す将校たちの会議を聞きます。",
    "敵は主力を Aurelia 中央陣地へ集中させるつもりです。しかし、その集中によって片側の防御が短時間だけ薄くなることも分かります。",
    "小妖精はすぐに危険な帰路につきます。卓上の地図が動いたことで警報が上がりますが、誰も何が侵入したのかは理解できません。",
    "疲れ果てながら敵陣を脱出し、夜明け前、ついに Aurelia の青と金の旗を再び見つけます。",
    "この瞬間から、彼女は単なる Jessara の秘密の友だちではありません。自分で決め、自分で危険を引き受け、自分自身の物語の英雄になります。"
  ]},
  { number:"11", title:"The Last Battle of Aurelia", jaTitle:"Aurelia 最後の戦い", summary:"ついに戦争を終わらせる機会が訪れます。しかし Jessara は、王国と最も守りたい人の両方を危険にさらす決断を迫られます。", story:[
    "小妖精は飛ぶ力も残っていないほど疲れ、Jessara の戦争地図の上に落ちます。Jessara はまだ、彼女がどこへ行っていたのか知りません。",
    "石や紙切れ、必死の身振りを使って、小妖精は見てきた敵軍の配置を再現します。やがて Jessara と将軍たちは理解します。敵は中央に戦力を集中させ、その結果として一方の側面が開く。",
    "それは Aurelia にとって戦争を終わらせる唯一の機会かもしれません。同時に、罠かもしれません。",
    "部屋中が Jessara の判断を待ちます。長い沈黙のあと、彼女は「We attack.」と言います。",
    "まだ回復途中の Cedric が鎧を着て部屋へ入ってきます。Jessara は姿を見るなり「No.」Cedric は「I didn’t say anything.」Jessara は「You don’t need to.」",
    "Cedric は「Then order me to stay.」と告げます。Jessara はすぐには答えられません。ただの Jessara なら、彼を王宮に残したい。しかし Aurelia の女王として、軍には Cedric が必要だと知っています。",
    "最後に彼女が言うのは、また同じ言葉です。「…Come back.」Cedric は「I’ll try.」",
    "最後の戦いは容易な勝利にはなりません。Aurelia は序盤に前進しますが、敵はすぐに対応し、戦場は激しい消耗戦になります。兵士たちが倒れ、Cedric も再び倒れそうになります。",
    "小妖精が持ち帰った情報が最後まで活用された時、Aurelia の騎兵が敵の弱くなった側面を突破します。",
    "敵の戦線は崩れ、撤退が始まります。戦争はついに終わります。",
    "しかし戦場が突然明るい場所になるわけではありません。勝利の周囲には、その日を見ることができなかった人々が残っています。"
  ]},
  { number:"12", title:"Peace Returns to the Valley", jaTitle:"谷に平和が戻る", summary:"平和が Aurelia に戻り、Jessara は父王が『いつかすべてがお前のものになる』と言った本当の意味を理解します。", story:[
    "最終章は祝祭ではなく、静けさから始まります。何年ぶりかに警鐘が鳴らず、緊急の使者も来ず、城壁の外に軍が集結することもありません。",
    "王都の門が開き、兵士たちが次々と帰還します。通りは人で埋まり、歓声を上げる家族もいれば、安堵で泣く人もいます。そして待ち続けた末に、大切な人が戻らないと受け入れなければならない人もいます。",
    "Jessara は高いバルコニーではなく、人々の中に立っています。",
    "Cedric は生きて帰ってきます。戦争の痕跡を体に残したまま。人混みの向こうで二人は互いを見つけます。劇的に駆け寄ることはありません。ただ、笑います。",
    "その後、Jessara は物語の始まった王宮の庭へ一人で戻ります。同じ朝の光、同じ道、同じ古い壁。",
    "父王の言葉を思い出します。「One day, all of this will be yours.」幼い頃は、城、谷、道、土地のことだと思っていました。",
    "今なら分かります。王国は所有物ではありません。王国とは人々です。自分が守る責任を負う、その一人一人の命です。",
    "Cedric がやって来て庭の壁を見ます。「Do you remember trying to climb that?」Jessara は「I climbed it.」Cedric は「You fell.」Jessara は「You pushed me.」Cedric は笑って「That is not how I remember it.」",
    "近くでは子どもたちが庭を走り回り、疲れた侍女が後を追っています。Jessara はその姿に、かつての自分を見ます。",
    "銀翼の小妖精が彼女の肩に降ります。",
    "Aurelia の谷は再び朝の光に包まれます。物語の最初の旋律が戻ってきます。しかしそれはもう、守られていた姫のテーマではありません。成熟した女王のテーマです。",
    "Jessara はついに、なぜ王冠があれほど重いのかを理解します。そして、それでも自分がその王冠をかぶり続けたい理由も。"
  ]}
];

export default function JaEpisodeTwoPage() {
  return (
    <main className="aureliaPage">
      <header className="aureliaTop">
        <div>
          <Link className="back" href="/ja/">← Music Atelier Rowan に戻る</Link>
          <div className="languageChoices">
            <Link className="languageLink" href="/aurelia/episode-2/">English</Link>
            <Link className="languageLink" href="/zh/aurelia/episode-2/">中文</Link>
          </div>
        </div>
        <img className="aureliaWordmark" src="/logos/aurelia-logo.webp" alt="Aurelia — The Princess and the Silver Wings" />
      </header>
      <JaAureliaNav active="episode-2" />
      <section className="aureliaEpisodeHeader">
        <span className="sectionKicker">第二章 · Tracks 07–12</span>
        <h1>女王と戦争</h1>
        <p className="aureliaLead">Jessara は、大切な人をもう一度失う恐怖を抱えながら王国を導きます。Cedric、銀翼の小妖精、そして最後の反攻が、物語を平和へと運びます。</p>
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
      <div className="aureliaNext"><Link href="/ja/aurelia/">Aurelia 王国へ戻る →</Link></div>
    </main>
  );
}
