var fs = require('fs');

var args = process.argv.slice(2);

xls2Dec = (xls_col) => {
    xls_col = xls_col.toLowerCase()
    xls_col = xls_col.split("");
    xls_col = xls_col.reverse();
    xls_col = xls_col.join("");
    let dec = 0;
    for (let i = 0; i < xls_col.length; i++) {
        let charToAscii = xls_col.charCodeAt(i) - 96;
        let iteracao = Math.pow(26, i);
        dec += charToAscii * iteracao;
    }
    return dec
};


fs.readFile(args[0], 'utf-8', function (err, contents) {

    if (err) console.log(err)   

    const linhas = contents.split('\n');
    const n = linhas[0];

    for (var i = 1; i <= n; i++) {
        var x = linhas[i].replace(/[^\w]/g, '');
        console.log(x, '=', xls2Dec(x));
    }
});