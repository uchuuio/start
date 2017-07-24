import { combineReducers } from 'redux';

function links(state = [], action) {
    switch (action.type) {
        case 'ADD_LINK':
            let id = action.id;
            while (id < state.length) {
                id++;
            }
            return [
                ...state,
                {
                    id: id,
                    group: action.group,
                    color: action.color,
                    text: action.text,
                    link: action.link
                }
            ]
        case 'REMOVE_LINK':
            let tmp = state;
            tmp.splice(action.id, 1);
            return tmp;
        case 'RESET_LINKS':
            return [];
        default:
            return state
    }
}

const linksReducers = combineReducers({
    links
})

export default linksReducers