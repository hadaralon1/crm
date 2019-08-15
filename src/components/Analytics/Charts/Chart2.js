import React, { Component } from 'react';
import {
    BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

// const data = [
//     {
//         name: 'Page A', sales: 4000, 
//     },
 
// ];



class Chart2 extends Component {

    render() {
        return (
            <BarChart
                width={900}
                height={300}
                data={this.props.countriesSalesArr}
                margin={{
                    top: 5, right: 30, left: 20, bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="sales" fill="#82ca9d" />
            </BarChart>
        );
    }
}

export default Chart2;