import { useState } from 'react'
import viteLogo from '/vite.svg'
import banner from './assets/Screenshot (8).png'
import banner2 from './assets/Screenshot (9).png'
import banner3 from './assets/Screenshot (10).png'
import cart1 from './assets/Screenshot (12).png'
import cart2 from './assets/Screenshot (13).png'
import cart3 from './assets/Screenshot (14).png'
import './App.css'

function App() {

  return (
    <>
      {/* NAVBAR START */}
      <div className='flex justify-evenly pb-2 bg-[#403f40]'>
        <div className='flex gap-9 mt-3 text-[#d9d9d9]'>
          <h1><i class="text-[20px] fa-brands fa-apple"></i></h1>
          <p className='text-[13px]'>Store</p>
          <p className='text-[13px]'>Mac</p>
          <p className='text-[13px]'>ipad</p>
          <p className='text-[13px]'>Iphone</p>
          <p className='text-[13px]'>Watch</p>
          <p className='text-[13px]'>Vision</p>
          <p className='text-[13px]'>Airpods</p>
          <p className='text-[13px]'>TV & home</p>
          <p className='text-[13px]'>Entertaiment</p>
          <p className='text-[13px]'>Accessories</p>
          <p className='text-[13px]'>Support</p>
          <h1><i class="fa-solid fa-magnifying-glass"></i></h1>
          <h1><i class="fa-solid fa-bag-shopping"></i></h1>
        </div>
      </div>
      {/* END NAVBAR */}
      <div>
        <img src={banner} alt="" />
        <img className='mt-2' src={banner2} alt="" />
        <img className='mt-2' src={banner3} alt="" />
        <img className='mt-2' src={cart1} alt="" />
        <img className='mt-2' src={cart2} alt="" />
        <img className='mt-2' src={cart3} alt="" />
      </div>


      {/* STRAT FOTTER  */}
      <div className='bg-[#f5f5f7] p-3'>
      <div className=' w-[80%] ml-[10%] text-black mt-9'>
        <hr />
      </div>
      <div className='flex justify-center mt-7 gap-16'>
        <div className=''>
          <h1 className='text-[14px] font-semibold text-[#303031]'>Shop and Learn</h1>
          <p className='text-[#a7a7a8] text-sm mt-2 font-poppins'>Store</p>
          <p className='text-[#a7a7a8] text-sm mt-2 font-poppins'>Mac</p>
          <p className='text-[#a7a7a8] text-sm mt-2 font-poppins'>ipad</p>
          <p className='text-[#a7a7a8] text-sm mt-2 font-poppins'>iphone</p>
          <p className='text-[#a7a7a8] text-sm mt-2 font-poppins'>watch</p>
          <p className='text-[#a7a7a8] text-sm mt-2 font-poppins'>vission</p>
          <p className='text-[#a7a7a8] text-sm mt-2 font-poppins'>Airpods</p>
          <p className='text-[#a7a7a8] text-sm mt-2 font-poppins'>TV & Home</p>
          <p className='text-[#a7a7a8] text-sm mt-2 font-poppins'>AirTag</p>
          <p className='text-[#a7a7a8] text-sm mt-2 font-poppins'>Accessories</p>
          <p className='text-[#a7a7a8] text-sm mt-2 font-poppins'>Gift Cards</p>
          <h1 className='text-[14px] font-semibold text-[#303031] mt-3 '>Apple Wallet</h1>
          <p className='text-[#a7a7a8] text-sm mt-2 font-poppins'>Wallet</p>
          <p className='text-[#a7a7a8] text-sm mt-2 font-poppins'>Apple Card</p>
          <p className='text-[#a7a7a8] text-sm mt-2 font-poppins'>Aplle Pay</p>
          <p className='text-[#a7a7a8] text-sm mt-2 font-poppins'>Apple Cash</p>
        </div>
        <div className=''>
          <h1 className='text-[14px] font-semibold text-[#303031]'>Account</h1>
          <p className='text-[#a7a7a8] text-sm mt-2 font-poppins'>Manage Your Apple ID</p>
          <p className='text-[#a7a7a8] text-sm mt-2 font-poppins'>Apple Store Account</p>
          <p className='text-[#a7a7a8] text-sm mt-2 font-poppins'>Cloud.com</p>
          <h1 className='text-[14px] font-semibold text-[#303031] mt-3'>Entertainment</h1>
          <p className='text-[#a7a7a8] text-sm mt-2 font-poppins'>Apple One</p>
          <p className='text-[#a7a7a8] text-sm mt-2 font-poppins'>Apple TV+</p>
          <p className='text-[#a7a7a8] text-sm mt-2 font-poppins'>Apple Music</p>
          <p className='text-[#a7a7a8] text-sm mt-2 font-poppins'>Apple Arcade</p>
          <p className='text-[#a7a7a8] text-sm mt-2 font-poppins'>Apple Fitness+</p>
          <p className='text-[#a7a7a8] text-sm mt-2 font-poppins'>Apple News+</p>
          <p className='text-[#a7a7a8] text-sm mt-2 font-poppins'>Apple Podcasts</p>
          <p className='text-[#a7a7a8] text-sm mt-2 font-poppins'>Apple Books</p>
          <p className='text-[#a7a7a8] text-sm mt-2 font-poppins'>App Store</p>
        </div>
        <div className=''>
          <h1 className='text-[14px] font-semibold text-[#303031]'>Apple Store</h1>
          <p className='text-[#a7a7a8] text-sm mt-2 font-poppins'>Find a Store</p>
          <p className='text-[#a7a7a8] text-sm mt-2 font-poppins'>Genius Bar</p>
          <p className='text-[#a7a7a8] text-sm mt-2 font-poppins'>Today at Apple</p>
          <p className='text-[#a7a7a8] text-sm mt-2 font-poppins'>Apple Camp</p>
          <p className='text-[#a7a7a8] text-sm mt-2 font-poppins'>Apple Store App</p>
          <p className='text-[#a7a7a8] text-sm mt-2 font-poppins'>Certified Refurbished</p>
          <p className='text-[#a7a7a8] text-sm mt-2 font-poppins'>Apple Trade In</p>
          <p className='text-[#a7a7a8] text-sm mt-2 font-poppins'>Financing</p>
          <p className='text-[#a7a7a8] text-sm mt-2 font-poppins'>Carrier Deals at Apple</p>
          <p className='text-[#a7a7a8] text-sm mt-2 font-poppins'>Order Status</p>
          <p className='text-[#a7a7a8] text-sm mt-2 font-poppins'>Shopping Help</p>
        </div>
        <div className=''>
          <h1 className='text-[14px] font-semibold text-[#303031]'>For Business</h1>
          <p className='text-[#a7a7a8] text-sm mt-2 font-poppins'>Apple and Business</p>
          <p className='text-[#a7a7a8] text-sm mt-2 font-poppins'>Shop for Business</p>
          <h1 className='text-[14px] font-semibold text-[#303031] mt-2'>For Eduction</h1>
          <p className='text-[#a7a7a8] text-sm mt-2 font-poppins'>Apple and Education</p>
          <p className='text-[#a7a7a8] text-sm mt-2 font-poppins'>Shop for K-12</p>
          <p className='text-[#a7a7a8] text-sm mt-2 font-poppins'>Shop for College</p>
          <h1 className='text-[14px] font-semibold text-[#303031] mt-2'>For HealthCare</h1>
          <p className='text-[#a7a7a8] text-sm mt-2 font-poppins'>Apple in Healthcare</p>
          <p className='text-[#a7a7a8] text-sm mt-2 font-poppins'>Health on Apple Watch</p>
          <p className='text-[#a7a7a8] text-sm mt-2 font-poppins'>Health Records on iPhone</p>
          <h1 className='text-[14px] font-semibold text-[#303031] mt-2'>For Government</h1>
          <p className='text-[#a7a7a8] text-sm mt-2 font-poppins'>Shop for Government</p>
          <p className='text-[#a7a7a8] text-sm mt-2 font-poppins'>Shop for Veterans and Military</p>
        </div>
        <div className=''>
          <h1 className='text-[14px] font-semibold text-[#303031]'>Apple Values</h1>
          <p className='text-[#a7a7a8] text-sm mt-2 font-poppins'>Accessibility</p>
          <p className='text-[#a7a7a8] text-sm mt-2 font-poppins'>Education</p>
          <p className='text-[#a7a7a8] text-sm mt-2 font-poppins'>Environment</p>
          <p className='text-[#a7a7a8] text-sm mt-2 font-poppins'>Inclusion and Diversity</p>
          <p className='text-[#a7a7a8] text-sm mt-2 font-poppins'>Privacy</p>
          <p className='text-[#a7a7a8] text-sm mt-2 font-poppins'>acial Equity and Justice</p>
          <p className='text-[#a7a7a8] text-sm mt-2 font-poppins'>Supplier Responsibility</p>
          <h1 className='text-[14px] font-semibold text-[#303031] mt-3 '>About Apple</h1>
          <p className='text-[#a7a7a8] text-sm mt-2 font-poppins'>Newsroom</p>
          <p className='text-[#a7a7a8] text-sm mt-2 font-poppins'>Apple Leadership</p>
          <p className='text-[#a7a7a8] text-sm mt-2 font-poppins'>Career Opportunities</p>
          <p className='text-[#a7a7a8] text-sm mt-2 font-poppins'>Investors</p>
          <p className='text-[#a7a7a8] text-sm mt-2 font-poppins'>Ethics & Compliance</p>
          <p className='text-[#a7a7a8] text-sm mt-2 font-poppins'>Events</p>
          <p className='text-[#a7a7a8] text-sm mt-2 font-poppins'>Contact Apple</p>
        </div>
        </div>
        <div>
          <p className='text-[#a7a7a8] ml-[13.5%] text-sm mt-7 font-poppins '>More ways to shop: Find an Apple Store or other retailer near you. Or call 1-800-MY-APPLE.</p>
        </div>
        <div className=' w-[80%] ml-[10%] text-black mt-5'>
        <hr />
      </div>
      <div>
        <p className='text-[#a7a7a8] ml-[13.5%] text-sm mt-5 font-poppins'> Copyright © 2024 Apple Inc. All rights reserved.</p>
      </div>

 
      </div>
      {/* END FOTTER */}
      
    </>
  )
}

export default App
