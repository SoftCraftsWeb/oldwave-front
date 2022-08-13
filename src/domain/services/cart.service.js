export function store(shoppingCar, item) {
  const transform = shoppingCar.filter((car) => car.slug !== item.slug) ?? [];
  const newItem = transform.find((car) => car.slug === item.slug) ?? item;
  newItem.count = (newItem.count ?? 0) + 1;
  transform.push(newItem);
  localStorage.setItem('shoppingCar_oldvave', JSON.stringify(transform, true));
  return transform;
}

export function remove(shoppingCar, item) {
  const newItem = shoppingCar.find((car) => car.slug === item.slug) ?? item;
  const transform = shoppingCar.filter((car) => car.slug !== item.slug);
  newItem.count -= 1;
  if (newItem.count > 0) transform.push(newItem);
  localStorage.setItem('shoppingCar_oldvave', JSON.stringify(transform, true));
  return transform;
}

export function list() {
  return JSON.parse(localStorage.getItem('shoppingCar_oldvave')) ?? [];
}

export default {
  store,
  remove,
  list,
};
