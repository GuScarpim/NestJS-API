import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuotesRoutingModule } from './quotes-routing.module';
import { QuotesComponent } from './quotes.component';
import { MaterialModule } from '../material.module';

@NgModule({
  declarations: [QuotesComponent],
  imports: [
    CommonModule,
    QuotesRoutingModule,
    MaterialModule,
  ]
})
export class QuotesModule { }
