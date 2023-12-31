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
		S: 'spirit:soul_steel_ingot',
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
	
	
	event.remove({output: 'gobber2:gobber2_foo_nether'})
	event.shaped(
	  Item.of('6x gobber2:gobber2_foo_nether'), 
	  [
	    'NGG',
		'GGG',
		'GGG'
	  ], 
	  {
		G: 'gobber2:gobber2_foo',
		N: 'gobber2:gobber2_glob_nether'
	  }
	)
	
	
	event.remove({output: 'gobber2:gobber2_rod'})
	event.shaped(
	  Item.of('gobber2:gobber2_rod'), 
	  [
	    ' G ',
		' G ',
		' G '
	  ], 
	  {
		G: 'gobber2:gobber2_ingot'
	  }
	)
	
	
	event.remove({output: 'gobber2:gobber2_rod_nether'})
	event.shaped(
	  Item.of('gobber2:gobber2_rod_nether'), 
	  [
	    ' N ',
		' N ',
		' N '
	  ], 
	  {
		N: 'gobber2:gobber2_ingot_nether'
	  }
	)
	
	
	event.remove({output: 'gobber2:gobber2_rod_end'})
	event.shaped(
	  Item.of('gobber2:gobber2_rod_end'), 
	  [
	    ' E ',
		' E ',
		' E '
	  ], 
	  {
		E: 'gobber2:gobber2_ingot_end'
	  }
	)
	
	
	event.remove({output: 'gobber2:gobber2_boots'})
	event.shaped(
	  Item.of('gobber2:gobber2_boots'), 
	  [
	    '   ',
		'G G',
		'GEG'
	  ], 
	  {
		G: 'gobber2:gobber2_ingot', 
		E: 'minecraft:emerald'
	  }
	)
	
	
	event.remove({output: 'gobber2:gobber2_boots_nether'})
	event.shaped(
	  Item.of('gobber2:gobber2_boots_nether'), 
	  [
	    '   ',
		'N N',
		'NSN'
	  ], 
	  {
		N: 'gobber2:gobber2_ingot_nether', 
		S: 'minecraft:nether_star'
	  }
	)
	
	
	event.remove({output: 'gobber2:gobber2_goo'})
	event.shaped(
	  Item.of('gobber2:gobber2_goo'), 
	  [
	    ' S ',
		'GBG',
		' E '
	  ], 
	  {
		G: 'gobber2:gobber2_glob', 
		E: 'minecraft:egg',
		B: 'minecraft:slime_ball',
		S: 'minecraft:sugar'
	  }
	)
	
	
	event.remove({output: 'gobber2:gobber2_goo_nether'})
	event.shaped(
	  Item.of('gobber2:gobber2_goo_nether'), 
	  [
	    ' S ',
		'NMN',
		' E '
	  ], 
	  {
		N: 'gobber2:gobber2_glob_nether', 
		E: 'minecraft:egg',
		M: 'minecraft:magma_cream',
		S: 'minecraft:sugar'
	  }
	)
	
	
	event.remove({output: 'gobber2:gobber2_gooey_apple'})
	event.shaped(
	  Item.of('4x gobber2:gobber2_gooey_apple'), 
	  [
	    'GAA',
		'AAA',
		'AAA'
	  ], 
	  {
		G: 'gobber2:gobber2_goo', 
		A: 'minecraft:apple'
	  }
	)
	
	
	event.remove({output: 'gobber2:gobber2_gooey_apple_nether'})
	event.shaped(
	  Item.of('4x gobber2:gobber2_gooey_apple_nether'), 
	  [
	    'NAA',
		'AAA',
		'AAA'
	  ], 
	  {
		N: 'gobber2:gobber2_goo_nether', 
		A: 'minecraft:apple'
	  }
	)
	
	
	event.remove({output: 'gobber2:gobber2_gooey_bread'})
	event.shaped(
	  Item.of('4x gobber2:gobber2_gooey_bread'), 
	  [
	    'GBB',
		'BBB',
		'BBB'
	  ], 
	  {
		G: 'gobber2:gobber2_goo', 
		B: 'minecraft:bread'
	  }
	)
	
	
	event.remove({output: 'gobber2:gobber2_gooey_bread_nether'})
	event.shaped(
	  Item.of('4x gobber2:gobber2_gooey_bread_nether'), 
	  [
	    'NBB',
		'BBB',
		'BBB'
	  ], 
	  {
		N: 'gobber2:gobber2_goo_nether', 
		B: 'minecraft:bread'
	  }
	)
	
	
	event.remove({output: 'gobber2:gobber2_gooey_beef'})
	event.shaped(
	  Item.of('4x gobber2:gobber2_gooey_beef'), 
	  [
	    'GBB',
		'BBB',
		'BBB'
	  ], 
	  {
		G: 'gobber2:gobber2_goo', 
		B: 'minecraft:cooked_beef'
	  }
	)
	
	
	event.remove({output: 'gobber2:gobber2_gooey_beef_nether'})
	event.shaped(
	  Item.of('4x gobber2:gobber2_gooey_beef_nether'), 
	  [
	    'NBB',
		'BBB',
		'BBB'
	  ], 
	  {
		N: 'gobber2:gobber2_goo_nether', 
		B: 'minecraft:cooked_beef'
	  }
	)
	
	
})