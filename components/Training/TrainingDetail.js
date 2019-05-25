import React, { Component } from 'react';
import {
  Dimensions,
  Image,
  Slider,
  StyleSheet,
  ScrollView,
  TouchableHighlight,
  View,
} from 'react-native';
import Wallpaper from '../Shared/Wallpaper';
import Timeline from 'react-native-timeline-listview'

import { Asset, Audio, Font, Video } from 'expo';
import { Content, List, ListItem, Text, Left, Right, Icon } from 'native-base';
class IconVideo {
  constructor(module, width, height) {
    this.module = module;
    this.width = width;
    this.height = height;
    Asset.fromModule(this.module).downloadAsync();
  }
}

class PlaylistItem {
  constructor(name, uri, isVideo) {
    this.name = name;
    this.uri = uri;
    this.isVideo = isVideo;
  }
}


const PLAYLIST = [
  new PlaylistItem(
    'Big Buck Bunny',
    'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
    true
  ),
  new PlaylistItem(
    'Comfort Fit - “Sorry”',
    'https://s3.amazonaws.com/exp-us-standard/audio/playlist-example/Comfort_Fit_-_03_-_Sorry.mp3',
    false
  ),

  new PlaylistItem(
    'Mildred Bailey – “All Of Me”',
    'https://ia800304.us.archive.org/34/items/PaulWhitemanwithMildredBailey/PaulWhitemanwithMildredBailey-AllofMe.mp3',
    false
  ),
  new PlaylistItem(
    "Popeye - I don't scare",
    'https://ia800501.us.archive.org/11/items/popeye_i_dont_scare/popeye_i_dont_scare_512kb.mp4',
    true
  ),
  new PlaylistItem(
    'Podington Bear - “Rubber Robot”',
    'https://s3.amazonaws.com/exp-us-standard/audio/playlist-example/Podington_Bear_-_Rubber_Robot.mp3',
    false
  ),
];

const ICON_PLAY_BUTTON = new IconVideo(require('./assets/images/play_button.png'), 34, 51);
const ICON_PAUSE_BUTTON = new IconVideo(require('./assets/images/pause_button.png'), 34, 51);
const ICON_STOP_BUTTON = new IconVideo(require('./assets/images/stop_button.png'), 22, 22);
const ICON_FORWARD_BUTTON = new IconVideo(require('./assets/images/forward_button.png'), 33, 25);
const ICON_BACK_BUTTON = new IconVideo(require('./assets/images/back_button.png'), 33, 25);



const ICON_TRACK_1 = new IconVideo(require('./assets/images/track_1.png'), 166, 5);
const ICON_THUMB_1 = new IconVideo(require('./assets/images/thumb_1.png'), 18, 19);



const { width: DEVICE_WIDTH, height: DEVICE_HEIGHT } = Dimensions.get('window');
const BACKGROUND_COLOR = 'red';
const DISABLED_OPACITY = 0.5;
const FONT_SIZE = 14;
const LOADING_STRING = '... loading ...';
const BUFFERING_STRING = '...buffering...';
const VIDEO_CONTAINER_HEIGHT = DEVICE_HEIGHT * 2.0 / 5.0 - FONT_SIZE * 2;

export default class TrainingDetail extends Component {
  constructor(props) {
    super(props);
    this.onEventPress = this.onEventPress.bind(this)
    this.index = 0;

    this.timeLineData = [
      { title: 'Archery Training' },
      { title: 'Play Badminton' },
      { title: 'Lunch' },
      { title: 'Watch Soccer' },
      { title: 'Go to Fitness center' },
      { title: 'hasfasfas' },
      { title: 'asdfasdfa' },
      { title: 'qwerqwerqwe' },
      { title: 'qwerqwer qwerqwer' },
      { title: 'qwerqwer qwer qwerqwer qwe' }
    ];

    this.isSeeking = false;
    this.shouldPlayAtEndOfSeek = false;
    this.playbackInstance = null;
    this.state = {
      itemNumber: 0,
      showVideo: false,
      playbackInstanceName: LOADING_STRING,
      selected: '',
      muted: false,
      playbackInstancePosition: null,
      playbackInstanceDuration: null,
      shouldPlay: false,
      isPlaying: false,
      isBuffering: false,
      isLoading: true,
      fontLoaded: false,
      shouldCorrectPitch: true,

      videoWidth: DEVICE_WIDTH,
      videoHeight: VIDEO_CONTAINER_HEIGHT,
      poster: false,
      useNativeControls: false,
      fullscreen: false,
    };
  }

  componentDidMount() {
    Audio.setAudioModeAsync({
      allowsRecordingIOS: false,
      interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
      playsInSilentModeIOS: true,
      shouldDuckAndroid: true,
      interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DO_NOT_MIX,
    });
    (async () => {
      await Font.loadAsync({
        'cutive-mono-regular': require('./assets/fonts/CutiveMono-Regular.ttf'),
      });
      this.setState({ fontLoaded: true });
    })();
  }

  async _loadNewPlaybackInstance(playing) {
    if (this.playbackInstance != null) {
      await this.playbackInstance.unloadAsync();
      this.playbackInstance.setOnPlaybackStatusUpdate(null);
      this.playbackInstance = null;
    }

    const source = { uri: PLAYLIST[this.index].uri };
    const initialStatus = {
      shouldPlay: playing,
      rate: this.state.rate,
      shouldCorrectPitch: this.state.shouldCorrectPitch,

      // // UNCOMMENT THIS TO TEST THE OLD androidImplementation:
      // androidImplementation: 'MediaPlayer',
    };

    if (PLAYLIST[this.index].isVideo) {
      this._video.setOnPlaybackStatusUpdate(this._onPlaybackStatusUpdate);
      await this._video.loadAsync(source, initialStatus);
      this.playbackInstance = this._video;
      const status = await this._video.getStatusAsync();
    } else {
      const { sound, status } = await Audio.Sound.create(
        source,
        initialStatus,
        this._onPlaybackStatusUpdate
      );
      this.playbackInstance = sound;
    }

    this._updateScreenForLoading(false);
  }

  _mountVideo = component => {
    this._video = component;
    this._loadNewPlaybackInstance(false);
  };

  _updateScreenForLoading(isLoading) {
    if (isLoading) {
      this.setState({
        showVideo: false,
        isPlaying: false,
        playbackInstanceName: LOADING_STRING,
        playbackInstanceDuration: null,
        playbackInstancePosition: null,
        isLoading: true,
      });
    } else {
      this.setState({
        playbackInstanceName: PLAYLIST[this.index].name,
        showVideo: PLAYLIST[this.index].isVideo,
        isLoading: false,
      });
    }
  }
  onEventPress(data) {

    this.setState({ selected: data });
    console.log(this.state.selected);
    for (var i = 0; i < this.timeLineData.length; i++) {
      if (this.state.selected.title == this.timeLineData[i].title) {
        var colorChange = {
          title: this.state.selected.title,
          circleColor: '#ffffff'
        }
        for (var k = 0; k < this.timeLineData.length; k++) {
          var colorSame = {
            title: this.timeLineData[k].title,
            circleColor: 'rgb(248,180,18)'
          }
          this.timeLineData[k] = colorSame;
        }
        this.timeLineData[i] = colorChange;
      }
    }
  this.setState({selected:''});
  }

  _onPlaybackStatusUpdate = status => {
    if (status.isLoaded) {
      this.setState({
        playbackInstancePosition: status.positionMillis,
        playbackInstanceDuration: status.durationMillis,
        shouldPlay: status.shouldPlay,
        isPlaying: status.isPlaying,
        isBuffering: status.isBuffering,
        rate: status.rate,
        muted: status.isMuted,
        volume: status.volume,

        shouldCorrectPitch: status.shouldCorrectPitch,
      });
      if (status.didJustFinish && !status.isLooping) {
        this._advanceIndex(true);
        this._updatePlaybackInstanceForIndex(true);
      }
    
      // for (var k = 0; k < this.timeLineData.length; k++) {
      //   var colorSame = {
      //     title: this.timeLineData[k].title,
      //     circleColor: 'rgb(248,180,18)',
      //     description:status.durationMillis/1000 + ' Saniye '
      //   }
      //   this.timeLineData[k] = colorSame;
      // }
    
    } else {
      if (status.error) {
        console.log(`FATAL PLAYER ERROR: ${status.error}`);
      }
    }
  };

  _onLoadStart = () => {
    console.log(`ON LOAD START`);
  };

  _onLoad = status => {
    console.log(`ON LOAD : ${JSON.stringify(status)}`);
  };

  _onError = error => {
    console.log(`ON ERROR : ${error}`);
  };

  _onReadyForDisplay = event => {
    const widestHeight = DEVICE_WIDTH * event.naturalSize.height / event.naturalSize.width;
    if (widestHeight > VIDEO_CONTAINER_HEIGHT) {
      this.setState({
        videoWidth: VIDEO_CONTAINER_HEIGHT * event.naturalSize.width / event.naturalSize.height,
        videoHeight: VIDEO_CONTAINER_HEIGHT,
      });
    } else {
      this.setState({
        videoWidth: DEVICE_WIDTH,
        videoHeight: DEVICE_WIDTH * event.naturalSize.height / event.naturalSize.width,
      });
    }
  };

  _onFullscreenUpdate = event => {
    console.log(`FULLSCREEN UPDATE : ${JSON.stringify(event.fullscreenUpdate)}`);
  };

  _advanceIndex(forward) {
    this.index = (this.index + (forward ? 1 : PLAYLIST.length - 1)) % PLAYLIST.length;
  }

  _goToVideoNumber(videoNumber) {
    this.index = videoNumber % PLAYLIST.length;
  }


  _goToVideo = (data) => {
    this._goToVideoNumber(data);
    this._updatePlaybackInstanceForIndex(this.state.shouldPlay);
  };


  async _updatePlaybackInstanceForIndex(playing) {
    this._updateScreenForLoading(true);

    this.setState({
      videoWidth: DEVICE_WIDTH,
      videoHeight: VIDEO_CONTAINER_HEIGHT,
    });

    this._loadNewPlaybackInstance(playing);
  }

  _onPlayPausePressed = () => {
    if (this.playbackInstance != null) {
      if (this.state.isPlaying) {
        this.playbackInstance.pauseAsync();
      } else {
        this.playbackInstance.playAsync();
      }
    }
  };

  _onStopPressed = () => {
    if (this.playbackInstance != null) {
      this.playbackInstance.stopAsync();
    }
  };

  _onForwardPressed = () => {
    if (this.playbackInstance != null) {
      this.setState({ itemNumber: this.state.itemNumber + 1 });
      this._advanceIndex(true);
      this._updatePlaybackInstanceForIndex(this.state.shouldPlay);
    }
  };

  _onBackPressed = () => {
    if (this.playbackInstance != null) {
      this.setState({ itemNumber: this.state.itemNumber - 1 })
      this._advanceIndex(false);
      this._updatePlaybackInstanceForIndex(this.state.shouldPlay);
    }
  };
  _getSeekSliderPosition() {
    if (
      this.playbackInstance != null &&
      this.state.playbackInstancePosition != null &&
      this.state.playbackInstanceDuration != null
    ) {
      return this.state.playbackInstancePosition / this.state.playbackInstanceDuration;
    }
    return 0;
  }
  _onSeekSliderValueChange = value => {
    if (this.playbackInstance != null && !this.isSeeking) {
      this.isSeeking = true;
      this.shouldPlayAtEndOfSeek = this.state.shouldPlay;
      this.playbackInstance.pauseAsync();
    }
  };


  _onSeekSliderSlidingComplete = async value => {
    if (this.playbackInstance != null) {
      this.isSeeking = false;
      const seekPosition = value * this.state.playbackInstanceDuration;
      if (this.shouldPlayAtEndOfSeek) {
        this.playbackInstance.playFromPositionAsync(seekPosition);
      } else {
        this.playbackInstance.setPositionAsync(seekPosition);
      }
    }
  };


  _getMMSSFromMillis(millis) {
    const totalSeconds = millis / 1000;
    const seconds = Math.floor(totalSeconds % 60);
    const minutes = Math.floor(totalSeconds / 60);

    const padWithZero = number => {
      const string = number.toString();
      if (number < 10) {
        return '0' + string;
      }
      return string;
    };
    return padWithZero(minutes) + ':' + padWithZero(seconds);
  }

  _getTimestamp() {
    if (
      this.playbackInstance != null &&
      this.state.playbackInstancePosition != null &&
      this.state.playbackInstanceDuration != null
    ) {
      return `${this._getMMSSFromMillis(
        this.state.playbackInstancePosition
      )} / ${this._getMMSSFromMillis(this.state.playbackInstanceDuration)}`;
    }
    return '';
  }

  _onFullscreenPressed = () => {
    try {
      this._video.presentFullscreenPlayer();
    } catch (error) {
      console.log(error.toString());
    }
  };

  render() {
    return (!this.state.fontLoaded ? (
      <View style={styles.emptyContainer} />
    ) : (

        <View style={styles.container}>
          <View style={styles.nameContainer}>
            <Text style={[styles.text, { fontFamily: 'cutive-mono-regular' }]}>
              {this.state.playbackInstanceName}
            </Text>
          </View>
          <View style={styles.videoContainer}>
            <Video
              ref={this._mountVideo}
              style={[
                styles.video,
                {
                  opacity: this.state.showVideo ? 1.0 : 0.0,
                  width: this.state.videoWidth,
                  height: this.state.videoHeight,
                },
              ]}
              resizeMode={Video.RESIZE_MODE_CONTAIN}
              onPlaybackStatusUpdate={this._onPlaybackStatusUpdate}
              onLoadStart={this._onLoadStart}
              onLoad={this._onLoad}
              onError={this._onError}
              onFullscreenUpdate={this._onFullscreenUpdate}
              onReadyForDisplay={this._onReadyForDisplay}
              useNativeControls={this.state.useNativeControls}
            />
          </View>
          <View
            style={[
              styles.playbackContainer,
              {
                opacity: this.state.isLoading ? DISABLED_OPACITY : 1.0,
              },
            ]}>
            <Slider
              style={styles.playbackSlider}
              trackImage={ICON_TRACK_1.module}
              thumbImage={ICON_THUMB_1.module}
              value={this._getSeekSliderPosition()}
              onValueChange={this._onSeekSliderValueChange}
              onSlidingComplete={this._onSeekSliderSlidingComplete}
              disabled={this.state.isLoading}
            />
            <View style={styles.timestampRow}>
              <Text style={[styles.text, styles.buffering, { fontFamily: 'cutive-mono-regular' }]}>
                {this.state.isBuffering ? BUFFERING_STRING : ''}
              </Text>
              <Text style={[styles.text, styles.timestamp, { fontFamily: 'cutive-mono-regular' }]}>
                {this._getTimestamp()}
              </Text>
            </View>
          </View>
          <View
            style={[
              styles.buttonsContainerBase,
              styles.buttonsContainerTopRow,
              {
                opacity: this.state.isLoading ? DISABLED_OPACITY : 1.0,
              },
            ]}>
            <TouchableHighlight
              underlayColor={BACKGROUND_COLOR}
              style={styles.wrapper}
              onPress={this._onBackPressed}
              disabled={this.state.isLoading}>
              <Image style={styles.button} source={ICON_BACK_BUTTON.module} />
            </TouchableHighlight>
            <TouchableHighlight
              underlayColor={BACKGROUND_COLOR}
              style={styles.wrapper}
              onPress={this._onPlayPausePressed}
              disabled={this.state.isLoading}>
              <Image
                style={styles.button}
                source={this.state.isPlaying ? ICON_PAUSE_BUTTON.module : ICON_PLAY_BUTTON.module}
              />
            </TouchableHighlight>
            <TouchableHighlight
              underlayColor={BACKGROUND_COLOR}
              style={styles.wrapper}
              onPress={this._onStopPressed}
              disabled={this.state.isLoading}>
              <Image style={styles.button} source={ICON_STOP_BUTTON.module} />
            </TouchableHighlight>
            <TouchableHighlight
              underlayColor={BACKGROUND_COLOR}
              style={styles.wrapper}
              onPress={this._onForwardPressed}
              disabled={this.state.isLoading}>
              <Image style={styles.button} source={ICON_FORWARD_BUTTON.module} />
            </TouchableHighlight>
          </View>
          <Wallpaper source={require('../../images/MainBackground.jpg')}>

            <ScrollView style={styles.buttonsContainerTextRow}>

              {/* <Content>
              <List>
                <ListItem selected={this.state.itemNumber == 0}
                  onPress={() => { this._goToVideo(0), this.setState({ itemNumber: 0 }) }}>
                  <Left>
                    <Text>Simon Mignolet</Text>
                  </Left>
                  <Right>
                    <Icon name={this.state.itemNumber == 0 ? "pause" : "play"} />
                  </Right>

                </ListItem>
                <ListItem selected={this.state.itemNumber == 1}
                  onPress={() => { this._goToVideo(1), this.setState({ itemNumber: 1 }) }}>
                  <Left>
                    <Text>Nathaniel Clyne</Text>
                  </Left>
                  <Right>
                    <Icon name={this.state.itemNumber == 1 ? "pause" : "play"} />
                  </Right>

                </ListItem>
                <ListItem selected={this.state.itemNumber == 2}
                  onPress={() => { this._goToVideo(2), this.setState({ itemNumber: 2 }) }}>
                  <Left>
                    <Text>Dejan Lovren</Text>
                  </Left>
                  <Right>
                    <Icon name={this.state.itemNumber == 2 ? "pause" : "play"} />
                  </Right>

                </ListItem>
              </List>
            </Content> */}

              <Timeline
                style={styles.list}
                data={this.timeLineData}
                onPress={this.onEventPress}
                circleSize={25}
                descriptionStyle={{backgroundColor: 'gray',borderBottomLeftRadius: 20,borderBottomRightRadius: 20, textAlign: 'center', justifyContent: 'center', alignItems: 'center', color: 'white', height: 30,marginTop:-30}}
                lineWidth={8}
                circleColor='rgb(248,180,18)'
                lineColor='rgb(255,29,89)'
                timeContainerStyle={{ minWidth: 152 }}
                titleStyle={{ backgroundColor: '#e51f59', borderRadius: 20, textAlign: 'center', justifyContent: 'center', alignItems: 'center', color: 'white', height: 30 }}
                showTime={false}
              />

            </ScrollView>
          </Wallpaper>
          {/* <TouchableHighlight
                  underlayColor={BACKGROUND_COLOR}
                  style={styles.wrapper}
                  onPress={this._onFullscreenPressed}>
                  <View style={styles.button}>
                    <Text style={[styles.text, { fontFamily: 'cutive-mono-regular' }]}>
                      Fullscreen
                  </Text>
                  </View>
                </TouchableHighlight> */}

        </View>
      )
    );
  }
}
const styles = StyleSheet.create({
  emptyContainer: {
    alignSelf: 'stretch',
    backgroundColor: BACKGROUND_COLOR,
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'stretch',
    backgroundColor: BACKGROUND_COLOR,
  },
  wrapper: {},
  nameContainer: {
    height: FONT_SIZE,
    top: 10
  },
  space: {
    height: FONT_SIZE,
  },
  videoContainer: {
    paddingTop: 20,
    height: VIDEO_CONTAINER_HEIGHT,
  },
  video: {
    maxWidth: DEVICE_WIDTH,
  },
  playbackContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'stretch',
    minHeight: ICON_THUMB_1.height * 2.0,
    maxHeight: ICON_THUMB_1.height * 2.0,
  },
  playbackSlider: {
    alignSelf: 'stretch',
  },
  timestampRow: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    alignSelf: 'stretch',
    minHeight: FONT_SIZE,
  },
  text: {
    fontSize: FONT_SIZE,
    minHeight: FONT_SIZE,
  },
  buffering: {
    textAlign: 'left',
    paddingLeft: 20,
  },
  timestamp: {
    textAlign: 'right',
    paddingRight: 20,
  },
  button: {
    backgroundColor: BACKGROUND_COLOR,
  },
  buttonsContainerBase: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  list: {
    flex: 1,
    marginTop: 30
  },
  buttonsContainerTopRow: {
    maxHeight: ICON_PLAY_BUTTON.height,
    minWidth: DEVICE_WIDTH / 2.0,
    maxWidth: DEVICE_WIDTH / 2.0,
  },
  buttonsContainerTextRow: {
    minWidth: DEVICE_WIDTH,
    maxWidth: DEVICE_WIDTH,
  },
});