import React from 'react'

export const GifGridItem = ({title, url, id}) => {

    console.log({title, url, id});

  return (
    <div className="card-grid contenedor">
      <img src={url.url} alt={title} />
      <p>{title}</p>
    </div>
  )
}



