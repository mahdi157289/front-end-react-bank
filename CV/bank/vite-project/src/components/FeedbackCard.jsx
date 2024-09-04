
import {quotes} from '../assets';
const FeedbackCard = ({content , name ,title , img }) =>  (
    <section className='flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[370] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card'>
      <img src={quotes} alt="double_quotes " className='w-[42px] h-[27px] object-contain' />
      <p className='font-poppins font-normal w-[220px]  text-[18px] leading-[27px] text-white my-10'> {content}</p>
      <div className='flex flex-row'>
        <img src={img} alt={name} className="w-[48px] rounded-full h-[48px]" />
        <div className='font-poppins font-semibold text-[20px] leading-[32px] text-demwhite'>
          <h4 className='font-poppins font-normal text-[16px] leading-[24px] text-dimwhite'> {name}</h4>
          <p className='font-poppins font-normal text-[16px] leading-[24px] text-dimwhite'>{title}</p>
        </div>
      </div>
      </section>
  )


export default FeedbackCard
