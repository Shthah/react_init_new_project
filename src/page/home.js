/**Created by wyq on 2019/11/19*/
import React,{Component} from "react"

class Home extends Component{
	constructor(props){
		super(props);
	}
	state={
		data:"哒哒哒阿达"
	}
	render(){
		return(
			<div>
				<div>{this.state.data}</div>
			</div>
		)
	}
}

export default Home
