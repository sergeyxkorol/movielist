import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { ImageBackground } from 'react-native';
import { Input, ScrollView, Spinner, YStack } from 'tamagui';

import MovieCard from '@/components/MovieCard';
import { getSearchResults, getTrending } from '@/services/api';
import { Container, Main, Subtitle, Title } from '@/tamagui.config';
import useDebounce from '@/utils/useDebounce';

const Home = () => {
  const [search, setSearch] = useState('');
  const debouncedSearch = useDebounce(search, 500);

  const trendingQuery = useQuery({ queryKey: ['trending'], queryFn: () => getTrending() });

  const searchQuery = useQuery({
    queryKey: ['search', debouncedSearch],
    queryFn: () => getSearchResults(debouncedSearch),
    enabled: !!debouncedSearch,
  });

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
            <Input
              placeholder="Search for a movie, TV show, person..."
              placeholderTextColor="#fff"
              borderWidth={1}
              size="$4"
              value={search}
              onChangeText={setSearch}
            />
          </YStack>
        </Container>
      </ImageBackground>

      <Subtitle p={10}>Trending</Subtitle>

      {trendingQuery.isLoading ||
        (searchQuery.isLoading && <Spinner size="large" color="$blue10" />)}

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        py={40}
        contentContainerStyle={{ gap: 14, paddingLeft: 14 }}>
        {trendingQuery.data?.results?.map(item => <MovieCard key={item.id} movie={item} />)}
      </ScrollView>
    </Main>
  );
};

export default Home;
