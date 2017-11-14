import React from 'react';


const context = new AudioContext()
const source = context.createBufferSource()


export default class MyComponentWithSound extends React.Component {

constructor(){
    super();
    //this.sound = new Audio(soundFile);
  }
  onPlay(){

 const URL = "https://texttospeech-data.s3-ap-northeast-1.amazonaws.com/0d5d2d62-53e4-4300-b774-c0c2a9fd91de.mp3?X-Amz-Security-Token=FQoDYXdzEEAaDMzksW97QsTPAJflfyLlAVUDycNZhjgy4%2Fs5z6IdY%2BnfcEzArjEg3MMSJk24tag9KFhBAk6iyWjstQH%2Frp%2F6KH%2BgMl%2B56C6n6XxbJalGOS7gpqPisa%2B%2BAfwgcqxdF4fvESgNONph6ufuNiD0CRtLdAbmflE%2FTeHuXZHGDGsF%2Fpb99Z7oH6Kxb4gc4LKxHz4SzLPDUxnRhPrPBPHsSQOGymThcEZxYb7s1zOMHCXHcbn9pZY2AIw9fsDlaW0OeGrDnM5iGMo9L%2B7hOgQIdu8iR1GkHlIpRKoV6YlB3eAxP4LV1xVyZDHdHTyTgR5P049JMFm8gw8o7Z2q0AU%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20171114T063652Z&X-Amz-SignedHeaders=host&X-Amz-Expires=1799&X-Amz-Credential=ASIAJFIACN62MYO6NUIA%2F20171114%2Fap-northeast-1%2Fs3%2Faws4_request&X-Amz-Signature=4c856c9625f15b97566c2ddd16f60cac30371c7c223c836e19bd897922b8ecad"
    const options = { method: 'GET' }

    fetch(URL, options)
    .then(response => response.arrayBuffer())
    .then(response => {
      context.decodeAudioData(response, buffer => {
        source.buffer = buffer;
        source.connect(context.destination);
        source.start(context.currentTime);
      });
    })
  }
  render() {
    return(<div onClick={this.onPlay.bind(this)}>hi</div>)

  }
}
