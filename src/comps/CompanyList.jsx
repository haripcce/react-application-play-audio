import React from 'react'
import Company from 'comps/Company.jsx'

export default class CompanyList extends React.Component {

onCompanyClick(index){
this.props.onCompanyClick(index);
}

onRemoveClick(index){
this.props.onRemoveClick(index);
}

render(){
return(
<div className='row'>
{
this.props.companies.map(function(companyItem,index){
return <Company key={index}
onCompClick={ this.onCompanyClick.bind(this,index) }
removeClick={this.onRemoveClick.bind(this,index)}
name={companyItem.name} bgc={companyItem.bgc} url={companyItem.url} />
},this)

}
</div>

);

}

}
