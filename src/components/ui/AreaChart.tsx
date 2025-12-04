import { ChartDataPoint } from "@/types";

interface AreaChartProps {
  data: ChartDataPoint[];
}

export function AreaChart({ data }: AreaChartProps) {
  if (!data || data.length === 0) return null;

  const maxRevenue = Math.max(...data.map((d) => d.revenue));
  const width = 100;
  const height = 60;
  const padding = 5;

  // Create points for the line
  const points = data.map((point, index) => {
    const x = (index / (data.length - 1)) * width;
    const y = height - (point.revenue / maxRevenue) * (height - padding * 2) - padding;
    return { x, y };
  });

  // Create path for the line
  const linePath = points.map((p, i) => `${i === 0 ? "M" : "L"} ${p.x},${p.y}`).join(" ");

  // Create path for the area (filled region)
  const areaPath = `${linePath} L ${width},${height} L 0,${height} Z`;

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      className="w-full h-full"
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.3" />
          <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.0" />
        </linearGradient>
      </defs>
      
      {/* Area fill */}
      <path d={areaPath} fill="url(#areaGradient)" />
      
      {/* Line stroke */}
      <path
        d={linePath}
        fill="none"
        stroke="hsl(var(--primary))"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      
      {/* Data points */}
      {points.map((point, index) => (
        <circle
          key={index}
          cx={point.x}
          cy={point.y}
          r="2"
          fill="hsl(var(--primary))"
          className="transition-all duration-300 hover:r-3"
        />
      ))}
    </svg>
  );
}
