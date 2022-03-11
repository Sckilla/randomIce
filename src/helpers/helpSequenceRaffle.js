import helpRandom from "./helpRandom";

export default function helpSequenceRaffle(members, setRaffleMembers){
  let membersAux = members;
  let membersRaffle = [];
  let order = 1;
  while(membersAux.length > 0){
    let randomMember = membersAux[helpRandom(membersAux.length, 0, true)];
    membersRaffle.push({order, name: randomMember.name});
    membersAux = membersAux.filter(member => member!==randomMember);
    order++;
  }
  setRaffleMembers(membersRaffle);
}