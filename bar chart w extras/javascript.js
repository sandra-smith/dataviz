var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Anti-Black or African American',
            'Anti-Jewish',
            'Anti-Gay (Male)',
            'Anti-White',
            'Anti-Hispanic or Latino',
            'Anti-Other Race/Ethnicity/Ancestry',
            'Anti-LGBTQ+ (Mixed)',
            'Anti-Asian',
            'Anti-Muslim',
            'Anti-Multiple Races, Group'],
        datasets: [{
            label: 'Total Incidents',
            data: [56754, 20634, 17848, 17508, 11544, 9172, 6872, 5066, 4037, 3976],
            backgroundColor: [
                '#ff0800'
            ]
        }]
    },
    options: {
        responsive: true,
        indexAxis: 'y',
        plugins: {
            title: {
                display: true,
                text: 'Top 10 Bias Motivations in Reported Hate Crimes from 2000-2022',
                font: {
                    size: 22
                }
            },
            subtitle: {
                display: true,
                text: 'Anti-Black, Anti-Jewish, and Anti-Gay crimes are the most frequently reported hate crimes.'
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                stacked: true
            },
            x: {
                stacked: true
            }
        },
    },
});