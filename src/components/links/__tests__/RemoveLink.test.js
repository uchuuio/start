import React from 'react';
import { mount } from 'enzyme';

import { RemoveLinkComponent } from './../RemoveLink';

describe('<RemoveLinkComponent />', () => {
  const mockRemoveLinkDispatch = jest.fn();
  let props = { id: 0, removeLinkDispatch: mockRemoveLinkDispatch };
  let removeLink = mount(<RemoveLinkComponent {...props} />);

  it('should render', () => {
    expect(removeLink.text()).toBe('Remove');
  });

  it('should dispatch function on click', () => {
    removeLink.simulate('click');
    expect(mockRemoveLinkDispatch).toHaveBeenCalled();
  });
});
