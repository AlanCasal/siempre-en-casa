export interface ProductsData {
    data: Product[];
};
export interface Product {
    allowed_packs      : number[];
    categories         : string[];
    compare_at_price   : string;
    description        : string;
    discount_percentage: number;
    handle             : string;
    image_url          : string;
    list_price_id      : string;
    name               : string;
    price_per_litre    : string;
    price_per_unit     : string;
    product_id         : string;
    size               : number;
    sku                : string;
    total_price        : string;
    units_per_pack     : number;
    variant_id         : string;
    quantity?          : number;
};

export interface RecommendationsData {
    data: Recommendations;
};
export interface Recommendations {
    product_id: string;
    recommendations: string[];
};

export interface CardProps {
    title: string;
    image: string;
    description: string;
    product_id: string;
    handleProductClick?: Function;
};

export interface CategoriesData {
    data: Categories[];
};
export enum Categories {
    aguas       = 'aguas',
    vinos       = 'vinos',
    cervezas    = 'cervezas',
    gaseosas    = 'gaseosas',
    masvendidos = 'mas vendidos',
};
