import 'antd/dist/antd.css';
import { useState } from 'react';

import CpuTime from './Components/Chart/CpuTime';
import Dashboard from './Components/Chart/dashboard';
import Drawer1 from './Components/Slider/drawer';
import OverallDrawer from './Components/Slider/OverallDrawer';
import Overall_chart from './Components/Chart/Overall_chart';

function Home() {

    const [visible, setVisible] = useState(false);
    const [childrenDrawer, setChildrenDrawer] = useState(false);
    const [metricName, setMetricName] = useState();
    const [size, setSize] = useState();

    const showDrawer = (serviceName, date) => {
        console.log(serviceName);
        setSize('large');
        setVisible(true);
    };
    const onClose = () => {
        setVisible(false);
    }
    const showChildrenDrawer = (a,b) => {
        setChildrenDrawer(true);        
        setMetricName(a[b]);
    };

    const onChildrenDrawerClose = () => {
        setChildrenDrawer(false);
    };

    return (
        <div>

            <Dashboard
                triggered={(serviceName, date) =>
                    showDrawer(serviceName, date)
                }
            />
            <OverallDrawer
                visible={visible}
                title={
                    'New Drawer page'
                }
                size={size}
                placement={'right'}
                width={'50%'}
                close={() => onClose()}
            >
                <Overall_chart
                    triggered={(serviceName2, index) =>
                        showChildrenDrawer(serviceName2, index)
                    }
                />              
                <Drawer1
                    title="Two-level Drawer"
                    width={320}
                    closable={true}
                    onClose={() => onChildrenDrawerClose()}
                    visible={childrenDrawer}
                >
                    <CpuTime title={metricName} urlValue={"https://jacksonsuthip.github.io/nxtJS/url/"+metricName+".json"}/>
                </Drawer1>

            </OverallDrawer>
        </div>
    );
}

export default Home;