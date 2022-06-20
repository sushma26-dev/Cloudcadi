import {  Drawer } from 'antd';
import React from 'react';
function OverallDrawer (props){
 

  return (
    <>    
      <Drawer
        title="Overall Information of Resource"
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