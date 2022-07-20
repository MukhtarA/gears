export const computedCardPrice = (cart) => cart.reduce((acc, item) => acc + item?.data?.price * item.count, 0)

export const computedCardItemsAmount = (cart) => cart.reduce((acc, item) => acc + item.count, 0)
