import React from 'react';
import classes from './Users.module.css';
import userAvatar from '../../imagen/user_img.png';
import {NavLink} from 'react-router-dom';
const Users = (props) => {

    let pageCount = Math.ceil(props.totalUsersCount / props.pageSize);
    const pages = [];
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i);
    }

    return <div>
        <div>
            {pages.map(
                p => {
                    return <span key={p} className={props.currentPage === p ? classes.selectedPage : ''}
                        onClick={() => props.onPageChanged(p)}>{p}</span>
                })}

        </div>
        {
            props.users.map(u => <div key={u.id}>
                <div>
                    <div>
                        <NavLink to={'/profile/' + u.id}>
                        <img src={u.photos.small ? u.photos.small : userAvatar} className={classes.userPhoto} />
                        </NavLink>
                    </div>
                    <div>
                        {
                            u.followed
                                ? <button onClick={() => props.unfollow(u.id)}>unFollow</button>
                                : <button onClick={() => props.follow(u.id)}>Follow</button>
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
}

export default Users;