import React from 'react'

const PodcastDetails = ({params}: {params: {podcastID: string}}) => {
  return (
    <p className='text-white-1'>PodCasts Details for {params.podcastID}</p>
  )
}

export default PodcastDetails
