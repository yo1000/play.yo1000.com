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