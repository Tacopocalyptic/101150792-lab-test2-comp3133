import { Routes } from '@angular/router';
import { CharacterListComponent } from './character-list/character-list.component';
import { CharacterFilterComponent } from './character-filter/character-filter.component';
import { CharacterDetailsComponent } from './character-details/character-details.component';

export const routes: Routes = [
    {path: '', component: CharacterListComponent},
    {path: 'filter', component: CharacterFilterComponent},
    {path: 'details/:id', component: CharacterDetailsComponent},
];
