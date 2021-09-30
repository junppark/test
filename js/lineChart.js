import myData from '../output.json'
const ctx = document.getElementById('myChart')
const dates = []
const ClosingPrice = []
for (let i = 0; i < myData.length; i++){
  dates.push(myData[i].Date)
  ClosingPrice.push(myData[i].Close)
}
const myChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: dates,
    datasets: [{
      label: "Apple Closing Price",
      data: ClosingPrice
    }] 
  },
  options: {
    scales: {
      y: {
        beginAtZero: false
      }
    }
  }
})