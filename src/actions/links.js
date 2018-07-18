import { LINKS } from './../constants/actionTypes';

let nextLinkId = 0;

export const addLink = (group, color, text, link) => ({
  type: LINKS.ADD_LINK,
  id: (nextLinkId += 1),
  group,
  color,
  text,
  link,
});

export const removeLink = id => ({
  type: LINKS.REMOVE_LINK,
  id,
});
