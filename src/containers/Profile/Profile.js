import React, {Component} from 'react';

import ProfilePage from './ProfilePage/ProfilePage';
import Aux from '../../hoc/Aux/Aux';


class Profile extends Component {
    render() {
        return (
            <Aux>
                <ProfilePage />
            </Aux>
        )
    }
} 

export default Profile;
