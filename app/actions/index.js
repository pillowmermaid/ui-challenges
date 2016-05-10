let toolbarItemID = 0;
export const toggleState = (appState) => {
    return {
        type: 'TOGGLE_STATE',
        appState
    }
}

export const toolbarInit = (alerts, label, tag) => {
    return {
        type: 'TOOLBAR_INIT',
        id: toolbarItemID++,
        alerts,
        label,
        tag
    }
}

export const toggleOption = (id) => {
    return {
        type: 'TOGGLE_OPTION',
        id
    }
}

export const resetToolbar = () => {
    return {
        type: 'RESET_TOOLBAR'
    }
}

export const getUser = (username, snippet, views, comments, likes) => {
    return {
        type: 'GET_USER',
        username,
        snippet,
        views,
        comments,
        likes
    }
}

export const likeUser = () => {
    return {
        type: 'LIKE_USER'
    }
}