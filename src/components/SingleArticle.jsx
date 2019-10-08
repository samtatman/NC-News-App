import React from 'react'
import {getArticleById, getCommentsByArticleId} from '../utils/api'
import CommentCard from './CommentCard'
import CommentAdder from './CommentAdder'

class SingleArticle extends React.Component {
    state = {
        article: {},
        comments: [],
        comment_count: 0
    }

componentDidMount() {
const {article_id} = this.props
const articlePromise = getArticleById(article_id)
const commentsPromise = getCommentsByArticleId(article_id)
return Promise.all([articlePromise, commentsPromise]).then(([article, commentsAndCount]) => {
    this.setState({article, comments: commentsAndCount[0], comment_count : commentsAndCount[1]
    })
})
}


render () {
    const {article} = this.state
    console.log(article)
    const {comments} = this.state
    console.log(comments)
    return (
        <main>
        <h2>{article.title}</h2>
        <p>{article.body}</p>
        <ul>
        {comments.map(comment => {
        return < CommentCard key={comment.comment_id} comment={comment}/>
        })}
        </ul>
        <CommentAdder/>
        </main>
    )
}
}

export default SingleArticle