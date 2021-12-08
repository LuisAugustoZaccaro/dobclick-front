import React, { Component } from "react";
import Chart from "react-apexcharts";

class Column extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            options: {
              chart: {
                id: "basic-bar"
              },
              xaxis: {
                categories: ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo']
              }
            },
            series: [
              {
                name: "Lucro",
                data: [30, 60, 45, 100, 49, 60, 70]
              }
            ]
          };
        }
    render() {
        return (
            <div id="chart-2">
                <Chart options={this.state.options} series={this.state.series} type="bar" height={350} />
            </div>
        );
    }
}

export default Column