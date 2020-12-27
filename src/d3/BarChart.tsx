import React, { useEffect } from 'react';
import * as d3 from 'd3';

const BarChart: React.FC = () => {
  const data = [12, 5, 6, 6, 9, 10];
  const drawChart = () => {
    const w = 700;
    const h = 300;

    // body 에 svg HTML 엘리먼트 생성
    const svg = d3
      .select('body')
      .append('svg')
      .attr('width', w)
      .attr('height', h);

    // selectAll 과 매칭되는 엘리먼트에게 data 를 전달
    svg
      .selectAll('rect')
      .data(data)
      .enter()
      .append('rect')
      .attr('x', (d, i) => i * 70)
      .attr('y', (d) => h - 10 * d)
      .attr('width', 25)
      .attr('height', (d) => d * 10)
      .attr('fill', 'green');

    svg
      .selectAll('text')
      .data(data)
      .enter()
      .append('text')
      .text((d) => d)
      .attr('x', (d, i) => i * 70)
      .attr('y', (d) => h - 10 * d - 3);
  };

  useEffect(() => drawChart(), []);

  return (
    <div>
      <div>Bar Chart</div>
    </div>
  );
};

export default BarChart;
