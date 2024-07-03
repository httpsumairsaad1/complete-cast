// *     **************************************************************     *
// *     *                                                            *     *
// *     *                      DEVELOPER: UMAIR SAAD                 *     *
// *     *                      COPYRIGHT 2024                        *     *
// *     *                      DATE: 8 JUNE 2024                     *     *
// *     *                      UPDATE: 16 JUNE                       *     *
// *     *                                                            *     *
// *     **************************************************************     *


"use client";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";

import React from 'react';
import {Button} from '@/components/ui/button';
import { podcastData } from '@/components/constants';
import PodcastCard from '@/components/PodcastCard';



const Home = () => {
  const trendingPodcasts = useQuery(api.podcasts.getTrendingPodcasts);
  return (
    <div className="mt-9 flex-col gap-9">
      <section className='flex flex-col gap-5'>
        <h1 className='text-20 font-bold text-white-1'>Trending Podcasts</h1>
        
        {/* <Button className="text-white-1 bg-orange-2">Button</Button> */}

        {/* Data from Constants */}

          <div className="flex min-h-screen flex-col items-center justify-between p-24 text-white-1">
            {/* {tasks?.map(({ _id }) => <div key={_id}></div>)} */}
          </div>
        
        <div className='podcast_grid'>
        {
          trendingPodcasts?.map(({_id, podcastTitle, podcastDescription, imageUrl}) => (
            <PodcastCard
              key={_id}
              imgUrl={imageUrl}
              title={podcastTitle}
              description={podcastDescription}
              podcastId={_id}
            />
          ))}
        </div>
      </section>  
    </div>
  )
}
export default Home
