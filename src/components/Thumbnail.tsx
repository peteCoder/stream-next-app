import Image from 'next/image';
import React from 'react'
import { Movie } from "../../typings";
import { THUMBNAIL_IMAGE_URL } from '@/utils/requests';

interface Props {
    movie: Movie
}


const Thumbnail = ({movie}: Props) => {
    
  return (
    <div className='relative h-28 min-w-[100px] cursor-pointer transition duration-200 ease-out md:h-36
    md:min-w-[260px] md:hover:scale-105'>
        <Image 
            src={`${THUMBNAIL_IMAGE_URL}${movie?.backdrop_path || movie?.poster_path}`}
            alt=""
            className='rounded-sm object-cover md:rounded'
            layout='fill'
        />
    </div>
  )
}

export default Thumbnail