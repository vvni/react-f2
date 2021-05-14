import type { Reducer } from "react";
import { ChartProps } from "../components/Chart";
import { GeometryProps } from "../components/Geometry";

export interface Store {
  chart: ChartProps;
  geometry: GeometryProps[];
}

export interface StoreAction {
  type: keyof Store;
  payload?: Store;
}

export const chartReducer: Reducer<Store, StoreAction> = (
  state,
  action
): Store => {
  switch (action.type) {
    case "chart":
      return state;
    case "geometry":
      return state;
  }
};
