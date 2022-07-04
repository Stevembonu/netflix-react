import React from 'react'
import Main from '../components/Main'
import requests from '../Requests' //13
import Row from '../components/Row'
const Home = () => {
  return (
    <div>
      <Main/>
      {/* step 25. lets add rowID to props and go to row.jsx for step 26*/}
      <Row  rowID = '1' title='Upcoming' fetchURL={requests.requestUpcoming}/> {/*step 13. next step after main.jsx*/}
      <Row  rowID = '2' title='Popular' fetchURL={requests.requestPopular}/> {/*step 13. next step after main.jsx*/}
      <Row  rowID = '3' title='Trending' fetchURL={requests.requestTrending}/> {/*step 13. next step after main.jsx*/}
      <Row  rowID = '4' title='Thrillers' fetchURL={requests.requestThrillers}/> {/*step 13. next step after main.jsx*/}
      <Row  rowID = '5'  title='Top-Rated' fetchURL={requests.requestTopRated}/> {/*step 13. next step after main.jsx*/}
    </div>
    //GO TO ROW.JSX FOR STEP 14
  )
}

export default Home