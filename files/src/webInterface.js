// Nitrogenous base: #5da348

var html_DNADescription = document.querySelector(".DNAdditionalDescriptionContainer")


// the tabs
var html_NitrogenousBaseId = document.getElementById("NitrogenousBaseId")
var html_BasePairingsId = document.getElementById("BasePairingsId")
var html_PentoseSugarId = document.getElementById("PentoseSugarId")
var html_PhosphateGroupId = document.getElementById("PhosphateGroupId")
var html_HydrogenBondsId = document.getElementById("HydrogenBondsId")
var html_PhosphodiesterBondsId = document.getElementById("PhosphodiesterBondsId")
var html_ReferencesAcknowledgementId = document.getElementById("ReferencesAcknowledgementId")

var NitrogenousBaseDescription = `
    <div class='DescriptionHeader'>Nitrogenous Base</div><br/>

    <center>
        <div class="imageDescription" style="max-width: 50vw;">
            <img src='./files/img/NitrogenousBase.jpg'>
        </div>
    </center>

    <br/>

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
var BasePairingsDescription = `
    <div class='DescriptionHeader'>Base Pairings</div>
    <br/>   
    <div class="imageDescriptionFloatLeft">
        <img src='./files/img/NitrogenousBase2.jpg'>
    </div> 
    Under normal circumstances, the nitrogen-containing bases adenine (A) and thymine (T) pair together, and cytosine (C) and guanine (G) pair together. The binding of these base pairs forms the structure of DNA.
`

var PentoseSugarDescription = `
    <div class='DescriptionHeader'>Pentose Sugar</div>
    <br/>
    <div class="imageDescriptionFloatLeft">
        <img src='./files/img/Sugar.png'>
    </div> 
    Pentose sugar is a type of simple sugar or monosaccharide that plays a fundamental role in various biological processes. Pentose sugars are essential components of nucleotides, which are the building blocks of DNA and RNA.
`
var PhosphateGroupDescription = `
    <div class='DescriptionHeader'>Phosphate Group</div>
    <br/>
    <div class="imageDescriptionFloatLeft">
        <img src='./files/img/PhosphateGroup.jpg'>
    </div> 
    A functional group characterized by a phosphorus atom bonded to four oxygen atoms (three single bonds and one double bond). One of these oxygen atoms must be bonded to another atom; if not, the structure is a phosphate ion.
`

var HydrogenBondsDescription = `
    <div class='DescriptionHeader'>Hydrogen Bonds</div>
    <br/>
    <div class="imageDescription">
        <img src='./files/img/HydrogenBonds.jpg'>
    </div>
    <div style="width: 14vw;"class="imageDescription">
        <img src='./files/img/HydrogenBonds2.jpg'>
    </div>
    <br/>
    <br/>Hydrogen bond (H-bond) binds the nitrogen bases between the two strands of DNA. There are two H-bonds between A and T; three H-bonds between G and C.
`

var PhosphodiesterBondsDescription = `
    <div class='DescriptionHeader'>Phosphodiester Bonds</div>
    <br/>
    <div class="imageDescriptionFloatLeft">
        <img src='./files/img/Phosphodiester.jpg'>
    </div>     
    A phosphodiester bond is formed between two nucleotides to form the sugar-phosphate backbone of DNA. This reaction occurs as a condensation reaction, where a water molecule is removed.A phosphodiester bond is vital for the maintenance of the structural stability of nucleic acids. Nucleic acids are in the form of DNA and RNA and are important for cell structure and function.
`

var ReferencesDescription = `
    
    <div class='DescriptionHeader'>References</div>

    <br/>
    <div class="referenceMiniHeader">
        Nitrogenous Bases
    </div>
    <div class="referenceDiv">
        Thymine. (2024). Genome.gov. https://www.genome.gov/genetics-glossary/Thymine#:~:text=Thymine%20(T)%20is%20one%20of,nucleotide%20bases%20encodes%20DNA's%20information.
        <br/><br/>
        NCI Dictionary of Cancer Terms. (2024). Cancer.gov; Cancer.gov. https://www.cancer.gov/publications/dictionaries/cancer-terms/def/adenine#
        <br/><br/>
        Guanine. (2024). Genome.gov. https://www.genome.gov/genetics-glossary/guanine#:~:text=Guanine%20(G)%20is%20one%20of,nucleotide%20bases%20encodes%20DNA's%20information.
        <br/><br/>
        Cytosine | base, nucleobase, DNA | Britannica. (2024). In Encyclopædia Britannica. https://www.britannica.com/science/cytosine
        <br/><br/>
        Admin. (2022, June 7). Nitrogenous Bases. BYJUS; BYJU'S. https://byjus.com/biology/nitrogenous-bases/
    </div> 

    <br/>
    <div class="referenceMiniHeader">
        Hydrogen Bond
    </div>
    <div class="referenceDiv">
        Lambertson, O. (2021, July 29). What are Hydrogen Bonds? | ChemTalk. ChemTalk. https://chemistrytalk.org/what-are-hydrogen-bonds/#
    </div>

    <br/>
    <div class="referenceMiniHeader">
        Pentose Sugar
    </div>
    <div class="referenceDiv">
        4.4: Nucleic Acids. (2017, March 26). Biology LibreTexts. https://bio.libretexts.org/Courses/University_of_California_Davis/BIS_2A%3A_Introductory_Biology_(Easlon)/Readings/04.4%3A_Nucleic_Acids
    </div>  

    <br/>
    <div class="referenceMiniHeader">
        Phosphodiester Bond
    </div>
    <div class="referenceDiv">
        Ellenbroek, B., & Youn, J. (2016). The Genetic Basis of Behavior. Elsevier EBooks, 19–46. https://doi.org/10.1016/b978-0-12-801657-2.00002-1
        <br/><br/>
        Adebiyi, M. G. (2024, February 20). What is a phosphodiester bond? Integrated DNA Technologies; Integrated DNA Technologies. https://sg.idtdna.com/pages/education/decoded/article/what-is-a-phosphodiester-bond?fbclid=IwZXh0bgNhZW0CMTAAAR1bW2-ocs6nTxmUqbvbX4c_o5rLRKNXGoM65Utvs2QfORb_sfhf-vLmAow_aem_AVpoURy66zZu7Wz817-53m-9pacrUtjO8rC-72LumsRqDwAvRmGoYhsNC7tV4iPLQw5-B2m8Z_GROHlIo1UvxIVJ
    </div>

    <br/>
    <div class="referenceMiniHeader">
        Phosphodiester Bond
    </div>
    <div class="referenceDiv">
        2.5.4: DNA and RNA. (2022, July 19). Biology LibreTexts. https://bio.libretexts.org/Courses/Prince_Georges_Community_College/PGCC_Microbiology/02%3A_Chemistry_of_Microbiology/2.05%3A_Organic_Compounds/2.5.04%3A_DNA_and_RNA?fbclid=IwZXh0bgNhZW0CMTAAAR02SZEgh19yp6K-zopzhP6vAOx50LrMMihU0VSbXI-aquhvnZh3UTGF7VI_aem_AVrnadZuMjLPyLDl30PAHmZFuKeaHYSzcn6Wezag1QfJDsxfijza2vpE2o5gH0HySy788FeAiD_3V1BV_b4xm_rC
        <br/><br/>
        DNA, in. (2023). Phosphodiester Bond in DNA & RNA | Linkage, Formation & Function - Lesson | Study.com. Study.com. https://study.com/academy/lesson/phosphodiester-bond-formation-lesson-quiz.html?fbclid=IwZXh0bgNhZW0CMTAAAR0XLcnGqGu25qNsJYaLq_0n5DZLWZ4bMPuigQaPPyDXo6syi3dKKZyh2Fc_aem_AVoCvPDflUDkAHmS7SjUhIdF0Xb95MxWcBH5t5qknCsmPwBqGZvAxVhSYo4NrigZDk8nnHhsO9-JblaL4-n8bxBH
    </div>

    <br/><br/>


    <div class='DescriptionHeader'>Acknowledgement</div>  
    <br/>
    Introducing the team:
    <br/><br/>

    <center>

    <div class="frameContainer">
        <div class="framePictureContainer">
            <img src='./files/img/team/Chalzea.png'>
        </div>
        Chalzea Johanna Raval<br/>&nbsp
    </div>
    <div class="frameContainer">
        <div class="framePictureContainer">
            <img src='./files/img/team/Allysa.png'>
        </div>
        Allysa Gabrielle Quigao<br/>&nbsp
    </div>
    <div class="frameContainer">
        <div class="framePictureContainer">
            <img src='./files/img/team/Lacel.png'>
        </div>
        Lacel Belle Domingo<br/>&nbsp
    </div>

    <br/><br/>

    <div class="frameContainer">
        <div class="framePictureContainer">
            <img src='./files/img/team/Rozyle.png'>
        </div>
        Rozyle Cenu<br/>&nbsp
    </div>
    <div class="frameContainer">
        <div class="framePictureContainer">
            <img src='./files/img/team/Joanna.png'>
        </div>
        Joanna Louise Almazan<br/>&nbsp
    </div>
    <div class="frameContainer">
        <div class="framePictureContainer">
            <img src='./files/img/team/Keith.png'>
        </div>
        Keith Annel Leviste<br/>&nbsp
    </div>

    <br/><br/>

    <div class="frameContainer">
        <div class="framePictureContainer">
            <img src='./files/img/team/Bob.png'>
        </div>
        Bob Michael Babaran<br/>&nbsp
    </div>
    <div class="frameContainer">
        <div class="framePictureContainer">
            <img src='./files/img/team/David.png'>
        </div>
        David Acacio<br/>&nbsp
    </div>

    <br/><br/>

        <div class="flexDNAContainer">
            <div class="flexFrame">
                <div class='DescriptionHeader'>Collaboration with</div>  
                <div class="frameContainer">
                    <div class="framePictureContainer">
                        <img src='./files/img/team/Maku.jpg'>
                    </div>
                    Mark Angelo Santillan<br/>
                    (Maku Santiran)
                </div>
            </div>

            <div class="flexFrame">
                <div class='DescriptionHeader'>Bio 141 (Genetics )Professor </div>  
                <div class="frameContainer">
                    <div class="framePictureContainer">
                        <img src='./files/img/team/Prof.png'>
                    </div>
                    Dr. Peter James Gann
                    <br/>
                    &nbsp
                </div>
            </div>
        </div>
    </center>
`

function resetAllTabs(){
    html_NitrogenousBaseId.style.backgroundColor = "#464646"
    html_BasePairingsId.style.backgroundColor = "#464646"
    html_PentoseSugarId.style.backgroundColor = "#464646"
    html_PhosphateGroupId.style.backgroundColor = "#464646"
    html_HydrogenBondsId.style.backgroundColor = "#464646"
    html_PhosphodiesterBondsId.style.backgroundColor = "#464646"
    html_ReferencesAcknowledgementId.style.backgroundColor = "#464646"
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
        
        case ("ReferencesAcknowledgement"):
            html_DNADescription.innerHTML = ReferencesDescription
            resetAllTabs()
            html_ReferencesAcknowledgementId.style.backgroundColor = "#457330"
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
