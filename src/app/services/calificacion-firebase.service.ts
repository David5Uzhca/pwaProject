import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/compat/firestore'
import { Calificacion } from '../domain/calificacion';


@Injectable({
  providedIn: 'root'
})

export class CalificacionesFirebaseService {
  private path = '/calificaciones' //El nombre que se le pone aqui, es el nombre de la coleccion en firebase
  calificacionesRef: AngularFirestoreCollection<any>
  constructor(private db: AngularFirestore) { 
    this.calificacionesRef = db.collection(this.path)
    this.calificacionesRef.valueChanges().subscribe(data =>{
      console.log(data)
    })
  }

  getAll(){
    return this.calificacionesRef.valueChanges()
  }

  save(calificacion : Calificacion){
    const uid = this.db.createId();
    calificacion.uid=uid;
    calificacion.materia=calificacion.materia;
    return this.calificacionesRef.doc(uid).set(Object.assign({},calificacion));
  }

  getPersona(uid: string){
    return this.db.doc(this.path+'/'+uid).valueChanges();
  }
}