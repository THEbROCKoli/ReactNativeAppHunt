import axios from "axios";

const baseUrl = 'https://opgjotdbnmjbptrgxchl.supabase.co/rest/v1/communityLoadouts'

export const shareLoadout = async ( loadoutName, firstWeaponName, secondWeaponName   ) => {

  axios.defaults.headers['apikey'] = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9wZ2pvdGRibm1qYnB0cmd4Y2hsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDU5MTg2NDMsImV4cCI6MjAyMTQ5NDY0M30.wNULyv1Lh82k6k0QUCY9c-lPyO8s6irge-HtDpl3ASk"
  axios.defaults.headers['Authorization'] = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9wZ2pvdGRibm1qYnB0cmd4Y2hsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDU5MTg2NDMsImV4cCI6MjAyMTQ5NDY0M30.wNULyv1Lh82k6k0QUCY9c-lPyO8s6irge-HtDpl3ASk"

  await axios.post(baseUrl, {
    loadout_name : loadoutName,
    first_weapon_id : firstWeaponName,
    second_weapon_id : secondWeaponName
  }, {}).then(res => {
    console.log(res);
    console.log(res.data);
    return "Loadout shared successfully"
   
  })
  .catch(error => {
    console.log(error)
    return "Something went wrong..."
    
  }
  );
  
}

export const getSharedLoadouts = async() =>{
  let getString = "?select=*" 
  axios.defaults.headers['apikey'] = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9wZ2pvdGRibm1qYnB0cmd4Y2hsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDU5MTg2NDMsImV4cCI6MjAyMTQ5NDY0M30.wNULyv1Lh82k6k0QUCY9c-lPyO8s6irge-HtDpl3ASk"
  axios.defaults.headers['Authorization'] ="Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9wZ2pvdGRibm1qYnB0cmd4Y2hsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDU5MTg2NDMsImV4cCI6MjAyMTQ5NDY0M30.wNULyv1Lh82k6k0QUCY9c-lPyO8s6irge-HtDpl3ASk"

  const response = await axios.get(baseUrl+getString);
    console.log('response api', response.data);
    
    
    return response.data
}


  /*
curl -X POST 'https://opgjotdbnmjbptrgxchl.supabase.co/rest/v1/communityLoadouts' \
-H "apikey: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9wZ2pvdGRibm1qYnB0cmd4Y2hsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDU5MTg2NDMsImV4cCI6MjAyMTQ5NDY0M30.wNULyv1Lh82k6k0QUCY9c-lPyO8s6irge-HtDpl3ASk" \
-H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9wZ2pvdGRibm1qYnB0cmd4Y2hsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDU5MTg2NDMsImV4cCI6MjAyMTQ5NDY0M30.wNULyv1Lh82k6k0QUCY9c-lPyO8s6irge-HtDpl3ASk" \
-H "Content-Type: application/json" \
-H "Prefer: return=minimal" \
-d '{ "some_column": "someValue", "other_column": "otherValue" }'
          */
            

  /*
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
          loadoutName: loadoutName,
          firstWeaponName: firstWeaponName,
          secondWeaponName: secondWeaponName,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((json) => console.log(json));*/
  