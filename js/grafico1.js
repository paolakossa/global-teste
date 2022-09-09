const xmlHttp1 = new XMLHttpRequest();
const url1 = 'https://paolakossa.github.io/global-teste/json/corDePele.json';

xmlHttp1.open('GET', url1, true); 
xmlHttp1.send(); 

xmlHttp1.onreadystatechange = function () {
    if(this.readyState == 4 && this.status == 200) {
        const dataPoints1 = JSON.parse(this.responseText);
        const labelNome1 = dataPoints1.pele.map(function(index){
            return index.nome; 
        });

        console.log(dataPoints1);

        const labelCor = dataPoints1.pele.map(function(index){
            return index.cor; 
        });

        const ctx = document.getElementById('myChart1').getContext('2d');
        const myChart = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: labelNome1,
          datasets: [{
            label: 'Cor de pele dos personagens Star Wars',
            data: labelCor,
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

