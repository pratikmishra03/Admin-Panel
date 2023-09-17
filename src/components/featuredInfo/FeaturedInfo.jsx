import React from 'react'
import "./featuredInfo.css"
import {ArrowDownward,ArrowUpward} from "@mui/icons-material"

export default function FeaturedInfo() {
  return (
    <div className='featured'>
        <div className="featuredItem">
           <span className='featuredTitle'>Revanue</span> 
           <div className="featuredMoneyContainer">
              <span className="featuredMoney">2415</span>
              <span className="featuredMoneyRate">-11.4 <ArrowDownward className='featuredIcon negative'/></span>
           </div>
           <span className='featuredSub'>Compared to last Month</span>
        </div>
        <div className="featuredItem">
           <span className='featuredTitle'>Sales</span> 
           <div className="featuredMoneyContainer">
              <span className="featuredMoney">4414</span>
              <span className="featuredMoneyRate">-1.4 <ArrowDownward className='featuredIcon negative'/></span>
           </div>
           <span className='featuredSub'>Compared to last Month</span>
        </div>
        <div className="featuredItem">
           <span className='featuredTitle'>Cost</span> 
           <div className="featuredMoneyContainer">
              <span className="featuredMoney">2215</span>
              <span className="featuredMoneyRate">+2.4 <ArrowUpward className='featuredIcon'/></span>
           </div>
           <span className='featuredSub'>Compared to last Month</span>
        </div>
    </div>
  )
}
