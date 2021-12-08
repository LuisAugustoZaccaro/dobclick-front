import React, { Component } from "react";
import Chart from "react-apexcharts";

class Pie extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

            series: [15],

            options: {
                chart: {
                    height: 400,
                    type: 'radialBar',
                },
                colors: ["#F00"],
                plotOptions: {
                    radialBar: {
                        hollow: {
                            size: '50%',
                        },
                        dataLabels: {
                            show: true,
                            name: {
                                offsetY: -10,
                                show: true,
                                color: '#888',
                                fontSize: '15px'
                            },
                            value: {
                                formatter: function (val) {
                                    return parseInt(val)+'%';
                                },
                                color: '#111',
                                fontSize: '36px',
                                show: true,
                            }
                        }
                    },
                },

                labels: ["Camisa Oakley Preta"],

            },


        };
    }
    render() {
        return (
            <div id="chart">
                <Chart options={this.state.options} series={this.state.series} type="radialBar" height={368} />
            </div>
        );
    }
}

export default Pie