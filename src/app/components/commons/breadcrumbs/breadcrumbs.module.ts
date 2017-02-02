import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BreadcrumbsComponent } from './breadcrumbs.component';

@NgModule({
	imports: [CommonModule, RouterModule],
	declarations: [BreadcrumbsComponent],
	exports: [BreadcrumbsComponent]
})
export class BreadcrumbsModule { }