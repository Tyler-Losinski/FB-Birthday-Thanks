import React, { Component } from 'react';
import { Container, Row, Col } from 'react-grid-system';

const fbData = [
  {
    "user": "‎Lucas Holmes‎ ",
    "message": " HAPPY (belated) BIRTHDAY!"
  },
  {
    "user": "‎Stephanie Gerving‎ ",
    "message": " Happy Birthday Tyler!🍕"
  },
  {
    "user": "‎Teresa Steele‎ ",
    "message": " Happy Birthday Bro!"
  },
  {
    "user": "‎Jenna Radtke‎ ",
    "message": " Happy birthday Chaka!! It’s a good day to have a birthday! 🎉😁😁"
  },
  {
    "user": "‎Abbey Ruhland‎ ",
    "message": " Happy birthday, Tyler!"
  },
  {
    "user": "‎Steven Qualley‎ ",
    "message": " Happy birthday"
  },
  {
    "user": "‎Carla Siebert‎ ",
    "message": " Happy Birthday"
  },
  {
    "user": "‎Fr. Keith Streifel‎ ",
    "message": " Birthday blessings!"
  },
  {
    "user": "‎KevinandLori Suda‎ ",
    "message": " Happy Birthday Tyler!"
  },
  {
    "user": "‎Katie Ueckert‎ ",
    "message": " HAPPY BIRTHDAY TYLER!!!! I hope your day is wonderful!!!!"
  },
  {
    "user": "‎Brody Hagemeier‎ ",
    "message": " Have an awesome birthday, Tyler!"
  },
  {
    "user": "‎Vanessa Ueckert‎ ",
    "message": " Happy birthday Tyler!!"
  },
  {
    "user": "‎Steven Qualley‎ ",
    "message": " Happy birthday"
  },
  {
    "user": "‎Joel Schrum‎ ",
    "message": " Happy Birthday Dude!"
  },
  {
    "user": "‎Michael Dettloff‎ ",
    "message": " Happy birthday Tyler!"
  },
  {
    "user": "‎Swenda Thorson Braden‎ ",
    "message": " Happy Birthday Blessings Tyler 🎂😇🎉😎"
  },
  {
    "user": "‎Abigail Margaret Louise‎ ",
    "message": " Happy Birthday!!"
  },
  {
    "user": "‎Janine Westphal Perrault‎ ",
    "message": " Happy Birthday Tyler!"
  },
  {
    "user": "‎Joshua Schwebach‎ ",
    "message": " Happy Birthday Tyler!!"
  },
  {
    "user": "‎Austin Bagley‎ ",
    "message": " Happy birthday!!"
  },
  {
    "user": "‎James LaPlante‎ ",
    "message": " Happy birthday!"
  },
  {
    "user": "‎Emma Hergenroeder‎ ",
    "message": " Happy birthday Tyler!"
  },
  {
    "user": "‎Timothy A. Alvarez‎ ",
    "message": " Happy birthday Tyler! Hope your day is amazing :)"
  },
  {
    "user": "‎Mathew Walworth‎ ",
    "message": " Happy Birthday"
  },
  {
    "user": "‎Amy Littlecreek‎ ",
    "message": " Happy birthday!"
  },
  {
    "user": "‎Colter Braaten‎ ",
    "message": " Happy birthday Chaka!"
  },
  {
    "user": "‎Katie Wesolowski‎ ",
    "message": " Happy Birthday!!!"
  }
]
class App extends Component {
  render() {
    //const data = JSON.parse(fbData);
    return (
      <Container style={{ paddingTop: 20 }}>
        <header>
          <h1><i className="icon heart is-large"></i>Thanks Homies</h1>
          <p>Enjoy the Retro Theme.</p>
        </header>

        <Row>
          <Col md={12}>
            <div className="container with-title">
              <h2 className="title">Chaka's Peeps</h2>
            {fbData.map((item,i) => {
              return( 
                <div className={i % 2 === 0 ? "message -left":"message -right"}  style={{textAlign: i % 2 === 0 ? "left":"right"}}>
                  <div className={i % 2 === 0 ? "balloon from-left":"balloon from-right"}>
                    <p>{item.message}</p>
                    <p style={{textAlign: "right"}}>{'-'+item.user}</p>
                  </div>
                </div>
            )              
            })}
            </div>
            <footer className="footer">
              <p>
                <a href="https://github.com/nostalgic-css/NES.css">Theme by B.C.Rikko</a>
              </p>
            </footer>
          </Col>
        </Row>
      </Container>
      
    );
  }
}

export default App;
