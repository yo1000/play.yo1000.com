import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
// import Lightbox from 'react-images'
import Gallery from '../components/Gallery'
import Footer from '../components/Footer';

let id = 1

const DEFAULT_IMAGES = [
    { id: id++, src: 'ffxiv/ffxiv_20190719_191211_570.png', caption: 'キャラクリ', description: '無限に時間がかかる'},
    { id: id++, src: 'ffxiv/ffxiv_20190719_195810_037.png', caption: '巴術士クラスで開始', description: '5年くらい前には黒魔道士してた'},
    { id: id++, src: 'ffxiv/ffxiv_20190719_201241_390.png', caption: 'タイトルコール', description: 'リムサからスタート'},

    { id: id++, src: 'ffxiv/ffxiv_20190720_012800_062.png', caption: 'ダサい', description: '初期はどうしても装備がダサくなりがち'},
    { id: id++, src: 'ffxiv/ffxiv_20190720_092258_028.png', caption: '初期装備', description: 'どう考えても初期装備のほうが似合う'},
    { id: id++, src: 'ffxiv/ffxiv_20190720_195652_195.png', caption: 'タイムイズマネー', description: '大人は時間をカネで買う'},
    { id: id++, src: 'ffxiv/ffxiv_20190720_223114_556.png', caption: 'ベッドシーン', description: 'エオルゼアにはなんでもある'},

    { id: id++, src: 'ffxiv/ffxiv_20190721_001948_012.png', caption: '日の出', description: 'エオルゼアは美しい'},
    { id: id++, src: 'ffxiv/ffxiv_20190721_012228_848.png', caption: 'エリヌ・ロアユ大闘将', description: 'ウルダハの美人エレゼン'},

    { id: id++, src: 'ffxiv/ffxiv_20190722_224316_633.png', caption: '船首でポーズ', description: 'ひとりタイタニック'},

    { id: id++, src: 'ffxiv/ffxiv_20190723_003920_499.png', caption: 'マーケットボードデビュー', description: '好みの衣装を調達できるように'},
    { id: id++, src: 'ffxiv/ffxiv_20190723_004232_191.png', caption: '武具投影', description: '5年前にはそんな便利機能なかった'},
    { id: id++, src: 'ffxiv/ffxiv_20190723_013411_865.png', caption: '衣装気に入った', description: '当面これでいく'},

    { id: id++, src: 'ffxiv/ffxiv_20190724_044954_025.png', caption: 'にっこり', description: '砂の家にきた'},
    { id: id++, src: 'ffxiv/ffxiv_20190724_045612_430.png', caption: 'イダ好き', description: 'イダ好き'},
    { id: id++, src: 'ffxiv/ffxiv_20190724_053655_473.png', caption: '遺跡観光', description: 'リアル旅行は帰省くらいしかしない'},
    { id: id++, src: 'ffxiv/ffxiv_20190724_230157_730.png', caption: 'イフリート', description: '蛮神ていう響きなんかかっこいい'},
    { id: id++, src: 'ffxiv/ffxiv_20190724_230406_207.png', caption: '炎の照返し表現', description: '照明の具合が絶妙できれい'},
    { id: id++, src: 'ffxiv/ffxiv_20190724_231650_599.png', caption: 'タタルさん', description: 'かわいい'},

    { id: id++, src: 'ffxiv/ffxiv_20190725_000535_837.png', caption: '手乗り姫', description: 'かわいい'},
    { id: id++, src: 'ffxiv/ffxiv_20190725_001841_240.png', caption: '悠久の風', description: 'といえばFF3'},
    { id: id++, src: 'ffxiv/ffxiv_20190725_002709_964.png', caption: '強そう', description: '確信'},
    { id: id++, src: 'ffxiv/ffxiv_20190725_003604_267.png', caption: '兄妹喧嘩', description: 'なかよくしろよ'},
    { id: id++, src: 'ffxiv/ffxiv_20190725_005154_445.png', caption: '満天', description: 'エオルゼアはほんとに空が綺麗'},
    { id: id++, src: 'ffxiv/ffxiv_20190725_011030_755.png', caption: 'おはよう', description: '朝日を浴びる'},
    { id: id++, src: 'ffxiv/ffxiv_20190725_015341_816.png', caption: 'マイチョコボ', description: '解放もっと早くていい'},

    { id: id++, src: 'ffxiv/ffxiv_20190726_002708_668.png', caption: 'ヤバい美容師', description: 'カットされた姿はサガフロ2のジニーぽい'},
    { id: id++, src: 'ffxiv/ffxiv_20190726_003925_096.png', caption: 'ビッグス＆ウェッジ', description: 'ウェッジが想像よりちんちくりんだった'},
    { id: id++, src: 'ffxiv/ffxiv_20190726_004112_552.png', caption: 'イダ好き', description: '空飛ぶギサールの野菜'},
    { id: id++, src: 'ffxiv/ffxiv_20190726_004250_205.png.png', caption: 'イダ好き', description: 'Wメテオ'},

    { id: id++, src: 'ffxiv/ffxiv_20190727_100125_679.png', caption: 'イダ好き', description: 'シルフの仮宿'},
    { id: id++, src: 'ffxiv/ffxiv_20190727_105227_328.png', caption: 'イダ好き', description: 'ファイティングポーズ'},
    { id: id++, src: 'ffxiv/ffxiv_20190727_151004_108.png', caption: 'イダ好き', description: 'ズボンどうなってんの'},

    { id: id++, src: 'ffxiv/ffxiv_20190728_165153_529.png', caption: 'イダ好き', description: '長老ちゃまのタマネギ感'},
    { id: id++, src: 'ffxiv/ffxiv_20190728_165244_956.png', caption: 'ラムウ', description: '過去作の中でもかなりかっこよく描かれてる'},
    { id: id++, src: 'ffxiv/ffxiv_20190728_165403_128.png', caption: 'パパリモも見習いなよ', description: 'そうだぞ'},

    { id: id++, src: 'ffxiv/ffxiv_20190729_043645_752.png', caption: '名所巡り', description: '綺麗な風景多いからそれだけでも楽しめる'},
    { id: id++, src: 'ffxiv/ffxiv_20190729_051801_750.png', caption: 'バディ解禁', description: 'チョコボと戯れ'},

    { id: id++, src: 'ffxiv/ffxiv_20190730_205907_990.png', caption: 'パパリモ', description: 'たまには可愛い顔もする'},
    { id: id++, src: 'ffxiv/ffxiv_20190730_205921_516.png', caption: 'イダ', description: 'イダ好き 声とキャラが'},
    { id: id++, src: 'ffxiv/ffxiv_20190730_210146_735.png', caption: 'タタルさんとノラクシア', description: 'ずっと掛け合い見ていたい'},
    { id: id++, src: 'ffxiv/ffxiv_20190730_221716_892.png', caption: '夕焼け', description: '空の表情豊か'},
    { id: id++, src: 'ffxiv/ffxiv_20190730_230518_064.png', caption: 'イダ好き', description: '安定のメンツ'},

    { id: id++, src: 'ffxiv/ffxiv_20190731_234137_226.png', caption: 'ハウケタ御用邸', description: 'シナリオはだいぶホラー'},
    { id: id++, src: 'ffxiv/ffxiv_20190731_235331_710.png', caption: '激戦になる', description: '次の旅はヤ・シュトラと'},

    { id: id++, src: 'ffxiv/ffxiv_20190801_003915_090.png', caption: 'リムサで見かけた他のヴィエラ', description: '白ヴィエラもかわいい'},
    { id: id++, src: 'ffxiv/ffxiv_20190801_013013_476.png', caption: 'ちょっとボトムを染色した', description: 'テレポは足広げ過ぎだと思う'},
    { id: id++, src: 'ffxiv/ffxiv_20190801_013121_881.png', caption: 'ヤ・シュトラ', description: 'たまに幼い表情をする'},
    { id: id++, src: 'ffxiv/ffxiv_20190801_033109_750.png', caption: '砂漠の町', description: '暑いのはきらいです'},

    { id: id++, src: 'ffxiv/ffxiv_20190803_010453_650.png', caption: 'バッカスの酒', description: 'ちょっとお使い多くなってきた'},
    { id: id++, src: 'ffxiv/ffxiv_20190803_011441_578.png', caption: 'コスタ・デル・ソル', description: 'よく晴れてて写真撮りやすい'},
    { id: id++, src: 'ffxiv/ffxiv_20190803_012142_859.png', caption: '海水浴', description: '水着とかにしたほうが良かった'},
    { id: id++, src: 'ffxiv/ffxiv_20190803_012542_367.png', caption: 'ぷかぷか', description: 'すずしそう'},
    { id: id++, src: 'ffxiv/ffxiv_20190803_020222_304.png', caption: 'キラキラ', description: 'だいじなところ'},
    { id: id++, src: 'ffxiv/ffxiv_20190803_022623_713.png', caption: 'エーテライト', description: '交信シーンは撮影チャンスが少ない'},
    { id: id++, src: 'ffxiv/ffxiv_20190803_023516_535.png', caption: '定職につけ', description: 'みんな仕事しろよ'},
    { id: id++, src: 'ffxiv/ffxiv_20190803_023909_678.png', caption: '蛮風エーテライト', description: 'タイタン目前'},
    { id: id++, src: 'ffxiv/ffxiv_20190803_024432_769.png', caption: '対峙', description: '戦闘は場外に出たらアウトな相撲仕様'},
    { id: id++, src: 'ffxiv/ffxiv_20190803_031405_059.png', caption: 'かなしみ', description: 'ノラクシアアアアア'},
    { id: id++, src: 'ffxiv/ffxiv_20190803_031811_630.png', caption: '....', description: 'ノラクシア..'},
    { id: id++, src: 'ffxiv/ffxiv_20190803_031819_520.png', caption: '........', description: 'ノラクシア....'},
    { id: id++, src: 'ffxiv/ffxiv_20190803_031824_246.png', caption: '............', description: 'かなしい..'},
    { id: id++, src: 'ffxiv/ffxiv_20190803_032151_873.png', caption: 'マルケズ', description: 'シドっぽさを隠せない男'},
    { id: id++, src: 'ffxiv/ffxiv_20190803_105617_281.png', caption: 'ストリートスナップ', description: '好みの服装のミコッテを見かけた'},
    { id: id++, src: 'ffxiv/ffxiv_20190803_113738_520.png', caption: 'ノラクシア..', description: 'わすれないよ'},
    { id: id++, src: 'ffxiv/ffxiv_20190803_114819_974.png', caption: '観光', description: '服装もマイナーチェンジした'},
    { id: id++, src: 'ffxiv/ffxiv_20190803_115306_413.png', caption: 'ごめんなさい', description: 'ノラクシア..'},
    { id: id++, src: 'ffxiv/ffxiv_20190803_115313_410.png', caption: 'ノラクシア....', description: '....'},
    { id: id++, src: 'ffxiv/ffxiv_20190803_115321_640.png', caption: '立派でした', description: '最期まで'},
    { id: id++, src: 'ffxiv/ffxiv_20190803_120430_343.png', caption: 'シド', description: 'しっくりくる'},
    
    { id: id++, src: 'ffxiv/ffxiv_20190803_124558_052.png', caption: 'ゴールドソーサー', description: '寄り道'},
    { id: id++, src: 'ffxiv/ffxiv_20190803_124929_284.png', caption: 'うさぎのお仕事', description: 'バニーがたくさんいる'},
    { id: id++, src: 'ffxiv/ffxiv_20190803_125829_217.png', caption: 'かわいすぎるバニーさん', description: '違法就業してそう'},
    { id: id++, src: 'ffxiv/xxxxxxxxxxx.png', caption: 'xxxxxxxx', description: 'xxxxxxxx'},
];

class HomeIndex extends React.Component {

    render() {
        const siteTitle = "like talk2wall"
        const siteDescription = "like taking to a wall"

        return (
            <Layout>
                <Helmet>
                    <title>{siteTitle}</title>
                    <meta name="description" content={siteDescription} />
                </Helmet>
                <div id="main">
                    <section id="one">
                        <header className="major">
                            <h2>like taking to a wall</h2>
                        </header>
                        <p>旅のきろく</p>
                    </section>

                    <section id="two">
                        <h2>Gallery</h2>
                        <Gallery images={DEFAULT_IMAGES.map(({ id, src, caption, description }) => ({
                            src,
                            caption,
                            description
                        })).reverse()} />
                    </section>
                    <Footer/>
                </div>
            </Layout>
        )
    }
}

export default HomeIndex