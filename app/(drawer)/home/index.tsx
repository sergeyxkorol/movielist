import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { ImageBackground } from 'react-native';
import { Input, YStack } from 'tamagui';

import { getTrending } from '@/services/api';
import { Container, Main, Title } from '@/tamagui.config';

const Home = () => {
  const trendingQuery = useQuery({ queryKey: ['trending'], queryFn: () => getTrending() });

  return (
    <Main>
      <ImageBackground
        source={{
          uri: 'https://image.tmdb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,032541,01b4e4)/ghQrKrcEpAlkzBuNoOCSxHQXWqw.jpg',
        }}
        style={{ width: '100%', height: 200 }}>
        <Container>
          <YStack>
            <Title
              color="#fff"
              enterStyle={{
                opacity: 0,
                scale: 1.5,
                y: -10,
              }}
              animation="quick">
              Trending
            </Title>
            <Input placeholder="Search" />
          </YStack>
        </Container>
      </ImageBackground>
    </Main>
  );
};

export default Home;
