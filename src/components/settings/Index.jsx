import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Absolute, Border, ButtonOutline, Close, Heading, Provider, Subhead } from 'rebass';
import styled from 'styled-components';

import AddLink from '../links/AddLink';
import SettingsLink from '../links/SettingsLink';
import UpdateSettings from './configs';

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

const StyledTh = styled.th`
    text-align: left;
    padding-top: 10px;
    padding-bottom: 10px;
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
            <div>
                <Absolute m={2} bottom left>
                    <SettingsButton onClick={this.handleOpenModal}>Settings</SettingsButton>
                </Absolute>
                
                <ReactModal 
                    isOpen={this.state.showModal}
                    contentLabel="Settings"
                    style={{
                        overlay: {
                            backgroundColor: '#2A2F3A'
                        },
                        content: {}
                    }}
                >
                    <Provider>
                        <Absolute m={2} top right>
                            <Close onClick={this.handleCloseModal} />
                        </Absolute>
                        <Heading style={{marginTop: 0, textAlign: 'center'}}>Settings</Heading>
                        <Border pt={3} pb={2} top bottom>
                            <Subhead style={{margin: 0, textAlign: 'center', textDecoration: 'underline'}}>Links</Subhead>
                            <table width="100%" style={{marginLeft: '-3px'}}>
                                <thead>
                                    <tr>
                                        <StyledTh>Group</StyledTh>
                                        <StyledTh>Color</StyledTh>
                                        <StyledTh>Text</StyledTh>
                                        <StyledTh>Link</StyledTh>
                                        <StyledTh>Actions</StyledTh>
                                    </tr>
                                </thead>
                                <tbody>
                                    <AddLink />
                                    {links.map(link => {
                                        return (<SettingsLink key={link.id.toString()} {...link} />)
                                    })}
                                </tbody>
                                <thead>
                                    <tr>
                                        <StyledTh>Group</StyledTh>
                                        <StyledTh>Color</StyledTh>
                                        <StyledTh>Text</StyledTh>
                                        <StyledTh>Link</StyledTh>
                                        <StyledTh>Actions</StyledTh>
                                    </tr>
                                </thead>
                            </table>
                        </Border>
                        <Border pt={3} pb={2} top bottom>
                            <Subhead style={{margin: 0, textAlign: 'center', textDecoration: 'underline'}}>Configs</Subhead>
                            <UpdateSettings />
                            <p>Configs for language of datetime, currencies, api keys & enabling modules</p>
                        </Border>
                        <div style={{textAlign: 'center'}}>
                            <Subhead style={{marginTop: 15, textDecoration: 'underline'}}>Notes/Credits</Subhead>
                            <p>BETA V6</p>
                            <p>All configs and links are stored in your browser's localstorage.</p>
                            <p>Built with React, Redux &amp; alot of effort by <a href="https://tomo.uchuu.io" target="_blank" rel="noopener noreferrer">tomo@uchuu</a>.</p>
                            <p><a href="https://github.com/tomouchuu/start" target="_blank" rel="noopener noreferrer">Github Repo</a></p>
                        </div>
                    </Provider>
                </ReactModal>
            </div>
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
