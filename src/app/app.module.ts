import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from "@angular/router";
import { MasonryModule } from 'angular2-masonry';
import { NgbModule, NgbCollapseModule, NgbTooltipConfig, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import {ToastModule} from 'ng2-toastr/ng2-toastr';

import { appRoutes } from "./routes";
import { AppComponent } from './app.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { SiteComponent } from './components/site/site.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { WidgetsComponent } from './components/widgets/widgets.component';
import { HeaderComponent } from './components/header/header.component';
import { ResponsiveService } from './responsive.service';
import { LoaderComponent } from './components/shared/loader/loader.component';
import { ModuleComponent } from './components/shared/module/module.component';
import { NotificationPopupComponent } from './components/notification-popup/notification-popup.component';
import { MessagesComponent } from './components/messages/messages.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SettingsComponent } from './components/settings/settings.component';
import { SidePanelComponent } from './components/side-panel/side-panel.component';
import { TourComponent } from './components/tour/tour.component';
import { PaymentComponent } from './components/payment/payment.component';
import { PaymentService } from './services/payment.service';

@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    SiteComponent,
    DashboardComponent,
    WidgetsComponent,
    HeaderComponent,
    LoaderComponent,
    ModuleComponent,
    NotificationPopupComponent,
    MessagesComponent,
    SettingsComponent,
    SidePanelComponent,
    TourComponent,
    PaymentComponent,
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpModule,
    MasonryModule,
    NgbModule,
    NgbCollapseModule,
    NgbTooltipModule,
    BrowserAnimationsModule,
    ToastModule.forRoot()
  ],
  providers: [
    ResponsiveService,
    PaymentService,
    NgbTooltipConfig
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
