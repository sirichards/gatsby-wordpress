import React, { Component } from "react"
import { graphql } from "gatsby"
import * as PropTypes from "prop-types"
import TemplateSelector from "./templateSelector"

const propTypes = {
    data: PropTypes.object.isRequired,
}

class FrontPage extends Component {
    render() {
        const data = this.props.data.wordpressWpFrontpage

        return (
            <TemplateSelector data={data} />
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