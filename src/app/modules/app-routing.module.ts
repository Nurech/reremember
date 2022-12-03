import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { PageNotFoundComponent } from '../components/page-not-found/page-not-found.component';
import { StatsComponent } from '../components/stats/stats.component';
import { LearnComponent } from '../components/learn/learn.component';
import { TrainComponent } from '../components/train/train.component';


const routes: Routes = [
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, data: { animation: 'HomePage' } },
  { path: 'stats', component: StatsComponent, data: { animation: 'StatsPage' } },
  { path: 'learn', component: LearnComponent, data: { animation: 'LearnPage' } },
  { path: 'train', component: TrainComponent, data: { animation: 'TrainPage' } },
  { path: '**', component: PageNotFoundComponent, data: { animation: 'NotFoundPage' } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
