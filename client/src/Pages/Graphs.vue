<template>
    <div>
        <Navbar/>
        <div class="container" style="margin-top: 40px">
            <div id="eventChart" ref="eventChart" class="text-center mx-auto mb-5"></div>
            <div id="capacityChart" ref="capacityChart" class="text-center mx-auto"></div>
        </div>
        <Footer/>
    </div>
</template>

<script>
    import Navbar from "../components/Navbar";
    import Footer from "../components/Footer";
    import {REST_API_ENDPOINT , REST_API_PORT } from "../App";
    import ApexCharts from 'apexcharts'

    export default {
        name: "Graphs",
        components: { Footer, Navbar},
        data: function () {
            return {
                events: null,
                error: null,
                success: null,
                firstDate: new Date(8640000000000000), lastDate: new Date(-8640000000000000),
                eventGraphOption: {
                    series: [{data:[]}],
                    chart: {
                        height: 200,
                        type: 'rangeBar',
                        toolbar: {
                            show: false
                        }
                    },
                    title: {
                        text: 'Events TimeTable',
                        align: 'left'
                    },
                    plotOptions: {
                        bar: {
                            horizontal: true,
                            barHeight: "50%"
                        }
                    },
                    xaxis: {
                        type: 'datetime'
                    },
                    yaxis: {
                        labels: {
                            style: {
                                fontSize: '15px',
                            },
                        }
                    }
                },
                capacityGraphOption: {
                    series: [{
                        name: "Capacity",
                        data: []
                    }],
                    chart: {
                        height: 350,
                        type: 'line',
                        zoom: {
                            enabled: true
                        },
                        toolbar: {
                            show: false
                        }
                    },
                    dataLabels: {
                        enabled: false
                    },
                    stroke: {
                        curve: 'straight'
                    },
                    title: {
                        text: 'Events Capacity per days',
                        align: 'left'
                    },
                    grid: {
                        row: {
                            colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                            opacity: 0.5
                        },
                    },
                    xaxis: {
                        type: "category",
                        categories: [],
                        labels: {
                            show: true,
                            rotate: -45,
                            rotateAlways: false,
                            hideOverlappingLabels: true,
                            showDuplicates: false,
                            trim: true,
                        }
                    },
                    colors:['#211a52']

                }
            }
        },
        created: function() {
            this.listEvent();
        },
        methods: {
            showEventGraph: function () {
                const eventChart = new ApexCharts(this.$refs.eventChart, this.eventGraphOption);
                eventChart.render();
            },
            showCapacityGraph: function () {
                const capacityChart = new ApexCharts(this.$refs.capacityChart, this.capacityGraphOption);
                capacityChart.render();
            },
            listEvent: function () {
                let that = this;
                const opts = {
                   method: 'GET',
                   headers: { 'Content-Type': 'application/json' , 'token': localStorage.getItem('user')},
                 };
                let status = 4; // all events
                fetch(REST_API_ENDPOINT + ":" + REST_API_PORT +'/admin/event/list/'+status, opts).then(response => response.json())
                  .then(response => {
                    if (response.message !== undefined) {
                      window.console.log("Unable to fetch -", response.message);
                      this.error = response.message;
                    }
                    this.events = response.events
                    this.events.forEach(function (element) {
                      let createdTime = element['creationTime']
                      let creationDate = new Date(createdTime.substring(0,10));
                      let finishDate = new Date(element['finishTime'].substring(0,10));

                      //assign the earliest and the latest data
                      if (creationDate < that.firstDate) {
                        that.firstDate = creationDate
                      }
                      if (finishDate > that.lastDate) {
                        that.lastDate = finishDate
                      }

                      //Fill in the Event graph option
                      let eventLineChart =  {
                        x: element['tag'],
                        y: [
                          creationDate.getTime(),
                          finishDate.getTime()
                        ],
                        fillColor: that.getRandomColor()
                      };
                      that.eventGraphOption.series[0].data.push(eventLineChart)
                    })
                    this.showEventGraph();
                    this.createCapacityGraph()
                  })


            },
            getRandomColor: function () {
                const letters = '0123456789ABCDEF';
                let color = '#';
                for (let i = 0; i < 6; i++) {
                    color += letters[Math.floor(Math.random() * 16)];
                }
                return color;
            },
            createCapacityGraph: function () {
                const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

                this.firstDate.setDate(this.firstDate.getDate() - 1);
                while (this.firstDate < this.lastDate){
                    let datePlusDay = new Date(this.firstDate.setDate(this.firstDate.getDate() + 1));
                    let value = 0;

                    const eventsList = this.events
                    for (let i=0; i < eventsList.length; i++){
                        let creationTime = eventsList[i]['creationTime']
                        if (datePlusDay >= new Date(creationTime.substring(0,10)) && datePlusDay <= new Date(eventsList[i]['finishTime'].substring(0,10))){
                            value = value + eventsList[i]['capacity']
                        }
                    }
                    this.capacityGraphOption.series[0].data.push(value);
                    this.capacityGraphOption.xaxis.categories.push(datePlusDay.getDate() + " " + monthNames[datePlusDay.getMonth()]);
                    value = 0;
                }
                this.showCapacityGraph()
            }
        }
    }
</script>