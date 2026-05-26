"use client";

import { Dispatch, SetStateAction, useState } from "react";

type Props = {
  deposit: number;
  rate: number;
  years: number;
  setDeposit: Dispatch<SetStateAction<number>>;
  setRate: Dispatch<SetStateAction<number>>;
  setYears: Dispatch<SetStateAction<number>>;
};

const payoutOptions = [
  "Quarterly",
  "Half yearly",
  "Yearly",
  "At Maturity",
];

export default function Form({
  deposit,
  rate,
  years,
  setDeposit,
  setRate,
  setYears,
}: Props) {
  const [payout, setPayout] =
    useState<string>("Quarterly");

  return (
    <section className="h-full bg-white px-8 py-8 lg:px-10 lg:py-10">
      
      {/* Heading */}
      <div className="max-w-[430px]">
        <p className="text-[12px] font-medium uppercase tracking-[0.18em] text-[#b18b67]">
          FD Calculator
        </p>

       <h1 className="mt-3 text-[12px] font-normal leading-[1.35] text-[#6f655c]">
  Estimates how much your fixed
  deposit investment will grow
  over time.
</h1>
      </div>

      {/* Form Content */}
      <div className="mt-10 space-y-8">

        {/* Deposit */}
        <div>
          <div className="flex items-center justify-between">
            <p className="text-[14px] text-[#60584f]">
              Deposit Amount (₹)
            </p>

            <p className="text-[14px] font-medium text-[#8d8378]">
              {deposit}
            </p>
          </div>

          <input
            type="range"
            min={10000}
            max={500000}
            step={1000}
            value={deposit}
            onChange={(e) =>
              setDeposit(Number(e.target.value))
            }
            className="custom-slider mt-4 w-full"
          />

          <div className="mt-2 flex justify-between text-[10px] text-[#a19387]">
            <span>10,000</span>
            <span>245,000</span>
            <span>500,000</span>
          </div>
        </div>

        {/* Rate */}
        <div>
          <div className="flex items-center justify-between">
            <p className="text-[14px] text-[#60584f]">
              Rate Of Return (%)
            </p>

            <p className="text-[14px] font-medium text-[#8d8378]">
              {rate.toFixed(1)}%
            </p>
          </div>

          <input
            type="range"
            min={5}
            max={30}
            step={0.1}
            value={rate}
            onChange={(e) =>
              setRate(Number(e.target.value))
            }
            className="custom-slider mt-4 w-full"
          />

          <div className="mt-2 flex justify-between text-[10px] text-[#a19387]">
            <span>5%</span>
            <span>17.5%</span>
            <span>30%</span>
          </div>
        </div>
{/* Interest Payout */}
<div>
  <div className="flex items-center justify-between gap-4">
    
    <p className="whitespace-nowrap text-[14px] text-[#60584f]">
      Interest Payout
    </p>

    <div className="flex items-center gap-2">
      {payoutOptions.map((option) => (
        <button
          key={option}
          type="button"
          onClick={() => setPayout(option)}
          className={`h-[34px] rounded-full px-4 text-[12px] font-medium whitespace-nowrap transition ${
            payout === option
              ? "bg-[#b0865f] text-white"
              : "bg-[#f4ede6] text-[#7d6d5d]"
          }`}
        >
          {option}
        </button>
      ))}
    </div>
  </div>

  <p className="mt-3 text-[10px] leading-4 text-[#8f8377]">
    Cumulative rate of return 7.19%
  </p>
</div>
        {/* Years */}
        <div>
          <div className="flex items-center justify-between">
            <p className="text-[14px] text-[#60584f]">
              Time Period (Years)
            </p>

            <p className="text-[14px] font-medium text-[#8d8378]">
              {years}
            </p>
          </div>

          <input
            type="range"
            min={1}
            max={50}
            value={years}
            onChange={(e) =>
              setYears(Number(e.target.value))
            }
            className="custom-slider mt-4 w-full"
          />

          <div className="mt-2 flex justify-between text-[10px] text-[#a19387]">
            <span>1</span>
            <span>25</span>
            <span>50</span>
          </div>
        </div>

        {/* Button */}
        <button
          type="button"
          className="mt-2 flex h-[46px] w-[128px] items-center justify-center rounded-full bg-[#98704f] text-[13px] font-medium text-white transition hover:bg-[#835f42]"
        >
          Calculate
        </button>
      </div>
    </section>
  );
}