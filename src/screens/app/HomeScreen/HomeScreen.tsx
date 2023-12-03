import React, { useState } from 'react';
import { Categories, CategoryProp, Menu, Screen } from '@components';
import { HomeHeader } from './components/HomeHeader';
import { ScrollView } from 'react-native';
import { HomeFooter } from './components/HomeFooter';

export function HomeScreen() {
  const [categories] = useState<CategoryProp[]>([
    {
      _id: '3',
      name: 'Cortes',
      icon: '💇🏻‍♂️',
      type: 'cortes',
    },
    {
      _id: '4',
      name: 'Serviços',
      icon: '✂',
      type: 'service',
    },
    {
      _id: '5',
      name: 'Freestyle',
      icon: '✍🏻',
      type: 'other',
    },
    {
      _id: '6',
      name: 'Promoções',
      icon: '🏷',
      type: 'promotion',
    },
    {
      _id: '7',
      name: 'Produtos Destaque',
      icon: '🎁',
      type: 'product',
    },
  ]);

  const [selectedCategory, setSelectedCategory] = useState<
    CategoryProp['type']
  >(categories[0].type);

  function handleSelectCategory(category: CategoryProp['type']) {
    setSelectedCategory(category);
  }

  return (
    <Screen flex={1} style={{ paddingBottom: 0 }}>
      <HomeHeader />
      <ScrollView
        contentContainerStyle={{ paddingVertical: 8 }}
        showsVerticalScrollIndicator={false}>
        <Categories
          categories={categories}
          onSelectCategory={(category: CategoryProp['type']) =>
            handleSelectCategory(category)
          }
        />
        <Menu categoryMenu={selectedCategory} />
      </ScrollView>
      <HomeFooter />
    </Screen>
  );
}
