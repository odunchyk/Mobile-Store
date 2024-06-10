import { Product } from '../types/Product';

export const fetchProducts = (
  url: string,
  property?: keyof Product,
  value?: unknown,
): Promise<Product[]> => {
  return fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error();
      }

      return response.json();
    })
    .then((data: Product[]) => {
      if (property && value) {
        return data.filter(product => product[property] === value);
      }

      return data;
    });
};
