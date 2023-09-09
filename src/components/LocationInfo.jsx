import React from 'react'

const LocationInfo = ({ location }) => {

  const type = location?.type;

  function getEmojiType() {
    if (type === 'Planet') {
      return '🌎';
    } else if (type === 'Dream') {
      return '💤';
    } else {
      return '';
    }
  }

  return (
    <article className='container-flex content__location'>
        <h2 className='title'>{getEmojiType()} {location?.name}</h2>
        <ul className='content__description'>
            <li><span>Type: </span><span>{location?.type}</span></li>
            <li><span>Dimension: </span><span>{location?.dimension || 'unknown'}</span></li>
            <li><span></span>Population: <span>{location?.residents.length}</span></li>
        </ul>
    </article>
  )
}

export default LocationInfo