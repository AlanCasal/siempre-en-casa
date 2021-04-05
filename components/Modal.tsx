import HeadingSecondary from 'components/HeadingSecondary';
import Card from 'components/Card';
import { Product } from 'interfaces';

interface ModalProps {
    recommendedProducts: Product[];
    closeModal  : Function;
    onAddItem   : Function;
    onRemoveItem: Function;
};

const Modal = ( { recommendedProducts, closeModal, onAddItem, onRemoveItem }: ModalProps ): JSX.Element => {
    
    return (
        <>
            <div className="modal">
                <div className="modal__content-wrapper">
                    <span className="modal__close-btn" onClick={ (): void => closeModal() }>&times;</span>

                    <HeadingSecondary text="Recomendaciones" />
                    
                    <div className="modal__flex-container">
                        { recommendedProducts.map( product => (
                            <div className="modal__card-container" key={ product.name } >
                                <Card
                                    product={ product }
                                    onAddItem={ onAddItem }
                                    onRemoveItem={ onRemoveItem }
                                />
                            </div> ) ) }
                    </div>
                </div>
            </div>

            <style jsx>{`
                .modal {
                    position: fixed; /* Stay in place */
                    z-index: 1; /* Sit on top */
                    padding-top: 100px; /* Location of the box */
                    left: 0;
                    top: 0;
                    width: 100%; /* Full width */
                    height: 100%; /* Full height */
                    overflow: auto; /* Enable scroll if needed */
                    background-color: rgb(0,0,0); /* Fallback color */
                    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */

                    &__content-wrapper {
                        background-color: #fefefe;
                        margin: auto;
                        padding: 20px;
                        border: 1px solid #888;
                        width: 80%;
                    }

                    &__close-btn {
                        color: #aaaaaa;
                        float: right;
                        font-size: 28px;
                        font-weight: bold;
                        
                        &:hover,
                        &:focus {
                            color: #000;
                            text-decoration: none;
                            cursor: pointer;
                        }
                    }
                    
                    &__flex-container {
                        display: flex;
                        flex-wrap: wrap;
                        justify-content: center;
                    }

                    &__card-container {
                        flex: 0 0 calc(250px - 20px);
                        margin: 0 5px 15px;
                    }
                }
            `}</style>
        </>
    )
}

export default Modal;


