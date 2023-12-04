import { create } from 'zustand';
import { CategoryService } from './categoryTypes';

const categoryStore = create<CategoryService>(set => ({
  category: null,
  handleCategory: category => set({ category }),
}));

export function useCategoryZustand(): CategoryService['category'] {
  return categoryStore(state => state.category);
}

export function useCategoryServiceZustand(): Pick<
  CategoryService,
  'handleCategory'
> {
  const handleCategory = categoryStore(state => state.handleCategory);

  return {
    handleCategory,
  };
}
