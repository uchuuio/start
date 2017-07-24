let nextLinkId = 0;

export const addLink = (group, color, text, link) => {
  return {
    type: 'ADD_LINK',
    id: nextLinkId++,
    group,
    color,
    text,
    link
  };
};

export const removeLink = id => {
  return {
    type: 'REMOVE_LINK',
    id: id,
  };
};