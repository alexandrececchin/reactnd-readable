const baseUrl = "//localhost:3001";

let sessionToken = localStorage.sessionToken
if (!sessionToken)
  sessionToken = localStorage.sessionToken = Math.random().toString(36).substr(-8)

const headers = {
  Accept: "application/json",
  Authorization: sessionToken
};

//Section reponsible for execute rest call for posts

export const getPostsByCategory = category =>
  fetch(`${baseUrl}/${category}/posts/`, { headers }).then(res => res.json());

export const getAllCategories = () =>
  fetch(`${baseUrl}/categories`, { headers }).then(res => res.json());

export const getAllPosts = () =>
  fetch(`${baseUrl}/posts`, { headers }).then(res => res.json());

export const savePost = (post) =>
  fetch(`${baseUrl}/posts`, {
    method: "POST",
    headers: {
      ...headers,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(post)
  }).then(res => res.json());


export const updatePost = (post) =>
  fetch(`${baseUrl}/posts/${post.id}`, {
    method: "PUT",
    headers: {
      ...headers,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ title: post.title, body: post.body })
  }).then(res => res.json());

export const deletePostById = (id) =>
  fetch(`${baseUrl}/posts/${id}`, {
    method: "DELETE",
    headers: {
      ...headers,
      "Content-Type": "application/json"
    }
  }).then(res => res.json());


export const getPostDetails = postId =>
  fetch(`${baseUrl}/posts/${postId}`, { headers }).then(res => res.json());

export const votePost = (postId, voteOption) =>
  fetch(`${baseUrl}/posts/${postId}`, {
    method: "POST",
    headers: {
      ...headers,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ option: voteOption })
  }).then(res => res.json());

//Section reponsible for execute rest call for comments

export const getCommentsByPost = id =>
  fetch(`${baseUrl}/posts/${id}/comments`, { headers }).then(res => res.json());

export const saveComment = (comment) =>
  fetch(`${baseUrl}/comments`, {
    method: "POST",
    headers: {
      ...headers,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(comment)
  }).then(res => res.json());

export const getCommentDetails = id =>
  fetch(`${baseUrl}/comments/${id}`, { headers }).then(res => res.json());

export const voteComment = (commentId, voteOption) =>
  fetch(`${baseUrl}/comments/${commentId}`, {
    method: "POST",
    headers: {
      ...headers,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ option: voteOption })
  }).then(res => res.json());

export const updateComment = (comment) =>
  fetch(`${baseUrl}/comments/${comment.id}`, {
    method: "PUT",
    headers: {
      ...headers,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ timestamp: comment.timestamp, body: comment.body })
  }).then(res => res.json());

export const deleteCommentById = (id) =>
  fetch(`${baseUrl}/comments/${id}`, {
    method: "DELETE",
    headers: {
      ...headers,
      "Content-Type": "application/json"
    }
  }).then(res => res.json());



// fetch all initial data
export function getInitialData() {
  return Promise.all([
    getAllCategories(),
    getAllPosts(),
  ]).then(([posts, categories]) => ({
    post,
    categories,
  }))
}