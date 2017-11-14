import React from 'react'

const context = new AudioContext()
const source = context.createBufferSource()

export default class CompanyDetails extends React.Component {
render(){
return(
<div style={{ backgroundColor: this.props.currentCompany.bgc }} >
<h1>{this.props.currentCompany.name}</h1>

<h2>{this.props.currentCompany.url}</h2>
</div>);
}
}
