import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreators } from '../State/index'

const Shop = () => {

    const dispatch = useDispatch();
    const {withdrawMoney, depositMoney} = bindActionCreators(actionCreators, dispatch)
    const balance = useSelector(state => state.amount)

    return (
        <div className="container my-4">
            <h2 className="my-4">Deposite/Withdraw Money</h2>
            <button className="btn btn-primary mx-2" onClick={() => withdrawMoney(100)}>-</button>
            Updated Balance: {balance}
            <button className="btn btn-primary mx-2" onClick={() => depositMoney(100)}>+</button>
        </div> 
    )
}

export default Shop
