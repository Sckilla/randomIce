import helpRandom from "./helpRandom";

export function helpGroupRaffle(collectionMembers, setCollectionGroups, numberOfGroups){
  let collectionGroups = [];
  let groupSize = Math.ceil(collectionMembers.length / numberOfGroups);
  let collectionMembersAux = collectionMembers;
  for(let i = 0; i < groupSize; i++){
    for(let j = 0; j < numberOfGroups; j++){
      if(!collectionMembersAux.length) break;
      if(i===0) collectionGroups.push({name: j + 1, members:[]});
      let member = collectionMembersAux[helpRandom(collectionMembersAux.length,0,true)];
      collectionGroups[j].members.push(member.name);
      collectionMembersAux = collectionMembersAux.filter(element => element !== member);
    }
  }
  setCollectionGroups(collectionGroups);
}