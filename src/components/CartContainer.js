import React from "react";
import CartItem from "./CartItem";
import { connect } from "react-redux";
import { CLEAR_CART, GET_TOTALS } from '../actions'
import Empty from './Empty'



const CartContainer = ({ cart = [],total, dispatch }) => {

React.useEffect(()=>{
  dispatch({type:GET_TOTALS})

})



  return (
     cart.length === 0 ?   <Empty/> :
      
    <section className="cart">
      {/* cart header */}
      <header>
        <h2>your bag</h2>
      </header>
      {/* cart items */}
      <article>
        {cart.map(item => {
          return <CartItem key={item.id} {...item} />;
        })}
      </article>
      {/* cart footer */}
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            total <span>${total}</span>
          </h4>
        </div>
        <button onClick={()=>dispatch({type:CLEAR_CART})} className="btn clear-btn">clear cart</button>
      </footer>
    </section>
  );
};


const mapStateToProps = (state) => {
  return {cart:state.cart, total:state.total}
}

export default connect(mapStateToProps) (CartContainer);
