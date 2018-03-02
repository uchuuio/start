import React from 'react';
import { shallow, mount } from 'enzyme';
import SettingsLink from './../SettingsLink';

describe('<SettingsLink />', () => {
  it('should render', () => {
    expect(shallow(<SettingsLink />).is('.settings-link')).toBe(true);
  });

  it('should use the group prop 1st column', () => {
    const wrapper = shallow(<SettingsLink group="Utils" />);
    const groupTd = wrapper.find('tr').childAt(0);
    expect(groupTd.childAt(0).text()).toEqual('Utils');
  });

  it('should use the color prop 2nd column', () => {
    const wrapper = shallow(<SettingsLink color="#4285f4" />);
    const colorTd = wrapper.find('tr').childAt(1);
    expect(colorTd.childAt(0).text()).toEqual('#4285f4');
  });

  it('should use the text prop 3rd column', () => {
    const wrapper = shallow(<SettingsLink text="Google" />);
    const titleTd = wrapper.find('tr').childAt(2);
    expect(titleTd.childAt(0).text()).toEqual('Google');
  });

  it('should use the text prop 4th column', () => {
    const wrapper = shallow(<SettingsLink link="http://www.google.com" />);
    const linkTd = wrapper.find('tr').childAt(3);
    expect(linkTd.childAt(0).text()).toEqual('http://www.google.com');
  });
});
