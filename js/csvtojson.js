const csvtojson = require('csvtojson')
const fs = require('fs')
const f = 'applecashflow2020-2011'
const csvfilepath = `./data/${f}.csv`

csvtojson()
.fromFile(csvfilepath)
.then((json) => {
  console.log(json)
  fs.writeFileSync(`./json/${f}.json`, JSON.stringify(json),"utf-8",(err) => {
    if(err) console.log(err)
  })
})