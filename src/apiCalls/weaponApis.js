import axios from "axios";

let weaponListFromApi
let damageModifiersFromApi


export const getWeaponList = async () => {
  if(weaponListFromApi==null){
    const response = await axios.get('https://firebasestorage.googleapis.com/v0/b/apphunt-38ad9.appspot.com/o/hunt_json.json?alt=media&token=5f2442e1-b768-4748-b2ee-8d7e151ea826');
    //console.log('response api', response);
    console.log('lanciato axios, prendo le armi');
    weaponListFromApi = response.data
  } 
  return weaponListFromApi
}

export const getDamageModifiers = async () => {
  if(damageModifiersFromApi==null){
    const response = await axios.get('https://firebasestorage.googleapis.com/v0/b/apphunt-38ad9.appspot.com/o/hunt_damage_modifiers.json?alt=media&token=9e0d21f2-0cf7-472e-bf87-1ecd5a05e299&_gl=1*1d0xw18*_ga*NzAyMzYxNDU2LjE2OTYzMjI4NTA.*_ga_CW55HF8NVT*MTY5ODE1ODY3NS42LjEuMTY5ODE1ODY5OC4zNy4wLjA.');
    //console.log('response api', response);
    console.log('lanciato axios, prendo i modificatori');
    damageModifiersFromApi = response.data;
  }
  return damageModifiersFromApi
}

