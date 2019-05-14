import React, {Component} from 'react';
import { connect } from 'react-redux';

import ProfilePage from './ProfilePage/ProfilePage';
import Aux from '../../hoc/Aux/Aux';


class Profile extends Component {

    render() {
        return (
            <Aux>
                <ProfilePage
                    email={this.props.email} 
                />
            </Aux>
        )
    }
} 


const mapStateToProps = state => {
    return {
        email: state.auth.email
    };
};

export default connect( mapStateToProps, null ) (Profile);
