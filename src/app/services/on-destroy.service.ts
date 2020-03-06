import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OnDestroyService {

  private _statusFilter: string = '';
  private _genderFilter: string = '';
  private _currentPage: number = 1;

  constructor() { }

  get statusFilter(): string {
    return this._statusFilter;
  }

  set statusFilter(value: string) {
    this._statusFilter = value;
  }

  get genderFilter(): string {
    return this._genderFilter;
  }

  set genderFilter(value: string) {
    this._genderFilter = value;
  }

  get currentPage(): number {
    return this._currentPage;
  }

  set currentPage(value: number) {
    this._currentPage = value;
  }
}
