import React from 'react'
import Header from 'comps/Header.jsx'
import Add from 'comps/Add.jsx'
import CompanyList from 'comps/CompanyList.jsx'

export default class CompanyManagement extends React.Component {
render(){
return(
<div>
<Header title = 'Company Management Console'/>
<Add/>
<br/>
<CompanyList/>
</div>
)

}

}
