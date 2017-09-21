import _ from 'lodash';

import React from 'react';
import { connect } from 'react-redux';
import Link from './Link';

import styled from 'styled-components';
const LinkBlock = styled.ul`
    background: rgba(0, 0, 0, 0.4);
    color: white;
    display: inline-block;
    float: left;
    list-style: none;
    padding: 0;
    margin: 0 5px;
`;
const LinkBlockTitle = styled.li`
    font-size: 32px;
    margin: 0;
    padding: 15px;
`;

const Links = ({ groups, links }) => (
    <div>
        {groups.map((links) => {
            return (
                <LinkBlock key={links[0].group}>
                    <LinkBlockTitle>{links[0].group}</LinkBlockTitle>
                    {links.map(link => (
                        <Link key={link.id} {...link} />
                    ))}
                </LinkBlock>
            )
        })}
    </div>
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
