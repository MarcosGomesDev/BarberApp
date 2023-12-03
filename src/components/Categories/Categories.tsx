import React, { useState } from 'react';
import { Category } from './components';
import { FlatList } from 'react-native';
import { IconName } from '../Icon/Icon';

export interface CategoryProp {
  _id: string;
  name: string;
  icon: IconName;
}

interface CategoriesProps {
  categories: CategoryProp[];
  onSelectCategory: (categoryId: CategoryProp['_id']) => void;
}

export function Categories({ categories, onSelectCategory }: CategoriesProps) {
  const [selectedCategory, setSelectedCategory] = useState<CategoryProp['_id']>(
    categories[0]._id,
  );

  const handleSelectionCategory = (categoryId: CategoryProp['_id']) => {
    if (categoryId === selectedCategory) {
      return;
    }
    onSelectCategory(categoryId);
    setSelectedCategory(categoryId);
  };

  return (
    <FlatList
      data={categories}
      keyExtractor={category => category._id}
      horizontal
      contentContainerStyle={{ paddingRight: 24 }}
      showsHorizontalScrollIndicator={false}
      renderItem={({ item: category }) => (
        <Category
          label={category.name}
          icon={category.icon}
          onPress={() => handleSelectionCategory(category._id)}
          isSelected={selectedCategory === category._id}
        />
      )}
    />
  );
}
