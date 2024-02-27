import { BarberShopCard, Box, Text } from '@components';
import { BarberShop } from '@interfaces';
import React from 'react';
import { FlatList } from 'react-native';

interface BarberOptionsProps {
  data: BarberShop[];
}

export function BarberOptions({ data }: BarberOptionsProps) {
  return (
    <Box mt="s16" pt="s20" mb="s10">
      <Text color="gray3" paddingLeft="s16">
        RECOMENDADOS
      </Text>

      <FlatList
        data={data}
        horizontal
        keyExtractor={item => item.id}
        style={{ marginTop: 20 }}
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={() => <Box width={15} />}
        renderItem={({ item, index }) => (
          <BarberShopCard
            data={item}
            style={{
              marginLeft: index === 0 ? 16 : 0,
              marginRight: index === data.length - 1 ? 16 : 0,
            }}
          />
        )}
      />
    </Box>
  );
}
