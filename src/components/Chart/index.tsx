import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
import { useChartData } from '@/store/experiment';

export function Chart() {
  const chartData = useChartData();

  return (
    <LineChart
      width={730}
      height={250}
      data={chartData}
      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="time" stroke="#8884d8" />
    </LineChart>
  );
}
