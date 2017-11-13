import React from 'react'
import Company from 'comps/Company.jsx'

export default class CompanyList extends React.Component {
render(){
return(
<div>
<Company name='Google' bgc='red' />
<Company name='Yahoo' bgc='#3371FF' />
<Company name='Facebook' bgc='#FF33D4' />
</div>
);

}

}
