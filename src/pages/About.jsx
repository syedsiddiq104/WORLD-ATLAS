import React from 'react'
import countryFacts from '../API/Country.json'

const About = ({imageLimit}) => {
  const displayImage = undefined ? countryFacts : countryFacts.slice(0, imageLimit) 
  // console.log(imageLimit)
  return (
    <section className="section-about container">
      <h2 className="container-title">
        Here are the Interesting Facts
        <br />
        we’re proud of
      </h2>

       <div className="gradient-cards">
        {displayImage.map((country) => {
          let {id, countryName, capital, population, interestingFact} = country
          return (
            <div className="card" key={id}>
              <div className="container-card bg-blue-box">
                <p className="card-title">{countryName}</p>
                <p>
                  <span className="card-description">Capital: </span>
                  {capital}
                </p>
                <p>
                  <span className="card-description">Population: </span>
                  {population}
                </p>
                <p>
                  <span className="card-description">Interesting Fact: </span>
                  {interestingFact}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      </section>

      
  )
}

export default About