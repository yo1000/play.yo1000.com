import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Gallery from '../components/Gallery'
import Footer from '../components/Footer';

class HomeIndex extends React.Component {
    render() {
        const siteTitle = "like talk2wall"
        const siteDescription = "like talking to a wall"

        return (
            <Layout>
                <Helmet>
                    <title>{siteTitle}</title>
                    <meta name="description" content={siteDescription} />
                </Helmet>
                <div id="main">
                    <section id="one">
                        <header className="major">
                            <h2>like talking to a wall</h2>
                        </header>
                        <p>旅のきろく</p>
                    </section>

                    <section id="two">
                        <h2>Gallery</h2>
                        <Gallery/>
                    </section>
                    <Footer/>
                </div>
            </Layout>
        )
    }
}

export default HomeIndex