import React, {Component} from 'react';


class VideoList extends Component{

    state={videoTitle:'',videoId:''}

  sendVideoToBox = () =>{
      console.clear()
     
   
    this.props.inSearchBarForVideDetails(this.props.videoList)
  }
    render(){
        console.log('props:--',this.props);
        return(
            <div key={this.state.videoId}>
            <h6>{this.props.videoList.snippet.title}</h6>
            <img alt="utube-img" src={this.props.videoList.snippet.thumbnails.default.url} onClick={this.sendVideoToBox} playVideo={this.sendVideoToBox}/>
           
            </div>
        )
    }
}

export default VideoList;