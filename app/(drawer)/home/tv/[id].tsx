import { useLocalSearchParams } from 'expo-router';
import React from 'react';

import DetailsPage from '@/components/DetailsPage';
import { MediaType } from '@/interfaces/apiresults';

const Page = () => {
  const { id } = useLocalSearchParams<{ id: string }>();

  if (id === undefined) {
    return null;
  }

  return <DetailsPage id={id} mediaType={MediaType.TV} />;
};

export default Page;
