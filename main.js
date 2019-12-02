var Assets = new ImgLoader([
    'Tree1.png',
    'Tree2.png',
    'tree3.png'
    ]);
    var Assets_mushroom = new ImgLoader([
    'Mushroom_1.png',
    'Mushroom_2.png',
    'Mushroom_3.png'
    ])
    var Assets_WaterPlant = new ImgLoader([
    'WaterPlant1.png',
    'WaterPlant2.png',
    'WaterPlant3.png'
        ])

Assets.load();
Assets_mushroom.load();
Assets_WaterPlant.load();


var level_01 = [
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2,0,2,2,2,6],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,6],
    [3,3,3,3,3,3,3,3,3,0,0,0,0,0,2,0,0,0,0,0,0,0,0,6],
    [3,3,3,3,3,3,3,3,3,0,0,0,0,0,2,0,0,0,0,0,0,0,0,6],
    [3,3,3,3,3,3,3,3,3,0,0,0,0,0,2,0,0,0,0,0,0,0,0,6],
    [3,3,3,3,3,3,3,3,3,0,0,0,0,0,2,0,0,0,0,0,0,0,0,6],
    [3,3,3,3,3,3,3,3,3,0,0,0,0,0,2,0,0,0,0,0,0,0,0,6],
    [3,3,3,3,3,3,3,3,3,0,0,0,0,0,2,0,0,0,0,0,0,0,0,6],
    [3,3,3,3,3,3,3,3,3,0,0,0,0,0,2,0,0,0,0,0,0,0,0,6],
    [4,4,4,4,4,4,4,4,4,9,5,5,5,5,5,5,5,5,5,5,5,5,5,7]
    ]
    
    var imGrass = new Image();
    imGrass.src = 'Grass.png';
    
    var imBox_1 = new Image();
    imBox_1.src = 'Field.png';
    
    var imBox_2 = new Image();
    imBox_2.src = 'FieldTilled.png'
    
    var imWater = new Image();
    imWater.src = 'Water.png'
    
    //ground images
    var imWaterGround = new Image();
    imWaterGround.src = 'WaterDown.png'
    
    var imGrassGround = new Image();
    imGrassGround.src = 'GrassDown.png'
    
    var imGrassGround2 = new Image();
    imGrassGround2.src = 'GrassDown_1.png'
    
    var imGrassGround3 = new Image();
    imGrassGround3.src = 'GrassDown_2.png'
    
    var imGrassGroungSpec = new Image();
    imGrassGroungSpec.src = 'GrassDown_spec.png'
    
    var cnv = document.getElementById('c1');
    var ctx = cnv.getContext('2d');
    
    var btIndx = 0;
    var x = 0;
    var y = 0;
    var dx = 0;
    var dy = 0;
    var CellSIZE = 32;
    var x_obj = 0;
    var y_obj = 0;
    
        function ez(){
            goal = 1000 ; 
            StartGame()
        }
        function med(){
            goal = 2000 ;
            StartGame() 
        }
        function hard(){
            goal = 3000 ;
            StartGame() 
        }

    var timer = null;
    function StartGame() {

        if (goal == 0){
        goal = Number(document.getElementById('t1').value)
        }
        document.getElementById('d1').className = 'hide';
        document.getElementById('d2').className = 'show';
        document.getElementById('d3').className = 'show';
        timer = setInterval(draw,1);
    }
    // Ilustration
    function drawGrass(x,y) {
        ctx.drawImage(imGrass,0,0,CellSIZE,CellSIZE,x+dx,y+dy,CellSIZE,CellSIZE);
    }
    
    function draw_box(x,y) {
        ctx.drawImage(imBox_1,0,0,CellSIZE,CellSIZE,x+dx,y+dy,CellSIZE,CellSIZE)
    }
    
    function draw_box_2(x,y) {
        ctx.drawImage(imBox_2,0,0,CellSIZE,CellSIZE,x+dx,y+dy,CellSIZE,CellSIZE)
    }
    
    function draw_water(x,y) {
        ctx.drawImage(imWater,0,0,CellSIZE,CellSIZE,x+dx,y+dy,CellSIZE,CellSIZE)
    }
    
    function draw_water_down(x,y) {
        ctx.drawImage(imWaterGround,0,0,CellSIZE,CellSIZE,x+dx,y+dy,CellSIZE,CellSIZE)
    }
    
    function draw_gras_down(x,y) {
        ctx.drawImage(imGrassGround,0,0,CellSIZE,CellSIZE,x+dx,y+dy,CellSIZE,CellSIZE)
    }
    
    function draw_grass_down2(x,y) {
        ctx.drawImage(imGrassGround2,0,0,CellSIZE,CellSIZE,x+dx,y+dy,CellSIZE,CellSIZE)
    }
    
    function draw_grass_down3(x,y) {
        ctx.drawImage(imGrassGround3,0,0,CellSIZE,CellSIZE,x+dx,y+dy,CellSIZE,CellSIZE)
    }
    
    function draw_grass_down_spec(x,y) {
        ctx.drawImage(imGrassGroungSpec,0,0,CellSIZE,CellSIZE,x+dx,y+dy,CellSIZE,CellSIZE)
    }
    
    
    
    //
    
    function drawBattle(L) {	
        for ( var r=0; r<L.length; r++ ) {
        for ( var c=0; c<L[r].length; c++ ) {
                var cX = x + c*CellSIZE;
                var cY = y + r*CellSIZE;
        //drawGrass( cX,cY );
        switch ( L[r][c] ) {
                case  9: draw_grass_down_spec(cX,cY);	break;
                case  8: draw_shop_bg(cX,cY);			break;
                case  7: draw_grass_down3(cX,cY);		break;
                case  6: draw_grass_down2(cX,cY);		break;
                case  5: draw_gras_down(cX,cY); 		break;
                case  4: draw_water_down(cX,cY);		break;
                case  3: draw_water(cX,cY);				break;
                case  2: draw_box_2(cX,cY);				break;
                case  0: drawGrass( cX,cY );			break;
                case  1: draw_box(cX,cY);				break;						
        }
        }
        }
    }
    function getCeLL(x,y) {
        let c = set_Xcharacter(x)
        let r = set_Ycharacter(y)
        return
    }
    
    // obj position
    function set_Xobj(c) {
        return c*CellSIZE
    }
    
    function set_Yobj(r) {
        return r*CellSIZE
    }
    
    /////////////
    
    var money = 0;
    var goal = 0;
    var bit_coin = 0;
    
    var spec_shop_tree = 10;
    var spec_shop_mushroom = 20;
    var spec_shop_WaterGrass = 30;
    
    var Garden = [];
    var tree_cnt = 10;
    var tree_cost = 1;
    var tree_that_was_plant = 0;
    var gathered_trees = 0;
    var tree_profit = 6;
    
    var Garden_mushroom = [];
    var mushroom_cnt = 0;
    var mushroom_cost = 8;
    var mushroom_that_was_plant = 0;
    var gathered_mushroom = 0;
    var Mushroom_profit = 10;
    
    var Garden_WaterGrass = [];
    var WaterGrass_cnt = 3;
    var WaterGrass_cost = 25;
    var WaterGrass_that_was_plant = 0;
    var gathered_WaterGrass = 0;
    var WaterGrass_profit = 20;
    
    function newTree(c, r) {
        //console.log(level_01[r][c]) ;
        let x_c = c * CellSIZE;
        let y_c = r * CellSIZE; 
        let z = true;
        for (let i = 0; i < Garden.length; i++) {
            if ((x_c==Garden[i].x)&&(y_c==Garden[i].y)) {
                z = false;
            }
        }
    
        for (let i = 0; i < Garden_mushroom.length; i++) {
        if ((x_c==Garden_mushroom[i].x)&&(y_c==Garden_mushroom[i].y)) {
            z = false;
            }
        }
    
        if ((z) && (tree_cnt>0) && (level_01[r][c] == 0)) {
            Garden.push( new Trees( set_Xobj(c), set_Yobj(r) ) );
            tree_cnt--;
            tree_that_was_plant++;
        } else {
            console.log('not enough')
        }
    }
    function NewMushroom(c, r) {
        let x_c = c * CellSIZE;
        let y_c = r * CellSIZE; 
        let z = true;
        for (let i = 0; i < Garden_mushroom.length; i++) {
            if ((x_c==Garden_mushroom[i].x)&&(y_c==Garden_mushroom[i].y)) {
                z = false;
            }
        }
    
        for (let i = 0; i < Garden.length; i++) {
        if ((x_c==Garden[i].x)&&(y_c==Garden[i].y)) {
            z = false;
            }
        }
    
        if ((z)&&(mushroom_cnt>0)&&(level_01[r][c] == 0)) {
            Garden_mushroom.push( new Mushrooms( set_Xobj(c), set_Yobj(r) ) );
            mushroom_that_was_plant++;
            mushroom_cnt--;
        } else {
            console.log();
        }	
    }
    
    function newWaterGrass(c, r) {
        let x_c = c * CellSIZE;
        let y_c = r * CellSIZE; 
        let z = true;
        for (let i = 0; i < Garden_WaterGrass.length; i++) {
            if ((x_c==Garden_WaterGrass[i].x)&&(y_c==Garden_WaterGrass[i].y)) {
                z = false;
            }
        }
        if ((z)&&(WaterGrass_cnt>0)&&(level_01[r][c] == 3)) {
            Garden_WaterGrass.push( new WaterPlant( set_Xobj(c), set_Yobj(r) ) );
            WaterGrass_that_was_plant++;
            WaterGrass_cnt--;
        } else {
            console.log();
        }
    }
    
    function BuyTree() {
         if (money>=tree_cost) {
         tree_cnt++;
         money-=tree_cost;
         tree_cost++;
        } 
    }
    
    function BuyMushroom() {
         if (money>=mushroom_cost) {
         mushroom_cnt++;
         money-=mushroom_cost;
         mushroom_cost++;
        } 
    }
    
    function BuyWaterGrass() {
         if (money>=WaterGrass_cost) {
         WaterGrass_cnt++;
         money-=WaterGrass_cost;
         WaterGrass_cost++;
        } 
    }
    //
    function PlantWaterGrass() {
        if (btIndx==3) {
            console.log('1')
        } else {
            btIndx = 3;
        }
    tool_phase = true;
    }
    
    function PlantMushroom() {
        if (btIndx==2) {
            console.log('1')
        } else {
            btIndx = 2;
        }
    tool_phase = true;
    }
    
    function PlantTree (){
        if (btIndx==0) {
    
            console.log('1')
        } else {
            btIndx = 0;
        }
    tool_phase = true;
    }
    
    var tool_phase = true;
    function Pickup () {
        if (btIndx == 1) {
            console.log('1')
        } else {
            btIndx = 1;
        }
    tool_phase = false;
    }
    
    var spec_shop_usage = 0;
    var increase_cof = 0.7;
    var decrease_cof = 0;
    function Increase_tree_prof() {
        if (bit_coin>=spec_shop_tree) {
            tree_profit+=(tree_profit*(increase_cof-decrease_cof));
            spec_shop_usage++;
        } else {
            console.log('Not enough cristals')
        }
        if (spec_shop_usage%2) {
            decrease_cof+=0.05
        }
    }
    
    function Increase_mushroom_prof() {
        if (bit_coin>=spec_shop_mushroom) {
            Mushroom_profit+=(Mushroom_profit*(increase_cof-decrease_cof));
            spec_shop_usage++;
        } else {
            console.log('Not enough cristals')
        }
        if (spec_shop_usage%2) {
            decrease_cof+=0.05
        }
    }
    
    function Increase_WaterGrass_prof() {
        if (bit_coin>=spec_shop_WaterGrass) {
            WaterGrass_profit+=(WaterGrass_profit*(increase_cof-decrease_cof));
            spec_shop_usage++;
        } else {
            console.log('not enough cristals')
        }
        if (spec_shop_usage%2) {
            decrease_cof+=0.05
        }
    }
    

    
    function HandClick(e) {
        let x_c = e.clientX -10 - dx;
        let y_c = e.clientY -10 - dy;
        let c = Math.floor(x_c/CellSIZE);
        let r = Math.floor(y_c/CellSIZE);
        
        switch (btIndx){
        case 0: newTree(c, r); break;
        case 1: for (let i = 0; i < Garden.length; i++) {
                if ((c == Garden[i].x/CellSIZE)&&(r == Garden[i].y/CellSIZE)) {
                if (Garden[i].phase == 2) {
                Garden[i].phase = 0
                money+=Math.floor(tree_profit);
                gathered_trees++;	
                } else {
                if (Garden[i].phase==1) {
                    Garden[i].phase = 0;
                    money+=Math.floor(tree_profit/2);
                    gathered_trees++;
                } else{
                    console.log('Ще не ')}}}}
    
                for (let i = 0; i < Garden_mushroom.length; i++){
                if ((c == Garden_mushroom[i].x/CellSIZE)&&(r == Garden_mushroom[i].y/CellSIZE)) {
                if (	Garden_mushroom[i].phase == 2) {
                        Garden_mushroom[i].phase = 0
                        money+=Math.floor(Mushroom_profit);
                        gathered_mushroom++;	
                    } else {
                if (	Garden_mushroom[i].phase==1) 
                    {	Garden_mushroom[i].phase = 0;
                        money+=Math.floor(Mushroom_profit/2);
                        gathered_mushroom++;	} 
                        else{ console.log('Ще не ') }}}}
    
                for (let i = 0; i < Garden_WaterGrass.length; i++){
                if ((c == Garden_WaterGrass[i].x/CellSIZE)&&(r == Garden_WaterGrass[i].y/CellSIZE)) {
                if (	Garden_WaterGrass[i].phase == 2) {
                        Garden_WaterGrass[i].phase = 0
                        money+=Math.floor(WaterGrass_profit);
                        gathered_WaterGrass++;	
                    } else {
                if  (	Garden_WaterGrass[i].phase==1) 
                    {	Garden_WaterGrass[i].phase = 0;
                        money+=Math.floor(WaterGrass_profit/2);
                        gathered_WaterGrass++;	} 
                        else{ console.log('Ще не ') }}}}	; break;
        case 2: NewMushroom(c, r); break;
        case 3: newWaterGrass(c, r); break;				
        }
    }
    
    
    
    function Reset() {
        Garden_WaterGrass.length = 0;
        Garden_mushroom.length = 0;
        Garden.length = 0;
        
        let all_cahs = money + gathered_trees + gathered_mushroom + gathered_WaterGrass;
        let Increase_percent = Math.floor(all_cahs*0.15);
        
        bit_coin += Increase_percent  
    
        gathered_trees = 0;
        gathered_mushroom = 0;
        gathered_WaterGrass = 0;
        money = 0 ;
    
        tree_cnt = 10;
        mushroom_cnt = 0;
        WaterGrass_cnt = 3;
    
        tree_cost += 4;
        mushroom_cost += 6;
        WaterGrass_cost += 8;	
    }
    
    function draw() {
        ctx.clearRect(0,0,cnv.height,cnv.width);
        drawBattle(level_01);
        
         for ( let gi=0; gi<Garden.length; gi++ ){
             Garden[gi].draw();
         }
    
         for ( let gi=0; gi<Garden_mushroom.length; gi++ ){
             Garden_mushroom[gi].draw();
         }
    
          for ( let gi=0; gi<Garden_WaterGrass.length; gi++ ){
             Garden_WaterGrass[gi].draw();
         }
    
     if (tool_phase == true) {
        document.getElementById('img3').className = '';
        document.getElementById('img4').className = 'hide';
    } else {
        document.getElementById('img3').className = 'hide';
        document.getElementById('img4').className = '';
    }
        ctx.font = "16px Arial";
        ctx.fillText("Apple count: "+tree_cnt,x,y+16);
        ctx.fillText("Mushroom count: "+mushroom_cnt,x,y+32);
        ctx.fillText("Water Grass count: "+WaterGrass_cnt,x,y+48)
        ctx.fillText("Money:"+money,x,y+64);
        ctx.fillText("Apple cost: "+tree_cost,x,y+80)
        ctx.fillText("Mushroom cost: "+mushroom_cost,x,y+96)
        ctx.fillText("Water Grass cost: "+WaterGrass_cost,x,y+112)
    
        if (money>=goal) {
            clearInterval(timer);
            ctx.clearRect(0,0,cnv.height,cnv.width);
            ctx.font = "16px Arial";
            ctx.fillText("You reach your goal",200,200);
            ctx.fillText("Planted trees :" +tree_that_was_plant,200,232);
            ctx.fillText("Gathered trees :" +gathered_trees,200,264);
            ctx.fillText("Planted Mushroom :" +mushroom_that_was_plant,200,296);
            ctx.fillText("Gathered Mushroom :" +gathered_mushroom,200,326)
    
        }
    }