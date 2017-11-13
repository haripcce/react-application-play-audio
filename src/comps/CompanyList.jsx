import React from 'react'
import Company from 'comps/Company.jsx'

export default class CompanyList extends React.Component {
onCompanyClick(index){
this.props.onCompanyClick(index);
}
render(){
return(
<div className='row'>
{
this.props.companies.map(function(companyItem,index){
return <Company key={index} onCompClick={ this.onCompanyClick.bind(this,index) } name={companyItem.name} bgc={companyItem.bgc} description={companyItem.description} />
},this)

}
</div>
);

}

}
