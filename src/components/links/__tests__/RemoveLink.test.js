import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import { RemoveLinkComponent } from './../RemoveLink';

describe('<RemoveLinkComponent />', () => {
  xit('should render', () => {
    expect(shallow(<RemoveLinkComponent id="0" />).is('.currency')).toBe(true);
  });
});
