const alarms = process.argv.slice(2);

const alertTerminal = alarms => {
  for (const alarm of alarms) {
    const isNum = isNaN(parseInt(alarm));
    //isNan checks to see if element is not a number
    if (!isNum && alarm > 0) {
      setTimeout(() => {
        process.stdout.write('\x07');
      }, alarm * 1000);
    }
  }
};

alertTerminal(alarms);
