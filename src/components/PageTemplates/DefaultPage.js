import React, { Component } from "react"
import FlexibleContent from "components/FlexibleContent/FlexibleContent"

class DefaultPage extends Component {

    render() {

        const { data } = this.props
        const { title, content } = data

        return (
            <div>
                <h1>Template: DEFAULT</h1>
                <h2>{title}</h2>
                <div
                    dangerouslySetInnerHTML={{
                        __html: content,
                    }}
                />
                {data.acf.flexible_content_page !== null &&
                    <FlexibleContent data={data} />
                }  
            </div>
        )
    }
}

export default DefaultPage