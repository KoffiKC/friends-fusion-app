'use client'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Checklist from '../components/Checklist';
import React, { useState } from 'react';
import QRcode from '../components/Qrcode';

export default function Home() {

  const [src, setSrc] = useState('')

    return (
      <div className="flex min-h-screen flex-col items-center justify-between p-24">
       { src ? <QRcode src={src}/> :
        <Checklist setSrc={setSrc}/> }
      </div>
    );
  }