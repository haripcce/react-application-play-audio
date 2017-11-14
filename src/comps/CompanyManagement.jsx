import React from 'react'
import Header from 'comps/Header.jsx'
import Add from 'comps/Add.jsx'
import CompanyList from 'comps/CompanyList.jsx'
import CompanyDetails from 'comps/CompanyDetails.jsx'


export default class CompanyManagement extends React.Component {

onHandle(name,burl){
let letters = '0123456789ABCDEF';
let color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
let newComp = { name:name, bgc:color,url:burl};
let companies = this.state.companies;
companies.push(newComp);
this.setState({companies});

}
handleCompanyClick(index){
console.log("index of company : "+index)
let selectedCompany = this.state.companies[index];
this.setState({selectedCompany})
}

handleRemoveClick(index){
console.log("remove : "+index);
let companies = this.state.companies;
companies.splice(index,1);
this.setState({companies});
}
constructor(){
super();
this.state = {
companies:[

],
selectedCompany: {}
};
}
render(){
return(
<div>
<Header title = 'TextToAudio Conversion Console'/>
<Add onAdd={this.onHandle.bind(this)} />
<br/>
<CompanyList
onCompanyClick={this.handleCompanyClick.bind(this)}
onRemoveClick={this.handleRemoveClick.bind(this)}
companies={this.state.companies} />
<CompanyDetails currentCompany={this.state.selectedCompany} />
</div>
)

}

}
