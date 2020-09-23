const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


// rl.question("What's your name? Nicknames are also acceptable ", (answer1) => {
//   // TODO: Log the answer in a database
//   //console.log(`Thank you for your valuable feedback: ${answer}`);
//   r1.question('What\'s an activity you like doing? ', (answer2) => {
//     // TODO: Log the answer in a database
//     var result = (+answer1) + (+answer2)
//     console.log(`Thank you for your valuable feedback: ${result}`);
//     rl.close();
//   });
//   //rl.close();
// });


rl.question('What\'s your name? Nicknames are also acceptable :) :', (answer1) => {
    rl.question('What\'s an activity you like doing : ', (answer2) => {
      rl.question('What do you listen to while doing that : ', (answer3) => {
        rl.question('Which meal is your favorite (eg. dinner, brunch, etc.) : ', (answer4) => {
          rl.question('What\'s your favorite thing to eat for that meal? : ', (answer5) => {
            rl.question('Which sport is your absolute favorite? : ', (answer6) => {
              rl.question('Whaat is your superpower? In a few words tell us what you are amazing at! : ', (answer7) => {
                  console.log(`${answer1} loves ${answer2} while ${answer3}, devouring ${answer5} for ${answer4}, prefers ${answer6} over any other sport, and is amazing at ${answer7}.`);
                  rl.close();
              }); 
            });
          });
        });
      });
    });
});

