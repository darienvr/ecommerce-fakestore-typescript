
interface Props {
  increase: ()=>void,
  decrease: ()=>void,
  amount: number,
}

const AmountBtn = ({increase, decrease, amount}: Props) => {
  return (
    <div className="amount-btn">
        <button onClick={decrease}>-</button>
        <div>{amount}</div>
        <button onClick={increase}>+</button>
    </div>
  )
}

export default AmountBtn