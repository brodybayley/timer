const alarms = process.argv.slice(2);

function alertTerminal(alarms) {
  for (const alarm of alarms) {
    if (alarm > 0 && alarm === alarm) {
      setTimeout(() => {
        process.stdout.write('\x07');
      }, alarm * 1000)
    }
  }
}

alertTerminal(alarms);


// const alarms = [9, 7, 8, 'k']
// const numbers = (/^[0-9]+$/);
// const exclAlph = alarms.value.match(regex);
// console.log(exclAlph)