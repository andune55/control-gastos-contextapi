import { formatCurrency } from "../helpers"
type AmountDisplayProps = {
    label?: string
    amount: number
}

export default function AmountDisplay({label, amount} : AmountDisplayProps) {
  return (
    <p className="text-xl text-blue-600 font-bold">
        {/* {label}: {''} */}
        {label && `${label}: `}
        <span className="text-black">{formatCurrency(amount)}</span>
    </p>
  )
}
