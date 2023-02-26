import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageComponent } from './pages/page/page.component';
import { PostsComponent } from './pages/posts/posts.component';

const routes: Routes = [
    {
        path: '',
        component: PageComponent
    },
    {
        path: ':page',
        component: PageComponent
    },
    {
        path: 'posts/:name',
        component: PostsComponent
    }
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
