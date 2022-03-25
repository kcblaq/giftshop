import React from 'react';
import { Flex } from '../../design-system/Flex';
import { Typography, Switch, Grid, TextField, Link } from '@mui/material';
import Bg from '../../assets/bg.svg';
import Actionfunc from './Actionfunc';
import Card from '../../assets/card.png';
import mCard from '../../assets/mcard.png';
import { LightModeRounded, NightlightRoundRounded } from '@mui/icons-material';
import { makeStyles } from '@material-ui/core';
import Logo from '../../assets/Logo.png';
import Redeem from '../../assets/redeem1.png';
import shop from '../../assets/shop1.png';
import echo from '../../assets/echo1.png';
import CardComponent from './CardComponent';
import Instagram from '../../assets/Instagram1.png';
import Facebook from '../../assets/Facebook.png';
import Twitter from '../../assets/Twitter.png';
import logo1 from '../../assets/logo1.png';
import MyButton from 'design-system/MyButton';

const useStyles = makeStyles((theme) => ({
	img: {
		width: '100%',
		[theme.breakpoints.up('md')]: {
			display: 'flex',
		},
		[theme.breakpoints.down('md')]: {
			display: 'none',
		},
	},
	mimg: {
		width: '100%',
		[theme.breakpoints.down('md')]: {
			display: 'flex',
		},
		[theme.breakpoints.up('md')]: {
			display: 'none',
		},
	},
	link: {
		cursor: 'pointer',
		textDecoration: 'none',
	},
	logo: {
		position: 'absolute',
		left: 500,
		right: 50,
		top: 200,
	},
}));

export default function Index(props) {
	const classes = useStyles();
	let texts = (
		<Typography variant="h3" sx={{ position: 'relative' }}>
			{' '}
			Welcome to Giftshop
			<Typography
				sx={{ display: { sm: 'none', xs: 'none', md: 'flex' },position:'absolute', bottom:70,left:440, right:150 }}
				>
				{' '}
				<sup>
					{' '}
					<img src={logo1} alt="logo" />{' '}
				</sup>{' '}
			</Typography>
			<br />
			Africa{' '}
		</Typography>
	);

	return (
		<>
			<Flex
				sx={{
					flexDirection: 'column',
					alignItems: 'center',
					background: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${Bg})`,
					backgroundSize: 'cover',
					backgroundRepeat: 'no-repeat',
					backgroundPosition: 'center center',
					minHeight: '100vh',
					color: 'primary.light',
					padding: { xs: 2, sm: 2, md: 4, lg: 4 },
				}}>
				<Flex sx={{ alignItems: 'center', justifyContent: 'flex-end' }}>
					<LightModeRounded />
					<Switch onChange={props.toggleMode} />
					<NightlightRoundRounded sx={{ transform: 'rotate(-40deg)' }} />
				</Flex>

				<Actionfunc
					description="Africa’s most innovative loyalty solutions provider."
					maintext={texts}
					bg={'primary.light'}
					width={250}
					color={'#101010'}
					text="Generate a Giftcard"
				/>
				<Flex>
					<Grid container spacing={2}>
						<Grid sx={{ width: '100%', marginTop: 6 }}>
							<img className={classes.img} src={Card} alt="card display" />
							<img className={classes.mimg} src={mCard} alt="card display" />
						</Grid>
					</Grid>
				</Flex>
				<Flex sx={{ mb: 10 }}>
					<Actionfunc
						description="Giftshop Africa helps brands with loyalty program as well as help individuals get gift ideas for their loved ones."
						maintext="One card, redeemable across all platforms"
						bg={'primary.light'}
						width={250}
						color={'#101010'}
						text="Generate a Giftcard"
					/>
				</Flex>
			</Flex>
			<Flex sx={{ flexDirection: 'column' }}>
				<Flex
					sx={{
						display: {
							sm: 'none',
							xs: 'none',
							md: 'flex',
							justifyContent: 'center',
						},
					}}>
					<img src={Logo} alt=" Giftshop Logo" />
				</Flex>
				<Flex
					sx={{
						flexDirection: { sm: 'column', md: 'row', xs: 'column' },
						justifyContent: 'space-around',
						alignItems: 'center',
					}}>
					<Typography sx={{ color: 'primary.dark' }}>
						{' '}
						Redeem{' '}
						<span style={{ color: 'red', fontSize: 57, borderRadius: '50%' }}>
							.
						</span>{' '}
					</Typography>
					<Typography sx={{ color: 'primary.dark' }}>
						{' '}
						Shop
						<span style={{ color: 'red', fontSize: 57, borderRadius: '50%' }}>
							.
						</span>{' '}
					</Typography>
					<Typography sx={{ color: 'primary.dark' }}>
						{' '}
						Echo{' '}
						<span style={{ color: 'red', fontSize: 57, borderRadius: '50%' }}>
							.
						</span>{' '}
					</Typography>
				</Flex>
				<Flex
					sx={{
						flexDirection: 'row',
						overflowX: 'scroll',
						paddingLeft: 2,
						justifyContent: 'space-around',
						alignItems: 'center',
					}}>
					<img src={Redeem} alt="redeem" />
					<img src={shop} alt="shop" />
					<img src={echo} alt="echo" />
				</Flex>
				<Flex sx={{ flexDirection: 'row', overflowX: 'scroll', py: 6 }}>
					<Typography sx={{ textAlign: 'center', minWidth: 300 }}>
						Giftshop Africa helps brands with loyalty program as well as help
						individuals get gift ideas for their loved ones.
					</Typography>
					<Typography sx={{ textAlign: 'center', minWidth: 300 }}>
						Giftshop Africa helps brands with loyalty program as well as help
						individuals get gift ideas for their loved ones.
					</Typography>
					<Typography sx={{ textAlign: 'center', minWidth: 300 }}>
						Giftshop Africa helps brands with loyalty program as well as help
						individuals get gift ideas for their loved ones.
					</Typography>
				</Flex>
			</Flex>

			<Flex sx={{ backgroundColor: '#F3F3F3', py: 6, flexDirection: 'column' }}>
				<Flex>
					<Actionfunc
						description="Shop exclusives with only the best bargains, just for you."
						maintext="Shop your favourites with custom discounts"
						bg={'primary.dark'}
						width={250}
						color={'primary.light'}
						text="Explore Giftshop"
					/>
				</Flex>
				<CardComponent />
			</Flex>
			<Flex
				sx={{
					flexDirection: 'column',
					alignItems: 'center',
					my: 4,
					display: { sm: 'flex', xs: 'flex', md: 'none', lg: 'none' },
				}}>
				<MyButton
					bg="primary.dark"
					color="primary.light"
					width={200}
					text="Explore Giftshop"
				/>
				<Typography sx={{ my: 4 }}>
					{' '}
					*Discounts are irredeemable if offer closes.
				</Typography>
			</Flex>

			<Flex
				sx={{
					flexDirection: {
						xs: 'column-reverse',
						sm: 'column-reverse',
						md: 'row',
						lg: 'row',
					},
					p: 2,
					justifyContent: 'space-between',
					alignItems: 'space-around',
					minHeight: 200,
					flexWrap: 'nowrap',
				}}>
				<Flex sx={{ flexDirection: 'column' }}>
					<Flex
						sx={{
							flexDirection: 'row',
							justifyContent: 'flex-start',
							alignItems: 'center',
							color: 'primary.main',
						}}>
						<Typography>Follow us | </Typography>

						<img
							src={Instagram}
							alt="Instagram"
							className={classes.link}
							onClick={() => window.open('https://www.instagram.com', '_blank')}
						/>
						<img
							src={Facebook}
							alt="Facebook"
							className={classes.link}
							onClick={() => window.open('https://www.facebook.com', '_blank')}
						/>
						<img
							src={Twitter}
							alt="Twitter"
							className={classes.link}
							onClick={() => window.open('https://www.twitter.com', '_blank')}
						/>
					</Flex>
					<Flex sx={{ mt: 2 }}>
						<Flex sx={{ flexDirection: 'column' }}>
							<Link to="#" className={classes.link}>
								{' '}
								About Us
							</Link>
							<Link to="#" className={classes.link}>
								{' '}
								Contact Us
							</Link>
							<Link to="#" className={classes.link}>
								{' '}
								Delivery Information{' '}
							</Link>
							<Link to="#" className={classes.link}>
								{' '}
								FAQs
							</Link>
						</Flex>
						<Flex sx={{ flexDirection: 'column' }}>
							<Link to="#" className={classes.link}>
								{' '}
								Princing plans
							</Link>
							<Link to="#" className={classes.link}>
								{' '}
								Privacy Policy
							</Link>
							<Link to="#" className={classes.link}>
								{' '}
								Terms of service
							</Link>
							<Link to="#" className={classes.link}>
								{' '}
								Stores
							</Link>
						</Flex>
					</Flex>
				</Flex>

				<Flex sx={{ justifyContent: 'flex-end', flexDirection: 'column' }}>
					<Typography
						sx={{ fontWeight: 600, fontSize: 16, color: 'primary.dark' }}>
						{' '}
						Join our exclusive mailing list and get first access to new
						releases.
					</Typography>
					<Flex
						sx={{
							justifyContent: 'space-around',
							py: 2,
							alignItems: 'center',
						}}>
						<TextField
							variant="outlined"
							placeholder="Your email..."
							fullWidth
							size="medium"
						/>
						<MyButton
							color="primary.light"
							bg="primary.dark"
							width={142}
							text="Join"
						/>
					</Flex>
				</Flex>
			</Flex>
		</>
	);
}
