import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { MakeATransferComponent } from './make-a-transfer/make-a-transfer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RecentTransactionsComponent } from './recent-transactions/recent-transactions.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MakeATransferComponent,
    RecentTransactionsComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
