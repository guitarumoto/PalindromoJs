
function palindromo(str) {
    var len = Math.floor(str.length / 2);
    for (var i = 0; i < len; i++)
      if (str[i] !== str[str.length - i - 1])
        return console.log("Não é palíndromo");
    return console.log("É um palíndromo");
}

palindromo("arara")