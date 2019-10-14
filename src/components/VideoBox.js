import React, {Component} from 'react';


class VideoBox extends Component{
    componentWillMount(){
        
        // const playUrl = `https://www.youtube.com/embed/${this.props.id}`
        // return(
        //     <div>
        //           <iframe src={playUrl} title={this.props.title}></iframe>
        //     </div>
        // )
    }

    render(){
        const playUrl = `https://www.youtube.com/embed/${this.props.id}`
        return(
            <div>

                <iframe src={playUrl} title={this.props.title}></iframe>
               
            </div>

        )
    }
}

export default VideoBox