let nextLinkId = 0;

export const updateSetting = (area, section, content) => {
  return {
    type: 'UPDATE_SETTING',
    area,
    section,
    content,
  };
};