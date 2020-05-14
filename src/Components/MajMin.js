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

function Panel(props) {
  const [majMin, setMajMin] = useState("Major");

  if (props.visibilty === true) {
    console.log(props.visibilty);
    return (
      <IonList>
        <IonListHeader>
          <IonLabel>Mode</IonLabel>
        </IonListHeader>
        <IonRadioGroup
          value={majMin}
          onIonChange={(e) => setMajMin(e.detail.value)}
        >
          <IonItem>
            <IonLabel>Major</IonLabel>
            <IonRadio slot="end" value="Major" />
          </IonItem>

          <IonItem>
            <IonLabel>Minor</IonLabel>
            <IonRadio slot="end" value="Minor" />
          </IonItem>
        </IonRadioGroup>
      </IonList>
    );
  } else {
    return <div></div>;
  }
}

export default Panel;
