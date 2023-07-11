import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemComponent } from './pages/item/item.component';
import { MainComponent } from './pages/main/main.component';

const routes: Routes = [
  { path: "", redirectTo: "main", pathMatch: "full" },
  { path: "main", component: MainComponent },
  { path: "item/:id", component: ItemComponent },

  { path: "**", redirectTo: "/main" },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
