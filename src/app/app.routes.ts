import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';

export const routes: Routes =[{path: '', redirectTo: '', pathMatch:'full'},{path: 'sign-in',component: SignInComponent},{path: 'sign-up', component:SignUpComponent}]
//     [{path: '', component: AppComponent, children: [{
//         path: 'sign-in', component: SignInComponent
//     }, {path: 'sign-up', component: SignUpComponent}]},
//     { path: '**', redirectTo: '', pathMatch: 'full' } // Redirect any unknown paths to Home
// ];
