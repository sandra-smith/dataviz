var ctx = document.getElementById('myChart').getContext('2d');
      var myChart = new Chart(ctx, {
          type: 'polarArea',
          data: {
            labels: [
              'Destruction/Vandalism',
              'Intimidation',
              'Simple Assault',
              'Aggravated Assault',
              'Robbery',
              'Burglary '
            ],
            datasets: [{
              label: 'Hate Crime Offense Types',
              data: [53068,48204,35332,17806,2899,2509],
              backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(75, 192, 192)',
                'rgb(255, 205, 86)',
                'rgb(201, 203, 207)',
                'rgb(54, 162, 235)'
              ]
            }]
          },
          options: {
            responsive: true,
            plugins: {
              legend: {
                position: 'top',
              },
              title: {
                display: true,
                text: 'Most Common Hate Crimes by Offense Type from 2000-2022'
              },
              subtitle: {
                display: true, 
                text: 'Vandalism and intimidation are the most frequent forms of hate crime offenses reported.'
              }
            }
          }
        });