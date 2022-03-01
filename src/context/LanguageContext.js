import { createContext, useState } from "react";

const LanguageContext = createContext();

const initialLanguage = 'en';
export const languages = [
  {
    value:'en',
    label:'EN',
  },
  {
    value:'es',
    label:'ES',
  },
]
const strings = {
  en:{
    lang: 'EN',
    header:{
      about: 'About',
    },
    mainMenu:{
      interchangeRaffle: 'Interchange raffle',
      interchangeRaffleDes: 'Create a random chain between members, ideal for gift exchanges',
      groupRaffle: 'Group raffle',
      groupRaffleDes: 'Create random groups of the specified size',
      sequenceRaffle: 'Sequence raffle',
      sequenceRaffleDes: 'Create a random sequence of turns for the given members',
      roundRobin: 'Round robin',
      roundRobinDes: 'One by one everyone takes a random and different given value',
      randomValue: 'Random Value',
      randomValueDes: 'Generate a random value from a range or a given collection',
      dice: 'Dice',
      diceDes: 'Choose the dices amount and throw them',
      roulette: 'Roulette',
      rouletteDes: 'Create a collection of values and spin the roulette',
    },
    footer:{
      copyright: 'Copyright RandomIce',
    },
    interchangeRaffle:{
      interchangeRaffle: 'Interchange raffle',
      name: 'Name',
    },
    groupRaffle:{
      groupRaffle: 'Group raffle',
    },
    sequenceRaffle:{
      sequenceRaffle: 'Sequence raffle',
    },
    roundRobin:{
      roundRobin: 'Round robin',
    },
    randomValue:{
      randomValue: 'Random Value',
      fromARange: 'From a range',
      minimumValue: 'Minimum value',
      maximumValue: 'Maximum value',
      interval: 'Interval',
      fromACollection: 'From a collection',
      values: 'Values',
      errorFields: 'There are fields with errors',
      errorValuesRange: 'The minimum value plus the interval must be equal or lower than the maximum value',
      errorValuesRangeInterval: "The interval must be greater than or equal to 0.000000001",
      errorValuesRangeMinimum: "The minimum value must be greater than or equal to -1000000000 and lower than 1000000000",
      errorValuesRangeMaximum: "The maximum value must be greater than -1000000000 and lower than or equal to 1000000000",
    },
    dice:{
      dice: 'Dice',
    },
    roulette:{
      roulette: 'Roulette',
    },
  },
  es:{
    lang: 'ES',
    header:{
      about: 'Acerca de',
    },
    mainMenu:{
      interchangeRaffle: 'Sorteo de intercambio',
      interchangeRaffleDes: 'Crea una cadena aleatoria entre miembros, ideal para intercambios de regalos',
      groupRaffle: 'Sorteo de grupos',
      groupRaffleDes: 'Crea grupos aleatorios del tamaño especificado',
      sequenceRaffle: 'Sorteo de orden',
      sequenceRaffleDes: 'Crea una secuencia aleatoria de turnos para los miembros dados',
      roundRobin: 'Sorteo por turnos',
      roundRobinDes: 'Uno por uno, todos toman un valor dado aleatorio y diferente',
      randomValue: 'Valor aleatorio',
      randomValueDes: 'Genera un valor aleatorio a partir de un rango o una colección dada',
      dice: 'Dado',
      diceDes: 'Elige la cantidad de dados y tíralos',
      roulette: 'Ruleta',
      rouletteDes: 'Crea una colección de valores y gira la ruleta',
    },
    footer:{
      copyright: 'Copyright RandomIce',
    },
    interchangeRaffle:{
      interchangeRaffle: 'Sorteo de intercambio',
      name: 'Nombre',
    },
    groupRaffle:{
      groupRaffle: 'Sorteo de grupos',
    },
    sequenceRaffle:{
      sequenceRaffle: 'Sorteo de orden',
    },
    roundRobin:{
      roundRobin: 'Sorteo por turnos',
    },
    randomValue:{
      randomValue: 'Valor aleatorio',
      fromARange: 'De un rango',
      minimumValue: 'Valor mínimo',
      maximumValue: 'Valor máximo',
      interval: 'Intervalo',
      fromACollection: 'De una colección',
      values: 'Valores',
      errorFields: 'Hay campos con error',
      errorValuesRange: 'El valor mínimo mas el intervalo debe ser menor o igual al valor máximo',
      errorValuesRangeInterval: "El intervalo debe ser mayor o igual que 0.000000001",
      errorValuesRangeMinimum: "El valor mínimo debe ser mayor o igual a -1000000000 y menor a 1000000000",
      errorValuesRangeMaximum: "El valor máximo debe ser mayor a -1000000000 y menor o igual a 1000000000",
    },
    dice:{
      dice: 'Dado',
    },
    roulette:{
      roulette: 'Ruleta',
    },
  }
};

export const LanguageProvider = ({children}) => {
  const [str, setStr] = useState(strings[initialLanguage]);
  const handleLanguage = (e) => {
    setStr(strings[e.target.value]);
  };

  const data = {str, handleLanguage};

  return(
    <LanguageContext.Provider value={data} >
      {children}
    </LanguageContext.Provider>
  );
}

export default LanguageContext;