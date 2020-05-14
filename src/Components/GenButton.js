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
  IonRadioGroup,
  IonRadio,
  IonListHeader,
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
import "@ionic/core/css/ionic.bundle.css";
var playColor = "dark";
function GenButton() {
  const [playStatus, setPlay] = useState(true);

  function generateChords() {
    if (playStatus === true) {
      setPlay(false);
      playColor = "success";
    }
  }

  function playChords() {}

  return (
    <IonCard>
      <IonButton
        expand="block"
        shape="round"
        strong="true"
        size="large"
        onClick={() => generateChords()}
      >
        Generate
      </IonButton>
      <IonButton
        color={playColor}
        expand="block"
        shape="round"
        strong="true"
        size="large"
        disabled={playStatus}
        onClick={() => playChords()}
      >
        Play
      </IonButton>
    </IonCard>
  );
}

export default GenButton;
