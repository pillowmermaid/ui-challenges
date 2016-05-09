const usercardState = (state = [], action) => {
    switch (action.type) {
        case 'GET_USER':{
            return Object.assign({}, state, {
                headerImg: action.headerImg,
                userImg: action.userImg,
                snippet: action.snippet,
                views: action.views,
                comments: action.comments,
                likes: action.likes
            })
        }
        default:{
            return state
        }
    }
}

export default usercardState