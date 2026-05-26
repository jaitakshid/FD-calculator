import ChartBox from "./Chart";

const formatIndian = (value: number) => {
  const rounded = Math.round(value).toString();
  const last3 = rounded.slice(-3);
  const rest = rounded.slice(0, -3);

  return rest
    ? rest.replace(/\B(?=(\d{2})+(?!\d))/g, ",") +
        "," +
        last3
    : last3;
};

type Props = {
  maturity: number;
  interest: number;
  years: number;
};

export default function Display({
  maturity,
  interest,
  years,
}: Props) {
  return (
    <section className="h-full bg-[#d2b08c] p-6 lg:p-8">
      
      {/* Top Summary */}
      <div className="grid grid-cols-2 gap-8 pb-4">
        
        <div>
          <p className="text-[11px] font-medium text-[#f4e5d4]">
            Maturity Amount
          </p>

          <h2 className="mt-1 text-[34px] font-semibold leading-none text-white">
            ₹{formatIndian(maturity)}
          </h2>
        </div>

        <div>
          <p className="text-[11px] font-medium text-[#f4e5d4]">
            Interest Earned
          </p>

          <h2 className="mt-1 text-[34px] font-semibold leading-none text-white">
            ₹{formatIndian(interest)}
          </h2>
        </div>
      </div>

      {/* Chart Box */}
      <div className="mt-5 rounded-[16px] bg-white p-5">
        
        <div className="flex items-center justify-between border-b border-[#eee4d8] pb-4">
          
        <div className=" pb-4">
  
  <h2 className="text-[15px] font-semibold text-[#2d2722]">
    Projected Growth
  </h2>


  {/* Legend Left Side */}
  <div className="mt-3 flex items-center gap-5 text-[12px] text-[#8d7c69]">
    
    <div className="flex items-center gap-2">
      <div className="h-[10px] w-[10px] bg-[#b07d52]" />
      <span>Selected Year</span>
    </div>

    <div className="flex items-center gap-2">
      <div className="h-[10px] w-[10px] bg-[#d9b792]" />
      <span>Other Years</span>
    </div>

  </div>
</div>



        </div>

        <div className="mt-4 h-[220px]">
          <ChartBox
            maturity={maturity}
            years={years}
          />
        </div>
      </div>

      {/* Bottom Cards */}
      <div className="mt-5 border-t border-[#dfc7ad] pt-5">
        <div className="grid grid-cols-2 gap-[14px]">

          {/* Personalised Card */}
          <div className="relative h-[128px] rounded-[10px] bg-[#76533b] px-4 pt-3 pb-4 text-white">
            
            <div className="absolute left-4 top-[-6px] rounded-[3px] bg-[#ffb11c] px-[7px] py-[2px] text-[8px] font-semibold uppercase tracking-[0.04em] text-white">
              Personalised
            </div>

            <div className="absolute right-3 top-3 flex h-[22px] w-[22px] items-center justify-center rounded-full bg-[#8a6b52] text-[10px] text-white">
              ↗
            </div>

            <h3 className="mt-4 max-w-[180px] text-[14px] font-medium leading-[1.35] tracking-[-0.01em]">
              Check Suitable Products For Your Investment
            </h3>

            <p className="absolute bottom-4 left-4 text-[10px] text-[#efe1d2]">
              Exclusively For You
            </p>
          </div>

          {/* Help Card */}
          <div className="relative h-[128px] rounded-[10px] bg-[#4a4b50] px-4 pt-4 pb-4 text-white">

            <div className="absolute right-3 top-3 flex h-[22px] w-[22px] items-center justify-center rounded-full bg-[#5e5f63] text-[10px] text-white">
              ↗
            </div>

            <h3 className="max-w-[190px] text-[14px] font-medium leading-[1.35] tracking-[-0.01em]">
              Need Help Finding Right Product?
            </h3>

            <p className="absolute bottom-4 left-4 text-[10px] text-[#d7ccc3]">
              Get Guidance From Wealth Manager
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}