import React from 'react'
import Request from 'superagent';
import Header from 'comps/Add.jsx'
var fileDownload = require('react-file-download')

export default class Add extends React.Component {
add(){
Request
.post('https://o8xga1j6q4.execute-api.ap-northeast-1.amazonaws.com/prod/TextToSpeech')
.set('Content-Type', 'application/json')
.send({ message: "hi hari" })
.end(function(err, res){
console.log(res.text);
});



//this.props.onAdd(this.refs.cn.value,this.refs.cd.value);
}

render(){
return(
<div className='row'>
<div className='col-md-2'><input ref='cn' type='text' className='form-control' placeholder='company name' /></div>
<div className='col-md-2'><input ref='cd' type='text' className='form-control' placeholder='company description' /></div>

<button className='btn btn-success' onClick={this.add.bind(this)}>Add</button>
</div>
)

}

}
