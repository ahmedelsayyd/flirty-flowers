import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FeaturedComponent } from './featured/featured.component';
import { GalleryComponent } from './gallery/gallery.component';
import { GalleryItemComponent } from './gallery/gallery-item/gallery-item.component';
import { NgGxSplitTextModule } from 'ng-gx-split-text';
import { ObserveVisibilityDirective } from './shared/directives/observe-visibility.directive';
import {IntersectionObserverModule}  from '@ng-web-apis/intersection-observer';
import { CustomCursorComponent } from './shared/custom-cursor/custom-cursor.component'

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    AboutComponent,
    NavbarComponent,
    FeaturedComponent,
    GalleryComponent,
    GalleryItemComponent,
    ObserveVisibilityDirective,
    CustomCursorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgGxSplitTextModule,
    IntersectionObserverModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
