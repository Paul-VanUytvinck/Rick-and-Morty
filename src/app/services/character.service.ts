import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CharacterPageModel } from '../models/character-page.model';
import { DetailCharacterModel } from '../models/detail-character.model';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
constructor(private httpClient: HttpClient) { }

  getFilteredCharacterPageFromServer(url: string, statusFilter: string, genderFilter: string) {
    return this.httpClient.get<CharacterPageModel>(url.concat(!statusFilter?(!genderFilter?'':'&gender='+genderFilter):(!genderFilter?'&status='+statusFilter:'&status='+statusFilter+'&gender='+genderFilter)));
  }

  getSingleCharacterFromServer(url: string) {
    return this.httpClient.get<DetailCharacterModel>(url);
  }

}
