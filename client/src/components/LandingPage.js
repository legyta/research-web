import React from "react";
import "../stylesheets/user.css";
import User from "./User";

function LandingPage() {
  return (
    <div>
      <main className="user-main">
        <h1>Welcome to our news website (under construction)</h1>
        <p>
          In this mini-experiment we run, we wan to test how people rate the
          quality of news for our upcoming website focusing in the topic of the
          topic of the economy.
        </p>
        <p>
          We want to provide credible information and therefore we are
          interested in how individuals respond to the content of news articles.
        </p>
        <p>
          And here we are, asking YOU to help us! Your contribution can be very
          important for scientific research and journalism, as our experiment
          aims at providing guidelines on how to design a news website that
          reflects quality and trust.
        </p>

        <p>
          So your honest opinion matters to us and we take our research very
          seriously. Please help us obtain good quality data and understand how
          fake news works.
        </p>

        <p>
          Over the next pages, we ask you to navigate freely in the news main
          page. And we kindly ask you to click on all articles (20 in total,
          order does not matter) before you finish.
        </p>

        <p>
          At each case, please read through the article’s content (don’t worry,
          it’s not a lot), indicate if you would share this article with others
          (only your intention, you won’t be asked to actually share it), and
          rate two questions using a slider before you may move back to the news
          main page.
        </p>

        <p>
          At the end you will be directed in a final part, in which we will ask
          you five more brief questions.
        </p>

        <p>
          The whole things takes about 15 minutes. Thank you for your time and
          for helping science grow. :)
        </p>
      </main>
      <User />
    </div>
  );
}

export default LandingPage;
