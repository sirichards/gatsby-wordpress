import React, { Component } from "react"

class HomePage extends Component {

    render() {

        const { data } = this.props
        const { title, content } = data

        return (
            <div>
                <h1>Template: HOME</h1>
                <h1>{title}</h1>
                <div
                    dangerouslySetInnerHTML={{
                        __html: content,
                    }}
                />
            </div>
        )
    }
}

export default HomePage