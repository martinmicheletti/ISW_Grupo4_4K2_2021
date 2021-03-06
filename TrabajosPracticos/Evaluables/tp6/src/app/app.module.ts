import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { GenerateOrderComponent } from './generate-order/generate-order.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//Angular Material Components
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatSliderModule} from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatStepperModule} from '@angular/material/stepper';
import {MatTabsModule} from '@angular/material/tabs';
import {MatButtonModule} from '@angular/material/button';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatChipsModule} from '@angular/material/chips';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';
import { StepAddressComponent } from './generate-order/step-address/step-address.component';
import { StepPaymentComponent } from './generate-order/step-payment/step-payment.component';
import { StepConfirmationComponent } from './generate-order/step-confirmation/step-confirmation.component';
import {MatNativeDateModule} from '@angular/material/core';
import { CartModalComponent } from './cart-modal/cart-modal.component';
import { InfoModalComponent } from './info-modal/info-modal.component';
import { StepReadyComponent } from './generate-order/step-ready/step-ready.component';
import { ControlMessageComponent } from 'src/assets/shared/control-message.component';
import { ControlMessagesComponent } from 'src/assets/shared/control-messages.component';

@NgModule({
  declarations: [
    AppComponent,
    GenerateOrderComponent,
    StepAddressComponent,
    StepPaymentComponent,
    StepConfirmationComponent,
    CartModalComponent,
    InfoModalComponent,
    StepReadyComponent,
    ControlMessageComponent,
    ControlMessagesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatRadioModule,
    MatSelectModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatStepperModule,
    MatTabsModule,
    MatExpansionModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatChipsModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatDialogModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatNativeDateModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    ReactiveFormsModule,
    FormsModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
