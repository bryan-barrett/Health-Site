// JS to make the charts for the chart full page

let pieChart = document.querySelector('#myChartOne').getContext('2d');
let barChart = document.querySelector('#myChartTwo').getContext('2d');
let lineChart = document.querySelector('#myChartThree').getContext('2d');
let doughnutChart = document.querySelector('#myChartFour').getContext('2d');



let weightChart = new Chart(pieChart, {
    type: 'pie',
    data: {
        labels:['Underweight', 'Normal', 'Overweight', 'Obese'],
        datasets:[{
            label: 'BMI Ireland',
            data: [1,39,37,23],
            backgroundColor:[
                'rgba(255, 99, 132, 0.6)',
                'rgba(54, 162, 235, 0.6)',
                'rgba(255, 206, 86, 0.6)',
                'rgba(75, 192, 192, 0.6)',
            ]
        }]
    },
    options: {
        title:{
            display:true,
            text:'Percentage of overweight people in Ireland'

        }
    }
});

let countyChart = new Chart(barChart, {
    type: 'bar',
    data: {
        labels:['USA', 'Australia', 'Ireland', 'UK', 'Spain'],
        datasets:[{
            label: 'Average BMI',
            data: [28.8,27.15,27.4,27.2,26.65],
            backgroundColor:[
                'rgba(255, 99, 132, 0.6)',
                'rgba(54, 162, 235, 0.6)',
                'rgba(255, 206, 86, 0.6)',
                'rgba(75, 192, 192, 0.6)',
                'rgba(255, 159, 64, 0.6)'
            ]
        }]
    },
    options: {
        title:{
            display:true,
            text:'Average BMI in Ireland Compared to other Countries per Metre sq'
        }
    }
});

let cou = new Chart(lineChart, {
    type: 'line',
    data: {
        labels:['USA', 'Australia', 'Ireland', 'UK', 'Spain'],
        datasets:[{
            label: 'Average BMI',
            data: [28.8,27.15,27.4,27.2,26.65],
            backgroundColor:[
                'rgba(255, 99, 132, 0.6)',
                'rgba(54, 162, 235, 0.6)',
                'rgba(255, 206, 86, 0.6)',
                'rgba(75, 192, 192, 0.6)',
                'rgba(255, 159, 64, 0.6)'
            ]
        }]
    },
    options: {
        title:{
            display:true,
            text:'Average BMI in Ireland Compared to other Countries per Metre sq'
        }
    }
});

let hart = new Chart(doughnutChart, {
    type: 'doughnut',
    data: {
        labels:['USA', 'Australia', 'Ireland', 'UK', 'Spain'],
        datasets:[{
            label: 'Average BMI',
            data: [28.8,27.15,27.4,27.2,26.65],
            backgroundColor:[
                'rgba(255, 99, 132, 0.6)',
                'rgba(54, 162, 235, 0.6)',
                'rgba(255, 206, 86, 0.6)',
                'rgba(75, 192, 192, 0.6)',
                'rgba(255, 159, 64, 0.6)'
            ]
        }]
    },
    options: {
        title:{
            display:true,
            text:'Average BMI in Ireland Compared to other Countries per Metre sq'
        }
    }
});

