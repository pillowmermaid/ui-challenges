let selected = ['unselected', 'selected'];
const toolbarItem = (state, action) => {
	switch (action.type) {
		case 'TOOLBAR_INIT':{
			return (
				{ 
					id: action.id,
					label: action.label,
					alerts: action.alerts,
					tag: action.tag,
					selected: selected[0]

				}
			)
		}
		case 'TOGGLE_OPTION':{
			if(action.id !== state.id || action.id === state.id && state.selected === 'selected'){
				return Object.assign({}, state, {
					selected: selected[0]
				})
			}
			return Object.assign({}, state, {
				selected: selected[1]
			})
		}
		default:{
			return state
		}
	}
}

const toolbarState = (state = [], action) => {
	switch (action.type) {
		case 'TOOLBAR_INIT':{
			return [
				...state,
				toolbarItem(undefined, action)
			]
		}
		case 'TOGGLE_OPTION':{
			return state.map(i => toolbarItem(i, action))
		}
		default:{
			return state
		}
	}
}

export default toolbarState