import React, { useState } from 'react';
import { Categories, CategoryProp, Screen } from '@components';
import { HomeHeader } from './components/HomeHeader';

export function HomeScreen() {
  const [categories] = useState<CategoryProp[]>([
    {
      _id: '3',
      name: 'Cortes',
      icon: 'trash',
    },
    {
      _id: '4',
      name: 'Serviços',
      icon: 'bellOn',
    },
    {
      _id: '5',
      name: 'Freestyle',
      icon: 'trash',
    },
    {
      _id: '6',
      name: 'Promoções',
      icon: 'trash',
    },
    {
      _id: '7',
      name: 'Produtos Destaque',
      icon: 'trash',
    },
  ]);

  function handleSelectCategory(categoryId: CategoryProp['_id']) {
    console.log(categoryId);
  }

  return (
    <Screen>
      <HomeHeader />
      <Categories
        categories={categories}
        onSelectCategory={(category: CategoryProp['_id']) =>
          handleSelectCategory(category)
        }
      />
    </Screen>
  );
}
