ServerEvents.recipes(event => {


	event.remove({output: 'galosphere:combustion_table'})
	event.shaped(
	  Item.of('galosphere:combustion_table'), 
	  [
	    'SS ',
		'PP ',
		'PP '
	  ], 
	  {
		P: '#minecraft:planks',
		S: 'galosphere:silver_panel'
	  }
	)
	
	
})