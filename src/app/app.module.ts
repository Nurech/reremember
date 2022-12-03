import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { HomeComponent } from './components/home/home.component';
import { AppRoutingModule } from './modules/app-routing.module';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { StoreModule } from '@ngrx/store';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HeaderComponent } from './components/header/header.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';
import { NgxTypedJsModule } from 'ngx-typed-js';
import { StatsComponent } from './components/stats/stats.component';
import { TrainComponent } from './components/train/train.component';
import { LearnComponent } from './components/learn/learn.component';
import { NgxEchartsModule } from 'ngx-echarts';
import { ResultsComponent } from './components/results/results.component';
import { BarComponent } from './components/charts/bar/bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
    HeaderComponent,
    StatsComponent,
    TrainComponent,
    LearnComponent,
    ResultsComponent,
    BarComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    AppRoutingModule,
    StoreModule.forRoot({}, {}),
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatMenuModule,
    MatChipsModule,
    MatDividerModule,
    NgxTypedJsModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts')
    }),
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
