import type { CSSProperties } from 'react';
import type { EChartsOption } from 'echarts';
export declare const COLOR_SCALES: {
    ECHARTS_DEFAULT: string[];
    VIRIDIS: string[];
    PLASMA: string[];
    POLITICS: string[];
    BLUE_SCALE: string[];
    COLORBLIND: string[];
};
export interface IReactEChartsProps {
    option?: EChartsOption;
    style?: CSSProperties;
}
export declare function SimplePieChart(props: IReactEChartsProps): import("react/jsx-runtime").JSX.Element;
