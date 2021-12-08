import React, { Component } from "react";
import Chart from "react-apexcharts";

class Line extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

            series: [{
                name: "Camisa Polo WW",
                data: [10, 41, 35, 51, 49, 104, 130]
            }],
            options: {
                chart: {
                    height: 350,
                    type: 'line',
                    zoom: {
                        enabled: false
                    }
                },
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    curve: 'straight'
                },
                title: {
                    text: 'Camisa Polo WW',
                    align: 'left'
                },
                grid: {
                    row: {
                        colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                        opacity: 0.5
                    },
                },
                xaxis: {
                    categories: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'],
                }
            },


        };
    }



    render() {
        return (


            <div id="chart">
                <Chart options={this.state.options} series={this.state.series} type="line" height={350} />
            </div>
        );
    }
}

export default Line