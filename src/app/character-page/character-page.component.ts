import { Component, OnInit, OnDestroy } from '@angular/core';
import {CharacterService} from "../services/character.service";
import {CharacterPageModel} from "../models/character-page.model";
import { FormGroup } from '@angular/forms';
import { OnDestroyService } from '../services/on-destroy.service';

@Component({
  selector: 'app-character-page',
  templateUrl: './character-page.component.html',
  styleUrls: ['./character-page.component.scss']
})
export class CharacterPageComponent implements OnInit, OnDestroy {

  characterPage: CharacterPageModel;
  currentPage: number;
  statusFilter: string;
  genderFilter: string;

  constructor(private characterService: CharacterService, private onDestroyService: OnDestroyService) { }

  ngOnInit() {
    this.currentPage = this.onDestroyService.currentPage;
  }

  ngOnDestroy(): void {
    this.onDestroyService.currentPage = this.currentPage;
  }

  loadCharacterPage(url: string) {
    this.characterService.getFilteredCharacterPageFromServer(url, this.statusFilter, this.genderFilter)
      .subscribe(
        (response) => {
          this.characterPage = response;
          this.updateCurrentPage(url);
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );
  }

  updateCurrentPage(url: string) {
    this.currentPage = this.characterPage.info.prev==''?1:(this.characterPage.info.next==''?this.characterPage.info.pages:this.getPageFromUrl(url));
  }

  getPageFromUrl(url: string) :number{
    return Number(url.replace('https://rickandmortyapi.com/api/character/?page=',''));
  }

  goToSpecifiedPage(page: number) {
    this.loadCharacterPage('https://rickandmortyapi.com/api/character/?page='+page);
  }

  isFirstPage() {
    return this.characterPage==null?true:(this.characterPage.info.prev==''?true:false);
  }

  isLastPage() {
    return this.characterPage==null?true:(this.characterPage.info.next==''?true:false);
  }

  onFilter(characterFilter: FormGroup) {
    this.statusFilter=characterFilter.get('statusFilter').value;
    this.genderFilter=characterFilter.get('genderFilter').value;
    this.goToSpecifiedPage(1);
  }

  onFilterInit(characterFilter: FormGroup) {
    this.statusFilter=characterFilter.get('statusFilter').value;
    this.genderFilter=characterFilter.get('genderFilter').value;
    this.goToSpecifiedPage(this.currentPage);
  }

}
