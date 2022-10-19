import React, { useState } from 'react';
import UserCard from './UserCard';

function UsersListing(props) {
    return (
        <div className="container">
            {props.users.map(user => (<UserCard user-url={user.url} />))}
        </div>
    );
}

export default UsersListing;