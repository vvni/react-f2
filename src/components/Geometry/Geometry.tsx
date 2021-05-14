import React from "react";
import type { GeometryParams, GeometryKind } from "@antv/f2";

export interface GeometryProps extends GeometryParams {
  type?: GeometryKind;
}

export default function Geometry({
  type,
  ...geometryParams
}: GeometryProps): JSX.Element {
  const defaultGp: GeometryParams = {
    generatePoints: type === "line" || type === "path" ? false : true,
    sortable: type === "area" || type === "line" ? true : false,
    startOnZero: true,
    connectNulls: false
  };

  return <></>;
}

Geometry.defaultProps = {
  type: "interval"
};
