import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommunityComponent } from './community/community.component';
import { HomeComponent } from './home/home.component';
import { PersonalsComponent } from './personals/personals.component';
import { HousingComponent } from './housing/housing.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { NewPostComponent } from './new-post/new-post.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'community',
    component: CommunityComponent
  },
  {
    path: 'personals',
    component: PersonalsComponent
  },
  {
    path: 'housing',
    component: HousingComponent
  },
  {
    path: ':category/posts/:id',
    component: PostDetailComponent
  },
  {
    path: 'newpost',
    component: NewPostComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
