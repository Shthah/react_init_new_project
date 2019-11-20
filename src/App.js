import React,{Component} from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import Home from "./page/home"


class App extends Component {
	
	componentDidMount(){
		console.log(233)
		/*let path = this.props.location.pathname;
		this.checkRoute(path);
		//监听history 的地址  判断有无变化
		this.props.history.listen(()=>{
			let path = window.location.pathname;
			this.checkRoute(path);
			//
		})*/
	}
	render() {
		return (
			<React.Fragment>
				<Switch>
					<Route path="/home" component={Home}></Route>
					<Redirect exact from="/" to="/home" />
				</Switch>
			</React.Fragment>
		)
		
	}
}

export default App;
