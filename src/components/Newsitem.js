
import React, { Component } from 'react'

export class Newsitem extends Component {


  render() {
    let {title, description, imageUrl, newsurl} = this.props;
    return (
        <div className="my-3">
        <div className="card">
        <img src={!imageUrl?"https://news.google.com/rss/articles/CBMic0FVX3lxTE9aaVZ6eXM1U18zOTF0SW82UVliN1VrcUpsemQ1NkxVY2sydjdtNEl0ZDJCRENfTjZva2ZWZ1VjUXZYREhsa0dWcThjMkV1aTB4Ri14REhJbG5VdVoxVHdmaDFuUEFna2pwRWhnbG1KMnU0VDg?oc=5" : imageUrl} className="bd-placeholder-img card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{title}...</h5>
          <p className="card-text">{description}...</p>
          <a href={newsurl} target="blank" className="btn btn-sm btn-primary">Have a look</a>
        </div>
      </div>
      </div>
    )
  }
}

export default Newsitem

