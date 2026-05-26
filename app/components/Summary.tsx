type Props = {
  maturity: number
  interest: number
}

export default function Summary({
  maturity,
  interest,
}: Props) {
  return (
    <div className="grid grid-cols-2 gap-10 mb-10">
      <div>
        <p className="text-sm text-white">
          Maturity Amount
        </p>

        <h2 className="text-4xl font-bold text-white">
          ₹{maturity.toFixed(0)}
        </h2>
      </div>

      <div>
        <p className="text-sm text-white">
          Interest Earned
        </p>

        <h2 className="text-4xl font-bold text-white">
          ₹{interest.toFixed(0)}
        </h2>
      </div>
    </div>
  )
}