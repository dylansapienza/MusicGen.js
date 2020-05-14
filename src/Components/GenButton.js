import React, { useState } from "react";
import { Howl, Howler } from "howler";
import { IonCard, IonButton } from "@ionic/react";
import "@ionic/core/css/ionic.bundle.css";
var playColor = "dark";
var chords = [];
function GenButton() {
  const [playStatus, setPlay] = useState(true);

  function generateChords() {
    if (playStatus === true) {
      setPlay(false);
      playColor = "success";
    }

    chords = [];

    for (let i = 0; i < 4; i++) {
      chords.push(Math.floor(Math.random() * Math.floor(24)) + 1);
    }
    console.log(chords);
  }

  function playChords() {
    if (playColor !== "success") {
      console.log("You need to generate first!");
    } else {
      for (let i = 0; i < 4; i++) {
        const sound = new Howl({
          src: [chords[i] + ".mp3"],
        });
        sound.play();
        console.log(chords[i]);
      }
    }
  }

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
