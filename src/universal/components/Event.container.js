import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ReactTooltip from 'react-tooltip'

import Header from './Header';

const EventContainer = () => {
  return (
    <div className="wrapper event-page event-details">
      <Header />

      <div className="content-wrapper">
        <div className="breadcrumbs">
          <span className="breadcrumbs__crumb"><a href="#">Home</a></span>
          <span className="breadcrumbs__dilimetr">/</span>
          <span className="breadcrumbs__crumb"><a href="#">Events</a></span>
          <span className="breadcrumbs__dilimetr">/</span>
          <span className="breadcrumbs__crumb">Event Details: The Hardkiss | Тур Залізна Ластівка</span>
        </div>


          <div className="event-details__title">
            The Hardkiss | Тур Залізна Ластівка
          </div>
          <div className="event-details__tags">
            <span className="event-details__tag-wrapper">
              <a href="#" className="event-details__tag">Альбом</a>,
            </span>
            <span className="event-details__tag-wrapper">
              <a href="#" className="event-details__tag">The Hardkiss</a>,
            </span>
            <span className="event-details__tag-wrapper">
              <a href="#" className="event-details__tag">Тур</a>,
            </span>
            <span className="event-details__tag-wrapper">
              <a href="#" className="event-details__tag">Залізна Ластківка</a>
            </span>
          </div>
 
        </div>


      <div className="event-details__navbar">
        <div className="content-wrapper">
          <a href="#" className="event-details__navbar-item">Про подію</a>
          <a href="#" className="event-details__navbar-item">Про виконаця</a>
          <a href="#" className="event-details__navbar-item">Слухати</a>
          <a href="#" className="event-details__navbar-item">Схожі</a>
          <a href="#" className="event-details__navbar-item">Рекомендовані</a>
        </div>
      </div>


    </div>
  );
};

export default EventContainer;