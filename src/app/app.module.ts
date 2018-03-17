import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import {ArticlesService} from './articles.service';
import { SearchfiltersPipe } from './searchfilters.pipe';
import { OrderByPipe } from './order-by.pipe';
import {Ng2PaginationModule} from 'ng2-pagination';

@NgModule({
  declarations: [
    AppComponent,
    SearchfiltersPipe,
    OrderByPipe
  ],
  imports: [
    BrowserModule,
	HttpModule,
	FormsModule,
	Ng2PaginationModule
  ],
  providers: [ArticlesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
