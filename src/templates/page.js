import React, { Component } from "react"
import { graphql } from "gatsby"
import * as PropTypes from "prop-types"
import PageSelector from "./pageSelector"

const propTypes = {
    data: PropTypes.object.isRequired,
}

class Page extends Component {
    render() {
        const data = this.props.data.wordpressPage

        return (
            <PageSelector data={data} />
        )

    }
}

Page.propTypes = propTypes

export default Page

export const pageQuery = graphql`
query($id: String!) {
    wordpressPage(id: { eq: $id }) {
        id
        template
        title
        content
    }
}
`