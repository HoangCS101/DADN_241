// import classNames from "classnames/bind";
// import styles from "./HomePage.module.scss"

// import React, { useEffect, useRef } from "react";
// import { Chart } from "chart.js/auto";
// import axios from "axios";

// function Home() { 
//   const fetchTemperature = async () => {
//     const apiKey = process.env.ADAFRUIT_IO_KEY;
//     const username = process.env.ADAFRUIT_IO_USERNAME;
//     const feedKey = "va-tem";
//     const baseUrl =
//       "https://io.adafruit.com/api/v2/" +
//       username +
//       "/feeds/" +
//       feedKey +
//       "/data";

//     try {
//       const response = await axios.get(
//         `${baseUrl}/${username}/feeds/${feedKey}/data`,
//         {
//           headers: {
//             "X-AIO-Key": apiKey,
//           },
//         }
//       );
//       console.log(response.data); // Temperature data from Adafruit
//     } catch (error) {
//       console.error("Error fetching temperature data:", error);
//     }
//   };

//   const areaChartRef = useRef(null);
//   const meterChartRef = useRef(null);
//   const humidChartRef = useRef(null);

//   var areaChartData = {
//     labels: ["January", "February", "March", "April", "May", "June", "July"],
//     datasets: [
//       {
//         label: "Digital Goods",
//         backgroundColor: "rgba(60,141,188,0.5)", // Fill color with transparency
//         borderColor: "rgba(60,141,188,1)", // Line color
//         pointRadius: 4,
//         pointBackgroundColor: "#3b8bba", // Point color
//         pointBorderColor: "#fff",
//         tension: 0.4, // Adds the smooth curve effect
//         fill: true, // Enables the area fill under the line
//         data: [28, 48, 40, 19, 86, 27, 90],
//       },
//       {
//         label: "Electronics",
//         backgroundColor: "rgba(210, 214, 222, 0.5)",
//         borderColor: "rgba(210, 214, 222, 1)",
//         pointRadius: 4,
//         pointBackgroundColor: "#c1c7d1",
//         pointBorderColor: "#fff",
//         tension: 0.4, // Smooth curve effect
//         fill: true, // Area fill
//         data: [65, 59, 80, 81, 56, 55, 40],
//       },
//     ],
//   };

//   const donutData = {
//     labels: ["Chrome", "IE", "FireFox", "Safari", "Opera", "Navigator"],
//     datasets: [
//       {
//         data: [700, 500, 400, 600, 300, 100],
//         backgroundColor: [
//           "#f56954",
//           "#00a65a",
//           "#f39c12",
//           "#00c0ef",
//           "#3c8dbc",
//           "#d2d6de",
//         ],
//       },
//     ],
//   };

//   useEffect(() => {
//     fetchTemperature();

//     const charts = [];

//     const initializeChart = (ref, config) => {
//       if (ref.current) {
//         const chart = new Chart(ref.current, config);
//         charts.push(chart);
//       }
//     };

//     var areaChartOptions = {
//       maintainAspectRatio: false,
//       responsive: true,
//       legend: {
//         display: false,
//       },
//       scales: {
//         xAxes: [
//           {
//             gridLines: {
//               display: false,
//             },
//           },
//         ],
//         yAxes: [
//           {
//             gridLines: {
//               display: false,
//             },
//           },
//         ],
//       },
//     };

//     initializeChart(areaChartRef, {
//       type: "line",
//       data: areaChartData,
//       options: areaChartOptions,
//     });
//     initializeChart(humidChartRef, {
//       type: "line",
//       data: areaChartData,
//       options: areaChartOptions,
//     });

//     //Add meterChart here
//     // Meter Chart Configuration (Speed Gauge)
//     const meterChartOptions = {
//       type: "doughnut",
//       data: {
//         datasets: [
//           {
//             data: [69, 31],
//             backgroundColor: ["#4caf50", "#d3d3d3"], // Green and light gray
//             borderWidth: 0,
//             cutout: "70%", // Hollow out the middle for gauge effect
//             circumference: 288, // Crops out 20% at the bottom (360 - 72 degrees)
//             rotation: 216, // Rotates to ensure the gap is at the bottom
//           },
//         ],
//       },
//       options: {
//         maintainAspectRatio: false,
//         responsive: true,
//         plugins: {
//           legend: { display: false },
//           tooltip: { enabled: false },
//           centerText: {
//             display: true,
//             value: "69", // Example value (adjust dynamically)
//             unit: "Light",
//           },
//         },
//       },
//       plugins: [
//         {
//           id: "centerText",
//           beforeDraw(chart) {
//             const { width, height, ctx } = chart;
//             ctx.restore();
//             const fontSize = (height / 160).toFixed(2);
//             ctx.font = `${fontSize}em sans-serif`;
//             ctx.textBaseline = "middle";

//             const text = chart.options.plugins.centerText.value;
//             const unit = chart.options.plugins.centerText.unit;
//             const textX = Math.round((width - ctx.measureText(text).width) / 2);
//             const textY = height / 2 - 10;

//             ctx.fillStyle = "#000";
//             ctx.fillText(text, textX, textY);

//             ctx.font = `${(fontSize * 0.7).toFixed(2)}em sans-serif`;
//             const unitX = Math.round((width - ctx.measureText(unit).width) / 2);
//             ctx.fillText(unit, unitX, textY + 20);
//             ctx.save();
//           },
//         },
//       ],
//     };

//     initializeChart(meterChartRef, meterChartOptions);

//     return () => {
//       charts.forEach((chart) => chart.destroy());
//     };
//   }, []);

//   return (
//     <div className="content-wrapper">
//       <section className="content-header">
//         <div className="container-fluid">
//           <div className="row mb-2">
//             <div className="col-sm-6">
//               <h1>ChartJS</h1>
//             </div>
//             <div className="col-sm-6">
//               <ol className="breadcrumb float-sm-right">
//                 <li className="breadcrumb-item">
//                   <a href="#">Home</a>
//                 </li>
//                 <li className="breadcrumb-item active">ChartJS</li>
//               </ol>
//             </div>
//           </div>
//         </div>
//       </section>
//       {/* Main content */}
//       <section className="content">
//         <div className="container-fluid">
//           {/* Small boxes (Stat box) */}
//           <div className="row">
//             <div className="col-lg-3 col-6">
//               {/* small box */}
//               <div className="small-box bg-info">
//                 <div className="inner">
//                   <h3>150</h3>
//                   <p>New Orders</p>
//                 </div>
//                 <div className="icon">
//                   <i className="ion ion-bag" />
//                 </div>
//                 <a href="#" className="small-box-footer">
//                   More info <i className="fas fa-arrow-circle-right" />
//                 </a>
//               </div>
//             </div>
//             {/* ./col */}
//             <div className="col-lg-3 col-6">
//               {/* small box */}
//               <div className="small-box bg-success">
//                 <div className="inner">
//                   <h3>
//                     53<sup style={{ fontSize: 20 }}>%</sup>
//                   </h3>
//                   <p>Bounce Rate</p>
//                 </div>
//                 <div className="icon">
//                   <i className="ion ion-stats-bars" />
//                 </div>
//                 <a href="#" className="small-box-footer">
//                   More info <i className="fas fa-arrow-circle-right" />
//                 </a>
//               </div>
//             </div>
//             {/* ./col */}
//             <div className="col-lg-3 col-6">
//               {/* small box */}
//               <div className="small-box bg-warning">
//                 <div className="inner">
//                   <h3>44</h3>
//                   <p>User Registrations</p>
//                 </div>
//                 <div className="icon">
//                   <i className="ion ion-person-add" />
//                 </div>
//                 <a href="#" className="small-box-footer">
//                   More info <i className="fas fa-arrow-circle-right" />
//                 </a>
//               </div>
//             </div>
//             {/* ./col */}
//             <div className="col-lg-3 col-6">
//               {/* small box */}
//               <div className="small-box bg-danger">
//                 <div className="inner">
//                   <h3>65</h3>
//                   <p>Unique Visitors</p>
//                 </div>
//                 <div className="icon">
//                   <i className="ion ion-pie-graph" />
//                 </div>
//                 <a href="#" className="small-box-footer">
//                   More info <i className="fas fa-arrow-circle-right" />
//                 </a>
//               </div>
//             </div>
//             {/* ./col */}
//           </div>
//           {/* /.row */}
//           <div className="row">
//             <div className="col-md-6">
//               {/* Temperature */}
//               <div className="card card-primary">
//                 <div className="card-header">
//                   <h3 className="card-title">Temperature</h3>

//                   <div class="card-tools">
//                     <button
//                       type="button"
//                       class="btn btn-tool"
//                       data-card-widget="collapse"
//                     >
//                       <i class="fas fa-minus"></i>
//                     </button>
//                     <button
//                       type="button"
//                       class="btn btn-tool"
//                       data-card-widget="remove"
//                     >
//                       <i class="fas fa-times"></i>
//                     </button>
//                   </div>
//                 </div>
//                 <div className="card-body">
//                   <canvas
//                     ref={areaChartRef}
//                     style={{ minHeight: 250, height: 250 }}
//                   />
//                 </div>
//               </div>
//               {/* Humidity */}
//               <div className="card card-primary">
//                 <div className="card-header">
//                   <h3 className="card-title">Humidity</h3>

//                   <div class="card-tools">
//                     <button
//                       type="button"
//                       class="btn btn-tool"
//                       data-card-widget="collapse"
//                     >
//                       <i class="fas fa-minus"></i>
//                     </button>
//                     <button
//                       type="button"
//                       class="btn btn-tool"
//                       data-card-widget="remove"
//                     >
//                       <i class="fas fa-times"></i>
//                     </button>
//                   </div>
//                 </div>
//                 <div className="card-body">
//                   <canvas
//                     ref={humidChartRef}
//                     style={{ minHeight: 250, height: 250 }}
//                   />
//                 </div>
//               </div>
//             </div>

//             <div className="col-md-6">
//               {/* Brightness */}
//               <div className="card card-info">
//                 <div className="card-header">
//                   <h3 className="card-title">Brightness</h3>

//                   <div class="card-tools">
//                     <button
//                       type="button"
//                       class="btn btn-tool"
//                       data-card-widget="collapse"
//                     >
//                       <i class="fas fa-minus"></i>
//                     </button>
//                     <button
//                       type="button"
//                       class="btn btn-tool"
//                       data-card-widget="remove"
//                     >
//                       <i class="fas fa-times"></i>
//                     </button>
//                   </div>
//                 </div>
//                 <div className="card-body">
//                   <canvas
//                     ref={meterChartRef}
//                     style={{ minHeight: 250, height: 250 }}
//                   />
//                 </div>
//               </div>
//               {/* Bootstrap Switch */}
//               <div className="card card-secondary">
//                 <div className="card-header">
//                   <h3 className="card-title">Bootstrap Switch</h3>
//                 </div>
//                 <div className="card-body">
//                   <input
//                     type="checkbox"
//                     name="my-checkbox"
//                     defaultChecked
//                     data-bootstrap-switch
//                   />
//                   <input
//                     type="checkbox"
//                     name="my-checkbox"
//                     defaultChecked
//                     data-bootstrap-switch
//                     data-off-color="danger"
//                     data-on-color="success"
//                   />
//                 </div>
//               </div>
//               {/* /.card */}
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

// export default Home;
