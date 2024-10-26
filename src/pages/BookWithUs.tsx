import React from "react";
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton } from "@ionic/react";

const BookWithUs: React.FC = () => (
  <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonTitle>Book With Us</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent>
      <h2>Personal Consultation</h2>
      <IonButton routerLink="/home/book-with-us/personal-consultation">Book Personal Consultation</IonButton>
      
      <h2>Retreat</h2>
      <IonButton routerLink="/home/book-with-us/retreat">Book a Retreat</IonButton>
    </IonContent>
  </IonPage>
);

export default BookWithUs;