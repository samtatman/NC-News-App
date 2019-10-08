import React from 'react'

class CommentCard extends React.Component {
    state ={}

    render () {
        const {comment} = this.props
        const {created_at, body, author} = comment
        return (
            <li key={created_at}>{body} <br/>
            <p>{author}</p>
            </li>
        )
    }
}

export default CommentCard