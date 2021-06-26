import React from "react";
import type { AxisParams, DataRecord, DataField } from "@antv/f2";

export type AxisProps = AxisParams<DataRecord, DataField<DataRecord>> & {
  field?: string;
  show?: boolean;
};

export default function Axis(props: AxisProps): JSX.Element {
  return <></>;
}
