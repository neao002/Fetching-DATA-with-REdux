export const fetchPosts = ()=> dispatch => {
    // fetch all posts data from api
    fetch('http://jsonplaceholder.typicode.com/posts')
    .then(res=>res.json())
    .then(posts=> dispatch({
        type: 'FETCH_POSTS',
        payload: posts
    }))
} 