import React from 'react'
import badge from '../assets/badge.png'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Footer from '../utilites/Footer';
import Goals from '../utilites/Goals';
import community from '../assets/community.jpg'
import college from '../assets/college.jpg'
import child from '../assets/child.jpg'
import bridge from '../assets/bridge.jpg'
import vision from '../assets/vision.jpg'
import mission from '../assets/mission.jpg'


export default function Home() {
  return (
    <div>
        <section className='text-center lg:h-screen text-4xl'>
        <Carousel  interval="5000"  showIndicator={false} showStatus={false} showThumbs={false} transitionTime="5000" infiniteLoop>
            <div>
                <img className=' lg:h-[80vh]' src="https://wpvip.edutopia.org/wp-content/uploads/2022/10/iStock-902801564_master.jpg" alt="students" />
                <p className="legend">My Photo 1</p>
            </div>
            <div>
                <img className=' lg:h-[80vh]' src="https://images.unsplash.com/photo-1656268164012-119304af0c69?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1112&q=80" alt="" />
                <p className="legend">My Photo 2</p>
            </div>
            <div>
                <img className=' lg:h-[80vh]' src="https://images.unsplash.com/photo-1655745653127-4d6837baf958?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
                <p className="legend">My Photo 3</p>
            </div>
         </Carousel>

        </section>
        
        <section className='bg-gray-200  px-8 py-10'>
            <h2 className='text-4xl text-center'>Welcome to Cor Mariae High School</h2>
            <div className='grid lg:grid-cols-2'>
                <div className='px-6 my-10  bg-cover bg-opacity-75'>
                    <p>
                    Fish. Beginning itself creeping day seasons is were above. May fill spirit darkness upon day. Midst fill every lights which our, you'll to moved have. Creepeth give place days sixth greater for their.
                    Multiply land second years after you forth may unto can't herb give. Creeping own wherein moveth divided land image open were seed morning. Moved spirit set i. Under moved bring itself sea above our.
                    Over, meat great may midst air behold our lesser said. Him appear. Had replenish after set heaven they're dominion male beginning land so in whales made replenish lesser waters were there fifth don't.
                    <br/>
                    Let. Second behold can't living kind years rule moved. Set heaven winged divided which may void thing face creature won't likeness two place his heaven second be be him winged Can't every creepeth beginning day won't isn't. Wherein rule you're, midst a. Cattle second. Of.
                    Their the abundantly dominion Herb saw dry he, years blessed. Were green seasons set moving own together so spirit you blessed.
                    Called creeping day a over. Great hath waters. Darkness don't his grass fifth saying seas green had to, set he yielding, called beast had, set second them firmament. Divided days make beginning Beginning fly.
                    </p>
                </div>
                <div className='text-center  text-3xl  my-10 flex justify-center'>
                    <img src={badge} alt="school badge" />
                </div>
            </div>
           
        </section>
        <Goals />                 
        <section className='my-4'>
            <h3 className='text-4xl font-bold text-center py-6'> Photo Speaks</h3>
            <div className='grid lg:grid-cols-4 my-10'>
                <div><img className='h-52 w-full' src={community} /></div>
                <div><img className='h-52 w-full' src={college} /></div>
                <div><img className='h-52 w-full' src={child} /></div>
                <div><img className='h-52 w-full' src={bridge} /></div>

            </div>
            <div className='grid lg:grid-cols-4'>           
                <div><img className='h-52 w-full' src={child} /></div>
                <div><img className='h-52 w-full' src={bridge} /></div>
                <div><img className='h-52 w-full' src={college} /></div>
                <div><img className='h-52 w-full' src={community} /></div>
            </div>
        </section>

        <section className='bg-slate-100'>
            <div className='flex justify-center'>
                <div className='w-48 border-t-4 mx-8 my-5 rounded-lg border-blue-600'></div>
                <h3 className='text-3xl'>Recent Activities</h3>
                <div className='w-48 border-t-4 mx-8 my-5 rounded-lg border-blue-600'></div>
            </div>
            <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
                {/* <!--Card 1--> */}
                <div className="rounded overflow-hidden shadow-lg">
                <img className="w-full" src={vision} alt="Mountain" />
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">Cultural Day</div>
                    <p className="text-gray-700 text-base">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
                    </p>
                </div>
               
                </div>
                {/* <!--Card 2--> */}
                <div className="rounded overflow-hidden shadow-lg">
                <img className="w-full" src={mission} alt="River" />
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">Inter house sports</div>
                    <p className="text-gray-700 text-base">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
                    </p>
                </div>
                
                </div>

                {/* card 3 */}
                <div className="rounded overflow-hidden shadow-lg">
                <img className="w-full" src={community} alt="Forest" />
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">Christmas Carol</div>
                    <p className="text-gray-700 text-base">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
                    </p>
                </div>
                
                </div>
            </div>
           

        </section>
        <Footer />
    </div>
  )
}
