export interface Game {
  id: number;
  title: string;
  description?: string;
  release_date?: Date;
  image: string;
  rating: Float64Array;
  downloads: number;
  coming_soon: boolean;
  user_id?: number;
}
