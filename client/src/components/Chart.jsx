import React, { useEffect, useRef } from 'react';
import { createChart } from 'lightweight-charts';
import {Logo} from './Logo';

export const Chart = ({ data }) => {
  const chartContainerRef = useRef(null);

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
        lineColor: '#F84119',
        lineWidth: 1,
        topColor: '#FFC9C9',
        bottomColor: 'white'

      });

      lineSeries.priceScale().applyOptions({
        textColor: 'gray',
        borderColor: '#C0C0C0',
      })

      chart.timeScale().applyOptions({
        borderColor: '#C0C0C0',
        textColor: 'gray',
        allowBoldLabels: true,

      })

      chart.timeScale().fitContent();

      const formattedData = data.map(({ date, cumsum, }) => ({
        time: date,
        value: cumsum,
      }));


      lineSeries.setData(formattedData);
      return () => chart.remove();
    }

  }, []);

  return <div className='w-full h-screen m-0 p-0 relative' ref={chartContainerRef}>
    <Logo />
  </div>;
};

