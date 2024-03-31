// consts

const cellSizePx = 64;
const worldHeightPx = 800;
const worldWidthPx = 1000;

class Inventory {
    constructor(tools){
        this.tools = tools;
        this.tiles = [];
        this.selectedTool = '';
    }

    intialize(tools){
        this.tools = tools;
        this.tiles = [];
        this.selectedTool = '';
        this.show();  
    }

    show(){
        const toolsContainer = document.getElementsByClassName('tools-container')[0];
        const tilesContainer = document.getElementsByClassName('tiles-container')[0];

        toolsContainer.innerHTML = '<h2>Tools:</h2>';
        tilesContainer.innerHTML = `<h2>Tiles: ${this.tiles.length}</h2>`;

        const setSelected = function(event){
            Array.from(document.getElementsByClassName('selected')).forEach(element => {
                element.classList.remove('selected');
            });
            
            const itemClasses = event.target.classList;

            event.target.classList.add('selected');

            inventory.selectedTool = 
                itemClasses.contains('tool') ? toolTypes.filter((item)=>itemClasses.contains(item.type))[0] :
                itemClasses.contains('tile') ? tileTypes.filter((item)=>itemClasses.contains(item.type))[0] || '' : '';

        } 

        for (let i=0; i<this.tools.length; i++){
            const tool = this.tools[i];
            const toolDiv = document.createElement('div');
            toolDiv.classList.add('tool', tool.type);

            toolDiv.addEventListener('click',setSelected);

            toolsContainer.appendChild(toolDiv);
        }

        const tileDiv = document.createElement('div');
        tileDiv.classList.add('tile');
        tileDiv.addEventListener('click',setSelected);

        tilesContainer.appendChild(tileDiv);
    }

    updateLastTile(){
        const tile = document.querySelector('.tiles-container>.tile');
        const isSelected = tile.classList.contains('selected') ? true : false;
        tile.classList=[];
        tile.classList.add('tile');
        if (isSelected) {
            tile.classList.add('selected');
        }
        const tilesCnt = this.tiles.length;
        if(tilesCnt !== 0){
            tile.classList.add(this.tiles[tilesCnt-1].type);
        }else{
            this.selectedTool = '';
        }

        const title = document.querySelector('.tiles-container>h2');
        title.innerHTML = `<h2>Tiles: ${tilesCnt}</h2>`;


    }


    onSelectedMouseDown(){
        if (this.selectedTool != ''){
            const selected = document.getElementsByClassName('selected')[0];
            selected.classList.toggle('clicked');
        }
    }

    onSelectedMouseUp(){
        if(this.selectedTool != ''){
            const selected = document.getElementsByClassName('selected')[0];
            selected.classList.toggle('clicked');
        }
    }

}



// const interactions = ['cutting', 'digging', 'mining'];
// const tileTypes = ['sky', 'snow', 'tree', 'stone', ]
// const toolTypes = ['axe', 'pickaxe', 'shovel']



// classes

class Tile {
    constructor(type, interactions){
        this.type = type;
        this.interactions = interactions;
    }

    getTile(){
        // getting tile to an inventory
    }

    putTile(){
        // put tile into the world
    }
}


class Tool {
    constructor(type, interaction){
        this.type = type;
        this.interaction = interaction;
    }

    activateTool(){
        // choose tool in inventory
    }

    useTool(tile){
        this.interaction.apply(tile);
    }
}


class Interaction {
    constructor(type){
        this.type = type;
    }

    apply(tile){
        console.log(`you used ${this.type} to ${tile.type}.`);
        inventory.tiles.push(tile);
        inventory.updateLastTile();
    }
}

class Cut extends Interaction{
    constructor(type){
        super(type);
    }
}

class Dig extends Interaction{
    constructor(type){
        super(type);
    }
}

class Mine extends Interaction{
    constructor(type){
        super(type);
    }
}

class Burn extends Interaction{
    constructor(type){
        super(type);
    }
}


class World {
    constructor(){
        this.content = [];
    }

    generate(){

        this.content = [];

        let cellsInHeight = Math.ceil(worldHeightPx/cellSizePx);

        let cellsInWidth = Math.ceil(worldWidthPx/cellSizePx);

        for (let i = 0; i < cellsInHeight; i++){
            this.content.push([]);
            for(let j = 0; j < cellsInWidth; j++){
                let cell = document.createElement('div');
                let random = Math.floor(Math.random() * tileTypes.length);
                let className = tileTypes[random].type
                cell.classList.add('tile');
                cell.classList.add(className);

                cell.addEventListener('mousedown',()=>{
                    inventory.onSelectedMouseDown();
                })

                cell.addEventListener('mouseup',()=>{
                    inventory.onSelectedMouseUp();
                })

                cell.addEventListener('click',function(event){
                    let selectedTileClass = event.target.classList[1];

                    
                    const tool = inventory.selectedTool;
                    const toolType = tool == '' ? '' : inventory.selectedTool.constructor.name;
                    
                    if(toolType === 'Tile' && selectedTileClass === 'sky'){
                            inventory.tiles.pop();
                            event.target.classList.replace('sky',tool.type);
                            inventory.updateLastTile();
                        }else if(toolType === 'Tool' && selectedTileClass !== 'sky'){
                            const tile = tileTypes.filter((item)=> item.type==selectedTileClass)[0];
                            if(tile.interactions.includes(tool.interaction)){
                                tool.useTool(tile);
                                event.target.classList.replace(selectedTileClass,'sky');
                            }
                        }

                    })

                this.content[i].push(cell);
            }
        }

        // const worldContainer = document.getElementsByClassName('world-container')[0];
        // worldContainer.appendChild(this.content);


    }

    show(){
        const worldContainer = document.getElementsByClassName('world-container')[0];
        worldContainer.innerHTML = '';
        for (let i = 0; i < this.content.length; i++){
            const lineDiv = document.createElement('div');
            lineDiv.classList.add('world-line');
            for(let j = 0; j < this.content[i].length; j++){
                let cell = this.content[i][j];
                lineDiv.appendChild(cell);
            }
            worldContainer.appendChild(lineDiv);
        }
    }

    applyStyle(style){}
}




const cutting = new Cut ('cutting');
const digging = new Dig ('digging');
const mining = new Mine('mining');
const burning = new Burn('burning')


const shovel = new Tool ('showel', digging, -1);
const axe = new Tool ('axe', cutting, -1);
const pickaxe = new Tool ('pickaxe', mining, -1);
const match = new Tool ('match', burning, 10);


const treeTrunk = new Tile('tree-trunk', [cutting, burning]);
const treeLeafage = new Tile('tree-leafage', [cutting, burning]);
const stone = new Tile('stone', [mining]);
const coal = new Tile('coal', [mining, burning])
const sky = new Tile('sky');
const dirt = new Tile('dirt', [digging]);

const tileTypes = [treeTrunk, treeLeafage, stone, coal, sky, dirt];
const toolTypes = [shovel, axe, pickaxe, match];


const inventory = new Inventory(toolTypes);
inventory.show();

const world = new World();
world.generate();
world.show();


const btnGenerate = document.getElementsByClassName('btn-generate-world')[0];
btnGenerate.addEventListener('click',()=>{
    world.generate();
    world.show();
    inventory.intialize(toolTypes);

})