import { createSlice } from "@reduxjs/toolkit";

const init = JSON.parse(localStorage.getItem("post")) || [];

const postsSlice = createSlice({
  name: "posts",
  initialState: {
    posts: init,
  },
  reducers: {
    addPost(state, action) {
      state.posts.push(action.payload);
      localStorage.setItem("post", JSON.stringify(state.posts));
    },
    removePost(state, action) {
      state.posts = state.posts.filter((post) => post.id !== action.payload);
      localStorage.setItem("post", JSON.stringify(state.posts));
    },
    clearAllPosts(state) {
      state.posts = [];
      localStorage.setItem("post", JSON.stringify(state.posts));
    },
  },
});

export const { addPost, removePost, clearAllPosts } = postsSlice.actions;
export default postsSlice.reducer;
