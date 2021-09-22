var esprima = require('esprima')
var string = 'var el = <title>${product}</title>';
var ret = esprima.parseScript(string, {jsx: true});
console.log(ret)
