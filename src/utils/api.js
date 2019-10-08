import axios from "axios";

const request = axios.create({
  baseURL: "https://agent-news.herokuapp.com/api"
});

export const getArticles = topic => {
  console.log(topic, "topic");
  return request.get("/articles", { params: { topic } }).then(({ data }) => {
    return data.articles;
  });
};

export const getArticleById = id => {
  return request.get(`/articles/${id}`).then(({ data }) => {
    return data.article;
  });
};

export const getCommentsByArticleId = id => {
  return request.get(`/articles/${id}/comments`).then(({ data }) => {
    const { comments, total_count } = data;
    return [comments, total_count];
  });
};

export const changeArticleVotes = (num, id) => {
  return request
    .patch(`/articles/${id}`, { inc_votes: num })
    .then(({ data }) => {
      return data.article;
    });
};

export const getTopics = () => {
  return request.get("/topics").then(({ data }) => {
    return data.topics;
  });
};

export const getUserByUsername = username => {
  return request.get(`users/${username}`).then(({ data }) => {
    console.log(data, "data");
    return data.user[0];
  });
};
