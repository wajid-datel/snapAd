import { Routes } from "@angular/router";
import { DashboardComponent, WidgetsComponent } from "./components/index";

export const appRoutes: Routes= [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'widgets', component: WidgetsComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
];
