import helpRandom from "./helpRandom";

export function utf8_to_b64( str ) {
  return window.btoa(unescape(encodeURIComponent(str)));
}

export function b64_to_utf8( str ) {
  return decodeURIComponent(escape(window.atob( str )));
}

// real for raffleInterchange

export function raffleInterchange(members, setRaffleMembers){
  let membersRaffleDiscard = [];//array that whose elements will be discarded while the raffle is done
  let membersRaffle = [];//array that will have the raffle result
  let firstMember = members[0];//the first member
  let actualMember = firstMember;//the member to raffle
  
  membersRaffleDiscard = removeArrayElement(members, actualMember);
  let randomMember = null;//the receiver of the actual member
  while(membersRaffleDiscard.length > 1){
    //choose a random member
    randomMember = membersRaffleDiscard[helpRandom(membersRaffleDiscard.length,0,true)];
    //add randomly the new raffle member to the result
    if(helpRandom(2,0,true) === 0) membersRaffle = [...membersRaffle, {name: actualMember.name, receiver: randomMember.code}];
    else membersRaffle = [{name: actualMember.name, receiver: randomMember.code}, ...membersRaffle];
    //continue with the random member
    actualMember = randomMember;
    //delete the actual member of the raffle discard array
    membersRaffleDiscard = removeArrayElement(membersRaffleDiscard, actualMember);
  }

  //assign the last member as the penultimate's raffle member reciever
  randomMember = membersRaffleDiscard[0];
  if(helpRandom(2,0,true) === 0) membersRaffle = [...membersRaffle, {name: actualMember.name, receiver: randomMember.code}];
  else membersRaffle = [{name: actualMember.name, receiver: randomMember.code}, ...membersRaffle];
  actualMember = randomMember;

  //assign the first member as the lasts raffle member reciever
  if(helpRandom(2,0,true) === 0) membersRaffle = [...membersRaffle, {name: actualMember.name, receiver: firstMember.code}];
  else membersRaffle = [{name: actualMember.name, receiver: firstMember.code}, ...membersRaffle];

  setRaffleMembers(membersRaffle);
}

function removeArrayElement(array, del){
  if(del) return array.filter((element) => element !== del);
  return array;
}
