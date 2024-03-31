# minecraft game

Game state

- world
--- size
--- list of cells (two-dimentional array)
--- which tile is in a cell
--- visible world area

const worldState = [ // world of NxM size
    [cellObj11, cellObj12, ... cellObj1N],
    [cellObj21, cellObj22, ... cellObj2N],
    ...
    [cellObj1M, cellObj2M, ... cellObjNM]
]

- Iinventory
--- stack of collected tiles (including the last one)
--- list of tools
--- what is active (which tile or tool)

const inventory = {
    tiles: [tile1, tile2, ... tileX],
    tools: [tool1, tool2, ... toolY],
    active: this.tiles[k]
}


- user's info (maybe)
-- name, number of points



Panel state

Interactions with the world

let iteractions = {
    id: 1,
    name: 'cut',
    scopeCells: 1,
    influenceType: 1, // 1 - collect, 2 - destroy - functions.
}

- Tiles
-- type
-- picture (background/color)

let tileExample = {
    id: 1,
    tyleType: 'tree'
}


- Tools
-- axe
-- pickaxe
-- shovel

let toolExample = {
    id: 0,
    name: axe,
    iteractons: ['cut']
}

- iteractions
-- type

---- which type of tale it could iterate with


- logic
-- rule's how tiles and tools can interact
-- generation world rules

- actions
-- reset world's state (regenerate the world)
-- choose a tool
--- 
-- choose a tile in the inventory



worldSettings

worldLenght = 0,
worldWidth = 0,
WorldState =[[cells]] // array worldLenght * worldWidth
cellSize = const. 

worldSkin = {} // class world skins, sets visual for tiles, tools, world background, users'inventory background

generate()




Tools
name = '',
type = {toolType},
remain = 0,




toolType = {
    name = '',
    availableInteractions = [{
        interaction: interaction,
        power: 1,
    }],
}



Tiles

name = '',
availableInteractions = []



const extendedDirections = ['up', 'down', 'left', 'right', 'all']

Interactions 
    name = ''

apply (toolType, tileType)



const actionTypes = ['cutting', 'digging', 'bombing', 'mining'];


