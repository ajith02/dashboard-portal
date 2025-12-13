import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const ReusableChart = ({
  data,
  dataKeyX,
  dataKeyY,
  dataKeyY2,
  title,
  color = "#8884d8",
  color2 = "#82ca9d",
  type = "line",
  showGrid = true,
  showTooltip = true,
  showLegend = true,
  chartId,
}) => {
  const COLORS = [
    "#8FB9FF",
    "#7EE8C1",
    "#FFD580",
    "#FF9AA2",
    "#CBA0FF",
    "#A0D6FF",
    "#B6E2D3",
  ];

  const renderChart = () => {
    switch (type) {
      case "line":
        return (
          <LineChart data={data}>
            {showGrid && <CartesianGrid strokeDasharray="3 3" />}
            <XAxis dataKey={dataKeyX} />
            <YAxis />
            {showTooltip && <Tooltip />}
            {showLegend && <Legend />}
            <Line
              type="monotone"
              dataKey={dataKeyY}
              stroke={color}
              strokeWidth={2}
              dot={{ r: 4 }}
              activeDot={{ r: 6 }}
            />
            {dataKeyY2 && (
              <Line
                type="monotone"
                dataKey={dataKeyY2}
                stroke={color2}
                strokeWidth={2}
                strokeDasharray="5 5"
                dot={{ r: 4 }}
              />
            )}
          </LineChart>
        );

      case "bar":
        return (
          <BarChart data={data}>
            {showGrid && <CartesianGrid strokeDasharray="3 3" />}
            <XAxis dataKey={dataKeyX} />
            <YAxis />
            {showTooltip && <Tooltip />}
            {showLegend && <Legend />}
            <Bar dataKey={dataKeyY} fill={color} radius={[4, 4, 0, 0]} />
            {dataKeyY2 && (
              <Bar dataKey={dataKeyY2} fill={color2} radius={[4, 4, 0, 0]} />
            )}
          </BarChart>
        );

      case "pie":
        return (
          <PieChart>
            {showTooltip && <Tooltip />}
            {showLegend && (
              <Legend
                layout="horizontal"
                verticalAlign="bottom"
                align="center"
                iconSize={12}
                formatter={(value, entry, index) => value}
              />
            )}
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              dataKey={dataKeyY}
              nameKey="category"
              outerRadius={80}
              isAnimationActive={false}
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={entry.fill || COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
        );

      default:
        return null;
    }
  };

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "12px",
          alignItems: "center",
        }}
      >
        {title && (
          <h3 style={{ margin: 0, fontSize: "16px", fontWeight: 600 }}>
            {title}
          </h3>
        )}
      </div>

      <div id={chartId} style={{ width: "100%", height: "100%" }}>
        <ResponsiveContainer width="100%" height="100%">
          {renderChart()}
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ReusableChart;
