import React, {useState, useEffect} from 'react'
import { UserAuth } from '../context/AuthContext'
import {MdChevronLeft, MdChevronRight} from 'react-icons/md'
import { db } from '../Firebase'
import { updateDoc, doc, onSnapshot } from 'firebase/firestore' //onsnapshot takes a pic of database at that curr time
import {AiOutlineClose} from 'react-icons/ai'

const SavedShows = () => {
  const [movies, setMovies] = useState([])
  const {user} = UserAuth()

  const slideL = () => {
    var slider = document.getElementById('slider') //step 54
    slider.scrollLeft = slider.scrollLeft - 500
  }
  const slideR = () => {
    var slider = document.getElementById('slider') //step54
    slider.scrollLeft = slider.scrollLeft + 500
  }

    useEffect(() => { //55 every time there's  email change, useeffect fires off
      onSnapshot(doc(db, 'users', `${user?.email}`), (doc)=> {
        setMovies(doc.data()?.savedShows) //now import savedshows in account.js
      })
    }, [user?.email]);

    const movieRef = doc(db, 'users', `${user?.email}`) //for deleteshow
    const deleteShow = async (passedID) => {  // @2:15:30 firebase doesnt let us do it directly. to delete object out of array, we do it on the client side. by removing it 
      //from our state on the client side then push it back to firebase(the updated array without the id)
      try {
        const result = movies.filter((item) => item.id !== passedID)
        await updateDoc (movieRef, {
          savedShows: result,
        })
      } catch (error) {
        console.log(error);
      }
    }


  return (
    <>
        <h2 className='text-white font-bold md:text-xl p-4'>My Shows</h2> {/* step 15*/}
      <div className='relative flex items-center group'> {/*we addedgroup so we can get the scroll chevron icons to show when we hover on this parent div. we then add group-hover:block to the icons*/}
        <MdChevronLeft
        onClick={slideL} //step 23
        className='bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block'  size={30}/> {/* . z10: always on top */}
        <div id={'slider'} className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'> {/*add+rowid to div id so you can get a particular row through it. next step28, create firebase project and firebase.js*/}
          {movies.map((item, id) => ( //step17
           
           <div key={id}className = 'w-[160px] sm:w-[200px] lg:w-[280px] md:w-[240px] inline-block cursor-pointer relative p-2'>
           
           <img className='w-full h-auto block' src={`https://image.tmdb.org/t/p/w300/${item?.img}`} alt={item?.title} /> {/* #52 we are grabbing this from firebase and its saved as img on there */}
              <div className='absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0  text-white hover:opacity-100'>
              <p className='white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center'>{item?.title}</p>
              
              <p onClick={() => deleteShow(item.id)} className='absolute text-gray-300 top-3 right-4'> <AiOutlineClose /> </p>
             
             </div>
         </div>
          ))}
        </div>
        <MdChevronRight 
        onClick={slideR} //step23. now these buttons will only slide for the first row. even if they are buttons for 4th row. to fix this, lets go to home.jsx for step 24
        className='bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block'  size={30}/>
      </div>
    </>
  )
}

export default SavedShows