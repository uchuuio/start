import { LINKS } from './../constants/actionTypes';

function groups(state = { links: [] }, action) {
  switch (action.type) {
    case LINKS.ADD_LINK: {
      let { id } = action;
      while (id < state.links.length) {
        id += 1;
      }
      return Object.assign({}, state, {
        links: [
          ...state.links,
          {
            id,
            group: action.group,
            color: action.color,
            text: action.text,
            link: action.link,
          },
        ],
      });
    }
    case LINKS.REMOVE_LINK: {
      let i = action.id;
      state.links.forEach((link, index) => {
        if (link.id === action.id) {
          i = index;
        }
      });
      return Object.assign({}, state, {
        links: [...state.links.slice(0, i), ...state.links.slice(i + 1)],
      });
    }
    case LINKS.RESET_LINKS:
      return [];
    default:
      return state;
  }
}

export default groups;
