const city = 'New York City'
function logCitySkyline(){
  let skyscraper = 'Empire State Building'
  return 'The stars over the ' + skyscraper + ' in ' + city;
}
console.log(logCitySkyline())
// this is looking at scope 
// variables declared out of blocks are considered global variables
// variables inside blocks are considered local
// example of global variable

let satellite = 'The Moon'
let galaxy = 'The Milky Way'
let stars = 'North Star'
function callMyNightSky(){
  return 'Night Sky: ' + satellite + ', ' + stars + ', and ' + galaxy;

}
console.log(callMyNightSky())

// example of local scope

function logVisibleLightWaves(){
    const lightWaves = 'Moonlight'
    console.log(lightWaves)
  }
  console.log(logVisibleLightWaves())
  //console.log(lightWaves) will not work

  //next we look at scope poluttion, how we can accidently alter global variables inside function and therefor break our intended behaviour

  const satellite1 = 'The Moon';
const galaxy1 = 'The Milky Way';
let stars1 = 'North Star';

const callMyNightSky1 = () => {
  stars = 'Sirius';
	return 'Night Sky: ' + satellite1 + ', ' + stars1 + ', ' + galaxy1;
};

console.log(callMyNightSky1());
console.log(stars1)

//example of good scoping

const logVisibleLightWaves2 = () => {
    let lightWaves2 = 'Moonlight';
      let region2 = 'The Arctic';
    if (region2 === 'The Arctic'){
      let lightWaves2 = 'Northern Lights'
      console.log(lightWaves2)
    }
  
    
    console.log(lightWaves2);
  };
  
  logVisibleLightWaves();
