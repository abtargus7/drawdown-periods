import React, { useEffect, useRef } from 'react';
import { createChart } from 'lightweight-charts';

const Chart = ({ data }) => {
  const chartContainerRef = useRef(null);

  useEffect(() => {
    if (data && data.length > 0) {
      const chart = createChart(chartContainerRef.current, {
        width: 800,
        height: 600,
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
        topColor: '#F4603E ',
        bottomColor: '#F5D7D0'

      });

      chart.timeScale().fitContent();

      const handleResize = () => {
        chart.applyOptions({
          width: chartContainerRef.current.clientWidth - 600,
        })
      }

      window.addEventListener('resize', handleResize);
      const formattedData = data.map(({ date, cumsum, }) => ({
        time: date,
        value: cumsum,
      }));

      lineSeries.setData(formattedData);

      return () => {
        chart.remove();
        window.removeEventListener('resize', handleResize)
      }
    }
  }, [data]);

  return <div ref={chartContainerRef} style={{ height: '400px' }} />;
};

export default Chart;
