import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../redux/user/user.selector';
import './profile.styles.scss';

const ProfilePage = ({ user }) => {
    
    const { displayName , email } = user;
    
    return (
        <div className=''>
            <h2 className=''>My profile</h2>
            <div className=''>
                <h1>{displayName}</h1>
                <h1>{email}</h1>
            </div>
        </div>
    );
}

const mapStateToProps = createStructuredSelector({
    user: selectCurrentUser
})

export default connect(mapStateToProps)(ProfilePage);