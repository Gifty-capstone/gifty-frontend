import bear from '../assets/bear.png';
import cat from '../assets/cat.png';
import dog from '../assets/dog.png';
import fox from '../assets/fox.png';
import giraffe from '../assets/giraffe.png';
import lion from '../assets/lion.png';
import octopus from '../assets/octopus.png';
import panda from '../assets/panda.png';
import rabbit from '../assets/rabbit.png';
import rhinoceros from '../assets/rhinoceros.png';

export const getIcon = (id) => {
  let icon;
  switch (id.toString().split('').pop()) {
    case '0':
      icon = bear
      break
    case '1': 
      icon = cat
      break
    case '2': 
      icon = dog
      break
    case '3': 
      icon = fox
      break
    case '4': 
      icon = giraffe
      break
    case '5':
      icon = lion
      break
    case '6': 
      icon = octopus
      break
    case '7': 
      icon = panda
      break
    case '8': 
      icon = rabbit
      break
    case '9':
      icon = rhinoceros
      break
    default:
      icon = rhinoceros
  }
  return icon
}
