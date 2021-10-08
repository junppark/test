import myData from '../json/appleIncomeStatement2020-2011.json'
const _ = require('lodash')
console.log(_.camelCase("Research & Development"))

const yearsArr = Object.keys(myData)
const incomeStatementFactorsObjs = myData[0]

let table = document.createElement('table');
let thead = document.createElement('thead');
let tbody = document.createElement('tbody');

const caption = document.createElement('caption')
caption.innerHTML="Apple Income Statement 2020-2011"
table.appendChild(caption)

// thead iteration
const head_row = document.createElement('tr')
const empty_head = document.createElement('th')
head_row.appendChild(empty_head)
for (let i = 0; i < yearsArr.length; i++) {
  const head = document.createElement('th')
  head.innerHTML = myData[i]["Year"]
  head_row.appendChild(head)
}
thead.appendChild(head_row)
table.appendChild(thead);


// delete year property in the json
for (let i = 0; i < myData.length; i++) {
  delete myData[i]["Year"]
}

const first = (Object.entries(Object.keys(myData[0])))
let factors = []
for (let i = 0; i < first.length; i++) {
  for (let j = 1; j < first[0].length; j++){
    factors.push(first[i][j])
  }
}
// console.log(factors)

// tbody iteratioon
for (let i = 0; i < Object.keys(myData[0]).length; i++) {
  const row = document.createElement('tr')
  const head = document.createElement('th')
  head.innerHTML = factors[i]
  row.appendChild(head)
  for (let j = 0; j < yearsArr.length; j++){
    const row_data = document.createElement('td')
    row_data.innerHTML = numberWithCommas(myData[j][factors[i]])
    row.appendChild(row_data)
  }
  tbody.appendChild(row)
}
table.appendChild(tbody);


// Adding the entire table to the body tag
document.getElementById('appleIncomeStatementTable').appendChild(table);

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}



