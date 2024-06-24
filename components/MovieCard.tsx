import { Link } from 'expo-router';
import React from 'react';
import { Card, Image, YStack, Text, Paragraph } from 'tamagui';

import { ResultItem } from '@/interfaces/apiresults';

type MovieCardProps = {
  movie: ResultItem;
};

const MovieCard = ({ movie }: MovieCardProps) => {
  return (
    <Link
      href={`/(drawer)/home/${movie.media_type === 'movie' ? 'movie' : 'movie'}/${movie.id}`}
      asChild>
      <Card
        elevate
        width={150}
        height={260}
        scale={0.9}
        hoverStyle={{ scale: 0.975 }}
        pressStyle={{ scale: 0.975 }}
        animation="bouncy">
        <Card.Header p={0}>
          <Image
            source={{ uri: `https://image.tmdb.org/t/p/w200/${movie.poster_path}` }}
            alt={movie.title}
            style={{ width: 150, height: 200 }}
          />
        </Card.Header>
        <Card.Footer p={8}>
          <YStack>
            <Text fontSize={12} color="lightblue">
              {movie.title || movie.name}
            </Text>
            <Paragraph theme={'alt2'}>
              {new Date(movie.release_date! || movie.first_air_date!).getFullYear()}
            </Paragraph>
          </YStack>
        </Card.Footer>
      </Card>
    </Link>
  );
};

export default MovieCard;
