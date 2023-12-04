import { CategoryProp } from '@components';

export interface CategoryService {
  category: CategoryProp | null;
  handleCategory: (category: CategoryProp) => void;
}
