// Write your code here
import {Component} from 'react'

import DenominationItem from '../DenominationItem'

import './index.css'

class CashWithdrawal extends Component {
  state = {
    value: 2000,
  }

  render() {
    const {value} = this.state
    const denominationsList = this.props
    return (
      <div className="container">
        <div className="withdrwal-card">
          <div className="profile-bg">
            <div className="profile-icon">S</div>
            <p className="profile-head">Sarah Williams</p>
          </div>
          <div className="balance-bg">
            <p className="your-bl">Your Balance</p>
            <div className="rs-bg">
              <p className="rs">{value}</p>
              <p className="in-rs">In Rupees</p>
            </div>
          </div>
          <h1 className="withdrwa-h">Withdraw</h1>
          <p className="choose">CHOOSE SUM (IN RUPEES)</p>
          <ul className="amounts-container">
            {denominationsList.map(eachList => (
              <DenominationItem key={eachList.id} amountValue={eachList} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
