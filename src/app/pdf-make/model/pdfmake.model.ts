export interface DocDef {
  content: any;
}
export interface TableLayout {

}

export interface ContentLayout {
  svg?: string;
  image?: string;
}

export interface SvgLayout {
  svg?: string;
  width?: number;
  height?: number;
  styles?: StyleConfig;
}

export interface ImageLayout {
  image?: string;
  width?: number;
  height?: number;
  styles?: StyleConfig;
}
export interface StyleConfig {
  font?: string;
  fontSize?: number;
  fontFeatures?: string[];
  lineHeight?: number;
  bold?: boolean;
  italics?: boolean;
  alignment?: string;
  color?: string;
  background?: string;
  markerColor?: string;
  decoration?: string;
  decorationStyle?: string;
  decorationColor?: string;
}

export interface ColumnLayout {
  columns: string[] | TextLayout [];
  columnGap: number;
}
export interface TextLayout {
  text?: string;
  width?: number;
  height?: number;
  styles?: StyleConfig;
}
