import React from 'react'

const StarRating = () => {
  const checkedStyle = {
    color: "orange"
  }
  return (
    <div>
      <span style={checkedStyle} className="fa fa-star"></span>
      <span style={checkedStyle} className="fa fa-star"></span>
      <span style={checkedStyle} className="fa fa-star"></span>
      <span style={checkedStyle} className="fa fa-star"></span>
      <span className="fa fa-star"></span>
    </div>
  );
}

export default StarRating