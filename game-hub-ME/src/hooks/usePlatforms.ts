import platforms from '../data/platforms';

export interface Platform {
    id: number;
    name: string;
    slug: string;
}

    const usePlatforms = (selectedPlatform: Platform | null) => {
    return {platforms:platforms, error:null, isLoading:false};
}

export default usePlatforms;