import { useGetFilmsTopQuery } from '../../../services/kinopoiskAPI';

const MoviesListTop = () => {
  const { data, error, isLoading } = useGetFilmsTopQuery({
    type: 'TOP_POPULAR_ALL',
    page: 1,
  });
  console.log(data, error, isLoading);

  return <>MoviesListTop</>;
};

export default MoviesListTop;
