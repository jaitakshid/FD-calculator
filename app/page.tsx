'use client'

import { useState } from 'react'
import Form from './components/Form'
import Display from './components/Display'

export default function HomePage() {
  const [deposit, setDeposit] = useState<number>(100000)
  const [rate, setRate] = useState<number>(7)
  const [years, setYears] = useState<number>(5)

  const maturity =
    deposit * Math.pow(1 + rate / 100, years)

  const interest = maturity - deposit

  return (
    <main className="min-h-screen bg-[#1f1f1f] px-4 py-8 flex items-center justify-center">
      
      <div className="w-full max-w-[1450px] overflow-hidden rounded-[12px] bg-[#f5f1eb] shadow-[0_25px_70px_rgba(0,0,0,0.18)]">
        
        <div className="grid lg:grid-cols-[1.05fr_1fr]">
          
          {/* Left Side */}
          <div className="bg-white">
            <Form
              deposit={deposit}
              rate={rate}
              years={years}
              setDeposit={setDeposit}
              setRate={setRate}
              setYears={setYears}
            />
          </div>

          {/* Right Side */}
          <div className="bg-[#d2b08c]">
            <Display
              maturity={maturity}
              interest={interest}
              years={years}
            />
          </div>

        </div>
      </div>
    </main>
  )
}