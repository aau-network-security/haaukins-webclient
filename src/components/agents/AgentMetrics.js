import { Box, Center, Flex, Spacer } from '@chakra-ui/react'
import Chart from "react-apexcharts"
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { BASE_URL } from '../../api/client';

function AgentMetrics(websocket) {
  var httpProtocol = 'http://'
  var wsProtocol = 'ws://';
  if (window.location.protocol === 'https:') {
      httpProtocol = 'https://'
      wsProtocol = 'wss://';
  }
  var baseWsUrl = BASE_URL.replace(httpProtocol, wsProtocol) + "agents/ws/"
  const selectedAgent = useSelector((state) => state.agent.selectedAgent)
  const [previousSelected, setPreviousSelected] = useState("")
  const [webSocket, setWebSocket] = useState(null)
  const [cpuState, setCpuState] = useState(0)
  const [memoryState, setMemoryState] = useState(0)
  const [labCount, setLabCount] = useState(0)
  const [vmCount, setVmCount] = useState(0)
  const [containerCount, setContainerCount] = useState(0)
  if (selectedAgent !== null) {
    if (selectedAgent.name !== previousSelected){
      try {
        console.log("creating new websocket")
        console.log("old websocket: ", webSocket)
        if (webSocket != null) {
          console.log("closing previous websocket")
          webSocket.close()
        }
        setCpuState(0)
        setMemoryState(0)
        setLabCount(0)
        setContainerCount(0)
        setVmCount(0)
        setWebSocket(new WebSocket(baseWsUrl + selectedAgent.name + "?token=" + localStorage.getItem('token')))
        console.log("setting previous websocket")
        setPreviousSelected(selectedAgent.name)
      }
      catch (error) {
        console.log(error)
      }
    }
  }  


  useEffect(() => {
    if (webSocket !== null) {
      webSocket.onopen = (event) => {
        console.log("opened websocket")
      };
  
      webSocket.onmessage = function (event) {
        let data = JSON.parse(event.data)
        console.log(typeof data.Cpu);
        setCpuState(data.Cpu.toFixed(2))
        setMemoryState(data.Memory.toFixed(2))
        setLabCount(data.LabCount)
        setVmCount(data.VmCount)
        setContainerCount(data.ContainerCount)
      };
  
      webSocket.onclose = function (event) {
        console.log("closing websocket")
      };
  
      webSocket.onerror = function (err) {
        console.log('Socket encountered error: ', err.message, 'Closing socket');
        webSocket.close();
      };
  
      return () => {
         webSocket.close();
      };
    }
  }, [webSocket]);
  const cpuSeries = [cpuState]
  const cpuOptions = {
    chart: {
      type: "radialBar"
    },
    
    colors: ["#211a52"],
  plotOptions: {
    radialBar: {
      startAngle: -135,
      endAngle: 135,
      hollow: {
        margin: 0,
        size: "60%",
        background: "#fff"
      },
      track: {
        dropShadow: {
          enabled: true,
          top: 2,
          left: 0,
          blur: 4,
          opacity: 0.15
        }
      },
      dataLabels: {
        name: {
          offsetY: -10,
          color: "#211a52",
          fontSize: "13px"
        },
        value: {
          color: "#211a52",
          fontSize: "20px",
          show: true
        }
      }
    }
  },
  stroke: {
    lineCap: "round"
  },
  labels: ["CPU"]
  }

  const memSeries = [memoryState]
  const memOptions = {
    chart: {
      type: "radialBar"
    },
    
    colors: ["#211a52"],
  plotOptions: {
    radialBar: {
      startAngle: -135,
      endAngle: 135,
      hollow: {
        margin: 0,
        size: "60%",
        background: "#fff"
      },
      track: {
        dropShadow: {
          enabled: true,
          top: 2,
          left: 0,
          blur: 4,
          opacity: 0.15
        }
      },
      dataLabels: {
        name: {
          offsetY: -10,
          color: "#211a52",
          fontSize: "13px"
        },
        value: {
          color: "#211a52",
          fontSize: "20px",
          show: true
        }
      }
    }
  },
  stroke: {
    lineCap: "round"
  },
  labels: ["Memory"]
  }
  
  return (
    <Box 
      w="450px" 
      minWidth="400"
      h="650px"
      borderRadius="30px"
      className='container'
    >
      <Flex className='container-header' w="100%">
        <h2 className='container-header-text'>Metrics</h2> 
        <Spacer />
        {selectedAgent !== null
        ?
        <h2 className='container-header-text'>Agent: {selectedAgent.name}</h2>
        :
        null
        }
        
      </Flex>
      {selectedAgent !== null
      ?
        <>
          <Flex >
            <Center w="100%">
              <Chart
                type="radialBar"
                options={cpuOptions}
                series={cpuSeries}
              />
            </Center>
            
          </Flex>
          <Flex>
            <Center w="100%">
              <Chart
                type="radialBar"
                options={memOptions}
                series={memSeries}
              />
            </Center>
          </Flex>
          <Flex>
            <Box w="100%">
              <Flex w="100%">
                <Box w="100%">
                  <Center w="100%">
                    <Flex>
                      <h2 className="metric-title">Active labs</h2>
                    </Flex>
                  </Center>
                  <Center w="100%">
                    <Flex>
                      <h2 className="metric-value">{labCount}</h2>
                    </Flex>
                  </Center>
                </Box>            
              </Flex>
              <Flex w="100%" marginTop="20px">
                <Box w="100%">
                  <Center w="100%">
                    <Flex>
                      <h2 className="metric-title">VMs</h2>
                    </Flex>
                  </Center>
                  <Center w="100%">
                    <Flex>
                      <h2 className="metric-value">{vmCount}</h2>
                    </Flex>
                  </Center>
                </Box> 
                <Box w="100%">
                  <Center w="100%">
                    <Flex>
                      <h2 className="metric-title">Containers</h2>
                    </Flex>
                  </Center>
                  <Center w="100%">
                    <Flex>
                      <h2 className="metric-value">{containerCount}</h2>
                    </Flex>
                  </Center>
                </Box> 
              </Flex>
            </Box>
            
          </Flex>
        </>
      :
       <Center>
        <h2 classname="container-header-text">Select an agent from the list above</h2>
       </Center>
      }
      
      

      
    </Box>
  )
}

export default AgentMetrics