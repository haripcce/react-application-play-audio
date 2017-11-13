import React from 'react'


export default class Company extends React.Component {
onCompanyClick(){
this.props.onCompClick();
}
onRemoveClick(e){
this.props.removeClick();
e.stopPropagation();
}
render(){
return(
<div className='companyStyle' style={{ backgroundColor: this.props.bgc }}
onClick={this.onCompanyClick.bind(this)} >
<button className='btn btn-danger pull-right' onClick={this.onRemoveClick.bind(this)} >Remove</button>
<h2>{this.props.name}</h2>
</div>
)

}

}
