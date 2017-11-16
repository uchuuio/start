import _ from 'lodash';

import React from 'react';
import { connect } from 'react-redux';
import Link from './Link';

import { Flex, Box } from 'rebass';
import styled from 'styled-components';
const StyledBox = styled(Box)`
    &:first-child > ul {
        border-top-left-radius: 0;
        margin-left: 0;
        @media screen and (max-width: 32em) {
            margin-right: 0;
        }
    }

    &:nth-child(2n+2) > ul {
        @media screen and (max-width: 64em) {
            margin-right: 0;
        }
    }

    &:last-child > ul {
        border-top-right-radius: 0;
        margin-right: 0;

        @media screen and (max-width: 64em) {
            margin-left: 0;
            margin-right: 8px;
        }
    }
`;
const LinkBlock = styled.ul`
    background: #fff;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    color: #333;
    list-style: none;
    padding: 0;
    margin: 0 8px;

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
    const numberOfGroups = groups.length;
    return (numberOfGroups >= 4) ? 1/4 : 1/numberOfGroups;
}

const Links = ({ groups, links }) => (
    <Flex wrap mt={4}>
        {groups.map((links) => {
            const boxWidth = [1, 1/2, null, getWidth(groups)];
            return (
                <StyledBox key={links[0].group} width={boxWidth}>
                    <LinkBlock>
                        <LinkBlockTitle style={{borderColor: links[0].color}}>{links[0].group}</LinkBlockTitle>
                        {links.map(link => (
                            <Link key={link.id} {...link} />
                        ))}
                    </LinkBlock>
                </StyledBox>
            )
        })}
    </Flex>
)

const mapStateToProps = state => {
    let groups = _.groupBy(state.groups.links, 'group');
    groups = _.toArray(groups);
    
    return {
        groups
    }
};

const LinksList = connect(
    mapStateToProps
)(Links);

export default LinksList;
