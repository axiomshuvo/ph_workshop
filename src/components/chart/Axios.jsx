import { use } from "react";
import { Bar, BarChart, Legend, Tooltip, XAxis, YAxis } from "recharts";

export default function Axios({ marksPromise }) {
  const marksDataRes = use(marksPromise);
  //   console.log(marksDataRes);
  const marksData = marksDataRes.data;
  //   console.log(marksData);

  const marksChartData = marksData.map((studentData) => {
    const student = {
      id: studentData.studentId,
      name: studentData.name,
      math: studentData.marks.math,
      science: studentData.marks.science,
    };
    const avg = (student.math + student.science) / 2;
    student.avg = avg;
    return student;
  });

  console.log(marksChartData);

  return (
    <>
      <h1>Axios Js </h1>
      <BarChart
        margin={{
          top: 5,
          right: 0,
          left: 0,
          bottom: 5,
        }}
        width={500}
        height={500}
        data={marksChartData}
      >
        <XAxis dataKey="name"></XAxis>
        <YAxis></YAxis>
        <Tooltip></Tooltip>
        <Legend></Legend>
        <Bar
          dataKey="math"
          fill="#8884d8"
          activeBar={{ fill: "pink", stroke: "blue" }}
          radius={[10, 10, 0, 0]}
        />
        <Bar
          dataKey="science"
          fill="#82ca9d"
          activeBar={{ fill: "gold", stroke: "purple" }}
          radius={[10, 10, 0, 0]}
        />
        <Bar
          dataKey="avg"
          fill="#d0e723"
          activeBar={{ fill: "purple", stroke: "gold" }}
          radius={[10, 10, 0, 0]}
        />
      </BarChart>
    </>
  );
}
