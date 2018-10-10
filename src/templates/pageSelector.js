import React, { Component } from "react"
import Layout from "../components/layout"
import DefaultPage from "../components/Pages/defaultPage"
import HomePage from "../components/Pages/homePage"

class PageSelector extends Component {

    render() {
        const data = this.props.data
        const { template } = data

        if (template === 'template-home.php') {
            return (
                <Layout>
                    <HomePage data={data} />
                </Layout>
            )
        } else {
            // Default template
            return (
                <Layout>
                    <DefaultPage data={data} />
                </Layout>
            )
        }

    }
}

export default PageSelector