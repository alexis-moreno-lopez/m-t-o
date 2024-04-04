import "./App.css"; // Importe le fichier CSS associé à ce composant.

import Header from "../Header/Header"; // Importe le composant Header depuis le fichier "../Header/Header".

import Weather from "../Weather/Weather"; // Importe le composant Weather depuis le fichier "../Weather/Weather".

import Days from "../Days/Days"; // Importe le composant Days depuis le fichier "../Days/Days".

import axios from "axios"; // Importe le module Axios pour effectuer des requêtes HTTP.
import { useEffect, useState } from "react";

// Définition du composant App en tant que fonction.
function App() {

  // Définition de deux états à l'aide du hook useState.
  const [weatherData , setWeatherData] = useState([]); // Stocke les données météorologiques.
  const [isDataLoaded, setIsDataLoaded] = useState(false); // Indique si les données sont chargées.

  // Récupération des variables d'environnement pour l'URL de l'API météo et la clé API.
  const apiUrl = process.env.REACT_APP_WEATHER_API_URL;
  const apiKey = process.env.REACT_APP_WEATHER_API_KEY;

  // Hook useEffect pour effectuer une action après le rendu initial du composant.
  useEffect(() => {
    // Requête HTTP GET vers l'API météo avec Axios.
    axios.get(`${apiUrl}?key=${apiKey}&q=dole&days=5&aqi=no&alerts=no`)
    .then(function (response) {
      // Vérifie si les données n'ont pas déjà été chargées.
      if(!isDataLoaded) {
        // Met à jour les données météorologiques et l'état du chargement.
        setWeatherData(response.data);
        setIsDataLoaded(true);
      }
    })
    .catch(function (error) {
      console.log(error); // Affiche les erreurs éventuelles dans la console.
    });
  });

  // Fonction pour gérer le clic sur un jour.
  function handleClickDay(event) {
    // Supprime la classe 'clickedDay' de l'élément précédemment sélectionné.
    document.querySelector('.clickedDay').classList.remove('clickedDay');
    // Ajoute la classe 'clickedDay' à l'élément sur lequel l'utilisateur a cliqué.
    event.target.classList.add('clickedDay');
  }

  // Rendu du composant App.
  return (
    <div className="App">
      <Header /> {/* Affiche le composant Header. */}
      <div className="row">
        <div className="col s12 m6 push-m3">
          <div className="weather card blue-grey darken-1">
            <Weather /> {/* Affiche le composant Weather. */}
            <Days handleClickDay={handleClickDay} /> {/* Affiche le composant Days et passe la fonction handleClickDay en tant que prop. */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App; // Exporte le composant App pour pouvoir l'utiliser ailleurs.