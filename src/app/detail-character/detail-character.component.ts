import { Component, OnInit } from '@angular/core';
import { DetailCharacterModel } from '../models/detail-character.model';
import { ActivatedRoute } from '@angular/router';
import {CharacterService} from "../services/character.service";

@Component({
  selector: 'app-detail-character',
  templateUrl: './detail-character.component.html',
  styleUrls: ['./detail-character.component.scss']
})
export class DetailCharacterComponent implements OnInit {

  detailCharacter: DetailCharacterModel;

  constructor(private characterService: CharacterService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.loadSingleCharacter('https://rickandmortyapi.com/api/character/'+id);
  }

  loadSingleCharacter (url: string) {
    this.characterService.getSingleCharacterFromServer(url)
      .subscribe(
        (response) => {
          this.detailCharacter = response;
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );
  }

}
