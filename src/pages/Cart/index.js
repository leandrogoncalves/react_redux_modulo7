import React from 'react'
import { connect } from 'react-redux';
import { MdRemoveCircleOutline, MdAddCircleOutline, MdDelete } from 'react-icons/md'

import { Container, ProductTable, Total } from './styles';

function Cart({ cart }) {
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
          { cart.map(product => (
                <tr>
                <td>
                  <img
                    src={product.image}
                    alt={product.title}/>
                </td>
                <td>
                  <strong>{product.title}</strong>
                  <span>{product.priceFormatted}</span>
                </td>
                <td>
                  <div>
                    <button type="button">
                      <MdRemoveCircleOutline size={20} color="#7159c1" ></MdRemoveCircleOutline>
                    </button>
                    <input type="number" readOnly value={product.amount}/>
                    <button type="button">
                      <MdAddCircleOutline size={20} color="#7159c1" />
                    </button>
                  </div>
                </td>
                <td>
                  <strong>{product.priceFormatted}</strong>
                </td>
                <td>
                  <button type="button">
                    <MdDelete size={20} color="#7159c1"></MdDelete>
                  </button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </ProductTable>

      <footer>
        <button type="button">
          Finalizar pedido
        </button>

          <Total>
            <span>Total</span>
            <strong>R$ 0,00</strong>
          </Total>
      </footer>
    </Container>
  )
}

const mapStateToProps = state => ({
  cart: state.cart, //Nome do reducer em rootReduer
});

export default connect(mapStateToProps)(Cart);
