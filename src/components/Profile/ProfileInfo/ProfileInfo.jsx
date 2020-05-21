import React from 'react';
import classes from './ProfileInfo.module.css';
import Images from './images.jpg';

const ProfileInfo = (props) => {
  if(!props.profile){
    return(<img className={classes.avatar} src={Images} alt="text" />);
  }
  return (<div>
    <div className={classes.poster}>
      <img className={classes.banner} src="https://uploads.elementcycles.net/2018/06/06235940/shutterstock_736432111-640x360.jpg" />
    </div>
    <div className={classes.inner}>
      <img src={props.profile.photos.large}  />
      <div className={classes.fio}>
        <h2>Nazar</h2>
        <p >My bersdey:
          <span>31.05.90p</span>
        </p>
        <p >Leve in:
            <span>m.Kaluh</span>
        </p>
        <p >My education:
          <span> midle spehiality</span>
        </p>
      </div>
    </div>
  </div>);
}

export default ProfileInfo;