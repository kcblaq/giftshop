import React from 'react';
import { Flex } from '../../design-system';
import Bg from '../../assets/appbarbg.svg';
import { Link, NavLink, useMatch, useResolvedPath } from 'react-router-dom';
import {
	AccountCircleOutlined,
	LocalMallOutlined,
	MenuOutlined,
} from '@mui/icons-material';
import { makeStyles } from '@mui/styles';
import { Badge } from '@mui/material';

const useStyles = makeStyles({
	hover: {
		'&:hover': {
			textDecoration: 'none',
		},
	},
});

function CustomLink({ children, to, ...props }) {
	let resolved = useResolvedPath(to);
	let match = useMatch({ path: resolved.pathname, end: true });
	const classes = useStyles();

	return (
		<div>
			<Link
				style={{
					borderBottom: match ? '2px solid #fff' : '',
					paddingBottom: match ? '5px' : '',
				}}
				className={classes.hover}
				to={to}
				{...props}>
				{children}
			</Link>
		</div>
	);
}

export default function Nav(...props) {
	return (
		<Flex
			sx={{
				justifyContent: 'space-between',
				alignItems: 'center',
				height: 50,
				backgroundColor: { sm: 'primary.main', xs: 'primary.main' },
				width: '100vw',
				backgroundImage: `url(${Bg})`,
			}}>
			<Flex
				sx={{
					justifyContent: 'space-between',
					ml: 20,
					display: { sm: 'none', xs: 'none', md: 'flex' },
				}}>
				<CustomLink to="/">Home</CustomLink>
				<CustomLink to="/gift"> Coporate Gifts</CustomLink>
				<CustomLink to="/store"> Store</CustomLink>
				<CustomLink to="/redeem"> Redeem</CustomLink>
			</Flex>
			<Flex
				sx={{
					justifyContent: 'flex-end',
					color: 'primary.light',
					mr: 6,
					display: { sm: 'none', xs: 'none', md: 'flex' },
				}}>
				<NavLink to="#">
					<AccountCircleOutlined  />
				</NavLink>
				<NavLink to="#">
					<Badge badgeContent={0} color='error' showZero >
					<LocalMallOutlined  />
					</Badge>
				</NavLink>
				<NavLink to="#">
					<MenuOutlined  />
				</NavLink>
			</Flex>
		</Flex>
	);
}
