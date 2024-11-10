import classNames from "classnames/bind";
import styles from "./HomePage.module.scss";
import React, { useEffect, useRef, useState } from "react";
import { Chart } from "chart.js/auto";
import axios from "axios";
import { DefaultLayout } from "../../layouts";

const cx = classNames.bind(styles); 
function Home() {
  const [sensorData, setSensorData] = useState({
    temperatureData: [],
    humidityData: [],
    luxData: [],
  });

  async function fetchSensorData() {
    try {
      const response = await fetch(
        "https://io.adafruit.com/api/v2/Vinhnguyen2003/feeds/sensors/data"
      );
      if (!response.ok) {
        throw new Error("Network response was not ok " + response.statusText);
      }
      const responseData = await response.json();
      

      // Initialize arrays for temperature, humidity, and lux
      const temperatureData = [];
      const humidityData = [];
      const luxData = [];

      responseData.slice(0, 10).forEach((item) => {
        const [email, temp, humid, lux] = item.value.split("_");
        temperatureData.push(parseFloat(temp));
        humidityData.push(parseFloat(humid));
        luxData.push(parseFloat(lux));
      });
      console.log(temperatureData);
      return { 
        temperatureData: temperatureData.reverse(),
        humidityData: humidityData.reverse(),
        luxData: luxData.reverse(), 
      };
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
    }
  }

  const updateData = async () => {
    const newData = await fetchSensorData();
    setSensorData(newData);
  };
  
  useEffect(() => {
    updateData();
    const intervalId = setInterval(updateData, 10000);
    return () => clearInterval(intervalId);
  }, []);

  const areaChartRef = useRef(null);
  const meterChartRef = useRef(null);
  const humidChartRef = useRef(null);

  const TempChartData = {
    labels: Array.from({ length: 10 }, (_, i) => (i + 1).toString()),
    datasets: [
      {
        label: "Temperature",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        borderColor: "rgba(255, 99, 132, 1)",
        pointRadius: 4,
        pointBackgroundColor: "#ff6384",
        pointBorderColor: "#fff",
        tension: 0.4,
        fill: true,
        data: sensorData.temperatureData,
      },
    ],
  };

  const HumidChartData = {
    labels: Array.from({ length: 10 }, (_, i) => (i + 1).toString()),
    datasets: [
      {
        label: "Humidity",
        backgroundColor: "rgba(60,141,188,0.5)",
        borderColor: "rgba(60,141,188,1)",
        pointRadius: 4,
        pointBackgroundColor: "#3b8bba",
        pointBorderColor: "#fff",
        tension: 0.4,
        fill: true,
        data: sensorData.humidityData,
      },
    ],
  };

  const areaChartOptions = {
    maintainAspectRatio: false,
    responsive: true,
    plugins: { legend: { display: false } },
    scales: {
      x: { grid: { display: false } },
      y: { grid: { display: false } },
    },
    animation: false,
  };

  const meterChartOptions = {
    type: "doughnut",
    data: {
      datasets: [
        {
          data: [sensorData.luxData[0] || 0, 100 - (sensorData.luxData[0] || 0)],
          backgroundColor: ["#4caf50", "#d3d3d3"],
          borderWidth: 0,
          cutout: "70%",
          circumference: 288,
          rotation: 216,
        },
      ],
    },
    options: {
      maintainAspectRatio: false,
      responsive: true,
      plugins: {
        legend: { display: false },
        tooltip: { enabled: false },
        centerText: { display: true, value: sensorData.luxData[0] || 0, unit: "Light" },
      },
      animation: false,
    },
    plugins: [
      {
        id: "centerText",
        beforeDraw(chart) {
          const { width, height, ctx } = chart;
          ctx.restore();
          const fontSize = (height / 160).toFixed(2);
          ctx.font = `${fontSize}em sans-serif`;
          ctx.textBaseline = "middle";

          const text = chart.options.plugins.centerText.value.toString();
          const unit = chart.options.plugins.centerText.unit;
          const textX = Math.round((width - ctx.measureText(text).width) / 2);
          const textY = height / 2 - 10;

          ctx.fillStyle = "#000";
          ctx.fillText(text, textX, textY);

          ctx.font = `${(fontSize * 0.7).toFixed(2)}em sans-serif`;
          const unitX = Math.round((width - ctx.measureText(unit).width) / 2);
          ctx.fillText(unit, unitX, textY + 20);
          ctx.save();
        },
      },
    ],
  };

  useEffect(() => {
    const charts = [];

    const initializeChart = (ref, config) => {
      if (ref.current) {
        const chart = new Chart(ref.current, config);
        charts.push(chart);
      }
    };

    initializeChart(areaChartRef, {
      type: "line",
      data: TempChartData,
      options: areaChartOptions,
    });

    initializeChart(humidChartRef, {
      type: "line",
      data: HumidChartData,
      options: areaChartOptions,
    });

    initializeChart(meterChartRef, meterChartOptions);

    return () => {
      charts.forEach((chart) => chart.destroy());
    };
  }, [sensorData]);

  return (
    <DefaultLayout>
      <div className={cx('content-wrapper')}>
        <section className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1 className={cx('title-homepage')}>Thống kê sử dụng</h1>
              </div>
            </div>
          </div>
        </section>
        <section className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-6">
                <div className="card card-danger">
                  <div className="card-header">
                    <h3 className="card-title">Nhiệt độ</h3>
                  </div>
                  <div className="card-body">
                    <canvas ref={areaChartRef} style={{ minHeight: 250, height: 250 }} />
                  </div>
                </div>
                <div className="card card-primary">
                  <div className="card-header">
                    <h3 className="card-title">Độ ẩm</h3>
                  </div>
                  <div className="card-body">
                    <canvas ref={humidChartRef} style={{ minHeight: 250, height: 250 }} />
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card card-info">
                  <div className="card-header">
                    <h3 className="card-title">Độ sáng</h3>
                  </div>
                  <div className="card-body">
                    <canvas ref={meterChartRef} style={{ minHeight: 250, height: 250 }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </DefaultLayout>
  );
}

export default Home;
