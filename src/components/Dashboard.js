import React from 'react';
import { SocialIcon } from 'react-social-icons';
import ReactPlayer from 'react-player'
import Avatar from 'react-avatar';
import ColorPicker from 'coloreact';


const Dashboard = props => {


  return (
    <div id = "dashboardWrapper">
    <h4>You are {props.loggedInStatus}</h4>
      <div>
      <ColorPicker
         style={{
           position: 'relative',
           height: '100px',
           width: '100px',
         }}
         color="#408fa3"
         onChange={color => console.log('single-example color:', color.hex)}
       />
      <Avatar name={props.loggedInStatus} />
      <div id = "colorPicker">

      </div>

      </div>
            <div id = "legendsWrapper">
              <h1 id = "legendsText">Barca's best moments</h1>
              <br/>

              <ReactPlayer id = "youtube" url='https://youtu.be/5mRnb1wUopw' light />
              <div id = "socials">
              <div id = "social1">
              <SocialIcon id = "social2" url="https://twitter.com/fcbarcelona" />
              <SocialIcon id = "social3" url="https://github.com/PrzemekTeska" />
              <SocialIcon id = "social4" url="https://www.facebook.com/fcbarcelona/" />
              <SocialIcon id = "social5" url="https://www.instagram.com/fcbarcelona/" />
              </div>

              </div>
            </div>
    </div>
  );
}

export default Dashboard;
