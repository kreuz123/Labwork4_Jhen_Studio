import React from "react";
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from "@ionic/react";

const OurTeam: React.FC = () => (
  <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonTitle>Our Team</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent>
      <p>Introduce the team members and their roles.</p>
    </IonContent>
  </IonPage>
);

export default OurTeam;
