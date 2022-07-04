import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Movie from './Movie'
import {MdChevronLeft, MdChevronRight} from 'react-icons/md' //step 20. icon to scroll right and left when clicking it
//step 26, bring in prop rowid
const Row = ({title, fetchURL, rowID}) => { //step 14 (we had just rafce here)
    const [movies, setMovies] = useState([]) //step 16. add request to get movie data

    useEffect(()=> {
        axios.get(fetchURL).then((response) => {
            setMovies(response.data.results)
        })
    },[fetchURL]) //we added fetchurl so whenever url changes, component fires off again. remember it is a prop passed from <Home/>

    //step22 make the scroll icons actually scroll
  const slideL = () => {
    var slider = document.getElementById('slider'+rowID) //step 27
    slider.scrollLeft = slider.scrollLeft - 500
  }
  const slideR = () => {
    var slider = document.getElementById('slider'+rowID) //step27
    slider.scrollLeft = slider.scrollLeft + 500
  }

  return (
    <>
      <h2 className='text-white font-bold md:text-xl p-4'>{title}</h2> {/* step 15*/}
      <div className='relative flex items-center group'> {/*we addedgroup so we can get the scroll chevron icons to show when we hover on this parent div. we then add group-hover:block to the icons*/}
        <MdChevronLeft
        onClick={slideL} //step 23
        className='bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block'  size={30}/> {/* step 21. z10: always on top */}
        <div id={'slider'+rowID} className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'> {/*step 27 add+rowid to div id so you can get a particular row through it. next step28, create firebase project and firebase.js*/}
          {movies.map((item, id) => ( //step17
            <Movie item = {item} key={id}/>
          ))}
        </div>
        <MdChevronRight 
        onClick={slideR} //step23. now these buttons will only slide for the first row. even if they are buttons for 4th row. to fix this, lets go to home.jsx for step 24
        className='bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block'  size={30}/>
      </div>
    </>
  )
}

export default Row