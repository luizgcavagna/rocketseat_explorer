function sayMyName(name) {
  if(name === '' || !name )
    throw new Error('Nome necessario');

  console.log(name);
}

try {
  //sayMyName();
}
catch(e) {
  console.log(e);
}