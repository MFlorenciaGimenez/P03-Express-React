import { MenuItems } from "../entities/MenuItems";
import { menuItemsRepository } from "../repositories/indexRepository";
import { ImenuDto } from "../dtos/Imenu.Dto";

export const getAllItems = async (): Promise<MenuItems[]> => {
  return await menuItemsRepository.find();
};
export const createMenuItem = async (data: ImenuDto): Promise<MenuItems> => {
  const menuItem = menuItemsRepository.create(data);
  const savedItems = await menuItemsRepository.save(menuItem);
  return savedItems;
};
