import { CategoryService } from './categoryTypes';
import {
  useCategoryServiceZustand,
  useCategoryZustand,
} from './useCategoryZustand';

export function useCategory(): CategoryService['category'] {
  return useCategoryZustand();
}

export function useCategoryService(): Pick<CategoryService, 'handleCategory'> {
  return useCategoryServiceZustand();
}
