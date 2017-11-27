export const updateSetting = (area, section, content) => {
  return {
    type: 'UPDATE_SETTING',
    area,
    section,
    content,
  };
};