import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import {CharacterService} from "../services/character.service";
import {OnDestroyService} from "../services/on-destroy.service";

@Component({
  selector: 'app-filter-character',
  templateUrl: './filter-character.component.html',
  styleUrls: ['./filter-character.component.scss']
})
export class FilterCharacterComponent implements OnInit, OnDestroy {

  characterFilter = new FormGroup({});
  @Output() filter_init = new EventEmitter<FormGroup>();
  @Output() filter = new EventEmitter<FormGroup>();

  constructor(private onDestroyService: OnDestroyService) { }

  ngOnInit(): void {
    this.characterFilter = new FormGroup({
      statusFilter: new FormControl(this.onDestroyService.statusFilter),
      genderFilter: new FormControl(this.onDestroyService.genderFilter),
    });
    this.onInit();
  }

  ngOnDestroy(): void {
    this.onDestroyService.statusFilter = this.characterFilter.get('statusFilter').value;
    this.onDestroyService.genderFilter = this.characterFilter.get('genderFilter').value;
  }

  onSubmit() {
    this.filter.emit(this.characterFilter);
  }

  onInit() {
    this.filter_init.emit(this.characterFilter);
  }

}
