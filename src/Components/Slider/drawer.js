import {  Drawer } from 'antd';
import React from 'react';
import '../../Cloud.css';
function Drawer1 (props){
 

  return (
    <>    
      <Drawer
        title="Specific Information"
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