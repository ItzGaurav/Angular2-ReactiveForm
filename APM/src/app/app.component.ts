import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `<div><h2>  {{pageTitle}}</h2>

<div style="padding:5px">
                        <ul class="nav nav-tabs">
                            <li routerLinkActive="active"><a routerLink="/welcome">Home</a></li>
                            <li routerLinkActive="active"><a routerLink="/products">Products</a></li>
                           <li routerLinkActive="active"><a routerLink="/customer">Register</a></li>
                        </ul>
                        <br/>
                        <router-outlet></router-outlet>
                    </div>

<br/>
<br/>
<br/>

           
    
     </div>`,
})
export class AppComponent { pageTitle = 'LearnShare Product Management'; }
