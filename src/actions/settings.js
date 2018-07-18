import { SETTINGS } from './../constants/actionTypes';

export const updateSetting = (area, section, content) => ({
  type: SETTINGS.UPDATE_SETTING,
  area,
  section,
  content,
});
