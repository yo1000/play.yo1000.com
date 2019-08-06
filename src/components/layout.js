import React from 'react'
import '../assets/scss/main.scss'

import Footer from './Footer';

class Template extends React.Component {
    render() {
        const { children } = this.props

        return (
            <div>
                {children}
                <Footer/>
            </div>
        )
    }
}

export default Template
