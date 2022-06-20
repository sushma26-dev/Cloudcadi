import { useEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts';

function Overall_chart(props) {

    const [valu, getvalu] = useState([]);
    const [metricNameVal, getMetricName] = useState([]);

    useEffect(() => {
        fetch('https://sushma26-dev.github.io/reactproject/Total_input.json')
            .then((res) => res.json())
            .then((data) => {
                var val = data.map((countData, i) =>
                    countData.count
                )
                getvalu(val)
                var time = data.map((timeData, i) =>
                    timeData.MetricName
                )
                getMetricName(time)
            })

    }, [])

    return (
        <div>

            <ReactApexChart
                type="bar"
                width={450}
                height={350}
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
                        categories: metricNameVal,
                        labels: {
                            show: true,
                            // rotate: -45,
                            // rotateAlways: true,
                            hideOverlappingLabels: true,
                            // formatter: function (value, tempDate, index) {
                            //     return moment.utc(value).format('DD MMM YY');
                            // }
                        },

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
                    title: {
                        text: 'Overall Chart',
                        align: 'center',
                        style: {
                            fontSize: '14px',
                            fontFamily: 'Rubik, sans-serif',
                            color: '#3399FF'
                        }
                    },
                    plotOptions: {
                        // bar: {
                        //     borderRadius: 38,
                        //     borderColor: "yellow",
                        //     dataLabels: {
                        //         //within the chart alignment
                        //         orientation: "vertical"
                        //     }
                        // }
                        bar: {
                            borderRadius: 38,
                            columnWidth: '70%',
                            endingShape: 'rounded'
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
                    dataLabels: {
                        enabled: false
                    },
                    
                    chart: {
                        height: 350,
                        stacked: true,
                        events: {
                            click: function (event, chartContext, config) {
                                // console.log("dddd",config)
                                // alert(config.dataPointIndex)
                                if (config.seriesIndex !== -1) {
                                    // var seriesName = config.config.xaxis.tickPlacement;
                                    var seriesName = metricNameVal;
                                    var label = config.dataPointIndex;
                                    // var label =
                                    //     config.config.series[config.seriesIndex].data[
                                    //         config.dataPointIndex
                                    //     ].x;
                                    console.log("label", JSON.stringify(config.config))
                                    props.triggered(seriesName, label);
                                }
                            }
                        },
                    },
                }}
            />
        </div>
    );
}

export default Overall_chart;