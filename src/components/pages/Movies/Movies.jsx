import useMoviesQuery from '@/hooks/useMoviesQuery';
import { Link, Stack } from '@mui/material';
import BearCarousel, { BearSlideImage } from 'bear-react-carousel';
import { Link as RouterLink } from 'react-router-dom';

import ErrorMessage from '../../UI/ErrorMessage';

const Movies = () => {
  const {
    isLoading,
    hasError,
    responsePopular,
    responseBest,
    responseFilms,
    responseSerials,
    responseCartoons,
  } = useMoviesQuery();

  if (isLoading) return <p>Loading...</p>;

  if (hasError) return <ErrorMessage />;

  const serializeDataForCarousel = data =>
    data.map(row => (
      <RouterLink key={row.id} to={`/movie/${row.kinopoiskId}`}>
        <BearSlideImage imageUrl={row.posterUrlPreview} />
      </RouterLink>
    ));

  const carouselArr = [
    {
      title: 'Популярные фильмы',
      url: '/popular',
      data: serializeDataForCarousel(responsePopular.data.items),
    },
    {
      title: 'Лучшие фильмы',
      url: '/best',
      data: serializeDataForCarousel(responseBest.data.items),
    },
    {
      title: 'Фильмы',
      url: '/films',
      data: serializeDataForCarousel(responseFilms.data.items),
    },
    {
      title: 'Сериалы',
      url: '/serials',
      data: serializeDataForCarousel(responseSerials.data.items),
    },
    {
      title: 'Мультфильмы',
      url: '/cartoons',
      data: serializeDataForCarousel(responseCartoons.data.items),
    },
  ];

  return (
    <>
      {carouselArr.map(carousel => (
        <Stack key={carousel.title}>
          <Link
            sx={{ mb: 2, mt: 2 }}
            variant="h4"
            component={RouterLink}
            to={carousel.url}
          >
            {carousel.title}
          </Link>
          <BearCarousel
            data={carousel.data}
            slidesPerView={1}
            slidesPerGroup={1}
            isEnableNavButton
            isEnableLoop
            isEnableAutoPlay
            autoPlayTime={3000}
            breakpoints={{
              375: {
                autoPlayTime: 0,
              },
              768: {
                slidesPerView: 5,
              },
            }}
          />
        </Stack>
      ))}
    </>
  );
};

export default Movies;
