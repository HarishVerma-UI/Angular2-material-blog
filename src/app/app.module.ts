import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared.module/shared.module';
import { DetailsDialogComponent } from './details-dialog/details-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
     DetailsDialogComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    SharedModule,
    FlexLayoutModule
  ],
    entryComponents: [
    DetailsDialogComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
