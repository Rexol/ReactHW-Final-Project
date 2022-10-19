import token from '../token';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

function UserCard({ userUrl }) {
    const [user, setUser] = useState(null);

    useEffect(() => {
        axios.get(userUrl, { 'auth': token })
            .then(response => {
                setUser(response.data);
            })
            .catch(err => { alert(err.message) });
    }, [userUrl]);

    return user ?
        (<div className="card mb-3" style={{
            "max-width": "540px"
        }}>
            <div className="row g-0">
                <div className="col-md-3 d-flex align-items-center justify-content-center">
                    <img src={user.avatar_url} className="img-fluid rounded-circle w-80" alt={user.login}></img>
                </div>
                <div className="col-md-9">
                    <div className="card-body">
                        <h5 className='card-title text-start fw-bold'>{user.login}</h5>
                        <h6 className="card-subtitle mb-2 text-muted text-start">{user.name}</h6>
                        <table className="table">
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Repos</th>
                                <th scope="col">Followers</th>
                                <th scope="col">Following</th>
                            </tr>
                            <tr>
                                <td>{user.id}</td>
                                <td>{user.public_repos}</td>
                                <td>{user.followers}</td>
                                <td>{user.following}</td>
                            </tr>
                        </table>
                        <a href={user.html_url} className="card-link" target="_blank" rel="noopener noreferrer">
                            Open on GitHub
                        </a>
                    </div>
                </div>
            </div>
        </div>)
        : (<div className="card mb-3" area-hidden="true" style={{
            "max-width": "540px"
        }}>
            <div className="row g-0">
                <div className="col-md-3 d-flex align-items-center justify-content-center">
                    <img src="..." className="img-fluid rounded-circle w-80" alt="..."></img>
                </div>
                <div className="col-md-9">
                    <div className="card-body">
                        <h5 className="card-title text-start placeholder-glow">
                            <span className="placeholder col-6" ></span>
                        </h5>
                        <h6 className="card-subtitle mb-2 text-start placeholder-glow">
                            <span className="placeholder col-6" ></span>
                        </h6>
                        <table className="table placeholder-glow">
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Repos</th>
                                <th scope="col">Followers</th>
                                <th scope="col">Following</th>
                            </tr>
                            <tr>
                                <td className="placeholder-glow">
                                    <span className="placeholder col-6" ></span>
                                </td>
                                <td className="placeholder-glow">
                                    <span className="placeholder col-6" ></span>
                                </td>
                                <td className="placeholder-glow">
                                    <span className="placeholder col-6" ></span>
                                </td>
                                <td className="placeholder-glow">
                                    <span className="placeholder col-6" ></span>
                                </td>
                            </tr>
                        </table>
                        <button href="#" className="card-link disabled placeholder col-6 button" target="_blank" rel="noopener noreferrer">
                            Open on GitHub
                        </button>
                    </div>
                </div>
            </div>
        </div>);

}

/**
{
"login": "mojombo",
"id": 1,
"node_id": "MDQ6VXNlcjE=",
"avatar_url": "https://avatars.githubusercontent.com/u/1?v=4",
"gravatar_id": "",
"url": "https://api.github.com/users/mojombo",
"html_url": "https://github.com/mojombo",
"followers_url": "https://api.github.com/users/mojombo/followers",
"following_url": "https://api.github.com/users/mojombo/following{/other_user}",
"gists_url": "https://api.github.com/users/mojombo/gists{/gist_id}",
"starred_url": "https://api.github.com/users/mojombo/starred{/owner}{/repo}",
"subscriptions_url": "https://api.github.com/users/mojombo/subscriptions",
"organizations_url": "https://api.github.com/users/mojombo/orgs",
"repos_url": "https://api.github.com/users/mojombo/repos",
"events_url": "https://api.github.com/users/mojombo/events{/privacy}",
"received_events_url": "https://api.github.com/users/mojombo/received_events",
"type": "User",
"site_admin": false,
"name": "Tom Preston-Werner",
"company": "@chatterbugapp, @redwoodjs, @preston-werner-ventures ",
"blog": "http://tom.preston-werner.com",
"location": "San Francisco",
"email": null,
"hireable": null,
"bio": null,
"twitter_username": "mojombo",
"public_repos": 64,
"public_gists": 62,
"followers": 23217,
"following": 11,
"created_at": "2007-10-20T05:24:19Z",
"updated_at": "2022-10-08T15:17:05Z"
}*/

export default UserCard;