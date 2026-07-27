import React from 'react';
import ReactECharts from 'echarts-for-react';
import type { CSSProperties } from 'react';
import type { EChartsOption } from 'echarts';
import { isNullOrEmpty } from './utils';

export const COLOR_SCALES = {
    ECHARTS_DEFAULT: ['#5470C6', '#91CC75', '#FAC858', '#EE6666', '#73C0DE', '#3BA272', '#FC8452', '#9A60B4', '#EA7CCC'],
    VIRIDIS: ['#FDE725', '#BDDF26', '#7AD151', '#44BF70', '#22A884', '#21918C', '#2A788E', '#355F8D', '#414487', '#482475', '#440154'],
    PLASMA: ['#F0F921', '#FDCA26', '#FB9F3A', '#ED7953', '#D8576B', '#BD3786', '#9C179E', '#7201A8', '#46039F', '#0D0887'],
    POLITICS: ['#0000FF', '#1A00E6', '#3300CC', '#4D00B3', '#660099', '#800080', '#990066', '#B3004D', '#CC0033', '#E6001A', '#FF0000'],
    BLUE_SCALE: ['#E3F6FF', '#CEF0FE', '#B8E9FC', '#A3E3FB', '#8DDCFA', '#78D6F9', '#63D0F7', '#4DC9F6', '#38C3F5', '#22BCF3', '#0DB6F2'],
    COLORBLIND: ['#FDD015', '#465CAD', '#9DD866', '#CA472F', '#8DDDD0', '#520175', '#FF8A00', '#0B84A5', '#3B7700', '#BC893A', '#B467D6', '#00B2A0'],
};

export interface IReactEChartsProps {
    option?: EChartsOption,
    style?: CSSProperties,
}

function ReactECharts2(props: IReactEChartsProps): React.JSX.Element {
    const {
        option, style,
    } = props;

    return (
        <div style={!isNullOrEmpty(style) ? style : { width: '100%', height: '100%', background: 'transparent' }}>
            <div
                style={{
                    width: '99%', height: '100%', margin: '0 auto', background: 'transparent', ...style,
                }}
            />
        </div>
    );
}

export function SimplePieChart(props: IReactEChartsProps) {
    const {
        option, style,
    } = props;

    const sampleOption = {
        title: {
            text: 'Version 2',
            subtext: 'Real Data',
            left: 'center',
        },
        color: COLOR_SCALES.ECHARTS_DEFAULT,
        tooltip: {
            trigger: 'item',
        },
        legend: {
            orient: 'vertical',
            left: 'left',
        },
        series: [
            {
                name: 'Access From',
                type: 'pie',
                radius: '50%',
                data: [
                    { value: 580, name: 'Search Engine' },
                    { value: 300, name: 'Direct' },
                    { value: 484, name: 'Email' },
                    { value: 735, name: 'Union Ads' },
                    { value: 1048, name: 'Video Ads' },
                ],
                emphasis: {
                    itemStyle: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)',
                    },
                },
            },
        ],
    };

    return (
        <ReactECharts
            notMerge
            style={!isNullOrEmpty(style) ? style : { width: '100%', height: '480px' }}
            option={!isNullOrEmpty(option) ? option : sampleOption}
        />
    );
}
