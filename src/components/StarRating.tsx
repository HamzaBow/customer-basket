import React from 'react'

const StarRating = () => {
  const checkedStyle = {
    color: "orange"
  }
  return (
    <div>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      />
      <span style={checkedStyle} className="fa fa-star"></span>
      <span style={checkedStyle} className="fa fa-star"></span>
      <span style={checkedStyle} className="fa fa-star"></span>
      <span style={checkedStyle} className="fa fa-star"></span>
      <span className="fa fa-star"></span>
    </div>
  );
}

export default StarRating