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
              '#EDDFB3',
              '#E6B325',
              '#25316D'
            ],
            hoverOffset: 4
          }]
        }

        });
       
    }
}

