import React, { useEffect, useRef, useState } from 'react';
import { createChart } from 'lightweight-charts';
import {Logo} from './Logo';
import { Tooltip } from '@mui/material';

export const Chart = ({ data, periodData }) => {
  const chartContainerRef = useRef(null);
  const toolTipRef = useRef(null);
  // const [linePrice, setLinePrice] = useState(null); 

  useEffect(() => {
    if (data && data.length > 0) {
      const chart = createChart(chartContainerRef.current, {
        width: 800,
        height: 500,
        rightPriceScale: {
          visible: false,
        },
        leftPriceScale: {
          visible: true,
        },
        
      });

      const lineSeries = chart.addAreaSeries({
        lineColor: '#999999',
        lineWidth: 1,
        topColor: 'white',
        bottomColor: 'white',
        priceLineVisible: false,
      });

      const periodSeries1 = chart.addAreaSeries({
        lineColor: '#f44336',
        topColor: '#FFC9C9',
        bottomColor: 'white',
        priceLineVisible: false,
      })

      const periodSeries2 = chart.addAreaSeries({
        lineColor: '#f44336',
        topColor: '#FFC9C9',
        bottomColor: 'white',
        priceLineVisible: false,
      })  

      const periodSeries3 = chart.addAreaSeries({
        lineColor: '#f44336',
        topColor: '#FFC9C9',
        bottomColor: 'white',
        priceLineVisible: false,
      })  

      const periodSeries4 = chart.addAreaSeries({
        lineColor: '#f44336',
        topColor: '#FFC9C9',
        bottomColor: 'white',
        priceLineVisible: false,
      })  

      const periodSeries5 = chart.addAreaSeries({
        lineColor: '#f44336',
        topColor: '#FFC9C9',
        bottomColor: 'white',
        priceLineVisible: false,
      })  

      const periodSeries6 = chart.addAreaSeries({
        lineColor: '#f44336',
        topColor: '#FFC9C9',
        bottomColor: 'white',
        priceLineVisible: false,
      })  

      lineSeries.priceScale().applyOptions({
        textColor: 'gray',
        borderColor: '#C0C0C0',
      })

   
      chart.timeScale().applyOptions({
        borderColor: '#C0C0C0',
        textColor: 'gray',
        allowBoldLabels: true,
      })

      // chart.subscribeCrosshairMove(param => {
        
      // })
      
      chart.timeScale().fitContent();

      const formattedData = data.map(({ date, cumsum, }) => ({
        time: date,
        value: cumsum,
      }));

      const periodSeriesData1 = periodData.period1.map(({date, cumsum}) => ({
        time: date,
        value: cumsum
      }))

      const periodSeriesData2 = periodData.period2.map(({date, cumsum}) => ({
        time: date,
        value: cumsum
      }))

      const periodSeriesData3 = periodData.period3.map(({date, cumsum}) => ({
        time: date,
        value: cumsum
      }))

      const periodSeriesData4 = periodData.period4.map(({date, cumsum}) => ({
        time: date,
        value: cumsum
      }))

      const periodSeriesData5 = periodData.period5.map(({date, cumsum}) => ({
        time: date,
        value: cumsum
      }))

      const periodSeriesData6 = periodData.period6.map(({date, cumsum}) => ({
        time: date,
        value: cumsum
      }))



      lineSeries.setData(formattedData);
      periodSeries1.setData(periodSeriesData1);
      periodSeries2.setData(periodSeriesData2);
      periodSeries3.setData(periodSeriesData3);
      periodSeries4.setData(periodSeriesData4);
      periodSeries5.setData(periodSeriesData5);
      periodSeries6.setData(periodSeriesData6);

      return () => chart.remove();
    }

  }, []);

  return <div className='w-full h-screen m-0 p-0 relative' ref={chartContainerRef}>
    <div ref={toolTipRef}>
        <h3>MaticAlgos</h3>
        <p> {} </p>
    </div>
    <Logo />
  </div>;
};

