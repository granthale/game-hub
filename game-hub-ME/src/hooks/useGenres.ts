import genres from "../data/genres";

export interface Genre {
    id: number;
    name: string;
    image_background: string;
}

const useGenres = () => {
  
  return { genres:genres, error:null, isLoading:false };
};

export default useGenres;
