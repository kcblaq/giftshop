import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/home/index';
import { ThemeProvider} from '@mui/material/styles';
import Gift from './components/gift/Gift';
import Store from './components/store/Store';
import Redeem from './components/redeem/Redeem';
import Abstract from './components/Abstract';
import Footer from './components/footer';
import theme from './design-system/theme';
import Nav from './components/nav';
import ScopedCssBaseline from '@material-ui/core/ScopedCssBaseline';


function App() {
	const [mode, setMode] = useState('dark');
console.log(mode,"MODEEEEEEEE")
	const Turn = (/** @type {string} */ mode) => {
		setMode(mode === 'light' ? 'dark' : 'light');
	};

	return (
		<ThemeProvider theme={theme}>
			<Router>
        <Nav/>
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
