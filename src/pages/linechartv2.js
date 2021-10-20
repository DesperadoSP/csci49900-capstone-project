import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';

const Line = ({date, close}) => {
    return ( 
        <div>
            <HighchartsReact
                highcharts={Highcharts}
                constructorType={'stockChart'}
                options={{
                  yAxis: [{
                    offset: 30,
  
                      x: -20,
                      style: {
                        "color": "#000", "position": "absolute"
            
                      },
                      align: 'left'
                    },
  
                  ],
                  title: {
                    text: ''
                  },
                  plotOptions: {
                    series: {
                      showInNavigator: true,
                      gapSize: 6,
                
                    }
                  },
                  rangeSelector: {
                    selected: 1
                  },
                  chart: {
                    height: '60%',
                    width: 1400,
                  },
                  credits: {
                    enabled: false
                  },
                  legend: {
                    enabled: false
                  },
                  tooltip: {
                    valueDecimals: 2
                  },
                  series: [
                    {
                      /*data: [1, 2, 1, 4, 3, 6, 7, 3, 8, 6, 9]*/
                      data: [close, date]
                    }
                  ]
                }}
                >
                </HighchartsReact>
        </div> 
    );
};

export default Line;