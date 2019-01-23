import { createSelector } from 'reselect'

const getVisiblePosts = createSelector(
    state => state.posts,
    posts => {
        return posts.filter(post => !post.deleted)
    }
)

const getPosts = (state, category) => createSelector(
    [getVisiblePosts],
    category => category,
    (posts, category) => {
        return posts.filter(post => post.category === category).map(post => post.id)
    }
)

export default getPosts;