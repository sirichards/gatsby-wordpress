import React, { Component } from "react"
import Layout from "../components/layout"
import DefaultPage from "../components/PageTemplates/DefaultPage"
import HomePage from "../components/PageTemplates/HomePage"

class TemplateSelector extends Component {

    render() {
        const data = this.props.data
        const { template } = data

        if (template === 'template-home.php') {
            return (
                <Layout data={data}>
                    <HomePage data={data} />
                </Layout>
            )
        } else {
            // Default template
            return (
                <Layout data={data}>
                    <DefaultPage data={data} />
                </Layout>
            )
        }

    }
}

export default TemplateSelector