import React, { Component } from 'react';
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image';

const ImageCards = () => (
    <StaticQuery query={graphql`
    query {
        images: allFile {
            edges {
                node {
                    name
                    relativePath
                    relativeDirectory
                    publicURL
                    childImageSharp {
                        sizes(maxWidth: 800, pngCompressionSpeed: 10, srcSetBreakpoints: [800]) {
                            ...GatsbyImageSharpSizes
                        }
                        original {
                            height
                            width
                        }
                    }
                }
            }
        }
    }`}

    render={(data) => {
        return data.images.edges.sort((o1, o2) => {
            return o1.node.name < o2.node.name ? 1 : -1
        }).map((image, i) => {
            return (
                <article className="6u 12u$(xsmall) work-item">
                    <a className="image fit thumb" target="_blank" rel="noopener noreferrer" href={image.node.childImageSharp.sizes.src}>
                        <Img alt={image.node.name} sizes={image.node.childImageSharp.sizes}/>
                    </a>
                    <h3>{image.node.name}</h3>
                        <p>
                            <a href={image.node.publicURL} target="_blank" rel="noopener noreferrer">original ({image.node.childImageSharp.original.width}x{image.node.childImageSharp.original.height})</a>
                        </p>
                </article>
            )
        })
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