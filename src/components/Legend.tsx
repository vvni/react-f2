import React from "react";
import type { LegendParams } from "@antv/f2";

export type LegendProps = LegendParams & {
  field?: string;
  show?: boolean;
};

export default function Legend(props: LegendProps): JSX.Element {
  return <></>;
}
