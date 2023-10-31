ServerEvents.recipes(event => {


	event.remove({output: 'minecraft:smoker'})
	event.shaped(
	  Item.of('minecraft:smoker'), 
	  [
	    ' O ',
		'OFO',
		' O '
	  ], 
	  {
		F: 'minecraft:furnace',
		O: '#minecraft:logs'
	  }
	)
	
	
	event.remove({output: 'minecraft:blast_furnace'})
	event.shaped(
	  Item.of('minecraft:blast_furnace'), 
	  [
	    'III',
		'IFI',
		'SSS'
	  ], 
	  {
		F: 'minecraft:furnace',
		I: 'minecraft:iron_ingot',
		S: 'minecraft:smooth_stone'
	  }
	)
	
	
})