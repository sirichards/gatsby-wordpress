import React, { Component } from "react"
import { graphql } from "gatsby"
import * as PropTypes from "prop-types"
import PageSelector from "./pageSelector"

const propTypes = {
    data: PropTypes.object.isRequired,
}

class FrontPage extends Component {
    render() {
        const data = this.props.data.wordpressWpFrontpage

        return (
            <PageSelector data={data} />
        )

    }
}

FrontPage.propTypes = propTypes

export default FrontPage

export const pageQuery = graphql`
query($id: String!) {
    wordpressWpFrontpage(id: { eq: $id }) {
        id
        template
        title
        content
    }
}
`