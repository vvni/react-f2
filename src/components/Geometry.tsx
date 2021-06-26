import React from "react";
import type {
  GeometryParams,
  GeometryKind,
  DataField,
  DataRecord,
  GeometryShapeKind,
  GeometryAdjustKind,
  GeometryAdjustParams,
  CanvasProps,
  AnimateElementParams
} from "@antv/f2";

export interface GeometryProps extends GeometryParams {
  type?: GeometryKind;
  position?: string | DataField<DataRecord>[];
  color?:
    | string
    | [
        DataField<DataRecord>,
        (
          | string
          | string[]
          | ((value: DataRecord[DataField<DataRecord>]) => string | void)
        )
      ];
  shape?:
    | GeometryShapeKind<GeometryKind>
    | string
    | [
        DataField<DataRecord>,
        (
          | GeometryShapeKind<GeometryKind>
          | GeometryShapeKind<GeometryKind>[]
          | ((
              value: DataRecord[DataField<DataRecord>]
            ) => GeometryShapeKind<GeometryKind> | void)
        )
      ]
    | [
        DataField<DataRecord>,
        (
          | string
          | string[]
          | ((value: DataRecord[DataField<DataRecord>]) => string | void)
        )
      ];
  size?:
    | number
    | [
        DataField<DataRecord>,
        (
          | [number, number]
          | ((value: DataRecord[DataField<DataRecord>]) => number)
        )
      ];
  adjust?: GeometryAdjustKind | GeometryAdjustParams | GeometryAdjustParams[];
  style?:
    | CanvasProps
    | [
        DataField<DataRecord>,
        {
          [K in keyof CanvasProps]?:
            | CanvasProps[K]
            | ((value: DataRecord[DataField<DataRecord>]) => CanvasProps[K]);
        }
      ];
  animate?: boolean | AnimateElementParams;
}

export default function Geometry({
  type = "interval",
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
