// State argument is not application state, only the state
// this reducer is responsible for 
export default function(state = null, action) {
	//reducer only called when an action happens
	switch(action.type) {
		case 'BOOK_SELECTED':
			return action.payload;
	}

	return state;
}