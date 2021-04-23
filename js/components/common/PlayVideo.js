import React from 'react';
import {Text, View} from 'react-native';
import YouTube from 'react-native-youtube';
import {YOUTUBE_API_KEY} from '../../constant/general';

const PlayVideo = props => (
  <View>
    <YouTube
      videoId={props.route.params.videos[0]?.key}
      play={true}
      fullscreen={true}
      // loop={false}
      // onReady={e => this.setState({isReady: true})}
      // onChangeState={e => this.setState({status: e.state})}
      // onChangeQuality={e => this.setState({quality: e.quality})}
      // onError={e => this.setState({error: e.error})}
      style={{
        alignSelf: 'stretch',
        height: 300,
      }}
      apiKey={YOUTUBE_API_KEY}
    />
  </View>
);

export default PlayVideo;
