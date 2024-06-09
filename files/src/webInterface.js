// Nitrogenous base: #5da348

var html_DNADescription = document.querySelector(".DNAdditionalDescriptionContainer")


// the tabs
var html_NitrogenousBaseId = document.getElementById("NitrogenousBaseId")
var html_BasePairingsId = document.getElementById("BasePairingsId")
var html_PentoseSugarId = document.getElementById("PentoseSugarId")
var html_PhosphateGroupId = document.getElementById("PhosphateGroupId")
var html_HydrogenBondsId = document.getElementById("HydrogenBondsId")
var html_PhosphodiesterBondsId = document.getElementById("PhosphodiesterBondsId")


var NitrogenousBaseDescription = `
<div class="NitrogenousBaseHeader" style="color: #b572d4;" onclick="selectTab('Thymine')">Thymine</div><br/>
-a compound which is one of the four constituent bases of nucleic acids. A pyrimidine derivative, it is paired with adenine in double-stranded DNA.<br/><br/>
-Thymine helps stabilize nucleic acid structures. DNA is composed of two strands that twist upon each other to form a double helix. This double helix is held together by hydrogen bonds formed between nucleobases oriented in opposite strands.<br/>

<br/><br/>
<div class="NitrogenousBaseHeader" style="color: #8bd973;" onclick="selectTab('Adenine')">Adenine</div><br/>
-Adenine and guanine have a fused-ring skeletal structure derived of purine, hence they are called purine bases. The purine nitrogenous bases are characterized by their single amino group<br/><br/>
-Adenine plays an essential role in replication in all known living systems today, and is prominent in many other aspects of biochemistry. It occurs among the products of oligomerization of HC<br/>

<br/><br/>
<div class="NitrogenousBaseHeader" style="color: #68e1e3;" onclick="selectTab('Guanine')">Guanine</div><br/>
-a compound that occurs in guano and fish scales, and is one of the four constituent bases of nucleic acids. A purine derivative, it is paired with cytosine in double-stranded DNA.<br/><br/>
-plays a role in determining how the genes will be expressed. The specific location of guanine and the other three bases on the strands will determine what those genes tell the body to do.<br/>

<br/><br/>
<div class="NitrogenousBaseHeader" style="color: #f26f68;" onclick="selectTab('Cytosine')">Cytosine</div><br/>
-a compound found in living tissue as a constituent base of nucleic acids. It is paired with guanine in double-stranded DNA.<br/><br/>
-Cytosine plays an essential role in forming base pairs by bonding with guanine and forming the genetic code found in both DNA and RNA. Because of its chemical structure, cytosine represents a nucleotide base due to its ability to bond with guanine and form part of the sugar-phosphate backbone of DNA and RNA.<br/>        
`
var BasePairingsDescription = "<div class='DescriptionHeader'>Base Pairings</div><br/>Under normal circumstances, the nitrogen-containing bases adenine (A) and thymine (T) pair together, and cytosine (C) and guanine (G) pair together. The binding of these base pairs forms the structure of DNA."
var PentoseSugarDescription = "<div class='DescriptionHeader'>Pentose Sugar</div><br/>Pentose sugar is a type of simple sugar or monosaccharide that plays a fundamental role in various biological processes. Pentose sugars are essential components of nucleotides, which are the building blocks of DNA and RNA."
var PhosphateGroupDescription = "<div class='DescriptionHeader'>Phosphate Group</div><br/> The phosphate group present in the nucleotide creates a covalent bond with the sugar molecule of the adjacent nucleotide to form a long chain of the nucleotide monomers."
var HydrogenBondsDescription = "<div class='DescriptionHeader'>Hydrogen Bonds</div><br/>Hydrogen bond (H-bond) binds the nitrogen bases between the two strands of DNA. There are two H-bonds between A and T; three H-bonds between G and C."
var PhosphodiesterBondsDescription = "<div class='DescriptionHeader'>Phosphodiester Bonds</div><br/>A phosphodiester bond is formed between two nucleotides to form the sugar-phosphate backbone of DNA. This reaction occurs as a condensation reaction, where a water molecule is removed.A phosphodiester bond is vital for the maintenance of the structural stability of nucleic acids. Nucleic acids are in the form of DNA and RNA and are important for cell structure and function."

function resetAllTabs(){
    html_NitrogenousBaseId.style.backgroundColor = "#464646"
    html_BasePairingsId.style.backgroundColor = "#464646"
    html_PentoseSugarId.style.backgroundColor = "#464646"
    html_PhosphateGroupId.style.backgroundColor = "#464646"
    html_HydrogenBondsId.style.backgroundColor = "#464646"
    html_PhosphodiesterBondsId.style.backgroundColor = "#464646"
}

function selectTab(whatTab){
    switch (whatTab){
        case ("NitrogenousBase"):
            html_DNADescription.innerHTML = NitrogenousBaseDescription
            resetAllTabs()
            html_NitrogenousBaseId.style.backgroundColor = "#457330"
            alreadyHitSomething = false
            hasSelected = true
            animateGroupedBoop(NitrogenousBases, false)
        break;

        case ("BasePairings"):
            html_DNADescription.innerHTML = BasePairingsDescription
            resetAllTabs()
            html_BasePairingsId.style.backgroundColor = "#457330"
            alreadyHitSomething = false
            hasSelected = true
            animateGroupedBoop(BasePairings)
        break;

        case ("PentoseSugar"):
            html_DNADescription.innerHTML = PentoseSugarDescription
            resetAllTabs()
            html_PentoseSugarId.style.backgroundColor = "#457330"
            alreadyHitSomething = false
            hasSelected = true
            animateGroupedBoop(PentoseSugarGroup)
        break;

        case ("PhosphateGroup"):
            html_DNADescription.innerHTML = PhosphateGroupDescription
            resetAllTabs()
            html_PhosphateGroupId.style.backgroundColor = "#457330"
            alreadyHitSomething = false
            hasSelected = true
            animateGroupedBoop(PhosphateGroup)
        break;

        case ("HydrogenBonds"):
            html_DNADescription.innerHTML = HydrogenBondsDescription
            resetAllTabs()
            html_HydrogenBondsId.style.backgroundColor = "#457330"
            alreadyHitSomething = false
            hasSelected = true
            animateGroupedBoop(hydrogenBondsAll)
        break;

        case ("PhosphodiesterBonds"):
            html_DNADescription.innerHTML = PhosphodiesterBondsDescription
            resetAllTabs()
            html_PhosphodiesterBondsId.style.backgroundColor = "#457330"
            alreadyHitSomething = false
            hasSelected = true
            animateGroupedBoop(PhosphodiesterGroup)
        break;    

        case("Thymine"):
            animateGroupedBoop(ThymineGroup)
        break;

        case("Adenine"):
            animateGroupedBoop(AdenineGroup)
        break;

        case("Guanine"):
            animateGroupedBoop(GuanineGroup)
        break;

        case("Cytosine"):
            animateGroupedBoop(CytosineGroup)
        break;
    }

}

function selectTabMolecules(whatTab){
    switch (whatTab){
        case ("NitrogenousBase"):
            html_DNADescription.innerHTML = NitrogenousBaseDescription
            resetAllTabs()
            html_NitrogenousBaseId.style.backgroundColor = "#457330"
        break;

        case ("PentoseSugar"):
            html_DNADescription.innerHTML = PentoseSugarDescription
            resetAllTabs()
            html_PentoseSugarId.style.backgroundColor = "#457330"
        break;

        case ("PhosphateGroup"):
            html_DNADescription.innerHTML = PhosphateGroupDescription
            resetAllTabs()
            html_PhosphateGroupId.style.backgroundColor = "#457330"
        break;

        case ("HydrogenBonds"):
            html_DNADescription.innerHTML = HydrogenBondsDescription
            resetAllTabs()
            html_HydrogenBondsId.style.backgroundColor = "#457330"
        break;
    }  
}


//exporting functions
window.selectTab = selectTab
