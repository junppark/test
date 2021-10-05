import myData from '../json/applecashflow2020-2011.json'
const data = myData[0]
const yearsArray = Object.keys(data)
const cashFlowFactorsArray = Object.keys(data["2020"])

let table = document.createElement('table');
let thead = document.createElement('thead');
let tbody = document.createElement('tbody');

const caption = document.createElement('caption')
caption.innerHTML="Apple Cash Flow 2020-2011"
table.appendChild(caption)

// thead iteration
const head_row = document.createElement('tr')
const empty_head = document.createElement('th')
head_row.appendChild(empty_head)
for (let i = 0; i < yearsArray.length; i++) {
  const head = document.createElement('th')
  head.innerHTML = yearsArray[yearsArray.length - 1 - i]
  head_row.appendChild(head)
}
thead.appendChild(head_row)
table.appendChild(thead);

// tbody iteration
for (let i = 0; i < cashFlowFactorsArray.length; i++) {
  const row = document.createElement('tr')
  const head = document.createElement('th')
  head.innerHTML = cashFlowFactorsArray[i]
  row.appendChild(head)
  for (let j = 0; j < yearsArray.length; j++){
    const row_data = document.createElement('td')
    row_data.innerHTML = numberWithCommas(data[yearsArray[yearsArray.length - 1 - j]][cashFlowFactorsArray[i]])
    row.appendChild(row_data)
  }
  tbody.appendChild(row)
}
table.appendChild(tbody);

// Adding the entire table to the body tag
document.getElementById('appleCashFlowTable').appendChild(table);

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}