import React, { Component } from 'react';
import VideoList from './VideoList';

class SearchBar extends Component {

    state = { searchResults: [], term: '' }

    handleOnChange = (e) => {
        e.preventDefault()
        if (e.key === "Enter") this.props.onSearchInApp(this.state.term)
    }

    searchVideos = () => this.props.onSearchInApp(this.state.term)

    getVideoDetailsInSearchBar = (videoDetails)=>{
       this.props.getVideoDetails(videoDetails)
    }
    render() {
        console.log('*******',this.props.searchResults)
        return (
            <div>
                <form onSubmit={this.handleOnChange}>
                    <input type="text"
                        onChange={e => this.setState({ term: e.target.value })}
                    />
                    <button onClick={this.searchVideos}>Search</button>

                </form>
                <div>
                    {
                       this.props.searchResults.map(video => (<VideoList key={video.id.videoId} videoList={video} inSearchBarForVideDetails={this.getVideoDetailsInSearchBar}/>))
                    }

                </div>


            </div>
        )
    }
};

export default SearchBar;