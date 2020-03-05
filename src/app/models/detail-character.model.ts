import { LocationModel } from './location.model';

export interface DetailCharacterModel {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: LocationModel;
  location: LocationModel;
  image: string;
  episode: string[];
  url: string;
  created: string;
}
