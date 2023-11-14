ServerEvents.recipes(event => {


	event.remove({output: 'gobber2:gobber2_ingot'})
	event.shaped(
	  Item.of('gobber2:gobber2_ingot'), 
	  [
	    'DGD',
		'GAG',
		'DGD'
	  ], 
	  {
		A: 'minecraft:amethyst_shard',
		G: 'gobber2:gobber2_glob',
		D: 'minecraft:diamond'
	  }
	)
	
	
	event.remove({output: 'gobber2:gobber2_ingot_nether'})
	event.shaped(
	  Item.of('gobber2:gobber2_ingot_nether'), 
	  [
	    'GNG',
		'NSN',
		'GNG'
	  ], 
	  {
		S: 'minecraft:netherite_scrap',
		N: 'gobber2:gobber2_glob_nether',
		G: 'gobber2:gobber2_ingot'
	  }
	)
	
	
	event.remove({output: 'gobber2:gobber2_ingot_end'})
	event.shaped(
	  Item.of('gobber2:gobber2_ingot_end'), 
	  [
	    'NEN',
		'ESE',
		'NEN'
	  ], 
	  {
		S: 'phantasm:stellium_ingot',
		E: 'gobber2:gobber2_glob_end',
		N: 'gobber2:gobber2_ingot_nether'
	  }
	)
	
	
	event.remove({output: 'gobber2:gobber2_foo'})
	event.shaped(
	  Item.of('gobber2:gobber2_foo'), 
	  [
	    'GCC',
		'CCC',
		'CCC'
	  ], 
	  {
		C: 'minecraft:charcoal',
		G: 'gobber2:gobber2_glob'
	  }
	)
	
	
})