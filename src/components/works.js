import React, { useState } from "react";

const Works = () => {
  const [previous, setPrevious] = useState(0);

  return (
    <>
      {previous === 0 ? (
          <>
            <h3>Budget App</h3>
            <p>
              Tracks and calculate your expenses and incomes. With user authentication (create user/ login), saves all your
              data using DigitalCube API. This app was build both in Angular and React during my first internship experience.
            </p>
            <div className="linkContainer">
              <div className="links">
                <a href="https://github.com/darmar0/Budget-app" target="_blank">
                  {"["}Git{"]"}
                </a>
                <a id="demo " href="https://budget-app-react-api.netlify.app/" target="_blank">
                  {"["}Demo{"]"}
                </a>
              </div>
              <div className="previousProject" onClick={() => setPrevious(1)}>
                <p>Previous{">"}</p>
              </div>
            </div>
          </>
      ) : null}
      {previous === 1 ? (
        <>
          <h3>Responsive Weather-App</h3>
          <p>
            Using open Weather API, I wanted to recreate the google weather approach of displaying weather with hourly forecast
            conditions (temperature and precipitation by the hour).
          </p>
          <div className="linkContainer">
            <div className="links">
              <a href="https://github.com/darmar0/Weather-App" target="_blank">
                {"["}Git{"]"}
              </a>
              <a id="demo " href="https://weather-app-darmar.netlify.app/" target="_blank">
                {"["}Demo{"]"}
              </a>
            </div>
            <div className="previousProject" onClick={() => setPrevious(2)}>
              <p>Previous{">"}</p>
            </div>
          </div>
        </>
      ) : null}
      {previous === 2 ? (
        <>
          <h3>iBuy</h3>
          <p>
            Goal was to create an online shop with redux state management , CSS grids and flexbox responsive styling. App state is
            managed with Redux, and it is persisted in browser local storage.
          </p>
          <div className="linkContainer">
            <div className="links">
              <a href="https://github.com/darmar0/Responsive-eComerce-Online-Shop" target="_blank">
                {"["}Git{"]"}
              </a>
              <a id="demo " href="https://ibuy-ecomerce-app.netlify.app/" target="_blank">
                {"["}Demo{"]"}
              </a>
            </div>
            <div className="previousProject" onClick={() => setPrevious(3)}>
              <p>Previous{">"}</p>
            </div>
          </div>
        </>
      ) : null}
      {previous === 3 ? (
        <>
          <h3>iTrade</h3>
          <p>
            Simple web app that could replace docs like Word, Excel, Numbers, etc., and serve the small business with invoicing stock
            and client base suite with data visualization.
          </p>
          <p>Important note: the app isn't intended for small screens. </p>
          <div className="linkContainer">
            <div className="links">
              <a href="https://github.com/darmar0/iTrade" target="_blank">
                {"["}Git{"]"}
              </a>
              <a href="https://itrade-invoice-app.netlify.app/" target="_blank">
                {"["}Demo{"]"}
              </a>
            </div>
            <div className="previousProject" onClick={() => setPrevious(0)}>
              <p>Previous{">"}</p>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default Works;
