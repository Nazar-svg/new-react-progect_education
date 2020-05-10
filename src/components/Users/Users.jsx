import React from 'react';
import classes from './Users.module.css';
import * as axios from 'axios';
import userAvatar from '../../imagen/user_img.png';

class Users extends React.Component {

    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            this.props.setUsers(response.data.items)
        });
    }
    render() {

        let pageCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        const pages = [];
        for (let i=1; i <= pageCount; i++) {
            pages.push(i);
        }




        return (
            <div>
                <div>
                    {pages.map(
                        p => {
                            return<span className={this.props.currentPage === p && classes.selectedPage}>{p}</span>
                        })}
                   
                </div>
                {
                    this.props.users.map(u => <div key={u.id}>
                        <div>
                            <div>
                                <img src={u.photos.small ? u.photos.small : userAvatar} className={classes.userPhoto} />
                            </div>
                            <div>
                                {
                                    u.followed
                                        ? <button onClick={() => this.props.unfollow(u.id)}>unFollow</button>
                                        : <button onClick={() => this.props.follow(u.id)}>Follow</button>
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

}
export default Users;