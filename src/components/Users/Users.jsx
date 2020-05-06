import React from 'react';
import classes from './Users.module.css';
import * as axios from 'axios';
import userAvatar from '../../imagen/user_img.png';
const Users = ({ users, unfollow, setUsers, follow }) => {
    const getUsers = () => {
        if (users.length === 0) {
            axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
                setUsers(response.data.items)
            });
        }
    }
    return (
        <div>
            <button onClick={getUsers}>Get Users</button>
            {
                users.map(u => <div key={u.id}>
                    <div>
                        <div>
                            <img src={u.photos.small != null ? u.photos.small : userAvatar} className={classes.userPhoto} />
                        </div>
                        <div>
                            {
                                u.followed
                                    ? <button onClick={() => unfollow(u.id)}>unFollow</button>
                                    : <button onClick={() => follow(u.id)}>Follow</button>
                            }
                        </div>
                    </div>

                    <div>
                        <div>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </div>
                        <div>
                            <div>{"u.location.city"}</div>
                            <div>{"u.location.country"}</div>
                        </div>
                    </div>
                </div>)

            }
        </div>
    )






}
export default Users;