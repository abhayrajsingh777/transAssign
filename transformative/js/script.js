$(document).ready(function(){
  $(".drop_down,.hembuger,.logo").css("display","none");

  $(".notifi i").on("click",function(){
    $(".drop_down").slideToggle(1000);
  });

    $("#dashboard .slide").on("click",function(){
        $(".hembuger,.logo").show();
        $(".slide,aside .menu span").css("display","none");
        $("aside").animate({
            width: "5%"
        }, 500);
         $("#dashboard main,#dashboard header").animate({
            marginLeft: "5%",
            width:"95%"
        }, 500);       
    });

    $("#dashboard .hembuger").on("click",function(){
        $(".slide").show();
        $(".hembuger,.logo").css("display","none");
        $("aside .menu span").css("display","block");
        $("aside").animate({
            width: "200"
        }, 500);
         $("#dashboard main").animate({
            marginLeft: "200"
        }, 500);
         $("#dashboard header").animate({
            marginLeft: "200",
            width:"86.5%"
        }, 500);                        
    });

});

let ctxL = document.getElementById("linechart").getContext('2d');
let linechart = new Chart(ctxL, {
    type: 'line',
  data: {
    labels: ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Nov","Dec"],
    datasets: [{ 
        data: [0,10,30,20,40,10,30,10,50,20,40],
        borderColor: "#fb8d8e",
        lineTension: 0,
        pointRadius: 0, 
        fill: false
      }, { 
        data: [0,20,10,20,50,20,40,10,20,30,10],
        borderColor: "#5bdcbd",
        lineTension: 0, 
        pointRadius: 0,
        fill: false
      }
    ]
  },
    options: {
        responsive: true,
    legend: {
        display: false
    },
    tooltips: {
        callbacks: {
           label: function(tooltipItem) {
                  return tooltipItem.yLabel;
                }
            }
        }
    }
});

let ctx = document.getElementById("barchat").getContext('2d');
let barchat = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["Jan", "Feb", "March", "April", "May", "June"],
        datasets: [{
            data: [8, 4, 7, 5, 1, 3],
            backgroundColor: [
                '#52dab9',
                '#52dab9',
                '#52dab9',
                '#52dab9',
                '#52dab9',
                '#52dab9'
            ]
        }]
    },
    options: {
responsive: true,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        },
            legend: {
        display: false
    },
    tooltips: {
        callbacks: {
           label: function(tooltipItem) {
                  return tooltipItem.yLabel;
                }
            }
        }
    }
});



