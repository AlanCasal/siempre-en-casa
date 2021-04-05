import { Product } from 'interfaces';

interface CardProps {
    product        : Product;
    onAddItem      : Function;
    onRemoveItem   : Function;
    onProductClick?: Function;
};

const Card = ( { product, onAddItem, onRemoveItem, onProductClick }: CardProps ): JSX.Element => {
    const { name, image_url, total_price, product_id,  } = product;

    const checkImg = () => {
        
    }

    const backgroundImage = { backgroundImage: `url( ${ image_url } )` };

    const truncated_name = (): string => name.length > 40 ? `${ name.substring( 0, 40 ) }...` : name;

    const handleProductClick = (): void => {
        onProductClick !== undefined
            ? onProductClick( product_id ) 
            : null;
    };

    return (
        <>
            <div className="card-wrapper">
                <div className="card" >
                    <div className="card__picture"
                        style={ backgroundImage }
                        onClick={ handleProductClick }
                    >&nbsp;</div>

                    <div className="card__text">
                        <h4 className="card__heading montserrat" onClick={ handleProductClick }>
                            { truncated_name() }
                        </h4>

                        <p className="card__price montserrat"> $ { total_price } </p>

                        <div className="card__btns-wrapper">
                            <button className="card__btn" onClick={ () => onRemoveItem( product ) }>- Remover</button>
                            <button className="card__btn" onClick={ () => onAddItem( product ) }>Agregar +</button>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                @import 'styles/sass/abstracts/_variables';
                
                .card-wrapper {
                    position: relative;
                    height: 100%;
                }

                .card {
                    background-color: $color-white;
                    transition: all .8s ease;
                    top: 0;
                    left: 0;
                    width: 100%;
                    border-radius: 15px;
                    overflow: hidden;
                    box-shadow: 0 0.5rem 1rem rgba($color-black, 0.15);
                    transition: transform .5s, box-shadow .5s;
                    height: inherit;

                    &:hover {
                        box-shadow: 0 1.5rem 2rem rgba($color-black, .15);
                        transform: translateY(-1.5rem) scale(1.03);
                    }

                    &__picture {
                        background-size: contain;
                        background-repeat: no-repeat;
                        background-position: top center;
                        height: 23rem;
                        background-blend-mode: screen;
                        border-top-left-radius: 3px;
                        border-top-right-radius: 3px;
                        cursor: pointer;
                    }

                    &__heading {
                        font-size: 1rem;
                        font-weight: 500;
                        text-transform: uppercase;
                        margin-top: 0;
                        text-align: center;
                        color: $color-white;
                        letter-spacing: 3px;
                        line-height: 1.3;
                        text-shadow: 2px 1px 4px purple, -2px 1px 4px mediumpurple, 1px 1px 4px purple;
                        cursor: pointer;

                        &::after {
                            content: '';
                            height: 3px;
                            width: fit-content;
                            display: block;
                            background-image: linear-gradient(to right, $color-primary-light, $color-primary-dark);
                            padding: 0 50px;
                            margin: auto;
                            margin-top: 8px;
                        }
                    }

                    &__text {
                        padding: 1rem;
                        padding-top: 0;
                        position: relative;

                        p {
                            text-align: center;
                        }
                    }

                    &__btns-wrapper {
                        display: flex;
                        justify-content: center;
                    }

                    &__btn {
                        &:first-child {
                            margin-right: 10px;
                        }
                    }
                }
            `}</style>
        </>
    )
}

export default Card;
