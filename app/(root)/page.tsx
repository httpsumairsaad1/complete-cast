// *     **************************************************************     *
// *     *                                                            *     *
// *     *                      DEVELOPER: UMAIR SAAD                 *     *
// *     *                      COPYRIGHT 2024                        *     *
// *     *                      DATE: 8 JUNE 2024                     *     *
// *     *                      UPDATE: 11 JUNE                       *     *
// *     *                                                            *     *
// *     **************************************************************     *

import React from 'react';
import {Button} from '@/components/ui/button';
import { podcastData } from '@/components/constants';
import PodcastCard from '@/components/PodcastCard';

const Home = () => {
  return (
    <div className="mt-9 flex-col gap-9">
      <section className='flex flex-col gap-5'>
        <h1 className='text-20 font-bold text-white-1'>Trending Podcasts</h1>
        
        {/* <Button className="text-white-1 bg-orange-2">Button</Button> */}

        {/* Data from Constants */}
        <div className='podcast_grid'>
        {
          podcastData.map(({id, title, description, imgURL}) => (
            <PodcastCard
              key={id}
              imgUrl={imgURL}
              title={title}
              description={description}
              podcastId={id}
            />
          ))}
        </div>
      </section>  
    </div>
  )
}
export default Home
