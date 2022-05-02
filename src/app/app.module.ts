import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MarkdownModule } from 'ngx-markdown';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HemComponent } from './hem/hem.component';
import { KontaktComponent } from './kontakt/kontakt.component';
import { KyrkanComponent } from './kyrkan/kyrkan.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SamfallighetComponent } from './samfallighet/samfallighet.component';

@NgModule({
  declarations: [
    AppComponent,
    KontaktComponent,
    NavbarComponent,
    HeaderComponent,
    KyrkanComponent,
    SamfallighetComponent,
    HemComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MarkdownModule.forRoot({ loader: HttpClient })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
