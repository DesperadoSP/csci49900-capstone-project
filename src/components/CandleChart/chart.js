import React, { Component } from 'react'

import Chart, {
  CommonSeriesSettings,
  Series,
  Reduction,
  ArgumentAxis,
  Label,
  Format,
  ValueAxis,
  Title,
  Legend,
  Tooltip
} from 'devextreme-react/chart';

import { dataSource } from './data.js';

export default class CandleChart extends React.Component {
  render() {
    return (
      <Chart
        id="chart"
        title="Product X"
        dataSource={dataSource}
      >
        <CommonSeriesSettings
          argumentField="date"
          type="candlestick"
        />
        <Series
          name="SOMESTOCKNAME"
          openValueField="o"
          highValueField="h"
          lowValueField="l"
          closeValueField="c"
        >
          <Reduction color="red" />
        </Series>
        <ArgumentAxis workdaysOnly={false}>
          <Label format="shortDate" />
        </ArgumentAxis>
        <ValueAxis tickInterval={1}>
          <Title text="US dollars" />
          <Label>
            <Format
              precision={0}
              type="currency"
            />
          </Label>
        </ValueAxis>
        <Legend itemTextPosition="left"/>
        <Tooltip
          enabled={true}
          location="edge"
          customizeTooltip={this.customizeTooltip}
        />
      </Chart>
    );
  }

  customizeTooltip(arg) {
    return {
      text: `Open: $${arg.openValue}<br/>
      Close: $${arg.closeValue}<br/>
      High: $${arg.highValue}<br/>
      Low: $${arg.lowValue}<br/>`
    };
  }
}