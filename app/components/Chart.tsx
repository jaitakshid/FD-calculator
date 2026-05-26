'use client'

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
} from 'recharts'

type Props = {
  maturity: number
  years: number
}

export default function ChartBox({
  maturity,
  years,
}: Props) {
  const data = Array.from({
    length: Math.min(years, 5),
  }).map((_, index) => ({
    year: index + 1,
    amount: Math.round(
      maturity *
        ((index + 1) / Math.min(years, 5)) *
        0.4
    ),
  }))

  return (
    <div className="h-full rounded-[16px] bg-white px-3 py-2">
      <ResponsiveContainer
        width="100%"
        height="100%"
      >
        <BarChart
          data={data}
          margin={{
            top: 12,
            right: 10,
            left: -20,
            bottom: 0,
          }}
          barCategoryGap="22%"
        >
          <YAxis
            tickLine={false}
            axisLine={false}
            tick={{
              fill: '#b6a79a',
              fontSize: 11,
            }}
            tickFormatter={(value) =>
              `₹${value / 1000}k`
            }
          />

          <XAxis
            dataKey="year"
            tickLine={false}
            axisLine={false}
            tick={{
              fill: '#9b8b7e',
              fontSize: 11,
            }}
          />

          <Tooltip
            cursor={false}
            contentStyle={{
              borderRadius: 12,
              border: '1px solid #eee2d5',
              background: '#fff',
              boxShadow:
                '0 6px 20px rgba(0,0,0,0.08)',
            }}
          />

          <Bar
            dataKey="amount"
            fill="#d7bea7"
            radius={[6, 6, 0, 0]}
            barSize={55}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}