import React from 'react';
import { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

// mtu
import Button from '@mui/material/Button';
import WifiIcon from '@mui/icons-material/Wifi';
import ForumIcon from '@mui/icons-material/Forum';
import EditCalendarIcon from '@mui/icons-material/EditCalendar';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import BatteryChargingFullIcon from '@mui/icons-material/BatteryChargingFull';
// mtu

import "@/styles/ielts.css"
import Logo from '@/assets/images/ielts.png'
import ModalOptions from '@/components/IELTS/ModalOptions';
import useTimeNow from '@/components/useTimeNow';

const LayoutConfirm = ({ children }: any) => {

  const location = useLocation();
  const navigate = useNavigate();
  const { timeNow } = useTimeNow();

  return (
    <html data-theme='light' className='ielts'>
      <div className="ielts-header">
        <div className="ielts-container">
          <div className='justify-content-space-between'>
            <div className="d-flex">
              <img src={Logo} alt="ielts" height={30} className='pointer' onClick={() => navigate("/")} />
            </div>
            <div className='align-items-center g-20'>
              <WifiIcon color="action" fontSize="small" />
              <NotificationsNoneIcon color="action" fontSize="small" />
              <ModalOptions fontSize="small" />
              <ForumIcon color="action" fontSize="small" />
              <EditCalendarIcon color="action" fontSize="small" />
            </div>
          </div>
        </div>
      </div>

      <div className='ielts-main'>
        {children}
      </div>

      <div className='ielts-footer'>
        <div className='ielts-container'>
          <div className='justify-content-space-between'>
            <div className='align-items-flex-end'>
              inspera assessment
            </div>
            <div className='align-items-center g-20'>
              <div><strong>{timeNow}</strong></div>
              <BatteryChargingFullIcon color="action" fontSize="small" sx={{ rotate: '90deg' }} />
              <div className='ielts-footer-btn'>
                <WifiIcon color="action" fontSize="small" />
              </div>
              <div className='ielts-footer-btn'>
                Exit
              </div>
            </div>
          </div>
        </div>
      </div>
    </html>
  );
};

export default LayoutConfirm;