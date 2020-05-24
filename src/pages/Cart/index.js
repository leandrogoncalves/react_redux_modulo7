import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete,
} from "react-icons/md";

import * as CartActions from "../../store/reducers/cart/actions";

import { Container, ProductTable, Total } from "./styles";

function Cart({ cart, removeFromCart }) {
  return (
    <Container>
      <ProductTable>
        <thead>
          <tr>
            <th />
            <th>PRODUTO</th>
            <th>QTD</th>
            <th>SUBTOTAL</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {cart.map((product) => (
            <tr>
              <td>
                <img src={product.image} alt={product.title} />
              </td>
              <td>
                <strong>{product.title}</strong>
                <span>{product.priceFormatted}</span>
              </td>
              <td>
                <div>
                  <button type="button">
                    <MdRemoveCircleOutline size={20} color="#7159c1" />
                  </button>
                  <input type="number" readOnly value={product.amount} />
                  <button type="button">
                    <MdAddCircleOutline size={20} color="#7159c1" />
                  </button>
                </div>
              </td>
              <td>
                <strong>{product.priceFormatted}</strong>
              </td>
              <td>
                <button
                  type="button"
                  onClick={() => removeFromCart(product.id)}
                >
                  <MdDelete size={20} color="#7159c1" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </ProductTable>

      <footer>
        <button type="button">Finalizar pedido</button>

        <Total>
          <span>Total</span>
          <strong>R$ 0,00</strong>
        </Total>
      </footer>
    </Container>
  );
}

//Convert os reducers do app em propriedados do componente
const mapStateToProps = (state) => ({
  cart: state.cart, //Nome do reducer em rootReduer
});

//Convert actions do redux em propriedades do componente
const mapDispatchToProps = (dispatch) =>
  bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
