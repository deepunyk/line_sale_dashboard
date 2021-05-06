import React from 'react';
import * as S from './LayerTwoStyled';
import color from '../../../../constants/color';
import { Bar } from 'react-chartjs-2';

const SalesChart = ()=>{

    const data = {
        labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri','Sat'],
        datasets: [
          {
            label: 'Sales Amount',
            data: [12000, 19000, 30000, 50000, 20000, 30000,50000],
            backgroundColor: color.purple,
          },
          {
            label: 'Sales Quantity',
            data: [20000, 30000, 20000, 50000, 10000, 40000, 80000],
            backgroundColor: color.lightPurple,
          },
        ],

      };
      
      const options = {
        scales: {
            x: {
              grid: {
                display: false,
              }
            },
            y: {
              grid: {
                display: false,
              },
              ticks: {
                callback: function(val, index) {
                  return index % 2 === 0 ? this.getLabelForValue(val) : '';
                },
                font: {
                    size: 12,
                    weight: '700',
                },
              }
            }
          },
        plugins: {
            legend: {
                position: 'bottom',
                align:'center',

                labels: {
                    boxWidth: 7,
                    boxHeight: 7,
                    font: {
                        size: 12,
                        weight: '700',
                    }
                }
            }
        },
        maintainAspectRatio: false,
      };
      
    return (
        <S.ChartWrapper>
            <Bar data={data} options={options}/>
        </S.ChartWrapper>
    );
}

export default SalesChart;