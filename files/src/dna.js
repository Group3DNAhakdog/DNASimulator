var moleculeSize = 2
var movement = 1

var baseCoding = [
    ["A", "T"],
    ["G", "C"],
    ["T", "A"],
    ["A", "T"],
    ["C", "G"],
    ["G", "C"],
    ["T", "A"],
    ["A", "T"],
    ["C", "G"],
    ["T", "A"]
]
baseCoding.reverse() 

console.log(baseCoding)


var colorCoding = {
    "A": rgbToHex(0.4, 1, 0.4),     // Green 
    "T": rgbToHex(0.6, 0.1, 0.9),   // Purple 
    "G": rgbToHex(0.4, 0.98, 1) ,   // Blue
    "C": rgbToHex(0.9, 0.1, 0.1)    // Red 
}

// Adenine and Guanine (9 carbons)
// thymine and cytosine (6 carbons)

// Variable things // Variable things// Variable things// Variable things// Variable things// Variable things// Variable things// Variable things// Variable things// Variable things// Variable things// Variable things// Variable things// Variable things// Variable things// Variable things// Variable things// Variable things// Variable things// Variable things
// Variable things// Variable things// Variable things// Variable things// Variable things// Variable things// Variable things// Variable things// Variable things// Variable things// Variable things// Variable things// Variable things// Variable things// Variable things// Variable things// Variable things// Variable things// Variable things// Variable things// Variable things// Variable things// Variable things// Variable thingsv
// Variable things// Variable things// Variable things// Variable things// Variable things// Variable things// Variable things// Variable things// Variable things// Variable things// Variable things// Variable things// Variable things// Variable things// Variable things// Variable things// Variable things// Variable things// Variable things// Variable things// Variable things// Variable things// Variable things// Variable things// Variable things

var canNowTurn = false
var isPlaying = true
var transparent = false

// this contains the collection of meshes/geometries
var leftBasesMolecule = []
var rightBasesMolecule = []
var leftSugarMolecule = []
var rightSugarMolecule = []
var leftPoshphoMolecule = []
var rightPoshphoMolecule = []
var leftBaseConnectors = [];
var rightBaseConnectors = [];
var texts = []
var bonds = [] // or connectors (not hydrogenBonds)

var lastAdded;
var hasSelected = false

// groupings
var NitrogenousBases = [];
var hydrogenBondsAll = []
var BasePairings = []
var PentoseSugarGroup = []
var PhosphateGroup = []
var PhosphodiesterGroup = []
var hydrogenBonds = []

var ThymineGroup = []
var AdenineGroup = []
var GuanineGroup = []
var CytosineGroup = []

// HTML THINGS // HTML THINGS // HTML THINGS // HTML THINGS // HTML THINGS // HTML THINGS // HTML THINGS // HTML THINGS // HTML THINGS // HTML THINGS // HTML THINGS // HTML THINGS // HTML THINGS // HTML THINGS // HTML THINGS // HTML THINGS // HTML THINGS // HTML THINGS // HTML THINGS // HTML THINGS // HTML THINGS // HTML THINGS // HTML THINGS // HTML THINGS // HTML THINGS // HTML THINGS // HTML THINGS 
// HTML THINGS // HTML THINGS // HTML THINGS // HTML THINGS // HTML THINGS // HTML THINGS // HTML THINGS // HTML THINGS // HTML THINGS // HTML THINGS // HTML THINGS // HTML THINGS // HTML THINGS // HTML THINGS // HTML THINGS // HTML THINGS // HTML THINGS // HTML THINGS // HTML THINGS // HTML THINGS // HTML THINGS // HTML THINGS // HTML THINGS // HTML THINGS // HTML THINGS // HTML THINGS // HTML THINGS // HTML THINGS // HTML THINGS // HTML THINGS // HTML THINGS // HTML THINGS // HTML THINGS 
// HTML THINGS // HTML THINGS // HTML THINGS // HTML THINGS // HTML THINGS // HTML THINGS // HTML THINGS // HTML THINGS // HTML THINGS // HTML THINGS // HTML THINGS // HTML THINGS // HTML THINGS // HTML THINGS // HTML THINGS // HTML THINGS // HTML THINGS // HTML THINGS // HTML THINGS // HTML THINGS // HTML THINGS // HTML THINGS // HTML THINGS // HTML THINGS // HTML THINGS // HTML THINGS // HTML THINGS // HTML THINGS // HTML THINGS // HTML THINGS // HTML THINGS // HTML THINGS // HTML THINGS // HTML THINGS // HTML THINGS // HTML THINGS 

var html_Indicator = document.getElementById("indicatorId")
var html_DNAContainer = document.getElementById("DNAContainerId")

// miscellanious function // miscellanious function // miscellanious function // miscellanious function // miscellanious function // miscellanious function // miscellanious function // miscellanious function // miscellanious function // miscellanious function // miscellanious function // miscellanious function // miscellanious function // miscellanious function // miscellanious function 
// miscellanious function // miscellanious function // miscellanious function // miscellanious function // miscellanious function // miscellanious function // miscellanious function // miscellanious function // miscellanious function // miscellanious function // miscellanious function // miscellanious function // miscellanious function // miscellanious function // miscellanious function // miscellanious function // miscellanious function // miscellanious function // miscellanious function 
// miscellanious function // miscellanious function // miscellanious function // miscellanious function // miscellanious function // miscellanious function // miscellanious function // miscellanious function // miscellanious function // miscellanious function // miscellanious function // miscellanious function // miscellanious function // miscellanious function // miscellanious function 

function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
    return "#" + (1 << 24 | (r*255) << 16 | (g*255) << 8 | (b*255)).toString(16).slice(1);
}

// SCENE // SCENE // SCENE // SCENE // SCENE // SCENE // SCENE // SCENE // SCENE // SCENE // SCENE // SCENE // SCENE // SCENE // SCENE // SCENE // SCENE // SCENE // SCENE // SCENE // SCENE // SCENE // SCENE // SCENE // SCENE v
// SCENE // SCENE // SCENE // SCENE // SCENE // SCENE // SCENE // SCENE // SCENE // SCENE // SCENE // SCENE // SCENE // SCENE // SCENE // SCENE // SCENE // SCENE // SCENE // SCENE // SCENE // SCENE // SCENE // SCENE // SCENE // SCENE // SCENE // SCENE // SCENE // SCENE // SCENE 
// SCENE // SCENE // SCENE // SCENE // SCENE // SCENE // SCENE // SCENE // SCENE // SCENE // SCENE // SCENE // SCENE // SCENE // SCENE // SCENE // SCENE // SCENE // SCENE // SCENE // SCENE // SCENE // SCENE // SCENE // SCENE // SCENE // SCENE // SCENE // SCENE // SCENE // SCENE // SCENE 

// Set up the scene, camera, and renderer
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, html_DNAContainer.clientWidth / html_DNAContainer.clientHeight, 0.1, 1000);
var renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(html_DNAContainer.clientWidth, html_DNAContainer.clientHeight);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap; // softer shadows
html_DNAContainer.appendChild(renderer.domElement);

// Create a ground plane to receive shadows
var planeGeometry = new THREE.PlaneGeometry(10, 10);
var planeMaterial = new THREE.ShadowMaterial({ opacity: 0.5 });
var plane = new THREE.Mesh(planeGeometry, planeMaterial);
plane.receiveShadow = true;
plane.rotation.x = -Math.PI / 2;
plane.position.y = -2;
scene.add(plane);

// Add ambient light
var ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);

// Add directional light for shadows
var directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
directionalLight.position.set(5, 10, 7);
directionalLight.castShadow = true;
scene.add(directionalLight);

// DNA model
var DNA = new THREE.Group();
var model;
var DNAPair;
var loader = new THREE.ObjectLoader();
scene.add(DNA)

// FUNCTIONS // FUNCTIONS // FUNCTIONS // FUNCTIONS // FUNCTIONS // FUNCTIONS // FUNCTIONS // FUNCTIONS // FUNCTIONS // FUNCTIONS // FUNCTIONS // FUNCTIONS // FUNCTIONS // FUNCTIONS // FUNCTIONS // FUNCTIONS // FUNCTIONS // FUNCTIONS // FUNCTIONS // FUNCTIONS // FUNCTIONS // FUNCTIONS // FUNCTIONS // FUNCTIONS // FUNCTIONS // FUNCTIONS // FUNCTIONS // FUNCTIONS // FUNCTIONS // FUNCTIONS // FUNCTIONS // FUNCTIONS V
// FUNCTIONS // FUNCTIONS // FUNCTIONS // FUNCTIONS // FUNCTIONS // FUNCTIONS // FUNCTIONS // FUNCTIONS // FUNCTIONS // FUNCTIONS // FUNCTIONS // FUNCTIONS // FUNCTIONS // FUNCTIONS // FUNCTIONS // FUNCTIONS // FUNCTIONS // FUNCTIONS // FUNCTIONS // FUNCTIONS // FUNCTIONS // FUNCTIONS // FUNCTIONS // FUNCTIONS // FUNCTIONS // FUNCTIONS // FUNCTIONS // FUNCTIONS // FUNCTIONS // FUNCTIONS // FUNCTIONS 
// FUNCTIONS // FUNCTIONS // FUNCTIONS // FUNCTIONS // FUNCTIONS // FUNCTIONS // FUNCTIONS // FUNCTIONS // FUNCTIONS // FUNCTIONS // FUNCTIONS // FUNCTIONS // FUNCTIONS // FUNCTIONS // FUNCTIONS // FUNCTIONS // FUNCTIONS // FUNCTIONS // FUNCTIONS // FUNCTIONS // FUNCTIONS // FUNCTIONS // FUNCTIONS // FUNCTIONS // FUNCTIONS // FUNCTIONS // FUNCTIONS // FUNCTIONS // FUNCTIONS // FUNCTIONS // FUNCTIONS // FUNCTIONS // FUNCTIONS // FUNCTIONS // FUNCTIONS // FUNCTIONS 

function printText(newName, string, selectedcolor, position, parent){
    var loader = new THREE.FontLoader();
    loader.load('files/obj/font.json', function (font) {
        var textGeometry = new THREE.TextGeometry(string, {
            font: font,
            size: 5,
            height: 0.2,
            curveSegments: 12,
            bevelEnabled: true,
            bevelThickness: 0.03,
            bevelSize: 0.02,
            bevelOffset: 0,
            bevelSegments: 5
        });

        var textMaterial = new THREE.MeshBasicMaterial({ color: selectedcolor });
        var textMesh = new THREE.Mesh(textGeometry, textMaterial);
        textMesh.name = newName;
        textMesh.receiveShadow = true;

        parent.add(textMesh);

        textMesh.position.set(position[0], position[1], position[2]);
        texts.push(textMesh)

        console.log("ADDEDD", textMesh)
    });
}

function modifyCylinderScale(group, scale) {
    // Traverse the group to find the cylinder
    group.traverse(function(child) {
        if (child.isMesh && child.geometry.type === 'CylinderGeometry') {
            // Modify the scale of the cylinder
            var oldY = child.scale.y 
            child.scale.set(scale, oldY, scale);

            if (!child.name.includes("hydrogenBond")){
                bonds.push(child)
            }
        }
    });
}

function modifyMolecule(moleculeContainer, radius, color = 0){
    moleculeContainer.children.forEach(function(child) {
        child.material = child.material.clone();
        child.scale.x = radius
        child.scale.y = radius
        child.scale.z = radius
        if (color != 0){
            child.material.color.set(color)
        }
    })
}

function rotateText(speed){
    for (var i in texts){
        texts[i].rotation.y += speed
    }
}

function assignATCG(child, code){
    switch(code){
        case "T":
            ThymineGroup.push(child)
        break;
        case "A":
            AdenineGroup.push(child)
        break;
        case "G":
            GuanineGroup.push(child)
        break;
        case "C":
            CytosineGroup.push(child)
        break;
    }
}

// FUNCTIONS THAT SAVES ON ARRAYS // FUNCTIONS THAT SAVES ON ARRAYS // FUNCTIONS THAT SAVES ON ARRAYS // FUNCTIONS THAT SAVES ON ARRAYS // FUNCTIONS THAT SAVES ON ARRAYS // FUNCTIONS THAT SAVES ON ARRAYS // FUNCTIONS THAT SAVES ON ARRAYS // FUNCTIONS THAT SAVES ON ARRAYS // FUNCTIONS THAT SAVES ON ARRAYS // FUNCTIONS THAT SAVES ON ARRAYS // FUNCTIONS THAT SAVES ON ARRAYS // FUNCTIONS THAT SAVES ON ARRAYS // FUNCTIONS THAT SAVES ON ARRAYS // FUNCTIONS THAT SAVES ON ARRAYS // FUNCTIONS THAT SAVES ON ARRAYS 
// FUNCTIONS THAT SAVES ON ARRAYS // FUNCTIONS THAT SAVES ON ARRAYS // FUNCTIONS THAT SAVES ON ARRAYS // FUNCTIONS THAT SAVES ON ARRAYS // FUNCTIONS THAT SAVES ON ARRAYS // FUNCTIONS THAT SAVES ON ARRAYS // FUNCTIONS THAT SAVES ON ARRAYS // FUNCTIONS THAT SAVES ON ARRAYS // FUNCTIONS THAT SAVES ON ARRAYS // FUNCTIONS THAT SAVES ON ARRAYS // FUNCTIONS THAT SAVES ON ARRAYS // FUNCTIONS THAT SAVES ON ARRAYS // FUNCTIONS THAT SAVES ON ARRAYS // FUNCTIONS THAT SAVES ON ARRAYS // FUNCTIONS THAT SAVES ON ARRAYS // FUNCTIONS THAT SAVES ON ARRAYS // FUNCTIONS THAT SAVES ON ARRAYS // FUNCTIONS THAT SAVES ON ARRAYS // FUNCTIONS THAT SAVES ON ARRAYS 
// FUNCTIONS THAT SAVES ON ARRAYS // FUNCTIONS THAT SAVES ON ARRAYS // FUNCTIONS THAT SAVES ON ARRAYS // FUNCTIONS THAT SAVES ON ARRAYS // FUNCTIONS THAT SAVES ON ARRAYS // FUNCTIONS THAT SAVES ON ARRAYS // FUNCTIONS THAT SAVES ON ARRAYS // FUNCTIONS THAT SAVES ON ARRAYS // FUNCTIONS THAT SAVES ON ARRAYS // FUNCTIONS THAT SAVES ON ARRAYS // FUNCTIONS THAT SAVES ON ARRAYS // FUNCTIONS THAT SAVES ON ARRAYS // FUNCTIONS THAT SAVES ON ARRAYS // FUNCTIONS THAT SAVES ON ARRAYS // FUNCTIONS THAT SAVES ON ARRAYS // FUNCTIONS THAT SAVES ON ARRAYS // FUNCTIONS THAT SAVES ON ARRAYS // FUNCTIONS THAT SAVES ON ARRAYS // FUNCTIONS THAT SAVES ON ARRAYS 

function getDNAPairs(DNA, left, right, radius){
    var insideOfDNA = DNA.children

    console.log(insideOfDNA, left, right)

    // adjusts the cylinder size
    modifyCylinderScale(DNA,moleculeSize/2)
    
    // now for each child inside DNA
    insideOfDNA.forEach(function(child) {
        console.log(child.name)

        // save for right pair
        if (child.name == "RightPair"){
            var baseConnector = child.children[0]
            var sugar = child.children[1]
            var molecules = child.children[2]

            // push each parts to the databases
            rightBasesMolecule.push(molecules)
            rightBaseConnectors.push(baseConnector)

            modifyMolecule(molecules, radius, colorCoding[right])   
            getPhosphateAndSugar(sugar, radius, "right")     
        }

        // save for left pair
        if (child.name == "LeftPair"){
            var baseConnector = child.children[0]
            var sugar = child.children[1]
            var molecules = child.children[2]

            // push each parts to the databases
            leftBasesMolecule.push(molecules)
            leftBaseConnectors.push(baseConnector)

            modifyMolecule(molecules, radius, colorCoding[left])
            getPhosphateAndSugar(sugar, radius, "left")
        }

        if (child.name == "HydrogenBond"){
            hydrogenBonds.push(child)
        }
    })
}

function getPhosphateAndSugar(child, radius, side){
    var currentSelected = child

    currentSelected.children.forEach(function(child) {
        
        // add the sugar parts to the array
        if (child.name == "SugarGroup"){
            var moleculeContainer = child

            // add to which side
            if (side == "left"){
                leftSugarMolecule.push(moleculeContainer)
            }else{
                rightSugarMolecule.push(moleculeContainer)
            }
            
            modifyMolecule(moleculeContainer, radius)
        }

        // add the pospho parts to the array
        if (child.name == "RightPoshphoGroup" || child.name == "LeftPoshphoGroup"){
            var phosphateGroup = child.children[2]
            var moleculeContainer = phosphateGroup.children[3]

            if (side == "left"){
                leftPoshphoMolecule.push(moleculeContainer)
            }else{
                rightPoshphoMolecule.push(moleculeContainer)
            }

            modifyMolecule(moleculeContainer, radius)
        }
    })
}

function getPhosphodiester(theStrand){
    theStrand.traverse(function(child) {
        if (child.name.includes("_PB")){
            PhosphodiesterGroup.push(child)
        }
    })
}

// STRAND GENERATION // STRAND GENERATION // STRAND GENERATION // STRAND GENERATION // STRAND GENERATION // STRAND GENERATION // STRAND GENERATION // STRAND GENERATION // STRAND GENERATION // STRAND GENERATION // STRAND GENERATION // STRAND GENERATION // STRAND GENERATION // STRAND GENERATION // STRAND GENERATION // STRAND GENERATION // STRAND GENERATION // STRAND GENERATION // STRAND GENERATION // STRAND GENERATION // STRAND GENERATION // STRAND GENERATION // STRAND GENERATION // STRAND GENERATION 
// STRAND GENERATION // STRAND GENERATION // STRAND GENERATION // STRAND GENERATION // STRAND GENERATION // STRAND GENERATION // STRAND GENERATION // STRAND GENERATION // STRAND GENERATION // STRAND GENERATION // STRAND GENERATION // STRAND GENERATION // STRAND GENERATION // STRAND GENERATION // STRAND GENERATION // STRAND GENERATION // STRAND GENERATION // STRAND GENERATION // STRAND GENERATION // STRAND GENERATION // STRAND GENERATION // STRAND GENERATION // STRAND GENERATION // STRAND GENERATION v
// STRAND GENERATION // STRAND GENERATION // STRAND GENERATION // STRAND GENERATION // STRAND GENERATION // STRAND GENERATION // STRAND GENERATION // STRAND GENERATION // STRAND GENERATION // STRAND GENERATION // STRAND GENERATION // STRAND GENERATION // STRAND GENERATION // STRAND GENERATION // STRAND GENERATION // STRAND GENERATION // STRAND GENERATION // STRAND GENERATION // STRAND GENERATION // STRAND GENERATION // STRAND GENERATION // STRAND GENERATION // STRAND GENERATION // STRAND GENERATION // STRAND GENERATION // STRAND GENERATION // STRAND GENERATION 

function generateStrands(strand, amounts){
    var spacing = 11
    
    printText("Number", "3'", 0xffffff, [18,-10,-10], DNA)
    printText("Number", "5'", 0xffffff, [-18,-5,1], DNA)

    // generate DNA Strands
    for (var i = 0; i<amounts; i++){
        var angleInDegrees = 36;
        var angleInRadians = THREE.MathUtils.degToRad(angleInDegrees);

        var strandModel = new THREE.Group();
        strandModel.position.set(0,11*i,0)
        strandModel.rotation.set(0,-(angleInRadians*i),0)

        var individualPiece = strand.clone()

        //modify the strand
        getDNAPairs(individualPiece, baseCoding[i][0], baseCoding[i][1], moleculeSize)

        // get the phosphodiester parts
        getPhosphodiester(individualPiece)

        // then add
        strandModel.add(individualPiece)
        DNA.add(strandModel)

        console.log(DNA.children)
    }

    // modify the bases based on coding
    for (var i = 0; i < amounts; i++){
        // Create a copy of the children array
        var rightBaseMoleculeCopy = rightBasesMolecule[i].children.slice();
        var rightBaseConnectorsCopy = rightBaseConnectors[i].children.slice(); 

        var leftBasesMoleculeCopy = leftBasesMolecule[i].children.slice();
        var leftBaseConnectorsCopy = leftBaseConnectors[i].children.slice();

        var hydrogenBondCopy = hydrogenBonds[i].children.slice();

        // remove the extra parts based on TC on right side
        if (baseCoding[i][1] == "T" || baseCoding[i][1] == "C"){
            rightBaseMoleculeCopy.forEach(function(child) {
                if (child.name == "BaseMoleculeP") {
                    console.log("Removing", child.name);
                    rightBasesMolecule[i].remove(child);
                }
            });

            rightBaseConnectorsCopy.forEach(function(child) {
                if (child.name == "BaseRP" || child.name == "LeftConnectorP") {
                    rightBaseConnectors[i].remove(child);
                }
            });
        }

        // remove the extra parts based on TC on left side
        if (baseCoding[i][0] == "T" || baseCoding[i][0] == "C"){
            leftBasesMoleculeCopy.forEach(function(child) {
                if (child.name == "BaseMoleculeP") {
                    console.log("Removing", child.name);
                    leftBasesMolecule[i].remove(child);
                }
            });

            leftBaseConnectorsCopy.forEach(function(child) {
                if (child.name == "BaseRP" || child.name == "LeftConnectorP") {
                    leftBaseConnectors[i].remove(child);
                }
            });
        }

        // T A bonds
        if (baseCoding[i][0] == "A" || baseCoding[i][0] == "T"){
            hydrogenBondCopy.forEach(function(child) {
                if (child.name == "hydrogenBondsGC") {
                    hydrogenBonds[i].remove(child);
                } 
            })
        }

        // add the things to the group
        rightBaseMoleculeCopy.forEach(function(child) {
            NitrogenousBases.push(child)
            BasePairings.push(child)
            assignATCG(child, baseCoding[i][1])
        })
        leftBasesMoleculeCopy.forEach(function(child) {
            NitrogenousBases.push(child)
            BasePairings.push(child)
            assignATCG(child, baseCoding[i][0])
        })
        hydrogenBondCopy.forEach(function(child){
            child.name = "HydrogenBond"
            hydrogenBondsAll.push(child)
            BasePairings.push(child)
        })

        // and for the phosphate and pentose group as well
        leftPoshphoMolecule[i].children.forEach(function(child){
            PhosphateGroup.push(child)
        })
        rightPoshphoMolecule[i].children.forEach(function(child){
            PhosphateGroup.push(child)
        })
        leftSugarMolecule[i].children.forEach(function(child){
            PentoseSugarGroup.push(child)
        })
        rightSugarMolecule[i].children.forEach(function(child){
            PentoseSugarGroup.push(child)
        })
    }
    
    //console.log("sugargroup",PentoseSugarGroup)
    printText("Number", "5'", 0xffffff, [10,-10+(spacing*amounts),-10], DNA)
    printText("Number", "3'", 0xffffff, [-18,-5+(spacing*amounts),0], DNA)

}

function initialize(){
    // Adjust Camera
    camera.position.z = 100;
    camera.position.x = 0;
    camera.position.y = 49;

    // load the dna.json
    loader.load('files/obj/dna.json', function (object) {
        DNAPair = object
    
        generateStrands(object, 10)
        canNowTurn = true

        console.log("hydrogenBonds",hydrogenBonds)
    });
    
}

// ANIMATIONS AND SUCH // ANIMATIONS AND SUCH // ANIMATIONS AND SUCH // ANIMATIONS AND SUCH // ANIMATIONS AND SUCH // ANIMATIONS AND SUCH // ANIMATIONS AND SUCH // ANIMATIONS AND SUCH // ANIMATIONS AND SUCH // ANIMATIONS AND SUCH // ANIMATIONS AND SUCH // ANIMATIONS AND SUCH // ANIMATIONS AND SUCH // ANIMATIONS AND SUCH // ANIMATIONS AND SUCH // ANIMATIONS AND SUCH // ANIMATIONS AND SUCH // ANIMATIONS AND SUCH // ANIMATIONS AND SUCH // ANIMATIONS AND SUCH // ANIMATIONS AND SUCH // ANIMATIONS AND SUCH 
// ANIMATIONS AND SUCH // ANIMATIONS AND SUCH // ANIMATIONS AND SUCH // ANIMATIONS AND SUCH // ANIMATIONS AND SUCH // ANIMATIONS AND SUCH // ANIMATIONS AND SUCH // ANIMATIONS AND SUCH // ANIMATIONS AND SUCH // ANIMATIONS AND SUCH // ANIMATIONS AND SUCH // ANIMATIONS AND SUCH // ANIMATIONS AND SUCH // ANIMATIONS AND SUCH // ANIMATIONS AND SUCH // ANIMATIONS AND SUCH // ANIMATIONS AND SUCH // ANIMATIONS AND SUCH // ANIMATIONS AND SUCH // ANIMATIONS AND SUCH // ANIMATIONS AND SUCH 
// ANIMATIONS AND SUCH // ANIMATIONS AND SUCH // ANIMATIONS AND SUCH // ANIMATIONS AND SUCH // ANIMATIONS AND SUCH // ANIMATIONS AND SUCH // ANIMATIONS AND SUCH // ANIMATIONS AND SUCH // ANIMATIONS AND SUCH // ANIMATIONS AND SUCH // ANIMATIONS AND SUCH // ANIMATIONS AND SUCH // ANIMATIONS AND SUCH // ANIMATIONS AND SUCH // ANIMATIONS AND SUCH // ANIMATIONS AND SUCH // ANIMATIONS AND SUCH // ANIMATIONS AND SUCH // ANIMATIONS AND SUCH // ANIMATIONS AND SUCH // ANIMATIONS AND SUCH // ANIMATIONS AND SUCH 

function bobAnimation(object, startingSize, cylinder){

    if (cylinder == false){
        anime({
            targets: object.scale,
            x: [5, moleculeSize],
            y: [5, moleculeSize],
            z: [5, moleculeSize],
            easing: "easeOutQuart",
            duration: 400,
        })
    } else {
        anime({
            targets: object.scale,
            x: [startingSize, moleculeSize/2],
            z: [startingSize, moleculeSize/2],
            easing: "easeOutQuart",
            duration: 400,
        })     
    }

}

function doTransparency(object, opacity, withBobbing, isCylinder){
    object.children.forEach(function(child) {
        child.material = child.material.clone();
        child.material.transparent = true
        child.material.opacity = opacity  
        if (withBobbing){
            bobAnimation(child, 5, isCylinder)
        }
    })
}

function setTransparencyToAll(opacity, withBobbing){
    
    for (var i in bonds){
        bonds[i].material = bonds[i].material.clone();
        bonds[i].material.transparent = true
        bonds[i].material.opacity = opacity-0.1
    }

    for (var i in leftBasesMolecule){

        // do transparency
        doTransparency(leftBasesMolecule[i], opacity, withBobbing, false)
        doTransparency(rightBasesMolecule[i], opacity, withBobbing, false)
    
        doTransparency(leftSugarMolecule[i], opacity, withBobbing, false)
        doTransparency(rightSugarMolecule[i], opacity, withBobbing, false)

        doTransparency(leftPoshphoMolecule[i], opacity, withBobbing, false)
        doTransparency(rightPoshphoMolecule[i], opacity, withBobbing, false)        

        doTransparency( hydrogenBonds[i], opacity, withBobbing, true) 

    }

}

function animateGroupedBoop(groupContainer){
    setTransparencyToAll(0.15, false)
    
    groupContainer.forEach(function(child) {
        child.material = child.material.clone();
        child.material.transparent = true
        child.material.opacity = 1

        if (child.name != "HydrogenBond" && child.name !="PhosphateBond_PB"){
            bobAnimation(child, 5, false)
            //console.log("Name", groupContainer.name)
        } else {
            bobAnimation(child, 5, true)
        }
        
    })

    console.log(hasSelected)
}

function animateBoop(groupContainer){

    setTransparencyToAll(0.15, false)
    
    groupContainer.children.forEach(function(child) {
        child.material = child.material.clone();
        child.material.transparent = true
        child.material.opacity = 1

        if (groupContainer.name != "HydrogenBond"){
            bobAnimation(child, 5, false)
            //console.log("Name", groupContainer.name)
        } else {
            bobAnimation(child, 5, true)
        }
        
    })

    hasSelected = true

    console.log(hasSelected)
}

function onWindowResize() {
    // Update renderer size
    renderer.setSize(html_DNAContainer.clientWidth, html_DNAContainer.clientHeight);
    
    camera.aspect = html_DNAContainer.clientWidth / html_DNAContainer.clientHeight;
    camera.updateProjectionMatrix();
}

// COLLISION DETECTION AND CLICK // COLLISION DETECTION AND CLICK // COLLISION DETECTION AND CLICK // COLLISION DETECTION AND CLICK // COLLISION DETECTION AND CLICK // COLLISION DETECTION AND CLICK // COLLISION DETECTION AND CLICK // COLLISION DETECTION AND CLICK // COLLISION DETECTION AND CLICK // COLLISION DETECTION AND CLICK // COLLISION DETECTION AND CLICK // COLLISION DETECTION AND CLICK // COLLISION DETECTION AND CLICK // COLLISION DETECTION AND CLICK // COLLISION DETECTION AND CLICK // COLLISION DETECTION AND CLICK // COLLISION DETECTION AND CLICK // COLLISION DETECTION AND CLICK // COLLISION DETECTION AND CLICK // COLLISION DETECTION AND CLICK // COLLISION DETECTION AND CLICK // COLLISION DETECTION AND CLICK 
// COLLISION DETECTION AND CLICK // COLLISION DETECTION AND CLICK // COLLISION DETECTION AND CLICK // COLLISION DETECTION AND CLICK // COLLISION DETECTION AND CLICK // COLLISION DETECTION AND CLICK // COLLISION DETECTION AND CLICK // COLLISION DETECTION AND CLICK // COLLISION DETECTION AND CLICK // COLLISION DETECTION AND CLICK // COLLISION DETECTION AND CLICK // COLLISION DETECTION AND CLICK // COLLISION DETECTION AND CLICK // COLLISION DETECTION AND CLICK // COLLISION DETECTION AND CLICK // COLLISION DETECTION AND CLICK // COLLISION DETECTION AND CLICK // COLLISION DETECTION AND CLICK // COLLISION DETECTION AND CLICK // COLLISION DETECTION AND CLICK // COLLISION DETECTION AND CLICK // COLLISION DETECTION AND CLICK // COLLISION DETECTION AND CLICK // COLLISION DETECTION AND CLICK // COLLISION DETECTION AND CLICK // COLLISION DETECTION AND CLICK // COLLISION DETECTION AND CLICK // COLLISION DETECTION AND CLICK // COLLISION DETECTION AND CLICK // COLLISION DETECTION AND CLICK // COLLISION DETECTION AND CLICK // COLLISION DETECTION AND CLICK 
// COLLISION DETECTION AND CLICK // COLLISION DETECTION AND CLICK // COLLISION DETECTION AND CLICK // COLLISION DETECTION AND CLICK // COLLISION DETECTION AND CLICK // COLLISION DETECTION AND CLICK // COLLISION DETECTION AND CLICK // COLLISION DETECTION AND CLICK // COLLISION DETECTION AND CLICK // COLLISION DETECTION AND CLICK // COLLISION DETECTION AND CLICK // COLLISION DETECTION AND CLICK // COLLISION DETECTION AND CLICK // COLLISION DETECTION AND CLICK // COLLISION DETECTION AND CLICK // COLLISION DETECTION AND CLICK // COLLISION DETECTION AND CLICK // COLLISION DETECTION AND CLICK // COLLISION DETECTION AND CLICK // COLLISION DETECTION AND CLICK // COLLISION DETECTION AND CLICK // COLLISION DETECTION AND CLICK // COLLISION DETECTION AND CLICK // COLLISION DETECTION AND CLICK // COLLISION DETECTION AND CLICK // COLLISION DETECTION AND CLICK // COLLISION DETECTION AND CLICK // COLLISION DETECTION AND CLICK // COLLISION DETECTION AND CLICK // COLLISION DETECTION AND CLICK // COLLISION DETECTION AND CLICK // COLLISION DETECTION AND CLICK // COLLISION DETECTION AND CLICK // COLLISION DETECTION AND CLICK // COLLISION DETECTION AND CLICK 

function getNearestDistance(group){
    var smallestDistance = 9999999999999
    group.forEach(function(child) {
        if (smallestDistance > child.distance) {
            smallestDistance = child.distance
        }
    })
    return smallestDistance
}


function onMouseClick(event) {
    // Calculate mouse position in normalized device coordinates
    var mouse = new THREE.Vector2();
    mouse.x = (event.clientX / html_DNAContainer.clientWidth) * 2 - 1;
    mouse.y = -(event.clientY / html_DNAContainer.clientHeight) * 2 + 1;

    // Create a raycaster
    var raycaster = new THREE.Raycaster();
    raycaster.setFromCamera(mouse, camera);

    var alreadyHitSomething = false

    var theNearestHit = 99999
    var selectedMolecule = 0;

    // this works by having a list of the shortest distance from the hitbox to the camera
    // and getting the most shortest one

    for (var i in leftBasesMolecule){
        // initialize the raycasters (aka hit line)
        var leftBaseHitDetector = raycaster.intersectObjects(leftBasesMolecule[i].children);
        var rightBaseHitDetector = raycaster.intersectObjects(rightBasesMolecule[i].children);
        var leftSugarMoleculeHitDetector = raycaster.intersectObjects(leftSugarMolecule[i].children);
        var rightSugarMoleculeHitDetector = raycaster.intersectObjects(rightSugarMolecule[i].children);
        var leftPoshphoMoleculeHitDetector = raycaster.intersectObjects(leftPoshphoMolecule[i].children);
        var rightPoshphoMoleculeHitDetector = raycaster.intersectObjects(rightPoshphoMolecule[i].children);
        var hydrogenBondsHitDetector = raycaster.intersectObjects(hydrogenBonds[i].children);

        var hitDistances = [
            [99999, leftBaseHitDetector, "leftBase", i],
            [99999, rightBaseHitDetector, "rightBase", i],
            [99999, leftSugarMoleculeHitDetector, "leftSugar", i],
            [99999, rightSugarMoleculeHitDetector, "rightSugar", i],
            [99999, leftPoshphoMoleculeHitDetector, "rightPospho", i],
            [99999, rightPoshphoMoleculeHitDetector, "leftPospho", i],
            [99999, hydrogenBondsHitDetector, "hydrogenBonds", i]
        ]

        // first get which was tapped first (to avoid both being clicked)
        // bases
        if (leftBaseHitDetector.length > 0 ) {
            hitDistances[0][0] = getNearestDistance(leftBaseHitDetector)
        }
        if (rightBaseHitDetector.length > 0) {
            hitDistances[1][0] = getNearestDistance(rightBaseHitDetector)
        }
        // sugars
        if (leftSugarMoleculeHitDetector.length > 0) {
            hitDistances[2][0] = getNearestDistance(leftSugarMoleculeHitDetector)
        }
        if (rightSugarMoleculeHitDetector.length > 0) {
            hitDistances[3][0] = getNearestDistance(rightSugarMoleculeHitDetector)
        }
        // pospho
        if (leftPoshphoMoleculeHitDetector.length > 0) {
            hitDistances[4][0] = getNearestDistance(leftPoshphoMoleculeHitDetector)
        }
        if (rightPoshphoMoleculeHitDetector.length > 0) {
            hitDistances[5][0] = getNearestDistance(rightPoshphoMoleculeHitDetector)
        }
        // hydrogen bond
        if (hydrogenBondsHitDetector.length > 0){
            hitDistances[6][0] = getNearestDistance(hydrogenBondsHitDetector)
        }
        
        // get the neareast/shortest from the least
        hitDistances.sort((a, b) => a[0] - b[0]);
        
        // then save the shortest
        if (theNearestHit > hitDistances[0][0]){
            selectedMolecule = hitDistances[0]
            theNearestHit = hitDistances[0][0]
            //console.log("UPDATED!", theNearestHit, selectedMolecule)
        }
    }

    // now animate based on which is the shortest
    if (selectedMolecule != 0) {

        console.log(hasSelected)
        //console.log(hitDistances)
        switch (selectedMolecule[2]){
            case "rightBase":
                animateBoop(rightBasesMolecule[selectedMolecule[3]])
                selectTabMolecules("NitrogenousBase")
                alreadyHitSomething = true
            break;  

            case "leftBase":
                animateBoop(leftBasesMolecule[selectedMolecule[3]])
                selectTabMolecules("NitrogenousBase")
                alreadyHitSomething = true
            break;

            case "leftSugar":
                animateBoop(leftSugarMolecule[selectedMolecule[3]])
                selectTabMolecules("PentoseSugar")
                alreadyHitSomething = true
            break; 

            case "rightSugar":
                animateBoop(rightSugarMolecule[selectedMolecule[3]])
                selectTabMolecules("PentoseSugar")
                alreadyHitSomething = true
            break; 

            case "rightPospho":
                animateBoop(leftPoshphoMolecule[selectedMolecule[3]])
                selectTabMolecules("PhosphateGroup")
                alreadyHitSomething = true
            break; 

            case "leftPospho":
                animateBoop(rightPoshphoMolecule[selectedMolecule[3]])
                selectTabMolecules("PhosphateGroup")
                alreadyHitSomething = true
            break; 

            case "hydrogenBonds":
                animateBoop(hydrogenBonds[selectedMolecule[3]])
                selectTabMolecules("HydrogenBonds")
                alreadyHitSomething = true
            break; 
        }

    }

    // resets the transparency when user clicks on nothing
    if (alreadyHitSomething == false && hasSelected){
        hasSelected = false
        console.log("AA")
        setTransparencyToAll(1, true)
    }
    
}

// RENDER // RENDER // RENDER // RENDER // RENDER // RENDER // RENDER // RENDER // RENDER // RENDER // RENDER // RENDER // RENDER // RENDER // RENDER // RENDER // RENDER // RENDER // RENDER // RENDER // RENDER // RENDER // RENDER // RENDER // RENDER // RENDER // RENDER // RENDER // RENDER // RENDER 
// RENDER // RENDER // RENDER // RENDER // RENDER // RENDER // RENDER // RENDER // RENDER // RENDER // RENDER // RENDER // RENDER // RENDER // RENDER // RENDER // RENDER // RENDER // RENDER // RENDER // RENDER // RENDER // RENDER // RENDER // RENDER // RENDER // RENDER // RENDER // RENDER // RENDER 
// RENDER // RENDER // RENDER // RENDER // RENDER // RENDER // RENDER // RENDER // RENDER // RENDER // RENDER // RENDER // RENDER // RENDER // RENDER // RENDER // RENDER // RENDER // RENDER // RENDER // RENDER // RENDER // RENDER // RENDER // RENDER // RENDER // RENDER // RENDER // RENDER // RENDER // RENDER // RENDER // RENDER // RENDER // RENDER // RENDER // RENDER // RENDER // RENDER 

function animate() {
    requestAnimationFrame(animate);

    // Rotate the cube
    if (canNowTurn){
        //DNA.rotation.y += 0.005;
        //rotateText(-0.005)
    }

    // Render the scene
    renderer.render(scene, camera);
}

initialize();
animate();

// EVENT LISTENER // EVENT LISTENER // EVENT LISTENER // EVENT LISTENER // EVENT LISTENER // EVENT LISTENER // EVENT LISTENER // EVENT LISTENER // EVENT LISTENER // EVENT LISTENER // EVENT LISTENER // EVENT LISTENER // EVENT LISTENER // EVENT LISTENER // EVENT LISTENER // EVENT LISTENER // EVENT LISTENER // EVENT LISTENER // EVENT LISTENER // EVENT LISTENER // EVENT LISTENER // EVENT LISTENER // EVENT LISTENER // EVENT LISTENER // EVENT LISTENER 
// EVENT LISTENER // EVENT LISTENER // EVENT LISTENER // EVENT LISTENER // EVENT LISTENER // EVENT LISTENER // EVENT LISTENER // EVENT LISTENER // EVENT LISTENER // EVENT LISTENER // EVENT LISTENER // EVENT LISTENER // EVENT LISTENER // EVENT LISTENER // EVENT LISTENER // EVENT LISTENER // EVENT LISTENER // EVENT LISTENER // EVENT LISTENER // EVENT LISTENER // EVENT LISTENER // EVENT LISTENER // EVENT LISTENER // EVENT LISTENER // EVENT LISTENER // EVENT LISTENER // EVENT LISTENER // EVENT LISTENER V
// EVENT LISTENER // EVENT LISTENER // EVENT LISTENER // EVENT LISTENER // EVENT LISTENER // EVENT LISTENER // EVENT LISTENER // EVENT LISTENER // EVENT LISTENER // EVENT LISTENER // EVENT LISTENER // EVENT LISTENER // EVENT LISTENER // EVENT LISTENER // EVENT LISTENER // EVENT LISTENER // EVENT LISTENER // EVENT LISTENER // EVENT LISTENER // EVENT LISTENER // EVENT LISTENER // EVENT LISTENER // EVENT LISTENER // EVENT LISTENER // EVENT LISTENER // EVENT LISTENER // EVENT LISTENER // EVENT LISTENER // EVENT LISTENER 

html_DNAContainer.addEventListener('click', onMouseClick, false);
window.addEventListener('resize', onWindowResize, false);
