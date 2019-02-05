import { SETTINGS } from './../constants/actionTypes';

export function addImages() {
  return {
    type: SETTINGS.ADD_IMAGES,
  };
}

export const updateSetting = (area, section, content) => ({
  type: SETTINGS.UPDATE_SETTING,
  area,
  section,
  content,
});
