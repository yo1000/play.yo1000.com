import React, { Component } from 'react';
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image';

const ImageCards = () => (
    <StaticQuery query={graphql`
    query {
        images: allFile {
            edges {
                node {
                    relativePath
                    name
                    childImageSharp {
                        sizes(maxWidth: 800, quality: 100) {
                            ...GatsbyImageSharpSizes
                        }
                    }
                    publicURL
                }
            }
        }
    }`}

    render={(data) => {
        return data.images.edges.map((image, i) => {
            const srcSet = image.node.childImageSharp.sizes.srcSet.replace(/\s+/g, '?').split(/\?*,\?*/)
            let srcLarge = srcSet.find((src) => {
                return src.endsWith('1600w');
            })
            if (!srcLarge) {
                srcLarge = srcSet.find((src) => {
                    return src.endsWith('1200w');
                })
            }
            if (!srcLarge) {
                srcLarge = image.node.childImageSharp.sizes.src
            }
            return (
                <article className="6u 12u$(xsmall) work-item">
                    <a className="image fit thumb" target="_blank" rel="noopener noreferrer" href={srcLarge}>
                        <Img alt={image.node.name} sizes={image.node.childImageSharp.sizes}/>
                    </a>
                    <h3>{image.node.name}</h3>
                        <p>
                            <a href={image.node.publicURL} target="_blank" rel="noopener noreferrer">original size</a>
                        </p>
                </article>
            )
        }).reverse()
    }}
/>)

class Gallery extends Component {
    render () {
        return (
            <div className="row">
                <ImageCards/>
            </div>
        );
    }
}

Gallery.displayName = 'Gallery';
export default Gallery;