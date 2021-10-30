export interface TvSeriesApiInterface{
  page: number;
  results: OneTvShowInterface [];
  total_pages: number;
  total_results: number;
}

export interface OneTvShowInterface{
  poster_path: string;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  name: string;
  origin_country: string;
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  vote_average: number;
  vote_count: number;
}
