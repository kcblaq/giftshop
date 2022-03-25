import React, {  useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/home/index';
import { createTheme, ThemeProvider} from '@mui/material/styles';
import Gift from './components/gift/Gift';
import Store from './components/store/Store';
import Redeem from './components/redeem/Redeem';
import Abstract from './components/Abstract';
import Footer from './components/footer';
import theme from './design-system/theme';
import Nav from './components/nav';
import { CssBaseline } from '@material-ui/core';
import MobileDrawer from 'components/nav/MobileDrawer';


function App() {
	const [mode, setMode] = useState(theme);

	let darkTheme = createTheme({
		palette: {
		  mode: "dark",
		//   background: {
		// 	default: "#121212",
		// 	paper:'#121212'
		//   },
		//  text:{
		// 	 primary:'#fff',
		// 	 secondary: 'rgba(255, 255, 255, 0.7)',
		// 	 disabled: 'rgba(255, 255, 255, 0.5)',
			
		//  },
		//  divider:'rgba(0, 0, 0, 0.12)'
		}
	  });

	//   const lightTheme = createTheme({
	// 	palette: {
	// 	  mode: "light",
	// 	  background: {
	// 		default: "hsl(0, 0%, 100%)"
	// 	  }
	// 	}
	//   });

	const Turn = ()=>{
		mode === theme ? setMode(darkTheme) : setMode(theme)
	}

	return (
		<ThemeProvider theme={mode}>
			<CssBaseline/>
			<Router>
        <Nav/>
		<MobileDrawer/>
				<Routes>
					<Route path="/store" element={<Store />} />
					<Route path="/redeem" element={<Redeem />} />
					<Route path="/gift" element={<Gift />} />
					
					<Route
						path="/"
						element={
							<Home
							toggleMode={Turn}
							/>
						}
					/>

					<Route path="abstract" element={<Abstract />} />
				</Routes>
				<Footer />
			</Router>
		</ThemeProvider>
	);
}

export default App;
