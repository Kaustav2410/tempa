import { homeServices,services } from '../constants'
import ServicesCard from '../components/servicesCard'
import FreeQuote from '../components/freeQuote'
const Service = () => {
  return (
    <section>
        <div className='bg-[#faf3eb] p-10 pt-40 flex justify-center items-center flex-col'>
            <div className='flex flex-col justify-center items-center gap-3 py-10'>
                <h1 className='text-5xl'>Treatments Provided</h1>
                <div className='w-9 h-0.5 bg-black'></div>
            </div>
            <div className='grid grid-cols-3 gap-10'>
            {services.length!=0 && services.map((ser)=>{
                return <ServicesCard serviceDetails={ser} />

            })}
            </div>
        </div>
        <FreeQuote/>
    </section>
  )
}

export default Service
