import { Routes } from '@angular/router';
import { ProductComponent } from './products/features/product/product.component';
import { HomePageComponent } from './dashboard/features/home-page/home-page.component';
import { BlogComponent } from './dashboard/features/blog/blog.component';
import { AboutComponent } from './dashboard/features/about/about.component';
import { WorkusComponent } from './dashboard/features/workus/workus.component';


export const routes: Routes = [
    //rutas auth

    //rutas secundarias
    {
        path: 'home',
        component: HomePageComponent
    },
    {
        path: 'productos',
        component: ProductComponent
    },
    {
        path: 'acerca-de-nosotros',
        component: AboutComponent
    },
    {
        path: 'trabaja-con-nosotros',
        component: WorkusComponent
    },
    {
        path: 'blog',
        component: BlogComponent
    },
    
    {
        path: '**',
        component: HomePageComponent
    },


];


