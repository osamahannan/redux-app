import React from 'react'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreators } from '../State/index'

const Shop = () => {

    const dispatch = useDispatch();
    const actions = bindActionCreators(actionCreators, dispatch)

    return (
        <div className="container my-4">
            <h2 className="my-4">Deposite/Withdraw Money</h2>
            <button className="btn btn-primary mx-2" onClick={() => actions.withdrawMoney(100)}>-</button>
            Update Balance
            <button className="btn btn-primary mx-2" onClick={() => actions.depositMoney(100)}>+</button>
        </div> 
    )
}

export default Shop
