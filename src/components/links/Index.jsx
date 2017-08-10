import _ from 'lodash';

import React from 'react';
import { connect } from 'react-redux';
import Link from './Link';

const Links = ({ groups, links }) => (
    <div>
        {groups.map((links) => {
            return (
                <ul key={links[0].group}>
                    <li>{links[0].group}</li>
                    {links.map(link => (
                        <Link key={link.id} {...link} />
                    ))}
                </ul>
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
