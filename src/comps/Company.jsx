import React from 'react'
const context = new AudioContext()


export default class Company extends React.Component {

onCompanyClick(){
this.props.onCompClick();
}
onRemoveClick(e){
this.props.removeClick();
e.stopPropagation();
}
onPlay(e){


//if(soundBuffer !=null){
//  var source = context.createBufferSource(); // creates a sound source
//  source.buffer = buffer;                    // tell the source which sound to play
//  source.connect(context.destination);       // connect the source to the context's destination (the speakers)
//  source.start(0);

//}else{
const URL = this.props.url;
const options = { method: 'GET' }
fetch(URL, options)
.then(response => response.arrayBuffer())
.then(response => {
  context.decodeAudioData(response, buffer => {

    var source = context.createBufferSource();
    source.buffer = buffer;
    source.connect(context.destination);
    source.start(context.currentTime);


  });
})
//}

e.stopPropagation();
}

onStop(e){
//source.stop();
e.stopPropagation();
}

render(){
return(
<div className='companyStyle' style={{ backgroundColor: this.props.bgc }}
onClick={this.onCompanyClick.bind(this)} >
<button className='btn btn-danger pull-right' onClick={this.onRemoveClick.bind(this)} >Remove</button>
<button className='btn btn-primary pull-left' onClick={this.onPlay.bind(this)} >Play</button>
<button className='btn btn-primary pull-left' onClick={this.onStop.bind(this)} >Stop</button>
<h2>{this.props.name}</h2>
</div>
)

}

}
