export let GetBasketTotal = basket =>
  basket.reduce((amount, item) => item.price + amount, 0);
