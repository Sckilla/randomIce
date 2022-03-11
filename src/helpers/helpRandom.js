export default function helpRandom(max, min, integer = false){
  if(integer){
    return Math.floor(Math.random() * (max - min) + min);
  }
  return Math.random() * (max - min) + min;
}