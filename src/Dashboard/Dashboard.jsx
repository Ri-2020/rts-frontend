import React from 'react'
import './dashboard.css'

export const Dashboard = () => {
  return (
    <div className="dashboardBox">
        <div className='dashboard_header'>
            <div  className=' darkBorder headerBorder'>
                    Hi, Rohit Gupta (20-0736-013-0047)
            </div>
            <div className='dashboard_header_right'>
                    <div className='dashboard_header_button'>
                        <div className='inside'>
                            edit
                        </div>
                    </div>
                    <div className='dashboard_header_button'>
                        <div className='inside'>
                            home
                        </div>
                    </div>
            </div>
        </div>
    </div>
  );
}

export default Dashboard;