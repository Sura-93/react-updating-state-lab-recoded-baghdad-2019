// Code YouTubeDebugger Component Here
import React, { Component } from 'react';
class YouTubeDebugger extends Component {
    state = { 
     errors: [],
     user:null,
     settings: {
         bitrate: 8, 
         video: {
             resolution: '1080p'
         },
     }
    }
     ChangeBitrate = () => {
        this.setState({
            settings: {
                ...this.state.settings, bitrate:12
            }
        }
          );
     }

     ChangeResolution =() => {

        this.setState({
            settings : {
                ...this.state.settings, video:{
                    resolution:'720p'
                } 
            }
        })
     }
     
    render() { 
        return ( 

        <button className="bitrate" onClick={this.ChangeBitrate}> {this.state.settings.bitrate}</button>
            <button className="resolution" onClick={this.ChangeResolution}>{this.state.settings.video.resolution} </button>

         )
    }
}
 
export default YouTubeDebugger;