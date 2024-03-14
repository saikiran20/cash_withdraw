// Write your code here
import './index.css'

const DenominationItem = props => {
  const {amountValue} = props
  const {value} = amountValue
  return (
    <li>
      <button className="button" type="submit">
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
