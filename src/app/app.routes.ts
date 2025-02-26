import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductComponent } from './product/product.component';
import { TshirtComponent } from './tshirt/tshirt.component';
import { TouserComponent } from './touser/touser.component';

export const routes: Routes = [
    {
        path: '', redirectTo: 'home', pathMatch: 'full'
    },
    {

        path: 'home', component: HomeComponent

    },
    {
        path:'contact',component:ContactComponent
    },
    {
        path:'about',component:AboutComponent
    },
    {
        path:'Product',component:ProductComponent,
        children:[
            {
                path:'tshirt',component:TshirtComponent
            },
            {
                path:'touser',component:TouserComponent
            }
        ] 
    },
    {
        path:'**',component:NotFoundComponent

    }

];
