import { useGetFilmsTopQuery } from '../../../services/kinopoiskAPI';

const MoviesListTop = () => {
  const { data, error, isLoading } = useGetFilmsTopQuery('TOP_POPULAR_ALL', 1);
  console.log(data, error, isLoading);

  return <>MoviesListTop</>;
};

export default MoviesListTop;
