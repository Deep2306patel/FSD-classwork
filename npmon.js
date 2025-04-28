var obj={d:{a:10,b:20,c:[30,10]}}


var fs = require('fs')

fs.writeFileSync('s2.txt',JSON.stringify(obj)+'\n')
data1 = fs.readFileSync('s2.txt','utf-8')
data1= JSON.parse(data1)
add = data1.d.a+data1.d.b;
sub = Math.abs(data1.d.c[1]-data1.d.b)
mul = data1.d.c[0]*data1.d.c[1]
fs.appendFileSync('s2.txt', add+'\n'+sub+'\n'+mul)
