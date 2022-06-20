import {  Drawer } from 'antd';
import React from 'react';
import { Title } from '../title/title';
function OverallDrawer (props){
 

  return (
    <>    
      <Drawer
        title={<Title>Overall Infn of Resource</Title>}
        size={props.size}
        // placement={props.placement}
        width={500}
        // closable={true}
        onClose={props.close}
        visible={props.visible}
      >
        {props.children}
      </Drawer>
    </>
  );
};

export default OverallDrawer;