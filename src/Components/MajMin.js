import React, { useState } from "react";
import {
  IonRadioGroup,
  IonRadio,
  IonListHeader,
  IonItem,
  IonLabel,
  IonList,
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
