import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Absolute, ButtonOutline, Close, Provider, Relative } from 'rebass';
import styled from 'styled-components';

import AddLink from '../links/AddLink';
import SettingsLink from '../links/SettingsLink';

import ReactModal from 'react-modal';
ReactModal.setAppElement('#root');

const SettingsButton = styled(ButtonOutline)`
    color: white;
    cursor: pointer;
    transition: all .2s;
    &:hover {
        box-shadow: inset 0 0 0 2px;
        transition: all .2s;
    }
`;
const CloseButton = styled(Close)`
    cursor: pointer;
`;

class Settings extends Component {
    constructor () {
        super();
        this.state = {
            showModal: false
        };
        
        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
    }
    
    handleOpenModal () {
        this.setState({ showModal: true });
    }
    
    handleCloseModal () {
        this.setState({ showModal: false });
    }

    render() {
        const { links } = this.props;

        return (
            <Relative>
                <Absolute m={2} top right>
                    <SettingsButton onClick={this.handleOpenModal}>Settings</SettingsButton>
                </Absolute>
                
                <ReactModal 
                    isOpen={this.state.showModal}
                    contentLabel="Inline Styles Modal Example"
                    style={{
                        overlay: {
                            backgroundColor: '#2A2F3A'
                        },
                        content: {
                            // color: 'lightsteelblue'
                        }
                        }}
                >
                    <Provider>
                        <Absolute m={2} top right>
                            <CloseButton onClick={this.handleCloseModal} />
                        </Absolute>
                        <h2>Settings</h2>
                        <hr />
                        <AddLink />
                        <hr />
                        <h3>Links</h3>
                        <table>
                            <thead>
                                <tr>
                                    <th>Group</th>
                                    <th>Color</th>
                                    <th>Name</th>
                                    <th>Link</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {links.map(link => {
                                    return (<SettingsLink key={link.id.toString()} {...link} />)
                                })}
                            </tbody>
                            <thead>
                                <tr>
                                    <th>Group</th>
                                    <th>Color</th>
                                    <th>Name</th>
                                    <th>Link</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                        </table>
                    </Provider>
                </ReactModal>
            </Relative>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        links: state.groups.links
    }
};

export default connect(
    mapStateToProps
)(Settings);
