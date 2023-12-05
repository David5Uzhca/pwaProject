import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { ViewCalificacionComponent } from './pages/view-calificacion/view-calificacion.component';
import { ListaCalificacionComponent } from './pages/lista-calificacion/lista-calificacion.component';
import { CalificacionComponent } from './pages/calificacion/calificacion.component';
import { FormsModule } from '@angular/forms';
import { enviroment } from 'src/environments/environments';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { FIREBASE_APP_NAME, FIREBASE_OPTIONS } from '@angular/fire/compat';

@NgModule({
  declarations: [
    AppComponent,
    ViewCalificacionComponent,
    ListaCalificacionComponent,
    CalificacionComponent
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    provideFirebaseApp(() => initializeApp(enviroment.firebaseConfig)),
    provideFirestore(() => getFirestore()),
    provideFirebaseApp(() => initializeApp({"projectId":"pwa-db-559b5","appId":"1:1050737518802:web:1e1e3a307badcb90d2a50b","storageBucket":"pwa-db-559b5.appspot.com","apiKey":"AIzaSyBcqgKDd6GfPrrSH6ID3A_AWE6SXnSw0yI","authDomain":"pwa-db-559b5.firebaseapp.com","messagingSenderId":"1050737518802"}))
  ],

  providers: [
    {provide: FIREBASE_OPTIONS, useValue: enviroment.firebaseConfig}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }