import React, { useEffect, useState } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
import "./App.css";
import { Typography, Button } from "@material-ui/core";
import wordsToNumbers from "words-to-numbers";
import alan from "./assets/alan.jpg";
import NewsCards from "./component/NewsCards/NewsCards";
import useStyles from "./styles";
import Modal from "./component/Modal/Modal";

const alanKey =
  "81301b0f1d4563cb767a8645588212e32e956eca572e1d8b807a3e2338fdd0dc/stage";

function App() {
  const [activeArticle, setActiveArticle] = useState(0);
  const [newsArticles, setNewsArticles] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [weather, setWeather] = useState([]);

  const classes = useStyles();

  useEffect(() => {
    alanBtn({
      key: alanKey,
      onCommand: ({ command, articles, number, weatherData }) => {
        if (command === "newHeadlines") {
          setNewsArticles(articles);
          setActiveArticle(-1);
        } else if (command === "showWeather") {
          setWeather(weatherData);
        } else if (command === "instructions") {
          setIsOpen(true);
        } else if (command === "highlight") {
          setActiveArticle((prevActiveArticle) => prevActiveArticle + 1);
        } else if (command === "open") {
          const parsedNumber =
            number.length > 2
              ? wordsToNumbers(number, { fuzzy: true })
              : number;
          const article = articles[parsedNumber - 1];

          if (parsedNumber > articles.length) {
            alanBtn().playText("Please try that again...");
          } else if (article) {
            window.open(article.url, "_blank");
            alanBtn().playText("Opening...");
          } else {
            alanBtn().playText("Please try that again...");
          }
        }
      },
    });
  }, []);

  return (
    <div>
      <div>
        {newsArticles.length ? (
          ""
        ) : (
          <div className="heading">
            <img src={alan} className={classes.alanLogo} alt="logo" />
            <div className={classes.card2} style={{ background: "#242d4e" }}>
              <Typography variant="h5" component="h5">
                Weather News
              </Typography>
              <Typography variant="h6" component="h6">
                <strong>
                  Temp :{" "}
                  <Button
                    className={classes.btn}
                    variant="contained"
                    color="secondary"
                  >
                    {weather.temp}°
                  </Button>{" "}
                  F
                </strong>
                <br />
                <strong> {weather.name} </strong>
              </Typography>
              <Typography variant="h6" component="h6">
                Try saying: <br /> <i>Whats the weather today in </i>
                <br></br>
                <i>[country name]</i>
              </Typography>
            </div>
          </div>
        )}
      </div>
      <div className={classes.logoContainer}>
        {newsArticles.length ? (
          <div className={classes.infoContainer}>
            <div className={classes.card}>
              <Typography variant="h5" component="h2">
                Try saying: <br />
                <br />
                Go back
              </Typography>
            </div>
          </div>
        ) : null}
      </div>
      <NewsCards articles={newsArticles} activeArticle={activeArticle} />
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} />
      {!newsArticles.length ? (
        <footer className="footer">
          Created by
          <a
            className={classes.link}
            href="https://rashed-abir.web.app/"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            Rashed Khan
          </a>
        </footer>
      ) : null}
    </div>
  );
}

export default App;
