import "./chart.scss";
import * as d3 from "d3";
import {  useState , useEffect } from "react";


const Chart = () => {
  
  const [barData,setBarData] = useState([
    200,250 ,70 ,150 ,100,175
  ]);
    const  drawChart = (barData) => {
      //svg conatiner
      const width = 500;
      const height = 400;
      var svg = d3.selectAll(".chart__bar")
      .append("svg")
      .attr("width",width)
      .attr("height",height)
      .style("overflow","visible")
      .style("margin-bottom","20px")
      .style("margin-top","10px");
      // scaling
      const scaleX = d3.scaleBand()
      .domain(barData.map((val , i) => i))
      .range([0 ,width])
      
  
      const scaleY = d3.scaleLinear()
      .domain([0 ,height])
      .range([height ,0]);
  
  // axis
      const  axisX = d3.axisBottom(scaleX)
      .ticks(barData.length);
      const  axisY = d3.axisLeft(scaleY)
      .ticks(10);
      svg.append("g")
      .call(axisX)
      .attr('transform',`translate(0 ,${height})`);
  
      svg.append("g")
      .call(axisY);
  
      // svg data]
      
       svg.selectAll(".bar")
      .data(barData)
      .join("rect")
      .attr("fill" ,"#6eb5f2b8")
      .attr("stroke" ,"#458eceb8")
      .attr("x",(val ,i ) => scaleX(i))
      .attr("y",scaleY)
      .attr("width", scaleX.bandwidth())
      .attr("height",val => height - scaleY(val));
    } 
 
  const  handleClick = () =>{
    d3.selectAll("svg").remove();
    const  data = Array(6)
                  .fill()
                  .map(() => Math.floor(Math.random() *350));
 
    setBarData(data);
    setTimeout(() =>{
    drawChart(barData);
    },200);
  }
  useEffect(() =>{
     //svg conatiner
     const width = 500;
     const height = 400;
     var svg = d3.select("svg")
     .attr("width",width)
     .attr("height",height)
     .style("overflow","visible")
     .style("margin-bottom","20px")
     .style("margin-top","10px");
     // scaling
     const scaleX = d3.scaleBand()
     .domain(barData.map((val , i) => i))
     .range([0 ,width])
     
     
 
     const scaleY = d3.scaleLinear()
     .domain([0 ,height])
     .range([height ,0]);
 
 // axis
     const  axisX = d3.axisBottom(scaleX)
     .ticks(barData.length);
     const  axisY = d3.axisLeft(scaleY)
     .ticks(10);
     svg.append("g")
     .call(axisX)
     .attr('transform',`translate(0 ,${height})`);
 
     svg.append("g")
     .call(axisY);
 
     // svg data]
     
      svg.selectAll(".bar")
     .data(barData)
     .join("rect")
     .attr("fill" ,"#6eb5f2b8")
     .attr("stroke" ,"#458eceb8")
     .attr("x",(val ,i ) => scaleX(i))
     .attr("y",scaleY)
     .attr("width", scaleX.bandwidth())
     .attr("height",val => height - scaleY(val));

  },[barData]);
  return (
    <div>
      <div className="chart__container">
        <div className="chart__wrapper">
          <div className="chart__bar">
              <svg id="sv" className="chart__svg"></svg>
              <button className="chart__button" onClick={handleClick}>Click Here</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Chart