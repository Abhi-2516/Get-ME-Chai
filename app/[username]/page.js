import React from 'react'

const Username = ({ params }) => {
  return (
    <>

      <div className="cover w-full bg-red-50  relative">
        <img className="object-cover w-full h-[350]" src="https://c10.patreonusercontent.com/4/patreon-media/p/campaign/2318879/a81f6d5947de4efa901d3fc888ea35be/eyJ3IjoxOTIwLCJ3ZSI6MX0%3D/13.gif?token-time=1738627200&amp;token-hash=QIQrqQ5iNx5oGmk-qUZ6WsCNnBHfnepopqtazXOrQbk%3D" alt=""  ></img>
        <div className="absolute -bottom-20  right-[45%]  rounded-lg">
          <img className="rounded-full" src='https://i.pinimg.com/originals/57/3f/22/573f22a1aa17b366f5489745dc4704e1.jpg' width={150} height={150}></img>

        </div>
      </div>
      <div className="info flex justify-center items-center my-24 flex-col gap-2" >

        <div className="font-bold text-lg">@{params.username}</div>
        <div className="text-slate-400">Only things I can do 24*7  is Gaming</div>
        <div className="text-slate-400">9,124 members . 82 post . $5,450/release</div>
        <div className="payment flex gap-3 w-[80%] mt-11">
          <div className="supports w-1/2 bg-slate-900 rounded-lg text-white p-10 ">

            <h2 className=' text-3xl font-bold my-5 text-center'>Supporters</h2>
            <ul className='mx-5'>
              <li className='my-4 flex gap-2 justify-center items-center'> <img src="avatar.gif" width={33} /> <span>Shubham Donated <span className='font-bold'>$30</span>  with a message " I support you Bro With lots Of love"</span></li>
              <li className='my-4 flex gap-2 justify-center items-center'> <img src="avatar.gif" width={33} /> <span>Shubham Donated <span className='font-bold'>$30</span>  with a message " I support you Bro With lots Of love"</span></li>
              <li className='my-4 flex gap-2 justify-center items-center'> <img src="avatar.gif" width={33} /> <span>Shubham Donated <span className='font-bold'>$30</span>  with a message " I support you Bro With lots Of love"</span></li>
              <li className='my-4 flex gap-2 justify-center items-center'> <img src="avatar.gif" width={33} /> <span>Shubham Donated <span className='font-bold'>$30</span>  with a message " I support you Bro With lots Of love"</span></li>
             
            </ul>
          </div>
          <div className="makepayment w-1/2  bg-slate-900 rounded-lg text-white p-10">
            <h2 className='text-2xl font-bold my-5'> Make a Payment</h2>
            <div className='flex gap-2 flex-col '>
              <input types="text" className='w-full p-3 rounded-lg bg-slate-800 ' placeholder='Enter Name' />
              <input types="text" className='w-full p-3 rounded-lg bg-slate-800 ' placeholder='Enter Amount' />
              <input types="text" className='w-full p-3 rounded-lg bg-slate-800 ' placeholder='Enter Message' />
              <button className='flex  items-center w-fit bg-slate-50 text-black border border-gray-300 rounded-lg shadow-md max-w-xs px-6 py-2 text-sm font-medium  hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500'>Pay</button>

            </div>
            <div ><button className='bg-slate-800 p-3 rounded-lg  my-5 '> Pay ₹1000 </button>
              <button className='bg-slate-800 p-3 rounded-lg my-5  mx-3'> Pay ₹1500 </button>
              <button className='bg-slate-800 p-3 rounded-lg my-5  mx-2'> Pay ₹2000 </button></div>


          </div>
        </div>


      </div>
    </>
  )
}

export default Username