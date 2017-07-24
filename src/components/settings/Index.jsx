import React, { Component } from 'react';
import { connect } from 'react-redux';

import AddLink from '../links/AddLink';
import SettingsLink from '../links/SettingsLink';

import ReactModal from 'react-modal';
ReactModal.setAppElement('#root');

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
                <button onClick={this.handleOpenModal}>Settings</button>
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
                    <button onClick={this.handleCloseModal}>Close Modal</button>
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
                            {links.map(link => (
                                <SettingsLink key={link.id} {...link} />
                            ))}
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
                </ReactModal>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        links: state.links
    }
};

export default connect(mapStateToProps)(Settings);
