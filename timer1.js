// process.stdout.write('\x07');
// const alarms = [1, 7, 5]

function alertTerminal(alarms) {
  for (const alarm of alarms) {
    setTimeout(() => {
      process.stdout.write('\x07');
    }, alarm * 1000)
  }
}

alertTerminal(process.argv);
// const finalString = () => {
//   let count = 0;
//   for (const char of sentence) {
//     setTimeout(() => {
//       process.stdout.write(char);
//     }, count * 50);
//     count++;
//   }

//   setTimeout(() => {
//     process.stdout.write('\n');
//   }, sentence.length * 50);
// };


// finalString();
