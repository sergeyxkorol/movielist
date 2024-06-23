import { Link } from 'expo-router';
import React from 'react';
import { View, Text } from 'react-native';
import { Card } from 'tamagui';

import { Title } from '~/tamagui.config';

const Home = () => {
  return (
    <View>
      <Title>Home</Title>
      <Link href={'/(drawer)/home/movie/1'} asChild>
        <Text>Movie 1</Text>
      </Link>
      <Card>
        <Card.Header>
          <Text>Movie List Header</Text>
        </Card.Header>
        <Card.Footer />
        <Card.Background />
      </Card>
    </View>
  );
};

export default Home;
