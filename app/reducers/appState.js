const appState = (state = [], action) => {
    switch (action.type) {
        case 'TOGGLE_STATE':{
            return Object.assign({}, state, {
                    appState: action.appState
            })
        }
        default:{
            return state
        }
    }
}

export default appState