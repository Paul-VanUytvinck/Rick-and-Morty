import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-filter-character',
  templateUrl: './filter-character.component.html',
  styleUrls: ['./filter-character.component.scss']
})
export class FilterCharacterComponent implements OnInit {

  characterFilter = new FormGroup({
    statusFilter: new FormControl(''),
    genderFilter: new FormControl(''),
  });
  @Output() filter = new EventEmitter<FormGroup>();

  constructor() { }

  ngOnInit(): void {
    this.onSubmit();
  }

  onSubmit() {
    this.filter.emit(this.characterFilter);
  }

}
