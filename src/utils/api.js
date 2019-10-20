import axios from "axios";

const request = axios.create({
  baseURL: "https://agent-news.herokuapp.com/api"
});

export const getArticles = (topic, author, sort_by, order_by, p, limit) => {
  return request
    .get("/articles", {
      params: { topic, author, sort_by, order_by, p, limit }
    })
    .then(({ data }) => {
      return data;
    });
};

export const getArticleById = id => {
  return request.get(`/articles/${id}`).then(({ data }) => {
    return data.article;
  });
};

export const getCommentsByArticleId = (id, sort_by, order_by, p, limit) => {
  return request
    .get(`/articles/${id}/comments`, {
      params: { sort_by, order_by, p, limit }
    })
    .then(({ data }) => {
      const { comments, total_count } = data;
      return [comments, total_count];
    });
};

export const changeVotes = (num, id, content) => {
  return request
    .patch(`/${content}s/${id}`, { inc_votes: num })
    .then(({ data }) => {
      return data[content];
    });
};

export const getTopics = () => {
  return request.get("/topics").then(({ data }) => {
    return data.topics;
  });
};

export const getUserByUsername = username => {
  return request.get(`users/${username}`).then(({ data }) => {
    return data.user[0];
  });
};

export const postCommentByArticleId = (article_id, comment) => {
  return request
    .post(`articles/${article_id}/comments`, comment)
    .then(({ data }) => {
      return data.comment;
    });
};

export const deleteCommentById = id => {
  return request.delete(`comments/${id}`);
};
