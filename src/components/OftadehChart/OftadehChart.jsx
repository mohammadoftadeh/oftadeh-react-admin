import React, { Component } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "JAN",
    visits: 5,
  },
  {
    name: "FEB",
    visits: 10,
  },
  {
    name: "MAR",
    visits: 3,
  },
  {
    name: "APR",
    visits: 16,
  },
  {
    name: "MAY",
    visits: 20,
  },
  {
    name: "JUN",
    visits: 30,
  },
  {
    name: "JUL",
    visits: 25,
  },
  {
    name: "AUG",
    visits: 18,
  },
  {
    name: "SEP",
    visits: 10,
  },
  {
    name: "OCT",
    visits: 25,
  },
  {
    name: "NOV",
    visits: 29,
  },
  {
    name: "DEC",
    visits: 30,
  },
];

export default class OftadehChart extends Component {
  static jsfiddleUrl = "https://jsfiddle.net/alidingling/7j5bbbum/";

  render() {
    return (
      <div style={{ width: "99%", height: 300 }}>
        <ResponsiveContainer>
          <AreaChart
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="visits"
              stroke="#8884d8"
              fill="#8884d8"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    );
  }
}

// import React, { Component } from "react";
// import { Line } from "react-chartjs-2";

// class OftadehChart extends Component {
//   state = {
//     data: {
//       labels: [
//         "JAN",
//         "FEB",
//         "MAR",
//         "APR",
//         "MAY",
//         "JUN",
//         "JUL",
//         "AUG",
//         "SEP",
//         "OCT",
//         "NOV",
//         "DEC"
//       ],
//       datasets: [
//         {
//           label: "# of Votes",
//           data: [12, 19, 3, 5, 2, 24, 12, 19, 31, 30, 12, 3],
//           backgroundColor: "rgba(255, 99, 132, 0.2)",
//           borderColor: "rgba(255, 99, 132, 1)",
//           borderWidth: 3
//         }
//       ]
//     }
//   };

//   render() {
//     return (
//       <>
//         {/* <div style={{ width: "50%", height: "90%" }}> */}
//         <Line
//           data={this.state.data}
//           // width={50}
//           height={55}
//           options={{
//             responsive: true,
//             maintainAspectRatio: true,
//             legend: {
//               display: false
//             },
//             scales: {
//               xAxes: [
//                 {
//                   gridLines: {
//                     display: false
//                   }
//                 }
//               ]
//             }
//           }}
//         />
//       </>
//     );
//   }
// }

// export default OftadehChart;
