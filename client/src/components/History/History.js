
import VideoList from '../Home/VideoList/VideoList';
import './History.scss';

import React, { useState, useEffect } from 'react';

function History() {

  let user = localStorage.getItem('user_id')
  
  return (
    <VideoList action={`getHistory/${user}`} /> 
  );
}

export default History;
