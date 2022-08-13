import ItemService from 'domain/services/item.service';
import CarService from 'domain/services/cart.service';
import CategoryService from 'domain/services/category.service';

export default {
  item: ItemService,
  car: CarService,
  category: CategoryService,
};
