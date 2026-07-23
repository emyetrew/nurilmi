// JavaScript Document//
/*===========================================

SECTION A

HERO

===========================================*/


/*==========================================================

GLASS CURSOR GLOW

==========================================================*/

let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;

let glowX = mouseX;
let glowY = mouseY;

document.addEventListener("mousemove",(e)=>{

    mouseX = e.clientX;
    mouseY = e.clientY;

});



function animateGlow(){

    glowX += (mouseX - glowX) * 0.08;
    glowY += (mouseY - glowY) * 0.08;

    document.body.style.setProperty("--mouse-x",`${glowX}px`);
    document.body.style.setProperty("--mouse-y",`${glowY}px`);

    requestAnimationFrame(animateGlow);

}

animateGlow();



/*==========================================================

ACTIVE NAVIGATION

==========================================================*/

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        const sectionHeight = section.offsetHeight;

        if(

            window.scrollY >= sectionTop &&

            window.scrollY < sectionTop + sectionHeight

        ){

            current = section.id;

        }

    });
	
	

    navLinks.forEach(link => {

        link.classList.remove("active");

        if(link.getAttribute("href") === "#" + current){

            link.classList.add("active");

        }

    });

});



/*==========================================================

MOBILE MENU

==========================================================*/
const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

menuToggle.addEventListener("click", () => {

    mainNav.classList.toggle("active");

    menuToggle.textContent =
        mainNav.classList.contains("active")
        ? "✕"
        : "☰";

});

const mobileLinks = document.querySelectorAll("#mainNav a");

mobileLinks.forEach(link => {

    link.addEventListener("click", (e) => {

        e.preventDefault();

        const target = link.getAttribute("href");

        link.classList.add("clicked");

        setTimeout(() => {

            mainNav.classList.remove("active");

            menuToggle.textContent = "☰";

            link.classList.remove("clicked");

            document.querySelector(target).scrollIntoView({

                behavior:"smooth"

            });

        },200);

    });

});

/*==========================================================

HERO PARALLAX

==========================================================*/

const hero = document.querySelector(".hero");

if(hero){

   

    // Hero code here

const heroBg = document.querySelector(".hero-bg");
const heroGirl = document.querySelector(".hero-right");
const heroContent = document.querySelector(".hero-content");
const aspiring = document.querySelector(".aspiring");

let heroMouseX = 0;
let heroMouseY = 0;

let currentX = 0;
let currentY = 0;

hero.addEventListener("mousemove",(e)=>{

    const rect = hero.getBoundingClientRect();

    heroMouseX = ((e.clientX - rect.left) / rect.width - 0.5);
    heroMouseY = ((e.clientY - rect.top) / rect.height - 0.5);

});

hero.addEventListener("mouseleave",()=>{

    heroMouseX = 0;
    heroMouseY = 0;

});

const heroParallax = () => {

    currentX += (heroMouseX - currentX) * 0.08;
    currentY += (heroMouseY - currentY) * 0.08;

    heroBg.style.transform =
        `translate(${currentX*6}px, ${currentY*6}px)`;

    heroGirl.style.transform =
        `translate(${-currentX*20}px, ${-currentY*20}px)`;

    heroContent.style.transform =
        `translate(${currentX*10}px, ${currentY*10}px)`;

    aspiring.style.transform =
        `translate(${-currentX*12}px, calc(-50% + ${-currentY*12}px))`;

    requestAnimationFrame(heroParallax);

   } // ← closes the function

heroParallax();

} // ← closes the if(hero)


/*==========================================================

VIDEO RESUME

==========================================================*/

const resumeBtn =
document.getElementById("resumeBtn");

const videoPopup =
document.getElementById("videoPopup");

const closeVideo =
document.getElementById("closeVideo");

const youtubeVideo =
document.getElementById("youtubeVideo");


resumeBtn.addEventListener("click",()=>{

    youtubeVideo.src =
    "https://www.youtube.com/embed/Q904df1FRLg?autoplay=1";

    videoPopup.classList.add("show");

});



closeVideo.addEventListener("click",()=>{

    videoPopup.classList.remove("show");

    youtubeVideo.src = "";

});


videoPopup.addEventListener("click",(e)=>{

    if(e.target === videoPopup){

        videoPopup.classList.remove("show");

        youtubeVideo.src = "";

    }

});


document.addEventListener("keydown",(e)=>{

    if(e.key === "Escape"){

        videoPopup.classList.remove("show");

        youtubeVideo.src = "";

    }

});







/*==========================================================

SECTION B : CARD

==========================================================*/


const featuredProjects = [

    {

        image:"images/assets/projectfeatured_a.webp",

        title:"COMMQUEST<br>ARENA",

        desc:"Designed the visual identity for the faculty's biggest esports tournaments.",

        roles:[
            "Art Direction",
            "Branding",
            "Graphic Design"
        ]

    },

    {

        image:"images/assets/projectfeatured_b.webp",

        title:"ELEMENTRA",

        desc:"Created the branding and user experience for a folklore-inspired educational game.",

        roles:[
            "Art Direction",
            "Programming",
            "Storyboard"
        ]

    },

    {

        image:"images/assets/projectfeatured_c.webp",

        title:"TAGGED",

        desc:"Developed the branding identity for a jewellery brand centred around meaningful connections.",

        roles:[
            "Brand Identity",
            "Packaging",
            "Product Design"
        ]

    },

    {

        image:"images/assets/projectfeatured_d.webp",

        title:"ROB & NUNU",

        desc:"Utilizing fundamental techniques to showcase products through raw, unedited imagery.",

        roles:[
            "Creative Direction",
            "Branding",
            "Packaging"
        ]

    },

    {

        image:"images/assets/projectfeatured_e.webp",

        title:"PHOTOGRAPHY",

        desc:"Captured stories through portraits, live events and intended creative visual compositions.",

        roles:[
            "Portrait",
            "Event",
            "Editing"
        ]

    }

];




const featuredImage = document.getElementById("featuredArtwork");
const featuredTitle = document.getElementById("featuredTitle");
const featuredDesc = document.getElementById("featuredDesc");

const projectButtons = document.querySelectorAll(".project");

const featuredRoles = document.getElementById("featuredRoles");

let currentProject = -1;


function showProject(index){

    if(index === currentProject) return;

    const project = featuredProjects[index];

    const card = document.querySelector(".featured-card");

    card.classList.add("changing");

    setTimeout(()=>{

    featuredImage.src = project.image;

    featuredTitle.innerHTML = project.title;

    featuredDesc.textContent = project.desc;

    featuredRoles.innerHTML = "";

    featuredRoles.innerHTML = "";

project.roles.forEach((role,index)=>{

    featuredRoles.innerHTML +=
    `<span class="featured-role"
        style="animation-delay:${index*80}ms">
        ${role}
    </span>`;

});

    projectButtons.forEach(button=>{
        button.classList.remove("active");
    });

    projectButtons[index].classList.add("active");

    currentProject = index;

    card.classList.remove("changing");

},320);

}



projectButtons.forEach((button,index)=>{

    button.addEventListener("click",()=>{

        showProject(index);

    });

});


showProject(0);


/*==========================================================
MOBILE FEATURED SCROLL
==========================================================*/

if(window.innerWidth <= 768){

    const featuredNav = document.querySelector(".featured-nav");

    featuredNav.addEventListener("scroll",()=>{

        let closestIndex = 0;

        let closestDistance = Infinity;

        const navCenter =
        featuredNav.scrollLeft +
        featuredNav.offsetWidth / 2;

        projectButtons.forEach((button,index)=>{

            const buttonCenter =
            button.offsetLeft +
            button.offsetWidth / 2;

            const distance =
            Math.abs(navCenter - buttonCenter);

            if(distance < closestDistance){

                closestDistance = distance;

                closestIndex = index;

            }

        });

        showProject(closestIndex);

    });

}
/*==========================================================
FEATURED SCROLL CONTROL
==========================================================*/

if (window.innerWidth > 768) {

    const featuredSection = document.querySelector(".featured");

    window.addEventListener("scroll", () => {

        const rect = featuredSection.getBoundingClientRect();

        const totalScroll =
            featuredSection.offsetHeight - window.innerHeight;

        const progress = Math.min(
            Math.max((-rect.top) / totalScroll, 0),
            1
        );

        let projectIndex = 0;

        if (progress < 0.20) {

            projectIndex = 0;

        } else if (progress < 0.40) {

            projectIndex = 1;

        } else if (progress < 0.60) {

            projectIndex = 2;

        } else if (progress < 0.80) {

            projectIndex = 3;

        } else {

            projectIndex = 4;

        }

        showProject(projectIndex);

    });

}

/*==========================================================

SECTION C : PROJECT DATA

==========================================================*/

const projectData = {         
	
	
	/* --------------UI/UX-------------*/


    hobby:{

        type:"INDIVIDUAL PROJECT",

        title:"Hobby Website",

        role:"UI / UX Designer",

        description:"Designed and developed a responsive hobby website focused on layout, typography and user experience.",

        apps:[
            "Figma",
            "Dreamweaver",
            "Claude"
        ],

        images:[

    "images/assets/ui_hobby.webp",


]

    },
	
	
	
	elementra:{

    type:"GROUP PROJECT",

    title:"Elementra",

    role:"UI/UX Designer / Storyboard Artist",

    description:"Created the interface and visual experience for a Malaysian folklore educational game.",

    apps:[

        "Photoshop",
        "iArtBook",
        "Canva"

    ],

    images:[

        "images/assets/ui_elementra_a.webp",

        "images/assets/ui_elementra_b.webp",
		
		"images/assets/ui_elementra_c.webp",
		
		"images/assets/ui_elementra_d.webp",
		
		"images/assets/ui_elementra_e.webp"

    ]

},
	
	
	
	
	commquest:{

    type:"EVENT",

    title:"CommQuest Arena",

    role:"UI Designer • Art Director",

    description:"Designed the tournament interface and supporting visual assets and updating it live during tournaments.",

    apps:[

        "Photoshop",
        "Illustrator",
        "Canva"

    ],

    images:[

        "images/assets/ui_cq_a.webp",
        "images/assets/ui_cq_b.webp"

    ]

},
	
	
	
	
	
	miiex:{

    type:"GROUP PROJECT",

    title:"MicroWars",

    role:"UI/UX Designer • ",

    description:"An interactive educational presentation introducing the human immune system through game-based learning.",

    apps:[

        "PowerPoint",
        "Illustrator",
        "Canva"

    ],

    images:[

        "images/assets/ui_miiex_a.webp",
        "images/assets/ui_miiex_b.webp"

    ]

},
	
	
	
	lugo:{

    type:"INDIVIDUAL PROJECT",

    title:"LUGO",

    role:"UI Designer",

    description:"A poster of a  mobile application interface focused on usability, accessibility and clean visual hierarchy.",

    apps:[

        "Illustrator"

    ],

    images:[

        "images/assets/ui_lugo.webp"

    ]

}	,
	
	
	
		/* --------------BRANDING-------------*/
	
	
branding_commquest:{

    type:"EVENT",

    title:"CommQuest Arena 2.0",

    role:"Head of Design Bureau • Creative Lead",

    description:"Led the visual identity of CommQuest Arena 2.0 by designing tournament branding, promotional materials, social media content, merchandise, stage visuals and event assets while ensuring a consistent brand experience throughout the competition.",

    apps:[

        "Illustrator",
        "Photoshop",
        "Canva"

    ],

    images:[

        "images/assets/br_cq_a.webp",
        "images/assets/br_cq_b.webp",
        "images/assets/br_cq_c.webp",
		"images/assets/br_cq_d.webp",
		"images/assets/br_cq_e.webp",
		"images/assets/br_cq_f.webp",
		"images/assets/br_cq_g.webp"
		

    ]

},



tagged:{

    type:"GROUP PROJECT",

    title:"TAGGED",

    role:"Brand Identity Designer",

    description:"Developed a fake jewellery brand centered around meaningful human connections by creating its visual identity, packaging concepts, promotional materials and cohesive branding system.",

    apps:[

        "Illustrator",
        "Photoshop",
        "Figma"

    ],

    images:[

        "images/assets/br_tagged_a.webp",
        "images/assets/br_tagged_b.webp",
        "images/assets/br_tagged_c.webp"

    ]

},



nunu:{

    type:"INDIVIDUAL PROJECT",

    title:"ROB & NUNU",

    role:"Branding Designer",

    description:"Photographed for Republic Of Brownies,ROB & NUNU for product presentation, promotional visuals and brand communication focused on highlighting the products through clean, authentic and raw imageries.",

    apps:[

        "NONE - Raw images shot on Canon R50"

    ],

    images:[

        "images/assets/br_nunu_a.webp",
        "images/assets/br_nunu_b.webp",
        "images/assets/br_nunu_c.webp",
		"images/assets/br_nunu_d.webp"

    ]

},



ewah:{

    type:"EVENT",

    title:"EWAH",

    role:"Branding Designer",

    description:"Created promotional and branding materials for EWAH by developing engaging marketing visuals that strengthened brand recognition across both digital and printed platforms.",

    apps:[

        "Illustrator",
        "Photoshop"

    ],

    images:[

        "images/assets/br_ewah_a.webp",
        "images/assets/br_ewah_b.webp",
		"images/assets/br_ewah_c.webp"

    ]

},



marketing:{

    type:"INDIVIDUAL PROJECT",

    title:"Marketing Materials",

    role:"Graphic Designer",

    description:"Designed a collection of marketing materials including posters, brochures, flyers and promotional graphics for various academic projects and events while maintaining clear visual communication and strong brand consistency.",

    apps:[

        "Illustrator",
        "Photoshop",
        "Canva"

    ],

    images:[

        "images/assets/br_marketing_a.webp",
        "images/assets/br_marketing_b.webp",
        "images/assets/br_marketing_d.webp",
		"images/assets/br_marketing_e.webp",
		"images/assets/br_marketing_f.webp",
		"images/assets/br_marketing_g.webp",
		"images/assets/br_marketing_h.webp"
       

    ]

},
	
	
	
	lenscation:{

    category:"video",

    title:"Vlog & Documentary",

    video:
		
		"https://www.youtube.com/embed/vgHrhNeyVBE",
		

},
	
	
	
	pudding:{

    category:"video",

    title:"Animations",

    video:"https://www.youtube.com/embed/reNdmcow0E4"

},
	
	
	
	royalcanin:{

    category:"video",

    title:"3D Projects",

    video:"https://www.youtube.com/embed/U9RwvBJIKVk"

},
	documentary:{

    category:"video",

    title:"Masjid Documentary",

    video:"https://www.youtube.com/embed/m6F8WZRonxM"

},


elementraintro:{

    category:"video",

    title:"Elementra Game Intro",

    video:"https://www.youtube.com/embed/Y2Mhjpz5cw4"

},


dreamhouse:{

    category:"video",

    title:"Dream House",

    video:"https://www.youtube.com/embed/xyNIrZTRx4U"

},


elementrabooth:{

    category:"gallery",

    title:"Elementra Game Level Design",

    images:[

        "images/assets/3d_elementra_a.webp",
		"images/assets/3d_elementra_b.webp",
		"images/assets/3d_elementra_c.webp",
		"images/assets/3d_elementra_d.webp",
		"images/assets/3d_elementra_e.webp",


    ]

},


oatside:{

    category:"gallery",

    title:"Oatside 3D Booth",

    images:[

        "images/assets/3d_oatside_a.webp",
"images/assets/3d_oatside_b.webp",
		"images/assets/3d_oatside_c.webp",
		"images/assets/3d_oatside_d.webp"

    ]

},
	
	
visualart:{

    category:"gallery",

    title:"Visual Arts",

    images:[

        "images/assets/multimedia_art_a.webp",
        "images/assets/multimedia_art_b.webp",
        "images/assets/multimedia_art_c.webp",
        "images/assets/multimedia_art_d.webp",
        "images/assets/multimedia_art_e.webp",
        "images/assets/multimedia_art_f.webp",
		"images/assets/multimedia_art_g.webp",

    ]

},
	
photography:{

    category:"gallery",

    title:"Photography",

    images:[

        "images/assets/multimedia_photo_a.webp",
        "images/assets/multimedia_photo_b.webp",
        "images/assets/multimedia_photo_c.webp",
        "images/assets/multimedia_photo_d.webp",
        "images/assets/multimedia_photo_e.webp",
        "images/assets/multimedia_photo_f.webp",
		"images/assets/multimedia_photo_g.webp",
		"images/assets/multimedia_photo_h.webp",
		"images/assets/multimedia_photo_i.webp",
		"images/assets/multimedia_photo_j.webp",
		"images/assets/multimedia_photo_k.webp",
		"images/assets/multimedia_photo_l.webp",
		"images/assets/multimedia_photo_m.webp",


    ]

},
	
	
	
};








const projectModal = document.getElementById("projectModal");

const popupImage = document.getElementById("popupImage");

const popupTitle = document.getElementById("popupTitle");

const popupType = document.getElementById("popupType");

const popupRole = document.getElementById("popupRole");

const popupDescription = document.getElementById("popupDescription");

const popupApps = document.getElementById("popupApps");

const currentImage = document.getElementById("currentImage");

const popupVideo =
document.getElementById("popupVideo");

const modalRight =
document.querySelector(".modal-right");

const popupCounter =
document.querySelector(".popup-counter");

const totalImages = document.getElementById("totalImages");

const leftArrow = document.getElementById("leftArrow");

const rightArrow = document.getElementById("rightArrow");

const closeModal = document.getElementById("closeModal");

const backModal =
document.getElementById("backModal");

const projectCards = document.querySelectorAll(".project-card");

const tabButtons = document.querySelectorAll(".tab-btn");

const projectGrids = document.querySelectorAll(".project-grid");




/*==============================
MULTIMEDIA SELECTOR
==============================*/

const selectorModal =
document.getElementById("selectorModal");

selectorModal.addEventListener("click",(e)=>{

    if(e.target === selectorModal){

        selectorModal.classList.remove("show");

    }

});


const selectorTitle =
document.getElementById("selectorTitle");

const selectorList =
document.getElementById("selectorList");

const closeSelector =
document.getElementById("closeSelector");





let activeProject = null;

let activeImageIndex = 0;



/*==============================
MULTIMEDIA MEMORY
==============================*/

let currentSelector = null;





function updateImage(){

    const container = document.querySelector(".image-container");

    container.style.opacity = "0";

    setTimeout(()=>{

        popupImage.src =
        activeProject.images[activeImageIndex];

        currentImage.textContent =
        String(activeImageIndex + 1).padStart(2,"0");

        container.style.opacity = "1";

    },180);

}





function loadProject(project){

    activeProject = project;

    activeImageIndex = 0;

    const modalBox =
    document.querySelector(".modal-box");

    modalBox.classList.remove("gallery-mode");
    modalBox.classList.remove("video-mode");

	/*==============================
VIDEO MODE
==============================*/

if(project.category === "video"){

    popupImage.style.display = "none";

    popupVideo.style.display = "block";

    popupVideo.src = "";

setTimeout(()=>{

    popupVideo.src = project.video;

},50);

    modalRight.style.display = "none";

    leftArrow.style.display = "none";

    rightArrow.style.display = "none";

    popupCounter.style.display = "none";
	
	modalBox.classList.add("video-mode");

    return;

}
	
	
	
/*==============================
GALLERY MODE
==============================*/

if(project.category === "gallery"){

    popupVideo.style.display = "none";
	
    popupVideo.src = "";

    popupImage.style.display = "block";

    modalRight.style.display = "none";

    popupCounter.style.display = "flex";

    activeProject = project;
    activeImageIndex = 0;

    updateImage();

    totalImages.textContent =
    String(project.images.length).padStart(2,"0");

    leftArrow.style.display = "";
    rightArrow.style.display = "";

    modalBox.classList.add("gallery-mode");

    return;

}
	
	
	

	/*==============================
IMAGE MODE
==============================*/

popupVideo.style.display = "none";
	
		document  
		.querySelector(".modal-box")
		.classList
		.remove("gallery-mode");

popupVideo.src = "";

popupImage.style.display = "block";

modalRight.style.display = "flex";

popupCounter.style.display = "flex";
	
	
	document
		.querySelector(".modal-box")
		.classList
		.remove("video-mode");
	
	
    modalBox.classList.add("changing");

    setTimeout(()=>{

        popupType.textContent = project.type;

        popupTitle.textContent = project.title;

        popupRole.textContent = project.role;

        popupDescription.textContent = project.description;

        updateImage();

        totalImages.textContent =
        String(project.images.length).padStart(2,"0");

        popupApps.innerHTML = "";

        project.apps.forEach(app=>{

            popupApps.innerHTML +=
            `<span>${app}</span>`;

        });

    if(project.images.length <= 1){

        leftArrow.style.display = "none";
        rightArrow.style.display = "none";

    }else{

        leftArrow.style.display = "";
        rightArrow.style.display = "";

    }

    modalBox.classList.remove("changing");

},180);


	
}



loadProject(projectData.hobby);


function hideModal(){

    projectModal.classList.remove("show");

    popupVideo.src = "";

    backModal.style.display = "none";

}






closeModal.addEventListener("click",()=>{

    hideModal();

});





backModal.addEventListener("click",()=>{

    hideModal();

    if(currentSelector){

        openSelector(

            currentSelector.title,

            currentSelector.items

        );

    }

});


/*==============================
OPEN SELECTOR
==============================*/

function openSelector(title, items){
	
	currentSelector = {

    title,

    items

};

    selectorTitle.textContent = title;

    selectorList.innerHTML = "";

    items.forEach(item=>{

        selectorList.innerHTML += `
<div class="selector-item">

    <div class="selector-info">

        <span class="selector-bar"></span>

        <div class="selector-text">

            <h4>${item.title}</h4>

            <p>${item.subtitle}</p>

        </div>

    </div>

    <button
    class="selector-view"
    data-project="${item.project}">

        EXPLORE ↗

    </button>

</div>

        `;

    });

    selectorModal.classList.add("show");

}


closeSelector.addEventListener("click",()=>{

    selectorModal.classList.remove("show");

});




/*==============================
SELECTOR VIEW BUTTON
==============================*/

selectorList.addEventListener("click",(e)=>{

    if(!e.target.classList.contains("selector-view")) return;

    const projectName = e.target.dataset.project;

    selectorModal.classList.remove("show");

    loadProject(projectData[projectName]);

    backModal.style.display = "block";

    projectModal.classList.add("show");

});





projectCards.forEach(card=>{

    card.addEventListener("click",()=>{

        const projectName = card.dataset.project;

        /*==============================
        MULTIMEDIA SELECTORS
        ==============================*/

        if(projectName === "lenscation"){

            openSelector("Vlog & Documentary",[

                {
                    title:"▶ Lenscation",
                    subtitle:"Travel Vlog",
                    project:"lenscation"
                },

                {
                    title:"▶ Masjid Documentary",
                    subtitle:"Documentary",
                    project:"documentary"
                }

            ]);

            return;

        }

        if(projectName === "pudding"){

            openSelector("Animations",[

                {
                    title:"▶ Pudding",
                    subtitle:"Character Animation",
                    project:"pudding"
                },

                {
                    title:"▶ Royal Canin",
                    subtitle:"Commercial Animation",
                    project:"royalcanin"
                },

                {
                    title:"▶ Elementra Game Intro",
                    subtitle:"Game Opening Animation",
                    project:"elementraintro"
                }

            ]);

            return;

        }

        if(projectName === "royalcanin"){

            openSelector("3D Design",[

                {
                    title:"▶ Dream House",
                    subtitle:"3D Walkthrough",
                    project:"dreamhouse"
                },

                {
                    title:"Elementra Booth",
                    subtitle:"Image Gallery",
                    project:"elementrabooth"
                },

                {
                    title:"Oatside Booth",
                    subtitle:"Image Gallery",
                    project:"oatside"
                }

            ]);

            return;

        }

/*==============================
NORMAL PROJECTS
==============================*/

backModal.style.display = "none";

currentSelector = null;

loadProject(projectData[projectName]);

projectModal.classList.add("show");
 });

});





projectModal.addEventListener("click",(e)=>{

    if(e.target === projectModal){

       hideModal();

    }

});






document.addEventListener("keydown",(e)=>{

    if(e.key === "Escape"){

        hideModal();

    }

});




rightArrow.addEventListener("click",()=>{

    if(activeImageIndex < activeProject.images.length - 1){

        activeImageIndex++;

    }else{

        activeImageIndex = 0;

    }

    updateImage();

});



leftArrow.addEventListener("click",()=>{

    if(activeImageIndex > 0){

        activeImageIndex--;

    }else{

        activeImageIndex =
        activeProject.images.length - 1;

    }

    updateImage();

});




tabButtons.forEach(button=>{

    button.addEventListener("click",()=>{

        tabButtons.forEach(btn=>{

            btn.classList.remove("active");

        });

        button.classList.add("active");

        projectGrids.forEach(grid=>{

            grid.classList.remove("active-grid");

        });

        document
        .getElementById(button.dataset.tab)
        .classList.add("active-grid");

    });

});



/*==================================================

SECTION E : EXPERIENCE TOGGLE

==================================================*/

const experienceToggle =
document.getElementById("experienceToggle");

const experienceMore =
document.getElementById("experienceMore");

const toggleText =
document.querySelector(".toggle-text");

const toggleArrow =
document.querySelector(".toggle-arrow");

experienceToggle.addEventListener("click",()=>{

    experienceMore.classList.toggle("show");

    if(experienceMore.classList.contains("show")){

        toggleText.textContent = "Less Extracurricular";

        toggleArrow.textContent = "⌃";

    }else{

        toggleText.textContent = "More Extracurricular";

        toggleArrow.textContent = "⌄";

    }

});




const reveals = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:.2
});

reveals.forEach(item=>revealObserver.observe(item));




const miniCards = document.querySelectorAll(".mini-exp");

miniCards.forEach(card=>{

    card.addEventListener("click",()=>{

        miniCards.forEach(item=>{

            item.classList.remove("active");

        });

        card.classList.add("active");

    });

});


const experienceCards = document.querySelectorAll(".experience-card");

experienceCards.forEach(card=>{

    card.addEventListener("click",()=>{

        experienceCards.forEach(item=>{

            item.classList.remove("active");

        });

        card.classList.add("active");

    });

});

if(experienceCards.length){

    experienceCards[0].classList.add("active");

}