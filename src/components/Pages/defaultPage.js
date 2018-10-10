import React, { Component } from "react"

class DefaultPage extends Component {

    render() {

        const { data } = this.props
        const { title, content, id } = data

        console.log(id)

        return (
            <div>
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

export default DefaultPage