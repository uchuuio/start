import React from 'react';
import { mount, shallow } from 'enzyme';
import sinon from 'sinon';

import DateTime from './Index';

import { format } from 'date-fns';
const es = require('date-fns/locale/es');
const ja = require('date-fns/locale/ja');
const ru = require('date-fns/locale/ru');

describe('<DateTime />', () => {
  let props = { locale: 'EN', modules: { datetime: true } };
  let datetime = shallow(<DateTime {...props} />);

  describe('when locale is set to EN', () => {
    beforeEach(() => {
      props = { locale: 'EN', modules: { datetime: true } };
    });

    it('should render', () => {
      datetime = shallow(<DateTime {...props} />);
      expect(datetime.is('.datetime')).toBe(true);
    });

    it('calls componentDidMount', () => {
      sinon.spy(DateTime.prototype, 'componentDidMount');
      datetime = shallow(<DateTime {...props} />);
      expect(DateTime.prototype.componentDidMount.calledOnce).toBe(true);
    });

    describe('when unmounted', () => {
      it('calls componentWillUnmount', () => {
        sinon.spy(DateTime.prototype, 'componentWillUnmount');
        datetime = shallow(<DateTime {...props} />);
        datetime.unmount();
        expect(DateTime.prototype.componentWillUnmount.calledOnce).toBe(true);
      });
    });
  });

  describe('when locale is set to es', () => {
    beforeEach(() => {
      props.locale = 'es';
    });

    it('should have locale prop set to es', () => {
      datetime = mount(<DateTime {...props} />);
      expect(datetime.prop('locale')).toBe('es');
    });
  });

  describe('when changing locale', () => {
    beforeEach(() => {
      props.locale = 'ja';
      datetime = mount(<DateTime {...props} />);
    });

    it('should change props', () => {
      expect(datetime.prop('locale')).toBe('ja');
      datetime.setProps({ locale: 'ru' });
      expect(datetime.prop('locale')).toBe('ru');
    });

    it('should change state', () => {
      const date = new Date();
      const monthJA = format(date, 'MMMM', { locale: ja });
      const monthEN = format(date, 'MMMM');
      expect(datetime.state('month')).toBe(monthJA);
      datetime.setProps({ locale: 'en' });
      setTimeout(() => {
        expect(datetime.state('month')).toBe(monthEN);
      }, 1000);
    });
  });
});
