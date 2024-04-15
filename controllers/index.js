import { lista } from "./dependencies.js";
import { AudioView } from "../models/AudioView.js";
import {AudioController} from "../controllers/AudioController.js" //agregue eso



const playlist = lista
playlist.add("Nothing burns Like The Cold");
playlist.add("The Neighbourhood - Softcore (Official Audio)");
playlist.add("Daddy Issues");

// comparto la lista
const audioElement = document.querySelector("audio");
const model = { audio: audioElement, playlist };
const view = new AudioView(audioElement);

//paso el modelo y la vista
const controller =new AudioController(model, view);

