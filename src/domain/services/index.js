import ItemService from 'domain/services/item.service';
import CarService from 'domain/services/cart.service';
import CategoryService from 'domain/services/category.service';
import AuthService from 'domain/services/auth.service';
import TransactionService from 'domain/services/transaction.service';

export default {
  item: ItemService,
  car: CarService,
  category: CategoryService,
  auth: AuthService,
  transactions: TransactionService,
};
