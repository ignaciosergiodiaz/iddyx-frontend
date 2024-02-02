import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../interfaces/product';


@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(products: Product[], query: string): Product[]  {

    if (!products || !query) {
      return products; // Si no hay productos o la búsqueda está vacía, devolver los productos sin cambios
    }

    const lowerQuery = query.toLowerCase();

    return products.filter(
      (product) =>
        product.title.toLowerCase().includes(lowerQuery) ||
        product.description.toLowerCase().includes(lowerQuery)
      // Puedes agregar más campos según tus necesidades
    );
  }

}
