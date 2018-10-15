import React, { Component } from "react"
import { graphql } from "gatsby"
import * as PropTypes from "prop-types"
import TemplateSelector from "./templateSelector"

const propTypes = {
    data: PropTypes.object.isRequired,
}

class Page extends Component {
    render() {
        const data = this.props.data.wordpressPage

        return (
            <TemplateSelector data={data} />
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
        acf {
            flexible_content_page {
                __typename

                ... on WordPressAcf_full_width_text {
                    id
                    text
                }        	

                ... on WordPressAcf_2_columns_text {
                    id
                    text
                    text_2
                }
            }
        }
    }
}
`