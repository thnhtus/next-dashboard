import React from 'react'
// import { DualAxes } from '@ant-design/plots'
import dynamic from 'next/dynamic'
const DualAxes = dynamic(
  () => import('@ant-design/plots').then(({ DualAxes }) => DualAxes),
  { ssr: false }
)
import style from './style.module.scss'
import { DualAxesConfig } from '@ant-design/charts'
import { Select, SelectProps } from 'antd'

const chartOptions: SelectProps['options'] = [
  {
    label: 'Last 7 days',
    value: 'days',
  },
  {
    label: 'By months',
    value: 'months',
  },
  {
    label: 'By years',
    value: 'years',
  },
]

const DashboardChart: React.FC = () => {
  const data = [
    {
      year: 'Apr 14',
      income: 4.5,
      expenses: 5.2,
    },
    {
      year: 'Apr 15',
      income: 6.8,
      expenses: 4.7,
    },
    {
      year: 'Apr 16',
      income: 5.2,
      expenses: 6.7,
    },
    {
      year: 'Apr 17',
      income: 6.3,
      expenses: 5.5,
    },
    {
      year: 'Apr 18',
      income: 3.3,
      expenses: 5.3,
    },
    {
      year: 'Apr 19',
      income: 4.8,
      expenses: 3.6,
    },
    {
      year: 'Apr 20',
      income: 3.7,
      expenses: 3.1,
    },
  ]
  const config: DualAxesConfig = {
    data: [data, data],
    xField: 'year',
    yField: ['income', 'expenses'],
    yAxis: {
      income: {
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
      income: {
        max: 10,
        min: 0,
      },
      expenses: {
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
      <div className={style.chart__content}>
        <p className={style.chart__content__title}>Working Capital</p>
        <Select defaultValue={'days'} options={chartOptions} />
      </div>
      <DualAxes {...config} />
    </div>
  )
}

export default DashboardChart
