import React from 'react';
import {Avatar, Typography} from "antd";

import "./userwidget.scss";

const UserWidget = () => {
  const {Title, Text} = Typography;
  return (
    <div className="user-widget">
      <div className="avatar-container">
        <Avatar size={128} icon="user"/>
      </div>
      <div className="info-container">
        <Title className="name" level={4}>Ayech hamza</Title>
        <Text className="title"> UI/UX developer</Text>
      </div>
    </div>
  );
};

export default UserWidget;
