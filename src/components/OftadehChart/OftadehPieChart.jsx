import React, { Component } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const data = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export default class OftadehPieChart extends Component {
  static jsfiddleUrl = "https://jsfiddle.net/alidingling/c9pL8k61/";

  render() {
    return (
      <div style={{ width: "99%", height: 300 }}>
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={data}
              // cx={200}
              // cy={200}
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
    );
  }
}

// import React, { Component } from "react";
// import { Pie } from "react-chartjs-2";

// class OftadehPieChart extends Component {
//   state = {
//     data: {
//       labels: ["Red", "Blue", "Yellow"],
//       datasets: [
//         {
//           data: [300, 50, 100],
//           backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
//           hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"]
//         }
//       ]
//     }
//   };

//   render() {
//     return (
//       <>
//         {/* <div style={{ width: "50%", height: "90%" }}> */}
//         <Pie
//           data={this.state.data}
//           // width={50}
//           height={300}
//           options={{
//             responsive: true,
//             maintainAspectRatio: true
//             // legend: {
//             //   display: false
//             // }
//           }}
//         />
//       </>
//     );
//   }
// }

// export default OftadehPieChart;
