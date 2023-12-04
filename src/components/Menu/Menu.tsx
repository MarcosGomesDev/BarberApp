import React from 'react';
import { FlatList } from 'react-native';
import { Box } from '../Box/Box';
import { MenuItem, MenuItemProps } from './components';
import { useCategory } from '@services';

function SeparateItem() {
  return <Box borderWidth={0.2} borderColor="gray3" />;
}

export function Menu() {
  const data: MenuItemProps['item'][] = [
    {
      _id: '1',
      title: 'Corte Padrão',
      description: 'Corte com máquina e tesoura',
      type: 'cortes',
      price: '30,00',
    },
    {
      _id: '2',
      title: 'Barba Padrão',
      description: 'Barba padrão',
      type: 'cortes',
      price: '30,00',
    },
    {
      _id: '3',
      title: 'Platinado',
      description: 'Descoloração bla bla bla',
      price: '30,00',
      type: 'cortes',
    },
    {
      _id: '4',
      title: 'Desenho',
      description: 'Desenho no cabelo',
      price: '20,00',
      type: 'other',
    },
    {
      _id: '5',
      title: 'Sombrancelha',
      description: 'Sombrancelha',
      price: '5,00',
      type: 'service',
    },
    {
      _id: '6',
      title: 'Corte Navalhado',
      description: 'Corte com navalha',
      price: '40,00',
      type: 'cortes',
    },
    {
      _id: '7',
      title: 'Corte + Barba',
      description: 'Corte + Barba Padrão',
      price: '50,00',
      type: 'promotion',
    },
    {
      _id: '8',
      title: 'Gel',
      description: 'Gel Cola',
      price: '30,00',
      type: 'product',
    },
  ];

  const category = useCategory();

  const filteredData = data.filter(item =>
    category ? item.type === category.type : item.type,
  );

  return (
    <Box>
      <FlatList
        data={filteredData}
        scrollEnabled={false}
        keyExtractor={item => item._id}
        contentContainerStyle={{ marginBottom: 20 }}
        ItemSeparatorComponent={() => SeparateItem()}
        renderItem={({ item }) => <MenuItem item={item} />}
      />
    </Box>
  );
}
