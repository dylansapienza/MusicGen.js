import React, { useState } from "react";
import { Howl, Howler } from "howler";
import { IonCard, IonButton } from "@ionic/react";
import "@ionic/core/css/ionic.bundle.css";

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

var playColor = "dark";
var chords = [];

//All the audio clips
const allChords = [
  new Howl({ src: ["http://www.dylansapienza.com/music/1.wav"] }),
  new Howl({ src: ["http://www.dylansapienza.com/music/2.wav"] }),
  new Howl({ src: ["http://www.dylansapienza.com/music/3.wav"] }),
  new Howl({ src: ["http://www.dylansapienza.com/music/4.wav"] }),
  new Howl({ src: ["http://www.dylansapienza.com/music/5.wav"] }),
  new Howl({ src: ["http://www.dylansapienza.com/music/6.wav"] }),
  new Howl({ src: ["http://www.dylansapienza.com/music/7.wav"] }),
  new Howl({ src: ["http://www.dylansapienza.com/music/8.wav"] }),
  new Howl({ src: ["http://www.dylansapienza.com/music/9.wav"] }),
  new Howl({ src: ["http://www.dylansapienza.com/music/10.wav"] }),
  new Howl({ src: ["http://www.dylansapienza.com/music/11.wav"] }),
  new Howl({ src: ["http://www.dylansapienza.com/music/12.wav"] }),
  new Howl({ src: ["http://www.dylansapienza.com/music/13.wav"] }),
  new Howl({ src: ["http://www.dylansapienza.com/music/14.wav"] }),
  new Howl({ src: ["http://www.dylansapienza.com/music/15.wav"] }),
  new Howl({ src: ["http://www.dylansapienza.com/music/16.wav"] }),
  new Howl({ src: ["http://www.dylansapienza.com/music/17.wav"] }),
  new Howl({ src: ["http://www.dylansapienza.com/music/18.wav"] }),
  new Howl({ src: ["http://www.dylansapienza.com/music/19.wav"] }),
  new Howl({ src: ["http://www.dylansapienza.com/music/20.wav"] }),
  new Howl({ src: ["http://www.dylansapienza.com/music/21.wav"] }),
  new Howl({ src: ["http://www.dylansapienza.com/music/22.wav"] }),
  new Howl({ src: ["http://www.dylansapienza.com/music/23.wav"] }),
  new Howl({ src: ["http://www.dylansapienza.com/music/24.wav"] }),
];
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

  async function playChords() {
    if (playColor !== "success") {
      console.log("You need to generate first!");
    } else {
      console.log("play 4");
      for (let i = 0; i < 4; i++) {
        allChords[chords[i]].play();
        await sleep(1000);

        // }
        //   new Audio("../../public/audiofiles/ " + chords[i] + ".mp3").play();
        //   console.log(chords[i]);
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
