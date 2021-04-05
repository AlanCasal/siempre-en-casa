import HeadingSecondary from 'components/HeadingSecondary';

const Cart = ( { cartItems, onAddItem, onRemoveItem }): JSX.Element => {
    return (
        <>
            <HeadingSecondary text="Carrito" />

            <div className="cart-content">
                { cartItems.length === 0
                ? <p className="cart-content__empty-msg"> El carrito está vacío </p>
                : (
                <ul>
                    { cartItems.map( item => (
                    <li key={ item.name }>
                        {`${ item.quantity }x ${ item.name } - ` } <b>${ item.total_price }</b>
                        <button className="cart-content__btn cart-content__btn--remove" onClick={() => onRemoveItem( item ) }> - </button>
                        <button className="cart-content__btn cart-content__btn--add" onClick={() => onAddItem( item ) }> + </button>
                    </li> ) ) }
                </ul> ) }
            </div>

            <style jsx>{`
                .cart-content {
                    &__empty-msg {
                        text-align: center
                    }

                    &__btn {
                        width : 2rem;
                        height: 2rem;

                        &--remove {
                            background-color: red;
                        }
                        
                        &--add {
                            background-color: lightgreen;
                        }
                    }
                }
            `}</style>
        </>
    )
}

export default Cart;
