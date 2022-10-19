import React from 'react';
import UserCard from './UserCard';

function UsersListing({ users }) {
    return (
        <div className="container mr-auto ml-auto mt-auto">
            {users.map(user => (
                <div className="row justify-content-center">
                    <UserCard userUrl={user.url} />
                </div>
            ))}
        </div>
    );
}

export default UsersListing;