import React, { useState } from 'react';
import { Category } from './components';
import { FlatList } from 'react-native';

export interface CategoryProp {
  _id: string;
  name: string;
  icon: string;
  type: 'cortes' | 'service' | 'product' | 'other' | 'promotion';
}

interface CategoriesProps {
  categories: CategoryProp[];
  onSelectCategory: (categoryId: CategoryProp['type']) => void;
}

export function Categories({ categories, onSelectCategory }: CategoriesProps) {
  const [selectedCategory, setSelectedCategory] = useState<
    CategoryProp['type']
  >(categories[0].type);

  const handleSelectionCategory = (categoryId: CategoryProp['type']) => {
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
      contentContainerStyle={{ paddingVertical: 8, paddingHorizontal: 0 }}
      showsHorizontalScrollIndicator={false}
      renderItem={({ item: category, index }) => (
        <Category
          style={{
            marginLeft: index === 0 && 0,
            marginRight: index === categories.length - 1 && 0,
          }}
          label={category.name}
          icon={category.icon}
          onPress={() => handleSelectionCategory(category.type)}
          isSelected={selectedCategory === category.type}
        />
      )}
    />
  );
}
