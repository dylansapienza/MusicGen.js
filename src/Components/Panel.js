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
import MajMin from "./MajMin";

var visibilty = true;

function Panel(props) {
  const [tonality, setTonal] = useState("Tonal");
  const [majMin, setMajMin] = useState("Major");

  function getGenParams() {
    var harmParam = [tonality, majMin];
    console.log(harmParam);
  }

  function tonalSetter(e) {
    setTonal(e);
    if (e === "Tonal") {
      visibilty = false;
    } else {
      visibilty = true;
    }
  }

  return (
    <IonCard>
      <IonCardHeader>
        <IonCardTitle>{props.title}</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>
        <IonList>
          <IonListHeader>
            <IonLabel>Tonal</IonLabel>
          </IonListHeader>
          <IonRadioGroup
            value={tonality}
            onIonChange={(e) => tonalSetter(e.detail.value)}
          >
            <IonItem>
              <IonLabel>Tonal</IonLabel>
              <IonRadio slot="end" value="Tonal" />
            </IonItem>

            <IonItem>
              <IonLabel>Atonal</IonLabel>
              <IonRadio slot="end" value="Atonal" />
            </IonItem>
          </IonRadioGroup>
          <MajMin visibilty={visibilty} />
        </IonList>
        <IonButton
          expand="block"
          shape="round"
          strong="true"
          onClick={() => getGenParams()}
        >
          Generate
        </IonButton>
      </IonCardContent>
    </IonCard>
  );
}

export default Panel;
