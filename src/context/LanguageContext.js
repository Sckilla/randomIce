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
      dice: 'Dices',
      diceDes: 'Choose the dices amount and throw them',
      roulette: 'Roulette',
      rouletteDes: 'Create a collection of values and spin the roulette',
    },
    footer:{
      copyright: 'Copyright RandomIce',
    },
    interchangeRaffle:{
      interchangeRaffle: 'Interchange raffle',
      instructions: 'To do a raffle intrechange, create a collection of members by adding their names or upload a previous saved collection, then click the raffle button to obtain the table with the option to copy the links which you can finally send secretly to every member.',
      instructionsLoadRaffle: 'You can restore a raffle previously saved using:',
      addAMember: "Add a member",
      name: 'Name',
      add: 'Add',
      members: "Members",
      saveCollection: "Save collection",
      saveRaffle: "Save raffle",
      saveCollectionAs: "Save collection as",
      saveRaffleAs: "Save raffle as",
      infoNoCollectionsAdded: "No collections saved",
      infoNoMembersAdded: "No members added",
      loadFromSaves: "Load from saves",
      load: "Load",
      delete: "Delete",
      raffle: "Raffle",
      member: "Member",
      receiver: "Receiver",
      copyLink: "Copy link",
      errorFields: 'The name is not valid',
      errorRepitedName: "This name has been already added",
      errorRepitedCollection: "There is already a collection with this name",
      errorRepitedRaffle: "There is already a raffle saved with that name",
      errorActionReplace: "Click here to replace it",
      result: {
        s1: 'Hello ',
        s2: ' your random secret recipient is ',
      },
    },
    groupRaffle:{
      groupRaffle: 'Group raffle',
      instructions: 'Instructions',
      members: "Members",
      infoNoMembersAdded: "No members added",
      form:{
        addAMember: "Add a member",
        name: "Name",
        add: 'Add',
        errorFields: 'The name is not valid',
      },
      loadMembers:{
        loadFromSaves:'Load from saves',
        infoNoDataSaved:'No collections saved',
        load:'Load',
        delete:'Delete',
      },
      saveMembers:{
        errorRepitedState: 'This name has been already used',
        errorActionReplace: 'Click here to replace it',
        saveState: 'Save members',
        saveStateAs: 'Save members as',
      },
      calculate:{
        chooseARaffleType: 'Choose a raffle type',
        size:{
          groupSize: 'Group size',
          calculate: 'Calculate',
          errorField: 'The group size must be a positive integer',
          errorSizeNotAllowedSize: 'The group size must be higher than 1 and lower than 1000',
          errorSizeNotEnoughMembers: 'The group size must be equal or lower than the half of the members quantity',
          errorSizeNotMultiple: 'The group size must be a multiple of the members quantity',
        },
        amount:{
          groupAmount: 'Group amout',
          calculate: 'Calculate',
          errorField: 'The group amount must be a positive integer',
          errorSizeNotEnoughMembers: 'The group amount must be lower than the members quantity',
          errorSizeNotAllowedAmount: 'The group amount must be higher than 1 and lower than 1000',
        },
      },
      result:{
        group: 'Group ',
      }
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
      calculate: "Calculate",
      errorFields: 'There are fields with errors',
      errorValuesRange: 'The minimum value plus the interval must be equal or lower than the maximum value',
      errorValuesRangeInterval: "The interval must be greater than or equal to 0.000000001",
      errorValuesRangeMinimum: "The minimum value must be greater than or equal to -1000000000 and lower than 1000000000",
      errorValuesRangeMaximum: "The maximum value must be greater than -1000000000 and lower than or equal to 1000000000",
    },
    dice:{
      dice: 'Dices',
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
      dice: 'Dados',
      diceDes: 'Elige la cantidad de dados y tíralos',
      roulette: 'Ruleta',
      rouletteDes: 'Crea una colección de valores y gira la ruleta',
    },
    footer:{
      copyright: 'Copyright RandomIce',
    },
    interchangeRaffle:{
      interchangeRaffle: 'Sorteo de intercambio',
      instructions: 'Para hacer un sorteo de intercambio, crea una lista de miembros agregando sus nombres o carga una lista previamente guardada, después haz click en el botón de sorteo para obtener la tabla con la opción de copiar los links que podrás enviar secretamente a acada miembro.',
      instructionsLoadRaffle: 'Puedes reestablecer un sorteo previamente guardado usando:',
      addAMember: "Agrega un integrante",
      name: 'Nombre',
      add: 'Agregar',
      members: "Integrantes",
      saveCollection: "Guardar lista",
      saveRaffle: "Guardar sorteo",
      saveCollectionAs: "Guardar lista como",
      saveRaffleAs: "Guardar sorteo como",
      infoNoCollectionsAdded: "No se han guardado listas",
      infoNoMembersAdded: "No se han registrado integrantes",
      loadFromSaves: "Cargar desde guardados",
      load: "Cargar",
      delete: "Borrar",
      raffle: "Sortear",
      member: "Integrante",
      receiver: "Receptor",
      copyLink: "Copiar link",
      errorFields: 'El nombre no es válido',
      errorRepitedName: "Este nombre ya ha sido agregado",
      errorRepitedCollection: "Ya existe una lista guardada con este nombre",
      errorRepitedRaffle: "Ya existe un sorteo guardado con este nombre",
      errorActionReplace: "Haz clic aquí para reemplazar",
      result: {
        s1: 'Hola ',
        s2: ' tu destinatario aleatorio secreto es ',
      },
    },
    groupRaffle:{
      groupRaffle: 'Sorteo de Grupos',
      instructions: 'Instrucciones',
      members: "Integrantes",
      infoNoMembersAdded: "No se han registrado integrantes",
      form:{
        addAMember: "Agrega un integrante",
        name: "Nombre",
        add: 'Agregar',
        errorFields: 'El nombre no es válido',
      },
      loadMembers:{
        loadFromSaves: 'Cargar desde guardados',
        infoNoDataSaved: "No se han guardado listas",
        load:'Cargar',
        delete:'Eliminar',
      },
      saveMembers:{
        errorRepitedState: "Ya existe un sorteo guardado con este nombre",
        errorActionReplace: "Haz clic aquí para reemplazar",
        saveState: "Guardar lista",
        saveStateAs: "Guardar lista como",
      },
      calculate:{
        chooseARaffleType: 'Elige un tipo de sorteo',
        size:{
          groupSize: 'Tamaño de grupo',
          calculate: 'Calcular',
          errorField: 'El tamaño del grupo debe ser un entero positivo',
          errorSizeNotAllowedSize: 'El tamaño del grupo debe ser mayor que 1 y menor que 1000',
          errorSizeNotEnoughMembers: 'El tamaño del grupo debe ser menor o igual que la mitad de la cantidad de integrantes',
          errorSizeNotMultiple: 'El tamaño del grupo debe ser un múltiplo de la cantidad de integrantes',
        },
        amount:{
          groupAmount: 'Cantidad de grupos',
          calculate: 'Calcular',
          errorField: 'La cantidad de grupos debe ser un entero positivo',
          errorSizeNotEnoughMembers: 'La cantidad de grupos debe ser menor que la cantidad de integrantes',
          errorSizeNotAllowedAmount: 'La cantidad de grupos debe ser mayor que 1 y menor que 1000',
        },
      },
      result:{
        group: 'Grupo ',
      }
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
      calculate: "Calcular",
      errorFields: 'Hay campos con error',
      errorValuesRange: 'El valor mínimo mas el intervalo debe ser menor o igual al valor máximo',
      errorValuesRangeInterval: "El intervalo debe ser mayor o igual que 0.000000001",
      errorValuesRangeMinimum: "El valor mínimo debe ser mayor o igual a -1000000000 y menor a 1000000000",
      errorValuesRangeMaximum: "El valor máximo debe ser mayor a -1000000000 y menor o igual a 1000000000",
    },
    dice:{
      dice: 'Dados',
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