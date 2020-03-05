import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CharacterPageComponent } from './character-page/character-page.component';
import { HttpClientModule } from '@angular/common/http';
import { CharacterComponent } from './character/character.component';
import { DetailCharacterComponent } from './detail-character/detail-character.component';
import { Routes, RouterModule } from '@angular/router';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { FilterCharacterComponent } from './filter-character/filter-character.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const appRoutes: Routes = [
  { path: 'characters', component: CharacterPageComponent },
  { path: 'characters/:id', component: DetailCharacterComponent },
  { path: 'not-found', component: FourOhFourComponent },
  { path: '', redirectTo: 'characters', pathMatch: 'full' },
  { path: '**', redirectTo: 'not-found' }
];

@NgModule({
  declarations: [
    AppComponent,
    CharacterPageComponent,
    CharacterComponent,
    DetailCharacterComponent,
    FourOhFourComponent,
    FilterCharacterComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
