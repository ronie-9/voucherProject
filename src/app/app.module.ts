import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VoucherComponent } from './components/voucher/voucher.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers, initialState } from './store/reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { VoucherEffects } from './store/effects/voucher.effects';
import { UserEffects } from './store/effects/user.effects';
import { QRCodeModule } from 'angularx-qrcode';
import { HttpClientModule } from '@angular/common/http';

const imports = [
  BrowserModule,
  AppRoutingModule,
  QRCodeModule,
  HttpClientModule,
  StoreModule.forRoot(reducers, { initialState, metaReducers }),
  EffectsModule.forRoot([VoucherEffects, UserEffects]),
];

if (isDevMode()) {
  imports.push(StoreDevtoolsModule.instrument());
}

@NgModule({
  declarations: [
    AppComponent,
    VoucherComponent
  ],
  imports,
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }