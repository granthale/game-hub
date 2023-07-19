import useData from "./useData";
import { Game } from "./useGames";

export interface Genre {
    id: number;
    name: string;
    image_background: string;
}

const useGenres = () => {
  const {data: genres, error, isLoading} = useData<Genre>("/genres");

  return { genres, error, isLoading };
};

export default useGenres;
