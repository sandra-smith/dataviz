var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',

    data: {
        labels: ['2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022'],
        datasets: [{
            label: 'Total Hate Crime Incidents',
            data: [8217, 9730, 7485, 7539, 7684, 7411, 7715, 7623, 8039, 6612,
                6628, 6299, 6592, 6044, 5597, 5843, 6270, 7327, 7179, 7868,
                9949, 10889, 11643],
            fill: true,
            borderColor: 'rgba(255, 8, 0)',
            backgroundColor: 'rgba(255, 8, 0, 0.1)',
            tension: 0.1
        },
        ]
    },
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Total Repoted Hate Crime Incidents from 2000-2022',
                font: {
                    size: 22
                }
            },
            subtitle: {
                display: true,
                text: 'Since 2018, hate crimes have been steadily increasing, reaching over 11,000 in 2022.'
            }
        },
        scales: {
            y: {
                beginAtZero: true,
            }
        },
    },
});