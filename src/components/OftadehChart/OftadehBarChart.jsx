import React, { Component } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "JAN",
    sales: 5,
  },
  {
    name: "FEB",
    sales: 10,
  },
  {
    name: "MAR",
    sales: 3,
  },
  {
    name: "APR",
    sales: 16,
  },
  {
    name: "MAY",
    sales: 20,
  },
  {
    name: "JUN",
    sales: 30,
  },
  {
    name: "JUL",
    sales: 25,
  },
  {
    name: "AUG",
    sales: 18,
  },
  {
    name: "SEP",
    sales: 10,
  },
  {
    name: "OCT",
    sales: 25,
  },
  {
    name: "NOV",
    sales: 29,
  },
  {
    name: "DEC",
    sales: 30,
  },
];

export default class OftadehBarChart extends Component {
  static jsfiddleUrl = "https://jsfiddle.net/alidingling/q4eonc12/";

  render() {
    return (
      <div style={{ width: "99%", height: 300 }}>
        <ResponsiveContainer>
          <BarChart
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
            barSize={16}
          >
            <XAxis
              dataKey="name"
              scale="point"
              padding={{ left: 10, right: 10 }}
            />
            <YAxis />
            <Tooltip />
            <Legend />
            <CartesianGrid strokeDasharray="3 3" />
            <Bar dataKey="sales" fill="#8884d8" background={{ fill: "#eee" }} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    );
  }
}

// import React, { Component } from "react";
// import { Bar } from "react-chartjs-2";

// class OftadehBarChart extends Component {
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
//         <Bar
//           data={this.state.data}
//           // width={50}
//           // height={20}
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

// export default OftadehBarChart;
