import React from 'react'

class CommentCard extends React.Component {
    state ={}

    render () {
        const {comment} = this.props
        return (
            <li key={comment.created_at}>{comment.body}</li>
        )
    }
}

export default CommentCard