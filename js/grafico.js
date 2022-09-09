const xmlHttp = new XMLHttpRequest();
const url = 'https://paolakossa.github.io/global-teste/json/anoDeNascimento.json';

xmlHttp.open('GET', url, true); 
xmlHttp.send(); 

xmlHttp.onreadystatechange = function () {
    if(this.readyState == 4 && this.status == 200) {
        const dataPoints = JSON.parse(this.responseText);
        const labelNome = dataPoints.ano.map(function(index){
            return index.nome; 
        });

        const labelAno = dataPoints.ano.map(function(index){
            return index.idade; 
        });

        const ctx = document.getElementById('myChart').getContext('2d');
        const myChart = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: labelNome,
          datasets: [{
            label: 'My First Dataset',
            data: labelAno,
            backgroundColor: [
              'rgb(255, 99, 132)',
              'rgb(54, 162, 235)',
              'rgb(255, 205, 86)'
            ],
            hoverOffset: 4
          }]
        }

        });
       
    }
}

