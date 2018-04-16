import React from 'react';
import './InfoBox.css';

const InfoBox = () => {
	return (
		<div id='container' className='flex justify-center'>
			<div id='infobox' className='tc ph5 pv2'>
				<p className='f4'>
					Starwars directory uses <a className='no-underline' href='https://swapi.co/'>SWAPI</a> to bring you information about the Starwars universe!
					You will be able to view information about every planet, spaceship, vehicle, person,
					film, and species. All seven films are supported!
				</p>			
			</div>
		</div>
	);
}

export default InfoBox;

/*<p className='ba tc'>
				Starwars directory uses SWAPI to bring you information about the Starwars universe!
				You will be able to view information about every planet, spaceship, vehicle, person,
				film, and species. All seven films are supported!
			</p>*/