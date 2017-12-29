import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarComponent } from './Star.Component'
import { FormsModule } from '@angular/forms'
@NgModule({
    imports: [CommonModule],
    declarations: [StarComponent],
    exports: [StarComponent, CommonModule,FormsModule]
})
export class SharedModule { }
