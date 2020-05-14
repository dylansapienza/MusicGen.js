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
import "@ionic/core/css/ionic.bundle.css";

const checkboxList = [
  { val: "Pepperoni", isChecked: true },
  { val: "Sausage", isChecked: false },
  { val: "Mushroom", isChecked: false },
];

function Panel(props) {
  return (
    <IonContent>
      <IonList>
        <IonItemDivider>Checkboxes in a List</IonItemDivider>

        {checkboxList.map(({ val, isChecked }, i) => (
          <IonItem key={i}>
            <IonLabel>{val}</IonLabel>
            <IonCheckbox slot="end" value={val} checked={isChecked} />
          </IonItem>
        ))}
      </IonList>
    </IonContent>
  );
}

export default Panel;
