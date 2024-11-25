import { IShopItem } from "@/app/hooks/useGetProducts";

export const removeObjectById = (array: any[], idToRemove: number) => {
  return array.filter((item: IShopItem) => item.id !== idToRemove);
};

export const updateOrAddItem = (array: any[], newItem: IShopItem) => {
  const index = array.findIndex((item: IShopItem) => item.id === newItem.id);

  if (index !== -1) {
    array[index].count += 1;
  } else {
    array.push({ ...newItem, count: 1 });
  }

  return array;
};

export const increseItem = (array: any[], itemId: number) => {
  const index = array.findIndex((item: IShopItem) => item.id === itemId);
  array[index].count += 1;
  return array;
};

export const decrementItem = (array: any[], itemId: number) => {
  const index = array.findIndex((item: IShopItem) => item.id === itemId);

  if (array[index].count > 1) {
    array[index].count -= 1;
  } else {
    array = removeObjectById(array, itemId);
  }

  return array;
};
