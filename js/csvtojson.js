const csvtojson = require('csvtojson')
const fs = require('fs')
const f = 'appleIncomeStatement'
const csvfilepath = `./data/${f}.csv`

csvtojson()
.fromFile(csvfilepath)
.then((json) => {
  console.log(json)
  fs.writeFileSync(`./json/${f}2020-2011.json`, JSON.stringify(json),"utf-8",(err) => {
    if(err) console.log(err)
  })
})