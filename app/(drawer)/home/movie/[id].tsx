import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import { View, Text } from 'react-native';

const Page = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  console.log('ID:::', id);

  return (
    <View>
      <Text>Page {id}</Text>
    </View>
  );
};

export default Page;
