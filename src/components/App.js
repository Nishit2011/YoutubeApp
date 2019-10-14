import React, {Component} from 'react';
import SearchBar from './SearchBar';
import VideoBox from './VideoBox';
import youtube from './youtube';

class App extends Component{
    state={term:'',searchResults:[], soloVideoId:'', soloVideoTitle:''}

    

    playYouTubeVideo = (videoDetails) =>{
        console.log('in app:', videoDetails);
        this.setState({soloVideoId:videoDetails.id.videoId, soloVideoTitle:videoDetails.snippet.title})
    }


    onSearchBarSubmit = async (val)=>{
          const response =  await youtube.get('/search',{           
            params:{
                q:val
            }
        });
        this.setState({searchResults:response.data.items});
    }
    render(){
        
        return(
            <div>
                 <div style={{marginLeft:700}}>
                        <VideoBox id={this.state.soloVideoId} title={this.state.soloVideoTitle} defaultVideo={this.state.searchResults[0]}/>
                    </div>
                <SearchBar onSearchInApp={this.onSearchBarSubmit} searchResults={this.state.searchResults} getVideoDetails={this.playYouTubeVideo}/>
                
            </div>
        )
    }
};

export default App;