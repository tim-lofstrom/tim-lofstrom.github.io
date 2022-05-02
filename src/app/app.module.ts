import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule, SecurityContext } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MarkdownModule } from 'ngx-markdown';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HemComponent } from './pages/hem/hem.component';
import { KontaktComponent } from './pages/kontakt/kontakt.component';
import { KyrkanComponent } from './pages/kyrkan/kyrkan.component';
import { SamfallighetComponent } from './pages/samfallighet/samfallighet.component';

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
    HttpClientModule,
    MarkdownModule.forRoot({ loader: HttpClient })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
