import React from 'react';
import { shallow } from 'enzyme';

import { ThoughtComponent } from './Index';

describe('<Thought />', () => {
  const props = { modules: {}, thought: {} };

  it('should render', () => {
    expect(shallow(<ThoughtComponent {...props} />).is('.thought')).toBe(true);
  });
});
