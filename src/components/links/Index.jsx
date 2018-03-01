import _ from 'lodash';

import React from 'react';
import { connect } from 'react-redux';

import { Flex, Box } from 'rebass';
import styled from 'styled-components';

import Link from './Link';

const LinkBlock = styled.ul`
  background: #fff;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  color: #333;
  list-style: none;
  padding: 0;
  margin: 8px;

  @media screen and (max-width: 32em) {
    border-radius: 0;
    margin: 8px 0;
  }
`;
const LinkBlockTitle = styled.li`
  border-bottom: 2px solid #333;
  font-size: 24px;
  margin: 0;
  padding: 8px 0;
  text-align: center;
`;

function getWidth(groups) {
  const n = groups.length;
  return n >= 3 ? 1 / 3 : 1 / n;
}

const Links = ({ groups }) => (
  <Flex wrap mt={4} mx="auto" width={[1, 7 / 10]}>
    {groups.map(links => {
      const boxWidth = [1, 1 / 2, null, getWidth(groups)];
      return (
        <Box key={links[0].group} width={boxWidth}>
          <LinkBlock>
            <LinkBlockTitle style={{ borderColor: links[0].color }}>
              {links[0].group}
            </LinkBlockTitle>
            {links.map(link => <Link key={link.id} {...link} />)}
          </LinkBlock>
        </Box>
      );
    })}
  </Flex>
);

const mapStateToProps = state => {
  let groups = _.groupBy(state.groups.links, 'group');
  groups = _.toArray(groups);

  return {
    groups,
  };
};

const LinksList = connect(mapStateToProps)(Links);

export default LinksList;
