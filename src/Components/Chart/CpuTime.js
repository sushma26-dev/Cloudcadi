import { useEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import moment from 'moment';
function CpuTime(props) {

    const [valu, getvalu] = useState([]);
    const [TimeGenerated, gettime] = useState([]);

    useEffect(() => {
        fetch(props.urlValue)
            .then((res) => res.json())
            .then((data) => {
                var val = data.map((countData, i) =>
                    countData.avg
                )
                getvalu(val)
                var time = data.map((timeData, i) =>
                    timeData.TimeGenerated
                )
                gettime(time)
            })

    }, [])

    return (
        <div>
            <ReactApexChart
                type="bar"
                width={450}
                height={400}
                colors="black"
                series={[
                    {
                        name: "count",
                        data: valu
                    }
                ]}
                options={{
                    colors: ['#0985e3'],
                    xaxis: {
                        tickPlacement: 'on',
                        categories: TimeGenerated,
                        labels: {
                            show: true,                            
                            hideOverlappingLabels: true,
                            formatter: function (value, tempDate, index) {
                                return moment.utc(value).format('DD MMM YY');
                            }
                        },
                        
                    },
                    // yaxis: {
                    //     labels: {
                    //         formatter: (val) => {
                    //             return `${val}`
                    //         }
                    //     }
                    // },
                    title: {
                        text: props.title,
                        align: 'center',
                        style: {
                            fontSize: '14px',
                            fontFamily: 'Rubik, sans-serif',
                            fontWeight: '900',
                            color: '#3399FF'
                        }
                    },
                    
                    plotOptions: {
                        bar: {
                            borderRadius: 7,
                            endingShape: 'rounded',
                            columnWidth: '70%',
                            dataLabels: {
                                orientation: "vertical"
                            }
                        }
                    },
                    dataLabels: {
                        enabled: false
                    },
                    fill: {
                        type: "gradient",
                        gradient: {
                            shade: 'light',
                            type: 'horizontal',
                            shadeIntensity: 0.25,
                            gradientToColors: undefined,
                            inverseColors: true,
                            opacityFrom: 0.85,
                            opacityTo: 0.85,
                            stops: [50, 0, 100]
                        }
                    },
                    stroke: {
                        colors: ['#0080ff'],
                        width: 2
                    },
                    grid: {
                        row: {
                            colors: ['#fff', '#f2f2f2']
                        }
                    },
                }}
            />
        </div>
    );
}

export default CpuTime;