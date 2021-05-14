import React, { useEffect, useRef, useState } from "react";
import F2 from "@antv/f2";

export type ChartParams = Exclude<F2.ChartParams, "id" | "context" | "plugins">;

export interface ChartProps extends ChartParams {
  className?: string;
  children?: React.ReactNode;
  source?: F2.Data<F2.DataRecord>;
  scale?: F2.DataRecordScale<F2.DataRecord>;
}

export default function Chart({
  className,
  children,
  ...otherProps
}: ChartProps): JSX.Element {
  const { source, ...chartParams } = otherProps;
  const ref = useRef<HTMLCanvasElement>();
  const [chart, setChart] = useState<F2.Chart>();

  const execCreateChart = () => {
    if (!chart) {
      const chartInstance = new F2.Chart({
        el: ref.current,
        ...chartParams
      });
      source && chartInstance.source(source);
      chartInstance.interval().position("genre*sold").color("genre");
      chartInstance.render();
      setChart(chartInstance);
    }
  };

  useEffect(execCreateChart, [chart, chartParams, source]);

  return (
    <canvas className={className} ref={ref}>
      {children}
    </canvas>
  );
}

Chart.defaultProps = {
  className: "",
  width: null,
  height: null,
  padding: "auto",
  appendPadding: 15,
  pixelRatio: window?.devicePixelRatio || 2,
  animate: null,
  syncY: false
};
