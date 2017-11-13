import React from 'react'
import Header from 'comps/Add.jsx'
export default class Add extends React.Component {
render(){
return(
<div className='row'>
<div className='col-md-2'><input type='text' className='form-control' placeholder='company name' /></div>
<div className='col-md-2'><input type='text' className='form-control' placeholder='company description' /></div>

<button className='btn btn-success' >Add</button>
</div>
)

}

}
