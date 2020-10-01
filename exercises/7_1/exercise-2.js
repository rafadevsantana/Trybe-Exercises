const  longestLength = (str) => str.split(' ').map(s => s.length).reverse()[0];

  console.log(longestLength('Antônio foi no banheiro e não sabemos o que aconteceu'))