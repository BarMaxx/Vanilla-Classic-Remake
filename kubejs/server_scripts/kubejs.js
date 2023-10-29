ServerEvents.recipes(event => {


	event.remove({output: 'kubejs:vanilla_classic_remake'})
	event.shaped(
	  Item.of('kubejs:vanilla_classic_remake'), 
	  [
	    'LDT',
		'HQS',
		'UEA'
	  ], 
	  {
		D: 'undergarden:deepturf_block',
		L: 'blue_skies:lunar_grass_block',
		T: 'blue_skies:turquoise_grass_block',
		Q: 'twilightforest:snow_queen_trophy',
		H: 'deeperdarker:heart_of_the_deep',
		S: 'cataclysm:abyssal_sacrifice',
		U: 'upgradednetherite_ultimate:ultimate_upgraded_netherite_ingot',
		E: 'alexsmobs:void_worm_eye',
		A: 'gobber2:dragon_star'
	  }
	)
	
	
})