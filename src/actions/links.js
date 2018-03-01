let nextLinkId = 0;

export const addLink = (group, color, text, link) => ({
  type: 'ADD_LINK',
  id: (nextLinkId += 1),
  group,
  color,
  text,
  link,
});

export const removeLink = id => ({
  type: 'REMOVE_LINK',
  id,
});
