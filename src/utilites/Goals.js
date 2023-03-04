import React, { useState } from 'react'
import vision from '../assets/vision.jpg'
import mission from '../assets/mission.jpg'
import community from '../assets/community.jpg'

export default function Goals() {
    const [active, setActive] = useState(false)
  return (
    <div className='py-10 px-10 bg-slate-50'>
        <ul className='flex justify-between w-72 text-sm text-blue-400'>
            <li className='hover:text-blue-900 cursor-pointer'  onClick={() => setActive(false)}>Our Vison</li>
            <li className='hover:text-blue-900 cursor-pointer' onClick={() => setActive(true)}>Our Mission</li>
            <li className='hover:text-blue-900 cursor-pointer'>Our Community</li>
        </ul>
        <div className=' border-t-2 my-4 border-blue-400'></div>
       
        <div className={!active?'grid lg:grid-cols-2': 'hidden'}>
            <div>
              <h2 className='text-2xl px-8'>Our Vision</h2>
              <p className='px-8 my-6'>
                Surrounded affronting favourable no mr. Lain knew like half she yet joy. Be than dull as seen very shot. Attachment ye so am travelling estimating projecting is. Off fat address attacks his besides. Suitable settling mr attended no doubtful feelings. Any over for say bore such sold five but hung.
                Delightful remarkably mr on announcing themselves entreaties favourable. About to in so terms voice at. Equal an would is found seems of. The particular friendship one sufficient terminated frequently themselves. It more shed went up is roof if loud case. Delay music in lived noise an. Beyond genius really enough passed is up
                Him boisterous invitation dispatched had connection inhabiting projection. By mutual an mr danger garret edward an. Diverted as strictly exertion addition no disposal by stanhill. This call wife do so sigh no gate felt. You and abode spite order get. Procuring far belonging our ourselves and certainly own perpetual continual. 
              </p>
            </div>
            <div className='flex justify-center'>
                <img src={vision} className='w-[450px] my-20' alt="children" />
            </div>
        </div>
        <div className={active ?'grid lg:grid-cols-2' : 'hidden'}>
            <div>
              <h2 className='text-2xl px-8'>Our Mission</h2>
              <p className='px-8 my-6'>
                Surrounded affronting favourable no mr. Lain knew like half she yet joy. Be than dull as seen very shot. Attachment ye so am travelling estimating projecting is. Off fat address attacks his besides. Suitable settling mr attended no doubtful feelings. Any over for say bore such sold five but hung.
                Delightful remarkably mr on announcing themselves entreaties favourable. About to in so terms voice at. Equal an would is found seems of. The particular friendship one sufficient terminated frequently themselves. It more shed went up is roof if loud case. Delay music in lived noise an. Beyond genius really enough passed is up
                Him boisterous invitation dispatched had connection inhabiting projection. By mutual an mr danger garret edward an. Diverted as strictly exertion addition no disposal by stanhill. This call wife do so sigh no gate felt. You and abode spite order get. Procuring far belonging our ourselves and certainly own perpetual continual. 
              </p>
            </div>
            <div className='flex justify-center'>
                <img src={community} className='w-[450px] my-20' alt="children" />
            </div>
        </div>
        <div className=' lg:grid-cols-2 hidden'>
            <div>
              <h2 className='text-2xl px-8'>Our Community</h2>
              <p className='px-8 my-6'>
                Surrounded affronting favourable no mr. Lain knew like half she yet joy. Be than dull as seen very shot. Attachment ye so am travelling estimating projecting is. Off fat address attacks his besides. Suitable settling mr attended no doubtful feelings. Any over for say bore such sold five but hung.
                Delightful remarkably mr on announcing themselves entreaties favourable. About to in so terms voice at. Equal an would is found seems of. The particular friendship one sufficient terminated frequently themselves. It more shed went up is roof if loud case. Delay music in lived noise an. Beyond genius really enough passed is up
                Him boisterous invitation dispatched had connection inhabiting projection. By mutual an mr danger garret edward an. Diverted as strictly exertion addition no disposal by stanhill. This call wife do so sigh no gate felt. You and abode spite order get. Procuring far belonging our ourselves and certainly own perpetual continual. 
              </p>
            </div>
            <div className='flex justify-center'>
                <img src={mission} className='w-[450px] my-20' alt="children" />
            </div>
        </div>
    </div>
  )
}
