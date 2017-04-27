import { Routes } from "@angular/router";
import { DashboardComponent, WidgetsComponent, PaymentComponent } from "./components/index";

export const appRoutes: Routes= [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'widgets', component: WidgetsComponent },
  { path: 'payment', component: PaymentComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
];
