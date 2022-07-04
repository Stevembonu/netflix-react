import React, { useState } from 'react'
import { FaHeart, FaRegHeart} from 'react-icons/fa'//step18
import { UserAuth } from '../context/AuthContext' //54. we want to start saving likes @1:54:00
import { db } from '../Firebase' //54
import { arrayUnion, doc, updateDoc } from 'firebase/firestore' //54
import { async } from '@firebase/util'

const Movie = ({item}) => {
const [like, setLike] = useState(false) //step18
const [saved,setSaved] = useState(false) //55
const {user} = UserAuth() //55

const movieID = doc(db, 'users', `${user?.email}` ) //56we are referencing the database of users and grabbing the specific user email

const saveShow = async () => {
  if(user?.email) {
    setLike(!like) //56 if user email exists. ie user is logged in,set like to opposite of like
    setSaved(true)
    await updateDoc(movieID, {
      savedShows: arrayUnion({ //we use arrayunion to update documents in firebase. to perform save or delete in firebase, the item has to have an id
        id: item.id,
        title: item.title,
        img: item.backdrop_path
    })
  })
} else {
  alert('Please log in to save a movie')
}
}


  return (
    <div className = 'w-[160px] sm:w-[200px] lg:w-[280px] md:w-[240px] inline-block cursor-pointer relative p-2'>
            <img className='w-full h-auto block' src={`https://image.tmdb.org/t/p/w300/${item?.backdrop_path}`} alt={item?.title} />
        <div className='absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0  text-white hover:opacity-100'>
            <p className='white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center'>{item?.title}</p>
            <p onClick={saveShow}> {/* step 57 onclick added, create savedshows.js and go to account.js.  step19 setting two icons for hearting a movie. they use like, setLike state*/}
            {like ? <FaHeart className='absolute top-4 left-4 text-gray-300 '/> : <FaRegHeart className='absolute top-4 left-4 text-gray-300 '/> }
            </p>
        </div>
    </div>
  )
}

export default Movie