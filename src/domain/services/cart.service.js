export function store(shoppingCar, item) {
  const transform = shoppingCar.filter((car) => car.id !== item.id) ?? [];
  const newItem = transform.find((car) => car.id === item.id) ?? item;
  newItem.count = (newItem.count ?? 0) + 1;
  transform.push(newItem);
  localStorage.setItem('shoppingCar_oldvave', JSON.stringify(transform, true));
  return transform;
}

export function remove(shoppingCar, item) {
  const newItem = shoppingCar.find((car) => car.id === item.id) ?? item;
  const transform = shoppingCar.filter((car) => car.id !== item.id);
  newItem.count -= 1;
  if (newItem.count > 0) transform.push(newItem);
  localStorage.setItem('shoppingCar_oldvave', JSON.stringify(transform, true));
  return transform;
}

export function list() {
  return localStorage.getItem('shoppingCar_oldvave') ?? [];
}

export default {
  store,
  remove,
  list,
};
