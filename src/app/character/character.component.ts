import { Component, OnInit, Input } from '@angular/core';
import { CharacterListModel } from '../models/character-list.model';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit {

  @Input('character') character: CharacterListModel;

  constructor() { }

  ngOnInit(): void {
  }

}
