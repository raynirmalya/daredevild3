export interface ChartConfig {
  width: number;
  height: number;
  margin?: ChartMargin;
  id?: string;
  color?: string[];
}

export interface ChartMargin {
  top: number;
  left: number;
  right: number;
  bottom: number;
}
