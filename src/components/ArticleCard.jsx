import React from 'react'
import {Link} from '@reach/router'

class ArticleCard extends React.Component {

    state = {}

    render() {
const {article, changeVotes} = this.props
const {article_id, comment_count, title, votes, author} = article
    return (
        <li key = {title}> <Link to ={`/articles/${article_id}`}><h3>{title}</h3> </Link>
        <p>votes: {votes}, by: {author}</p>
        <p>comments: {comment_count}</p>
        <button onClick={()=>changeVotes(1, article_id)} >upvote</button><button onClick={()=>changeVotes(-1, article_id)}>downvote</button>
         </li>
    )
}

}

export default ArticleCard