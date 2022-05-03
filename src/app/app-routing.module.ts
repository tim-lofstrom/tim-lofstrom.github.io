import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HemComponent } from './pages/hem/hem.component';
import { KontaktComponent } from './pages/kontakt/kontakt.component';
import { KyrkanComponent } from './pages/kyrkan/kyrkan.component';
import { PostsComponent } from './pages/posts/posts.component';
import { SamfallighetComponent } from './pages/samfallighet/samfallighet.component';

const routes: Routes = [
    {
        path: '',
        component: HemComponent
    },
    {
        path: 'samfallighet',
        component: SamfallighetComponent
    },
    {
        path: 'kyrkan',
        component: KyrkanComponent
    },
    {
        path: 'kontakt',
        component: KontaktComponent
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
