import { MenuItems } from "../entities/MenuItems";
import { menuItemsRepository } from "../repositories/indexRepository";

export const getAllItems = async (): Promise<MenuItems[]> => {
  return await menuItemsRepository.find();
};
