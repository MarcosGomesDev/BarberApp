import React, { useEffect, useState } from 'react';
import { Category } from './components';
import { FlatList } from 'react-native';
import data from '../../screens/app/HomeScreen/categories.json';
import { useCategoryService } from '@services';
export interface CategoryProp {
  _id: string;
  name: string;
  icon: string;
  type: string;
}

export function Categories() {
  const [categories, setCategories] = useState<CategoryProp[]>([]);
  const [selectedCategory, setSelectedCategory] =
    useState<CategoryProp['type']>();

  const { handleCategory } = useCategoryService();

  useEffect(() => {
    (async () => {
      setCategories(data);
      setSelectedCategory(data[0].type);
      handleCategory(data[0]);
    })();
  }, [handleCategory]);

  const handleSelectionCategory = (category: CategoryProp) => {
    if (category.type === selectedCategory) {
      return;
    }

    handleCategory(category);
    setSelectedCategory(category.type);
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
          onPress={() => handleSelectionCategory(category)}
          isSelected={selectedCategory === category.type}
        />
      )}
    />
  );
}
