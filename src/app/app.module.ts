import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { ButtonModule } from 'primeng/button';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { MessagesModule } from 'primeng/messages';
import { ConfirmationService } from 'primeng/api';
import { CardModule } from 'primeng/card';
import { SliderModule } from 'primeng/slider';
import { DropdownModule } from 'primeng/dropdown';
import { MultiSelectModule } from 'primeng/multiselect';
import { DialogModule } from 'primeng/dialog';
import { MegaMenuModule } from 'primeng/megamenu';
import { MenubarModule } from 'primeng/menubar';
import { PickListModule } from 'primeng/picklist';
import { TooltipModule } from 'primeng/tooltip';
import { TagModule } from 'primeng/tag';
import { CheckboxModule } from 'primeng/checkbox';
import { InputSwitchModule } from 'primeng/inputswitch';
import { PanelModule } from 'primeng/panel';
import { DataViewModule } from 'primeng/dataview';
import { InputTextModule } from 'primeng/inputtext';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MultiRepairBayComponent } from './multi-repair-bay/multi-repair-bay.component';
import { TableModule } from 'primeng/table';
import { MultiRepaiBayConfigComponent } from './multi-repai-bay-config/multi-repai-bay-config.component';

@NgModule({
  declarations: [
    AppComponent,
    MultiRepairBayComponent,
    MultiRepaiBayConfigComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    TableModule,
    ButtonModule,
    ConfirmDialogModule,
    MessagesModule,  
    CardModule,
    SliderModule,
    DropdownModule,
    MultiSelectModule,
    DialogModule,
    MegaMenuModule,
    MenubarModule,
    PickListModule,
    TooltipModule,
    TagModule,
    CheckboxModule,
    InputSwitchModule,
    PanelModule,
    DataViewModule,
    InputTextModule
  ],
  providers: [
    ConfirmationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
