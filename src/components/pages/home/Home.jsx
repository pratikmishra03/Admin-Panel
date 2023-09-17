import React from 'react'
import './home.css'
import FeaturedInfo from '../../featuredInfo/FeaturedInfo'
import Chart from '../../chart/Chart'
import { Userdata } from '../../../dummyData'
import WidgetSm from '../../widgetSm/WidgetSm'
import Widgetlg from '../../widgetLg/Widgetlg'


export default function Home() {
  return (
    <div className='home'>
    <FeaturedInfo/>
    <Chart data={Userdata} title="User Analytics" grid dataKey="Active User"/>
    <div className="homeWidget">
      <WidgetSm/>
      <Widgetlg/>
    </div>
    </div>
  )
}
