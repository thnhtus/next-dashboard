import React from 'react'
// import { DualAxes } from '@ant-design/plots'
import dynamic from 'next/dynamic'
const DualAxes = dynamic(
  () => import('@ant-design/plots').then(({ DualAxes }) => DualAxes),
  { ssr: false }
)
import style from './style.module.scss'
import { DualAxesConfig } from '@ant-design/charts'

const DashboardChart: React.FC = () => {
  const data = [
    {
      year: 'Apr 14',
      value: 4.5,
      count: 5.2,
    },
    {
      year: 'Apr 15',
      value: 6.8,
      count: 4.7,
    },
    {
      year: 'Apr 16',
      value: 5.2,
      count: 6.7,
    },
    {
      year: 'Apr 17',
      value: 6.3,
      count: 5.5,
    },
    {
      year: 'Apr 18',
      value: 3.3,
      count: 5.3,
    },
    {
      year: 'Apr 19',
      value: 4.8,
      count: 3.6,
    },
    {
      year: 'Apr 20',
      value: 3.7,
      count: 3.1,
    },
  ]
  const config: DualAxesConfig = {
    data: [data, data],
    xField: 'year',
    yField: ['value', 'count'],
    yAxis: {
      value: {
        grid: {
          line: {
            style: {
              stroke: '#fff',
              // opacity: -1,
            },
          },
        },
      },
    },

    xAxis: {
      grid: {
        line: {
          style: {
            stroke: '#ddd',
          },
        },
      },
    },

    meta: {
      value: {
        max: 10,
        min: 0,
      },
      count: {
        max: 10,
        min: 0,
      },
    },

    geometryOptions: [
      {
        geometry: 'line',
        smooth: true,
        color: '#29A073',

        lineStyle: {
          lineWidth: 4,
        },
      },
      {
        geometry: 'line',
        smooth: true,
        color: '#C8EE44',
        lineStyle: {
          lineWidth: 4,
          opacity: 0.5,
        },
      },
    ],
  }

  return (
    <div className={style.chart}>
      <div>
        <p>Working Capital</p>
      </div>
      <DualAxes {...config} />
    </div>
  )
}

export default DashboardChart
