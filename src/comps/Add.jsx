import React from 'react'
import Header from 'comps/Add.jsx'
export default class Add extends React.Component {
add(){
this.props.onAdd(this.refs.cn.value,this.refs.cd.value);
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
