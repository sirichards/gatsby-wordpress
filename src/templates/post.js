import React, { Component } from "react"
import { graphql } from "gatsby"
import * as PropTypes from "prop-types"
import Layout from "../components/layout"

const propTypes = {
    data: PropTypes.object.isRequired,
}

class Post extends Component {

    render() {

        const data = this.props.data.wordpressPost
        const { title, content } = data

        return (
            <Layout>
                <h1>{title}</h1>
                <div
                    dangerouslySetInnerHTML={{
                        __html: content,
                    }}
                />
            </Layout>
        )
    }
}

export default Post

Post.propTypes = propTypes

export const pageQuery = graphql`
query($id: String!) {
    wordpressPost(id: { eq: $id }) {
        title
        content
    }
}
`