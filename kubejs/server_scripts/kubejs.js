ServerEvents.recipes(event => {


	event.remove({output: 'kubejs:vanilla_classic_remake'})
	event.shaped(
	  Item.of('kubejs:vanilla_classic_remake'), 
	  [
	    'PPP',
		'PSP',
		'PPP'
	  ], 
	  {
		P: 'kubejs:piece_of_artifact',
		S: 'kubejs:singularity'
	  }
	)
	
	
	event.remove({output: 'kubejs:singularity'})
	event.shaped(
	  Item.of('kubejs:singularity'), 
	  [
	    'IEU',
		'SHS',
		'UEI'
	  ], 
	  {
		I: 'spirit:soul_steel_ingot',
		H: 'deeperdarker:heart_of_the_deep',
		S: 'gobber2:dragon_star',
		U: 'upgradednetherite_ultimate:ultimate_upgraded_netherite_ingot',
		E: 'alexsmobs:void_worm_eye'
	  }
	)
	
	
	event.remove({output: 'kubejs:piece_of_artifact'})
	event.shaped(
	  Item.of('kubejs:piece_of_artifact'), 
	  [
	    'FUT',
		'EQC',
		'GLD'
	  ], 
	  {
		Q: 'twilightforest:snow_queen_trophy',
		F: 'undergarden:frozen_deepturf_block',
		D: 'undergarden:deepturf_block',
		E: 'deeperdarker:echo_soil',
		T: 'regions_unexplored:mycotoxic_moss',
		G: 'regions_unexplored:glistering_nylium',
		C: 'regions_unexplored:cobalt_nylium',
		U: 'blue_skies:turquoise_grass_block',
		L: 'blue_skies:lunar_grass_block'
	  }
	)
	
	
})