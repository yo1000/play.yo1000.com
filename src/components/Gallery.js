import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { StaticQuery, graphql } from 'gatsby'
import Carousel, { Modal, ModalGateway } from "react-images";
import Img from 'gatsby-image';

const ImageCard = (props) => (
<StaticQuery query={graphql`
    query {
        images: allFile {
            edges {
                node {
                    relativePath
                    name
                    childImageSharp {
                        sizes(maxWidth: 600) {
                            ...GatsbyImageSharpSizes
                        }
                    }
                    publicURL
                }
            }
        }
    }`}

    render={(data) => {
        const image = data.images.edges.find(n => {
            return n.node.relativePath.includes(props.src);
        });

        if (!image) { return null; }
        const imageSizes = image.node.childImageSharp.sizes;
        const imagePublicUrl = image.node.publicURL;

        return (<article className="6u 12u$(xsmall) work-item">
            <a className="image fit thumb" target="_blank" rel="noopener noreferrer" href={imagePublicUrl}>
                <Img alt={props.alt} sizes={imageSizes}/>
                <h3>{props.caption}</h3>
                <p>{props.description}</p>
            </a>
        </article>);
    }}
/>)


class Gallery extends Component {
    constructor () {
        super();

        this.state = {
            lightboxIsOpen: false,
            selectedIndex: 0
        };
        
        this.toggleLightbox = this.toggleLightbox.bind(this);
    }
    toggleLightbox(selectedIndex) {
        this.setState(state => ({
            lightboxIsOpen: !state.lightboxIsOpen,
            selectedIndex
        }));
    }
    renderGallery (images) {
        if (!images) return;

        const gallery = images.map((obj, i) => {
            return (<ImageCard
                src={obj.src}
                alt={obj.caption}
                caption={obj.caption}
                description={obj.description}
            />);
        });

        return (
            <div className="row">
                {gallery}
            </div>
        );
    }
    render () {
        const { images } = this.props;
        const { selectedIndex, lightboxIsOpen } = this.state;

        return (
            <div>
                {this.renderGallery(images)}
                <ModalGateway>
                    {lightboxIsOpen && (
                        <Modal onClose={this.toggleLightbox}>
                            <Carousel currentIndex={selectedIndex} views={images} />
                        </Modal>
                    )}
                </ModalGateway>
            </div>
        );
    }
}

Gallery.displayName = 'Gallery';
Gallery.propTypes = {
    images: PropTypes.array
};

export default Gallery;