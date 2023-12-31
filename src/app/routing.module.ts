import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GithubFollowersComponent } from './github-followers/github-followers.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ProfileFollowerComponent } from './profile-follower/profile-follower.component';
import { PostsComponent } from './posts/posts.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
    { path: "home", 
    component: HomeComponent 
  },
    { path: "followers", 
    component: GithubFollowersComponent 
  },
  { path: "contact-form", 
    component: ContactFormComponent 
  },
    { path: "followers/:id/:username", 
    component: ProfileFollowerComponent 
  },
    { path: "posts",
     component: PostsComponent 
    },
    { path: "**", 
    component: PageNotFoundComponent 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
