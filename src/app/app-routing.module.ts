import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PropertyViewerComponent } from './components/property-viewer/property-viewer.component'

const routes: Routes = [  
  { path: 'property-viewer',      component: PropertyViewerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
