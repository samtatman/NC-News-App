import React from 'react'

class ArticleCard extends React.Component {

    state = {}

    render() {
const {article, changeVotes} = this.props
    return (
        <li key = {article.title}> <h3>{article.title}</h3><br/>
        <p>votes: {article.votes}, author: {article.author}</p>
        <button onClick={()=>changeVotes(1, article.article_id)} >upvote</button><button>downvote</button>
         </li>
    )
}

}

export default ArticleCard