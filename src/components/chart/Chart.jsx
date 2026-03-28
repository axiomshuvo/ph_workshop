import { Line, LineChart } from "recharts";

const resultData = [
  {
    studentId: 1,
    name: "Aarif Rahman",
    math: 85,
    english: 78,
    science: 92,
    ict: 88,
    bangla: 80,
  },
  {
    studentId: 2,
    name: "Nusrat Jahan",
    math: 90,
    english: 85,
    science: 89,
    ict: 91,
    bangla: 87,
  },
  {
    studentId: 3,
    name: "Tanvir Hasan",
    math: 72,
    english: 70,
    science: 75,
    ict: 68,
    bangla: 74,
  },
  {
    studentId: 4,
    name: "Sadia Islam",
    math: 88,
    english: 92,
    science: 90,
    ict: 85,
    bangla: 89,
  },
  {
    studentId: 5,
    name: "Mahmudul Karim",
    math: 60,
    english: 65,
    science: 63,
    ict: 58,
    bangla: 62,
  },
  {
    studentId: 6,
    name: "Fariha Akter",
    math: 95,
    english: 93,
    science: 97,
    ict: 94,
    bangla: 91,
  },
  {
    studentId: 7,
    name: "Rakib Hossain",
    math: 78,
    english: 75,
    science: 80,
    ict: 77,
    bangla: 79,
  },
  {
    studentId: 8,
    name: "Jannatul Ferdous",
    math: 82,
    english: 88,
    science: 84,
    ict: 86,
    bangla: 83,
  },
  {
    studentId: 9,
    name: "Imran Ahmed",
    math: 69,
    english: 72,
    science: 70,
    ict: 65,
    bangla: 68,
  },
  {
    studentId: 10,
    name: "Sharmin Sultana",
    math: 87,
    english: 90,
    science: 88,
    ict: 89,
    bangla: 86,
  },
];

export default function Chart() {
  return (
    <div>
      <h2>Student Mark Data</h2>
      <LineChart width={500} height={500} data={resultData}>
        <Line dataKey="math" stroke="red" />
        {/* <Line dataKey="english" stroke="red" /> */}
        <Line dataKey="science" stroke="yellow" />
        {/* <Line dataKey="ict" stroke="red" /> */}
        {/* <Line dataKey="bangla" stroke="red" /> */}
      </LineChart>
    </div>
  );
}
