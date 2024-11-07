import React from "react";

import AreaChart from '../charts/AreaChart';
function Dashboard() {
  return (
    <div>
      {/* Content Wrapper. Contains page content */}
      <div className="content-wrapper">
        {/* Content Header (Page header) */}
        <section className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1>Buttons</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item">
                    <a href="#">Home</a>
                  </li>
                  <li className="breadcrumb-item active">Buttons</li>
                </ol>
              </div>
            </div>
          </div>
          {/* /.container-fluid */}
        </section>
        {/* Main content */}
        <section className="content">
          <div className="container-fluid">
            {/* /. row */}
            <div className="row">
              <div className="col-md-6">
                {/* <AreaChart /> */}
                {/* Custom tabs (Charts with tabs)*/}
                <div className="card">
                  <div className="card-header">
                    <h3 className="card-title">
                      <i className="fas fa-chart-pie mr-1" />
                      Sales
                    </h3>
                    <div className="card-tools">
                      <ul className="nav nav-pills ml-auto">
                        <li className="nav-item">
                          <a
                            className="nav-link active"
                            href="#revenue-chart"
                            data-toggle="tab"
                          >
                            Area
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            href="#sales-chart"
                            data-toggle="tab"
                          >
                            Donut
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* /.card-header */}
                  <div className="card-body">
                    <div className="tab-content p-0">
                      {/* Morris chart - Sales */}
                      <div
                        className="chart tab-pane active"
                        id="revenue-chart"
                        style={{ position: "relative", height: 300 }}
                      >
                        <canvas
                          id="revenue-chart-canvas"
                          height={300}
                          style={{ height: 300 }}
                        />
                      </div>
                      <div
                        className="chart tab-pane"
                        id="sales-chart"
                        style={{ position: "relative", height: 300 }}
                      >
                        <canvas
                          id="sales-chart-canvas"
                          height={300}
                          style={{ height: 300 }}
                        />
                      </div>
                    </div>
                  </div>
                  {/* /.card-body */}
                </div>

                {/* Buttons with Icons */}
                <div className="card">
                  <div className="card-header">
                    <h3 className="card-title">Buttons with Icons</h3>
                  </div>
                  <div className="card-body row">
                    <div className="col-md-6">
                      <button
                        type="button"
                        className="btn btn-primary btn-block"
                      >
                        <i className="fa fa-bell" /> .btn-block
                      </button>
                      <button
                        type="button"
                        className="btn btn-info btn-block btn-flat"
                      >
                        <i className="fa fa-bell" /> .btn-block .btn-flat
                      </button>
                      <button
                        type="button"
                        className="btn btn-danger btn-block btn-sm"
                      >
                        <i className="fa fa-bell" /> .btn-block .btn-sm
                      </button>
                    </div>
                    <div className="col-md-6">
                      <button
                        type="button"
                        className="btn btn-outline-primary btn-block"
                      >
                        <i className="fa fa-bell" /> .btn-block
                      </button>
                      <button
                        type="button"
                        className="btn btn-outline-info btn-block btn-flat"
                      >
                        <i className="fa fa-book" /> .btn-block .btn-flat
                      </button>
                      <button
                        type="button"
                        className="btn btn-outline-danger btn-block btn-sm"
                      >
                        <i className="fa fa-book" /> .btn-block .btn-sm
                      </button>
                    </div>
                  </div>
                </div>
                {/* /.card */}
                {/* Block buttons */}
                <div className="card">
                  <div className="card-header">
                    <h3 className="card-title">Block Buttons</h3>
                  </div>
                  <div className="card-body">
                    <button type="button" className="btn btn-default btn-block">
                      .btn-block
                    </button>
                    <button
                      type="button"
                      className="btn btn-default btn-block btn-flat"
                    >
                      .btn-block .btn-flat
                    </button>
                    <button
                      type="button"
                      className="btn btn-default btn-block btn-sm"
                    >
                      .btn-block .btn-sm
                    </button>
                  </div>
                </div>

                {/* /.card */}
                {/* split buttons box */}
                <div className="card">
                  <div className="card-header">
                    <h3 className="card-title">Split buttons</h3>
                  </div>
                  <div className="card-body">
                    {/* Split button */}
                    <p className="mb-1">Normal split buttons:</p>
                    <div className="margin">
                      <div className="btn-group">
                        <button type="button" className="btn btn-default">
                          Action
                        </button>
                        <button
                          type="button"
                          className="btn btn-default dropdown-toggle dropdown-icon"
                          data-toggle="dropdown"
                        >
                          <span className="sr-only">Toggle Dropdown</span>
                        </button>
                        <div className="dropdown-menu" role="menu">
                          <a className="dropdown-item" href="#">
                            Action
                          </a>
                          <a className="dropdown-item" href="#">
                            Another action
                          </a>
                          <a className="dropdown-item" href="#">
                            Something else here
                          </a>
                          <div className="dropdown-divider" />
                          <a className="dropdown-item" href="#">
                            Separated link
                          </a>
                        </div>
                      </div>
                      <div className="btn-group">
                        <button type="button" className="btn btn-info">
                          Action
                        </button>
                        <button
                          type="button"
                          className="btn btn-info dropdown-toggle dropdown-icon"
                          data-toggle="dropdown"
                        >
                          <span className="sr-only">Toggle Dropdown</span>
                        </button>
                        <div className="dropdown-menu" role="menu">
                          <a className="dropdown-item" href="#">
                            Action
                          </a>
                          <a className="dropdown-item" href="#">
                            Another action
                          </a>
                          <a className="dropdown-item" href="#">
                            Something else here
                          </a>
                          <div className="dropdown-divider" />
                          <a className="dropdown-item" href="#">
                            Separated link
                          </a>
                        </div>
                      </div>
                      <div className="btn-group">
                        <button type="button" className="btn btn-danger">
                          Action
                        </button>
                        <button
                          type="button"
                          className="btn btn-danger dropdown-toggle dropdown-icon"
                          data-toggle="dropdown"
                        >
                          <span className="sr-only">Toggle Dropdown</span>
                        </button>
                        <div className="dropdown-menu" role="menu">
                          <a className="dropdown-item" href="#">
                            Action
                          </a>
                          <a className="dropdown-item" href="#">
                            Another action
                          </a>
                          <a className="dropdown-item" href="#">
                            Something else here
                          </a>
                          <div className="dropdown-divider" />
                          <a className="dropdown-item" href="#">
                            Separated link
                          </a>
                        </div>
                      </div>
                      <div className="btn-group">
                        <button type="button" className="btn btn-success">
                          Action
                        </button>
                        <button
                          type="button"
                          className="btn btn-success dropdown-toggle"
                          data-toggle="dropdown"
                        >
                          <span className="sr-only">Toggle Dropdown</span>
                        </button>
                        <div className="dropdown-menu" role="menu">
                          <a className="dropdown-item" href="#">
                            Action
                          </a>
                          <a className="dropdown-item" href="#">
                            Another action
                          </a>
                          <a className="dropdown-item" href="#">
                            Something else here
                          </a>
                          <div className="dropdown-divider" />
                          <a className="dropdown-item" href="#">
                            Separated link
                          </a>
                        </div>
                      </div>
                      <div className="btn-group">
                        <button type="button" className="btn btn-warning">
                          Action
                        </button>
                        <button
                          type="button"
                          className="btn btn-warning dropdown-toggle dropdown-icon"
                          data-toggle="dropdown"
                        >
                          <span className="sr-only">Toggle Dropdown</span>
                        </button>
                        <div className="dropdown-menu" role="menu">
                          <a className="dropdown-item" href="#">
                            Action
                          </a>
                          <a className="dropdown-item" href="#">
                            Another action
                          </a>
                          <a className="dropdown-item" href="#">
                            Something else here
                          </a>
                          <div className="dropdown-divider" />
                          <a className="dropdown-item" href="#">
                            Separated link
                          </a>
                        </div>
                      </div>
                    </div>
                    {/* flat split buttons */}
                    <p className="mt-3 mb-1">Flat split buttons:</p>
                    <div className="margin">
                      <div className="btn-group">
                        <button
                          type="button"
                          className="btn btn-default btn-flat"
                        >
                          Action
                        </button>
                        <button
                          type="button"
                          className="btn btn-default btn-flat dropdown-toggle dropdown-icon"
                          data-toggle="dropdown"
                        >
                          <span className="sr-only">Toggle Dropdown</span>
                        </button>
                        <div className="dropdown-menu" role="menu">
                          <a className="dropdown-item" href="#">
                            Action
                          </a>
                          <a className="dropdown-item" href="#">
                            Another action
                          </a>
                          <a className="dropdown-item" href="#">
                            Something else here
                          </a>
                          <div className="dropdown-divider" />
                          <a className="dropdown-item" href="#">
                            Separated link
                          </a>
                        </div>
                      </div>
                      <div className="btn-group">
                        <button type="button" className="btn btn-info btn-flat">
                          Action
                        </button>
                        <button
                          type="button"
                          className="btn btn-info btn-flat dropdown-toggle dropdown-icon"
                          data-toggle="dropdown"
                        >
                          <span className="sr-only">Toggle Dropdown</span>
                        </button>
                        <div className="dropdown-menu" role="menu">
                          <a className="dropdown-item" href="#">
                            Action
                          </a>
                          <a className="dropdown-item" href="#">
                            Another action
                          </a>
                          <a className="dropdown-item" href="#">
                            Something else here
                          </a>
                          <div className="dropdown-divider" />
                          <a className="dropdown-item" href="#">
                            Separated link
                          </a>
                        </div>
                      </div>
                      <div className="btn-group">
                        <button
                          type="button"
                          className="btn btn-danger btn-flat"
                        >
                          Action
                        </button>
                        <button
                          type="button"
                          className="btn btn-danger btn-flat dropdown-toggle dropdown-icon"
                          data-toggle="dropdown"
                        >
                          <span className="sr-only">Toggle Dropdown</span>
                        </button>
                        <div className="dropdown-menu" role="menu">
                          <a className="dropdown-item" href="#">
                            Action
                          </a>
                          <a className="dropdown-item" href="#">
                            Another action
                          </a>
                          <a className="dropdown-item" href="#">
                            Something else here
                          </a>
                          <div className="dropdown-divider" />
                          <a className="dropdown-item" href="#">
                            Separated link
                          </a>
                        </div>
                      </div>
                      <div className="btn-group">
                        <button
                          type="button"
                          className="btn btn-success btn-flat"
                        >
                          Action
                        </button>
                        <button
                          type="button"
                          className="btn btn-success btn-flat dropdown-toggle dropdown-icon"
                          data-toggle="dropdown"
                        >
                          <span className="sr-only">Toggle Dropdown</span>
                        </button>
                        <div className="dropdown-menu" role="menu">
                          <a className="dropdown-item" href="#">
                            Action
                          </a>
                          <a className="dropdown-item" href="#">
                            Another action
                          </a>
                          <a className="dropdown-item" href="#">
                            Something else here
                          </a>
                          <div className="dropdown-divider" />
                          <a className="dropdown-item" href="#">
                            Separated link
                          </a>
                        </div>
                      </div>
                      <div className="btn-group">
                        <button
                          type="button"
                          className="btn btn-warning btn-flat"
                        >
                          Action
                        </button>
                        <button
                          type="button"
                          className="btn btn-warning btn-flat dropdown-toggle dropdown-icon"
                          data-toggle="dropdown"
                        >
                          <span className="sr-only">Toggle Dropdown</span>
                        </button>
                        <div className="dropdown-menu" role="menu">
                          <a className="dropdown-item" href="#">
                            Action
                          </a>
                          <a className="dropdown-item" href="#">
                            Another action
                          </a>
                          <a className="dropdown-item" href="#">
                            Something else here
                          </a>
                          <div className="dropdown-divider" />
                          <a className="dropdown-item" href="#">
                            Separated link
                          </a>
                        </div>
                      </div>
                    </div>
                    {/* Split button */}
                    <p className="mt-3 mb-1">Hoverable split buttons:</p>
                    <div className="margin">
                      <div className="btn-group">
                        <button type="button" className="btn btn-default">
                          Action
                        </button>
                        <button
                          type="button"
                          className="btn btn-default dropdown-toggle dropdown-hover dropdown-icon"
                          data-toggle="dropdown"
                        >
                          <span className="sr-only">Toggle Dropdown</span>
                        </button>
                        <div className="dropdown-menu" role="menu">
                          <a className="dropdown-item" href="#">
                            Action
                          </a>
                          <a className="dropdown-item" href="#">
                            Another action
                          </a>
                          <a className="dropdown-item" href="#">
                            Something else here
                          </a>
                          <div className="dropdown-divider" />
                          <a className="dropdown-item" href="#">
                            Separated link
                          </a>
                        </div>
                      </div>
                      <div className="btn-group">
                        <button type="button" className="btn btn-info">
                          Action
                        </button>
                        <button
                          type="button"
                          className="btn btn-info dropdown-toggle dropdown-hover dropdown-icon"
                          data-toggle="dropdown"
                        >
                          <span className="sr-only">Toggle Dropdown</span>
                        </button>
                        <div className="dropdown-menu" role="menu">
                          <a className="dropdown-item" href="#">
                            Action
                          </a>
                          <a className="dropdown-item" href="#">
                            Another action
                          </a>
                          <a className="dropdown-item" href="#">
                            Something else here
                          </a>
                          <div className="dropdown-divider" />
                          <a className="dropdown-item" href="#">
                            Separated link
                          </a>
                        </div>
                      </div>
                      <div className="btn-group">
                        <button type="button" className="btn btn-danger">
                          Action
                        </button>
                        <button
                          type="button"
                          className="btn btn-danger dropdown-toggle dropdown-hover dropdown-icon"
                          data-toggle="dropdown"
                        >
                          <span className="sr-only">Toggle Dropdown</span>
                        </button>
                        <div className="dropdown-menu" role="menu">
                          <a className="dropdown-item" href="#">
                            Action
                          </a>
                          <a className="dropdown-item" href="#">
                            Another action
                          </a>
                          <a className="dropdown-item" href="#">
                            Something else here
                          </a>
                          <div className="dropdown-divider" />
                          <a className="dropdown-item" href="#">
                            Separated link
                          </a>
                        </div>
                      </div>
                      <div className="btn-group">
                        <button type="button" className="btn btn-success">
                          Action
                        </button>
                        <button
                          type="button"
                          className="btn btn-success dropdown-toggle dropdown-hover dropdown-icon"
                          data-toggle="dropdown"
                        >
                          <span className="sr-only">Toggle Dropdown</span>
                        </button>
                        <div className="dropdown-menu" role="menu">
                          <a className="dropdown-item" href="#">
                            Action
                          </a>
                          <a className="dropdown-item" href="#">
                            Another action
                          </a>
                          <a className="dropdown-item" href="#">
                            Something else here
                          </a>
                          <div className="dropdown-divider" />
                          <a className="dropdown-item" href="#">
                            Separated link
                          </a>
                        </div>
                      </div>
                      <div className="btn-group">
                        <button type="button" className="btn btn-warning">
                          Action
                        </button>
                        <button
                          type="button"
                          className="btn btn-warning dropdown-toggle dropdown-hover dropdown-icon"
                          data-toggle="dropdown"
                        >
                          <span className="sr-only">Toggle Dropdown</span>
                        </button>
                        <div className="dropdown-menu" role="menu">
                          <a className="dropdown-item" href="#">
                            Action
                          </a>
                          <a className="dropdown-item" href="#">
                            Another action
                          </a>
                          <a className="dropdown-item" href="#">
                            Something else here
                          </a>
                          <div className="dropdown-divider" />
                          <a className="dropdown-item" href="#">
                            Separated link
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* /.card-body */}
                </div>
                {/* end split buttons box */}
              </div>
              {/* /.col */}
              <div className="col-md-6">
                {/* Application buttons */}
                <div className="card">
                  <div className="card-header">
                    <h3 className="card-title">Application Buttons</h3>
                  </div>
                  <div className="card-body">
                    <p>
                      Add the classes <code>.btn.btn-app</code> to an{" "}
                      <code>&lt;a&gt;</code> tag to achieve the following:
                    </p>
                    <a className="btn btn-app">
                      <i className="fas fa-edit" /> Edit
                    </a>
                    <a className="btn btn-app">
                      <i className="fas fa-play" /> Play
                    </a>
                    <a className="btn btn-app">
                      <i className="fas fa-pause" /> Pause
                    </a>
                    <a className="btn btn-app">
                      <i className="fas fa-save" /> Save
                    </a>
                    <a className="btn btn-app">
                      <span className="badge bg-warning">3</span>
                      <i className="fas fa-bullhorn" /> Notifications
                    </a>
                    <a className="btn btn-app">
                      <span className="badge bg-success">300</span>
                      <i className="fas fa-barcode" /> Products
                    </a>
                    <a className="btn btn-app">
                      <span className="badge bg-purple">891</span>
                      <i className="fas fa-users" /> Users
                    </a>
                    <a className="btn btn-app">
                      <span className="badge bg-teal">67</span>
                      <i className="fas fa-inbox" /> Orders
                    </a>
                    <a className="btn btn-app">
                      <span className="badge bg-info">12</span>
                      <i className="fas fa-envelope" /> Inbox
                    </a>
                    <a className="btn btn-app">
                      <span className="badge bg-danger">531</span>
                      <i className="fas fa-heart" /> Likes
                    </a>
                    <p>Application Buttons with Custom Colors</p>
                    <a className="btn btn-app bg-secondary">
                      <span className="badge bg-success">300</span>
                      <i className="fas fa-barcode" /> Products
                    </a>
                    <a className="btn btn-app bg-success">
                      <span className="badge bg-purple">891</span>
                      <i className="fas fa-users" /> Users
                    </a>
                    <a className="btn btn-app bg-danger">
                      <span className="badge bg-teal">67</span>
                      <i className="fas fa-inbox" /> Orders
                    </a>
                    <a className="btn btn-app bg-warning">
                      <span className="badge bg-info">12</span>
                      <i className="fas fa-envelope" /> Inbox
                    </a>
                    <a className="btn btn-app bg-info">
                      <span className="badge bg-danger">531</span>
                      <i className="fas fa-heart" /> Likes
                    </a>
                  </div>
                  {/* /.card-body */}
                </div>

                {/* /.card */}
                {/* Radio Buttons */}
                <div className="card">
                  <div className="card-header">
                    <h3 className="card-title">Radio Button Group</h3>
                  </div>
                  <div className="card-body table-responsive pad">
                    <p className="mb-1">
                      Radio Button Group with <code>.btn-secondary</code>
                    </p>
                    <div
                      className="btn-group btn-group-toggle"
                      data-toggle="buttons"
                    >
                      <label className="btn btn-secondary active">
                        <input
                          type="radio"
                          name="options"
                          id="option_a1"
                          autoComplete="off"
                          defaultChecked
                        />{" "}
                        Active
                      </label>
                      <label className="btn btn-secondary">
                        <input
                          type="radio"
                          name="options"
                          id="option_a2"
                          autoComplete="off"
                        />{" "}
                        Radio
                      </label>
                      <label className="btn btn-secondary">
                        <input
                          type="radio"
                          name="options"
                          id="option_a3"
                          autoComplete="off"
                        />{" "}
                        Radio
                      </label>
                    </div>
                    <p className="mt-3 mb-1">
                      Radio Button Group with <code>.bg-olive</code>
                    </p>
                    <div
                      className="btn-group btn-group-toggle"
                      data-toggle="buttons"
                    >
                      <label className="btn bg-olive active">
                        <input
                          type="radio"
                          name="options"
                          id="option_b1"
                          autoComplete="off"
                          defaultChecked
                        />{" "}
                        Active
                      </label>
                      <label className="btn bg-olive">
                        <input
                          type="radio"
                          name="options"
                          id="option_b2"
                          autoComplete="off"
                        />{" "}
                        Radio
                      </label>
                      <label className="btn bg-olive">
                        <input
                          type="radio"
                          name="options"
                          id="option_b3"
                          autoComplete="off"
                        />{" "}
                        Radio
                      </label>
                    </div>
                  </div>
                  {/* /.card-body */}
                </div>
                {/* /.card */}
              </div>
              {/* /.col */}
            </div>
          </div>
          {/* /.container-fluid */}
        </section>
        {/* /.content */}
      </div>
      {/* /.content-wrapper */}
    </div>
  );
}

export default Dashboard;
