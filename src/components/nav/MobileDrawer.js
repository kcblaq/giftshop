import React from 'react';
import { Drawer, Divider, IconButton } from '@material-ui/core';
import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import PermContactCalendarIcon from '@material-ui/icons/PermContactCalendar';
import ReorderIcon from '@material-ui/icons/Reorder';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { Link } from 'react-router-dom';
import { Flex } from 'design-system';

const styles = {
	sideNav: {
		marginTop: '-60px',
		zIndex: 3,
		marginLeft: '0px',
		position: 'fixed',
		// display:{xs:'flex',sm:'flex',md:'none',lg:'none'}
	},
	link: {
		color: 'black',
		textDecoration: 'none',
	},
};

export default class MobileDrawer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isDrawerOpened: false,
		};
	}
	toggleDrawerStatus = () => {
		this.setState({
			isDrawerOpened: true,
		});
	};
	closeDrawer = () => {
		this.setState({
			isDrawerOpened: false,
		});
	};
	render() {
		const { isDrawerOpened } = this.state;
		return (
			<div>
				<div style={styles.sideNav}>
					<Flex sx={{display:{xs:'flex',sm:'flex',md:'none',lg:'none', color:'primary.light'}}}>
					<IconButton onClick={this.toggleDrawerStatus}>
						{!isDrawerOpened ? <ReorderIcon /> : null}
					</IconButton>
					</Flex>
				</div>
				<Divider />
				<Drawer
					variant="temporary"
					open={isDrawerOpened}
					onClose={this.closeDrawer}>
					<Link to="/gift" style={styles.link}>
						<List>
							<ListItem button key="Coporate Gifts">
								<ListItemIcon>
									<AccountCircleIcon />
								</ListItemIcon>
								<ListItemText primary="Coporate Gift" />
							</ListItem>
						</List>
					</Link>
					<Link to="/store" style={styles.link}>
						<List>
							<ListItem button key="Stores">
								<ListItemIcon>
									<PermContactCalendarIcon />
								</ListItemIcon>
								<ListItemText primary="Stores" />
							</ListItem>
						</List>
					</Link>
				</Drawer>
			</div>
		);
	}
}
