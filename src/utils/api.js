import axios from 'axios'


export const getArticles = () => {
    return axios.get('https://agent-news.herokuapp.com/api/articles').then(({data}) => {
        console.log(data.articles[0])
        return data.articles
    }).catch(err => {
        console.log(err)
    })
}

export const getArticleById = (id) => {
    return axios.get(`https://agent-news.herokuapp.com/api/articles/${id}`).then(({data}) => {
        return data.article
    }).catch(err => {
        console.log(err)
    })
}

export const getCommentsByArticleId = (id) => {
    return axios.get(`https://agent-news.herokuapp.com/api/articles/${id}/comments`).then(({data}) => {
        const {comments, total_count} = data
        return [comments, total_count]
    })
}

export const changeArticleVotes = (num, id) => {
    return axios.patch(`https://agent-news.herokuapp.com/api/articles/${id}`, {inc_votes: num}).then(({data})=>
    {return data.article
    }).catch(err => console.log(err))
}