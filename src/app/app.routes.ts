import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CatalogComponent } from './pages/catalog/catalog.component';
import { ApplicationsComponent } from './pages/applications/applications.component';
import { FaqComponent } from './pages/faq/faq.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, 
  { path: 'home', component: HomeComponent },
  { path: 'catalog', component: CatalogComponent },
  { path: 'applications', component: ApplicationsComponent },
  { path: 'FAQ', component: FaqComponent },
  { path: '**', redirectTo: '/home' }
];
