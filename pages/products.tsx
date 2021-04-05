import { useState } from "react";
import { InferGetServerSidePropsType } from 'next';
import Head from 'next/head';
import { iAxios } from 'plugins/axios';
import HeadingSecondary from 'components/HeadingSecondary';
import Card from 'components/Card';
import Modal from "components/Modal";
import Cart from "components/Cart";
import { Product, RecommendationsData, Categories, ProductsData, CategoriesData } from 'interfaces';

export const getServerSideProps = async () => {
    // const [
    //     products,
    //     categories
    // ] = await Promise.all( [
    //     iAxios.get( '/products' ),
    //     iAxios.get( '/categories' )
    // ] );

    const { data: products }: ProductsData   = await iAxios.get( '/products');
    const { data: categories }: CategoriesData = await iAxios.get( '/categories');

    return { 
        props: { 
            products,
            categories
        }
    };
}

const products = ( { products, categories }: InferGetServerSidePropsType<typeof getServerSideProps> ) => {
    const [ showModal, setShowModal ] = useState<boolean>( false );
    const [ recommendedProducts, setRecommendedProducts ] = useState<Product[]>( [] );
    const [ cartItems, setCartItems ] = useState<Product[]>( [] );
    const [ activeCategory, setActiveCategory ] = useState<Categories | '' >( '' );

    console.log('[products]', products);

    const onProductClick = async ( product_id: string ): Promise<void> => {
        const { data }: RecommendationsData = await iAxios.get(`/recommendations?product_id=${ product_id }`);
        const recommendationsIds: string[] = data[0].recommendations;

        const recommendedProducts = recommendationsIds.map(( recoId ): Product => {
            return products.filter( ( { product_id } ) => product_id === recoId )[0];
        } );

        setRecommendedProducts( recommendedProducts );
        setShowModal( true );
    };

    const onAddItem = ( product: Product ): void => {
        const savedItem = cartItems.find( cartItem => cartItem.product_id === product.product_id );

        if ( savedItem ) {
            setCartItems( cartItems.map( cartItem => 
                cartItem.product_id === product.product_id
                    ? { ...savedItem, quantity: savedItem.quantity + 1 }
                    : cartItem
            ));
        }

        else {
            setCartItems( [...cartItems, {...product, quantity: 1 } ] );
        }
    };
    
    const onRemoveItem = ( product: Product ): void => {
        const savedItem = cartItems.find( cartItem => cartItem.product_id === product.product_id );

        if ( savedItem ) {
            savedItem.quantity === 1 
                ? setCartItems( cartItems.filter( cartItem => cartItem.product_id !== product.product_id ) )
                : setCartItems( cartItems.map( cartItem =>
                    cartItem.product_id === product.product_id
                        ? { ...savedItem, quantity: savedItem.quantity - 1 }
                        : cartItem
                ) );
        }
    };

    const filterCategory = (category: Categories) => setActiveCategory( category );

    const productsToDisplay = (): Product[] => {
        const arr = (): Product[] => products.filter( product => {
            if ( product.categories ) {
                return product.categories.find( category => category === activeCategory )
            }
        } );

        return activeCategory !== '' ? arr() : products;
    }

    return (
        <>
            <Head>
                <title>Siempre en Casa - Productos</title>
                <link rel='icon' href='/favicon.ico' />
            </Head>

            <div className="products-page">
                <main className="main-products">
                    <HeadingSecondary text="Productos" />

                    <div className="main-products__filter-wrapper">
                        <span>Filtrar por categoría</span>
                        <div className="main-products__category-btns-wrapper">
                            { categories.map( category =>
                            <button
                                className={ `main-products__category-btn ${ category } ${ activeCategory === category ? 'main-products__category-btn--active' : ''}`}
                                key={ category }
                                onClick={ (): void => filterCategory( category ) }
                            >{ category }</button> ) }
                        </div>
                    </div>
                    
                    <div className="main-products__flex-container">
                        { productsToDisplay().map( ( product ) => (
                        <div className="main-products__card-container" key={ product.name } >
                            <Card
                                product={ product }
                                onAddItem={ onAddItem }
                                onRemoveItem={ onRemoveItem }
                                onProductClick={ onProductClick }
                            />
                        </div> ) ) }
                    </div>
                </main>
                <aside className="aside-cart">
                    <Cart
                        cartItems={ cartItems }
                        onAddItem={ onAddItem }
                        onRemoveItem={ onRemoveItem }
                    />
                </aside>
            </div>

            { showModal &&
            <Modal
                recommendedProducts={ recommendedProducts }
                closeModal={ () => setShowModal( false ) }
                onAddItem={ onAddItem }
                onRemoveItem={ onRemoveItem }
            /> }

            <style jsx>{`
                .products-page {
                    display: flex;
                }

                .main-products {
                    width: 70%;
                    background-color: lightgrey;
                    margin-right: 10px;

                    &__flex-container {
                        display: flex;
                        flex-wrap: wrap;
                        justify-content: center;
                    }

                    &__card-container {
                        flex: 0 0 calc(350px - 20px);
                        margin: 45px;
                    }

                    &__filter-wrapper {
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                    }

                    &__category-btn {
                        padding: 0.5rem 2rem;
                        width: 150px;
                        height: 100%;
                        text-transform: uppercase;

                        &--active {
                            background-color: lightblue;
                        }
                    }
                }

                .aside-cart {
                    width: 30%;
                    background-color: lightgrey;
                    padding: 0 2rem;
                }
            `}</style>
        </>
    )
}

export default products;
