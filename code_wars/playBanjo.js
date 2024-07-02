let names = ['Adam','Paul','Ringo','bravo','rolf']

function whoPlaysbanjo(names) {
    return names.map(name => {
      if (name[0].toLowerCase() === 'r') {
        return name + ' plays banjo';
      } else {
        return name + ' does not play banjo';
      }
    });
  }
  let results = whoPlaysbanjo(names);
  console.log(results);

// function areYouPlayingBanjo(name) {
//   // Implement me
//   if (name[0].toLowerCase() === 'r'){
//     console.log( names +'plays banjo')
//   } else{
//     console.log( names + 'does not play banjo')
//   }
//   return name;
// }

// function areYouPlayingBanjo(name){
//     return (names.map => {
//         if ()
//     })
// }



// function areYouPlayingBanjo(name) {
//     // Implement me
//     if (names.map('R' || 'r')){
//       console.log( names +'plays banjo')
//     } else{
//       console.log( names + 'does not play banjo')
//     }
//     return name;
//   }

// let areYouPlayingBanjo = names.map(function ('R' || 'r'){

// })