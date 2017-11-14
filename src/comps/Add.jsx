import React from 'react'
import Header from 'comps/Add.jsx'
import Request from 'superagent';
export default class Add extends React.Component {
add(){
let parent = this;
Request
.post('https://o8xga1j6q4.execute-api.ap-northeast-1.amazonaws.com/prod/TextToSpeech')
.set('Content-Type', 'application/json')
.send({ message: parent.refs.cn.value })
.end(function(err, res){
if(res!=null){
console.log(res.body.url);
parent.props.onAdd(parent.refs.cn.value,res.body.url);
}else{
console.log(err);
}

});

}

render(){
return(
<div className='row'>
<div className='col-md-2'><input ref='cn' type='text' className='form-control' placeholder='company name' /></div>

<button className='btn btn-success' onClick={this.add.bind(this)}>Add</button>
</div>
)

}

}
