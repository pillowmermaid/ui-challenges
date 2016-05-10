const usercardState = (state = [], action) => {
    switch (action.type) {
        case 'GET_USER':{
            return Object.assign({}, state, {
                username: action.username,
                snippet: action.snippet,
                views: action.views,
                comments: action.comments,
                likes: action.likes,
                liked: false
            })
        }
        case 'LIKE_USER':{
            if(!state.liked){
                let likes = parseInt(state.likes)+1
                return Object.assign({}, state, {
                    likes: likes,
                    liked: true
                }) 
            }
            else {
                let likes = parseInt(state.likes)-1
                return Object.assign({}, state, {
                    likes: likes,
                    liked: false
                })
            }
        }
        default:{
            return state
        }
    }
}

export default usercardState