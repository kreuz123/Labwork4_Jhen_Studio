import React from "react";
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from "@ionic/react";

const WhatWeDo: React.FC = () => (
  <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonTitle>What We Do</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent>
      <h2>Lush Green Deep Health Concept</h2>
      <p>Description of the health concept.</p>
      <h2>Retreat in Taiwan</h2>
      <p>Description of retreats available in Taiwan.</p>
      <h2>Customised Health Solutions</h2>
      <p>Description of customized health solutions.</p>
    </IonContent>
  </IonPage>
);

export default WhatWeDo;