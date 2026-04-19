import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";
import { TriangleBar } from "./TriangleBar";

export default function ViewChart({ viewData }) {
  const margin = {
    top: 20,
    right: 30,
    left: 20,
    bottom: 5,
  };

  const getRandomColor = () => {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  };

  return (
    <>
      <div className="container mx-auto flex items-center justify-center">
        <div className="bg-slate-100 w-full max-w-7xl rounded-xl p-5 my-20 outline-none">
          <ResponsiveContainer width="100%" aspect={2}>
            <BarChart
              data={viewData}
              margin={margin}
              style={{ outline: "none" }}
            >
              <XAxis
                dataKey="bookName"
                interval={0}
                angle={-30}
                textAnchor="end"
                height={60}
                tick={{ fontSize: 10 }}
              />
              <YAxis />
              <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
              <Bar dataKey="totalPages" shape={<TriangleBar />}>
                {viewData.map((entry, index) => (
                  <Cell
                    key={index}
                    fill={getRandomColor()} // ← প্রতিটা bar-এ আলাদা রঙ
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </>
  );
}
