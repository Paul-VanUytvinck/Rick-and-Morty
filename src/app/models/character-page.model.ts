import {CharacterListModel} from "./character-list.model";
import { InfoModel } from './info.model';

export interface CharacterPageModel {
  info: InfoModel;
  results: CharacterListModel[];
}
