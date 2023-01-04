export interface Movie {
  oscarYear: number;
  title: string;
  localTitle: string;
  poster: string;
  imdbID: string;
  runtimeMin: number;
  genres: string[];
  awards: { shortName: string; nominee: string; winner: boolean }[];
  actors: { name: string; nameID: string }[];
  directors: { name: string; nameID: string }[];
}
