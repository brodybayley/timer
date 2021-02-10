// process.stdout.write('\x07');

function alertTerminal() {
  process.stdout.write('\x07');
}

alertTerminal(10, 3, 5);
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
