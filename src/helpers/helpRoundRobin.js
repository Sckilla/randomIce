import helpRandom from "./helpRandom";

export default function helpRoundRobin(raffleMembers, setRaffleMembers, setRandomResult){
  let randomMember = raffleMembers[helpRandom(raffleMembers.length,0,true)];
  setRandomResult(randomMember.name);
  setRaffleMembers(raffleMembers.filter(item => item!==randomMember));
}