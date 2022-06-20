import {  Drawer } from 'antd';
import React from 'react';
import { Title } from '../title/title';
function Drawer1 (props){
 

  return (
    <>    
      <Drawer
        title={<Title>Specific Information</Title>}
        placement={props.placement}
        width={500}
        closable={true}
        onClose={props.onClose}
        visible={props.visible}
      >
        {props.children}
      </Drawer>
    </>
  );
};

export default Drawer1;