import React from "react";
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from "@ionic/react";

const Stories: React.FC = () => (
  <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonTitle>Stories of People</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent>
      <p>Stories from clients and their experiences.</p>
    </IonContent>
  </IonPage>
);

export default Stories;