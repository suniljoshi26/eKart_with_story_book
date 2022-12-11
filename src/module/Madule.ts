export type ProductProps = {
  title: string;
  price: number;
  thumbnail: string;
  key: number;
  id: number;
  //rating: number;
  category: string;
};

export type ProductListProps = {
  product: [
    {
      title: string;
      price: number;
      thumbnail: string;
      id: number;
      category: string;
    }
  ];
};
export type ProductDataType = {
  meta: { last_page: number };
  data: [
    {
      brand: string;
      category: string;
      description: string;
      discount_percentage: number;
      id: number;
      images: string;
      price: number;
      rating: number;
      stock: number;
      thumbnail: string;
      title: string;
    }
  ];
};
