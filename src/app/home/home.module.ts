import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { PeopleService } from '../services/people.service';
import { HomePeopleComponent } from './home-people/home-people.component';
import { MatPaginatorModule, MatTableModule, MatIconModule, MatSelectModule, MatInputModule, 
  MatListModule, MatSliderModule, MatSlideToggleModule, MatButtonModule, MatButtonToggleModule,
  MatToolbarModule, MatAutocompleteModule, MatCardModule, MatCheckboxModule, MatChipsModule, 
  MatDatepickerModule, MatDialogModule, MatStepperModule, MatExpansionModule, MatGridListModule, 
  MatMenuModule, MatNativeDateModule, MatProgressBarModule, MatProgressSpinnerModule, MatRadioModule,
  MatRippleModule, MatSidenavModule, MatSnackBarModule, MatSortModule, 
  MatTabsModule,
  MatTooltipModule,  } from '@angular/material';
import { CdkTableModule } from '@angular/cdk/table';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeAirportsComponent } from './home-airports/home-airports.component';
import { AirportService } from '../services/airport.service';
import { HomeStatsComponent } from './home-stats/home-stats.component';
import { HelperService } from '../services/helper.service';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    CdkTableModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
  ],
  providers: [
    PeopleService,
    AirportService,
    HelperService
  ],
  declarations: [
    HomeComponent,
    HomePeopleComponent,
    HomeAirportsComponent,
    HomeStatsComponent
  ]
})
export class HomeModule { }
