import React from 'react';
import { shallow, render } from 'enzyme';
import Link from './../Link';

describe('Link Element', () => {
  it('should render', () => {
    expect(shallow(<Link />).is('.link-item')).toBe(true);
  });

  it('should use the text prop for the text content', () => {
    expect(render(<Link text="Google" />).text()).toEqual('Google');
  });

  it('should use the text prop for the title attribute', () => {
    expect(
      render(<Link text="Google" />)
        .children('a')
        .attr('title')
    ).toEqual('Google');
  });

  it('should use the link prop for the href', () => {
    expect(
      render(<Link link="http://www.google.com" />)
        .children('a')
        .attr('href')
    ).toEqual('http://www.google.com');
  });

  it('should use the color prop for the link', () => {
    expect(
      render(<Link color="#4285f4" />)
        .children('a')
        .attr('color')
    ).toEqual('#4285f4');
  });
});
