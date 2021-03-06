import React, { useState } from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCardContent,
  IonItem,
  IonIcon,
  IonLabel,
  IonButton,
  IonCheckbox,
  IonList,
  IonItemDivider,
} from "@ionic/react";
import { pin, wifi, wine, warning, walk } from "ionicons/icons";
import "@ionic/core/css/ionic.bundle.css";
import Panel from "./Components/Panel";
import GenButton from "./Components/GenButton";

function App() {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>MusicGen.js</IonTitle>
        </IonToolbar>
        <Panel title={"Tonality"} />
        <GenButton />
      </IonHeader>
      <IonContent></IonContent>
    </IonPage>
  );
}

export default App;
