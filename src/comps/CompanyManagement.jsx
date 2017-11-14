import React from 'react'
import Header from 'comps/Header.jsx'
import Add from 'comps/Add.jsx'
import MyComponentWithSound from 'comps/MyComponentWithSound.jsx'
import CompanyList from 'comps/CompanyList.jsx'
import CompanyDetails from 'comps/CompanyDetails.jsx'

export default class CompanyManagement extends React.Component {

onHandle(name,desc){
let letters = '0123456789ABCDEF';
let color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
let newComp = { name:name, desc:desc, bgc:color};
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
{name:'Google', bgc:'blue',desc:'web search'},
{name:'Yahoo', bgc:'green',desc:'about to die'},
{name:'Facebook', bgc:'pink',desc:'social networking site'}
],
selectedCompany: {}
};
}
render(){
return(
<div>
<Header title = 'Company Management Console'/>
<Add/>
<br/>
<MyComponentWithSound />

</div>
)

}

}
