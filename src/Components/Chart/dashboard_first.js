
import ReactApexChart from 'react-apexcharts';

function Dashboard_first(props) {

    const seriesMockData = [
        {
            name: "project-1",
            data: [{
                x: "App Service RND",
                y: 50
            }, {
                x: "cloudcadi-node-version-checking",
                y: 100
            }
                // , {
                //     x: "2020-04-02",
                //     y: 100
                // }
            ]
        }
    ]


    return (
        <div>

            <ReactApexChart
                type='bar'
                width={800}
                height={300}
                series={seriesMockData}
                options={{
                    plotOptions: {
                        bar: {
                            columnWidth: '50%',
                            // borderRadius: 50,
                        }
                    },
                    // colors: ['#0984E3', '#FF7675', '#FDCB6E', '#00CEC9', '#a29bfe', '#5352ed'],
                    xaxis: {
                        // type: 'category',
                        // categories: tempDate,
                        labels: {
                            show: true,
                            // rotate: 0,
                            rotateAlways: false,
                            // hideOverlappingLabels: true,
                            // formatter: function (value, tempDate, index) {
                            //     return moment.utc(value).format('DD MMM YY');
                            // }
                        }
                    },
                    yaxis: {
                        labels: {
                            formatter: (val) => {
                                return `$${val}`
                            }
                        }
                    },
                    title: {
                        text: 'Resource Chart ',
                        align: 'center',
                        // margin: 10,
                        offsetY: 5,
                        style: {
                            fontSize: '17px',
                            fontFamily: 'Rubik, sans-serif',
                            color: '#3399FF'
                        }
                    },

                    legend: {
                        show: true,
                        position: 'top'
                    },
                    chart: {
                        stacked: true,
                        events: {
                            click: function (event, chartContext, config) {

                                if (config.seriesIndex !== -1) {
                                    var seriesName = config.config.series[config.seriesIndex].name;
                                    var label =
                                        config.config.series[config.seriesIndex].data[
                                            config.dataPointIndex
                                        ].x;
                                    console.log("label", config)
                                    props.triggered(seriesName, label);
                                }
                            }
                        },
                    },
                    tooltip: {
                        followCursor: true,
                        enabled: true,
                        x: {
                            show: true,
                            // formatter: function (value) {
                            //     return moment.utc(value).format('DD MMM YY');
                            // }
                        }
                    },
                    dataLabels: {
                        enabled: false
                    },
                    grid: {
                        row: {
                            colors: ['#fff', '#f2f2f2']
                        }
                    },
                    noData: {
                        text: 'Loading... '
                    }
                }}
            />


        </div>
    );
}

export default Dashboard_first;