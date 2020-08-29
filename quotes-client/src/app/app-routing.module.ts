import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  { path: 'quotes', loadChildren: () => import('./quotes/quotes.module').then(m => m.QuotesModule) },
  { path: 'edit', loadChildren: () => import('./edit-quote/edit-quote.module').then(m => m.EditQuoteModule) },
  { path: 'edit/:id', loadChildren: () => import('./edit-quote/edit-quote.module').then(m => m.EditQuoteModule) }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
