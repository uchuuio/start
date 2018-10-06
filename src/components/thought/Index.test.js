import React from 'react';
import { mount, shallow } from 'enzyme';

import { ThoughtComponent } from './Index';

describe('<Thought />', () => {
  const mockFetchLatestThought = jest.fn();
  let props = { modules: { thought: true }, thought: {}, fetchLatestThought: mockFetchLatestThought };

  let thought = shallow(<ThoughtComponent {...props} />);

  it('should render', () => {
    expect(thought.is('.thought')).toBe(true);
  });

  describe('if nextFetch has not passed', () => {
    beforeEach(() => {
      props.thought.nextFetch = new Date();

      thought = mount(<ThoughtComponent {...props} />);
    });

    it('should not call fetchLatestThought', () => {
      expect(mockFetchLatestThought).not.toHaveBeenCalled();
    });
  });

  describe('if nextFetch has passed', () => {
    beforeEach(() => {
      props.thought.isFetching = false;
      props.thought.lastFetched = '';

      thought = mount(<ThoughtComponent {...props} />);
    });

    it('should call fetchLatestThought', () => {
      expect(mockFetchLatestThought).toHaveBeenCalled();
    });
  });
});
