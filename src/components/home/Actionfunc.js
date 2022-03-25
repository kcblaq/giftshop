import { Typography, Button } from '@mui/material';
import { Flex } from 'design-system';
import MyButton from 'design-system/MyButton';
import React from 'react';

export default function Actionfunc(props) {
	const { maintext, description, bg,color,width, text } = props;
	return (
		<Flex
			sx={{
				flexDirection: 'column',
				justifyContent: 'center',
				alignItems: 'center',
                mt:8
			}}>
			<Typography
            variant='h3'
				sx={{
					color: 'primary.white',
					textSize: 49,
					fontWeight: 600,
					textAlign: 'center',
                    maxWidth: 650,
					fontFamily:'IBM Plex Serif'

				}}>
				{maintext}
			</Typography>
			<Typography
			textAlign={'center'}
				sx={{
                    mt:8,
					mb:4,
					fontFamily: 'Noto Sans',
					fontWeight: 400,
					fontSize: 16,
					textAlight:'center',
					maxWidth: 650,
					
				}}>
				{description}
			</Typography>
            <MyButton bg={bg} color={color} width={width} text={text} /> 
		</Flex>
	);
}
