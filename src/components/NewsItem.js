import React, { Component } from 'react';

export default class NewsItem extends Component {
  render() {
let {title, description, image_url, item_url} = this.props;
// the above is an example of js destructuring

    return (
      <>
      <div className="card" style={{width: "18rem"}}>
  {/* <img style={{width: "250px", textAlign:'center'}}  src={image_url?image_url:"https://cdn.mos.cms.futurecdn.net/3jsmJ2i7JGM8MXAEjjczef-1200-80.jpeg"} className="card-img-top" alt="..." /> */}
  <div className="card-body">
    <h5 className="card-title">{title.slice(0,45)}...</h5>
    <p className="card-text">{description.slice(0,88)}...</p>
    <a href={item_url} className="btn btn-primary" target="_blank">Go somewhere</a>
  </div>
</div>
      
      
      </>
    )
  }
}
