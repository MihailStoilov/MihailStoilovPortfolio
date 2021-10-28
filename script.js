/*-----navigation menu----------*/
(() =>{
    const hamburgerBtn = document.querySelector(".hamburger-btn"),
    navMenu = document.querySelector(".nav-menu"),
    closeNavBtn = navMenu.querySelector(".close-nav-menu");

    hamburgerBtn.addEventListener("click", showNavMenu);
    closeNavBtn.addEventListener("click", hideNavMenu);

    function showNavMenu(){
        navMenu.classList.add("open");
        
    }
    function hideNavMenu(){
        navMenu.classList.remove("open");
        fadeOutEffect();
        
    }
    function fadeOutEffect(){
        document.querySelector(".fade-out-effect").classList.add("active");
        setTimeout(() =>{
            document.querySelector(".fade-out-effect").classList.remove("active");
        },300)
    }
    // atach an event handler to document
    document.addEventListener("click", (event) =>{
        if(event.target.classList.contains('link-item')){
            if(event.target.hash !==""){
                event.preventDefault();
                const hash = event.target.hash;
                // deactivate existing active section
                document.querySelector(".section.active").classList.add("hide");
                document.querySelector(".section.active").classList.remove("active");
                // active new section
                document.querySelector(hash).classList.add("active");
                document.querySelector(hash).classList.remove("hide");
                // deactivatte existing active navigation menu link item
                navMenu.querySelector(".active").classList.add("outer-shadow", "hover-in-shadow");
                navMenu.querySelector(".active").classList.remove("active", "inner-shadow");
                // if clicked link-item is contained whithin the navigation menu
                if(navMenu.classList.contains("open")){

                
                  // activate new navigation menu link item
                  event.target.classList.add("active","inner-shadow");
                  event.target.classList.remove("outer-shadow","hover-in-shadow");
                  // hide nav menu
                hideNavMenu();
                }
                else{
                    let navItems = navMenu.querySelectorAll(".link-item");
                    navItems.forEach((item) =>{
                        if(hash === item.hash){
                            //activate new navigation menu
                            item.classList.add("active","inner-shadow");
                            item.classList.remove("outer-shadow","hover-in-shadow");
                        }
                    })
                    fadeOutEffect();
                }
                // add hash (#) to url
                window.location.hash = hash;
            }
        }
       
    })
})();


// about section tabs

(() =>{
    const aboutSection = document.querySelector(".about-section"),
    tabsContainer = document.querySelector(".about-tabs");

    tabsContainer.addEventListener("click", (event) =>{
        if(event.target.classList.contains("tab-item") && !event.target.classList.contains("active")){
            const target = event.target.getAttribute("data-target");
            tabsContainer.querySelector(".active").classList.remove("outer-shadow", "active");
            event.target.classList.add("active", "outer-shadow");
            aboutSection.querySelector(".tab-content.active").classList.remove("active");
            aboutSection.querySelector(target).classList.add("active");
        }
    })
})();

/*-------------------portfolio filter and popup */ 

(() =>{
    const filterContainer = document.querySelector(".portfolio-filter"),
    portfolioItemsContainer = document.querySelector(".portfolio-items"),
    portfolioItems = document.querySelectorAll("portfolio-item"),
    popup = document.querySelector(".portfolio-popup"),
    prevBtn = popup.querySelector(".pp-prev"),
    nextBtn = popup.querySelector(".pp-next"),
    closeBtn = popup.querySelector(".pp-close"),
    projectDetailsContainer = popup.querySelector(".pp-details"),
    projectDetailsBtn = popup.querySelector(".pp-project-details-btn");
    
    let itemIndex, slideIndex, screenshots;

    filterContainer.addEventListener("click", (event)=>{
        if(event.target.classList.contains("filter-item") && !event.target.classList.contains("active")){
            filterContainer.querySelector(".active").classList.remove("outer-shadow", "active");
            event.target.classList.add("active", "outer-shadow");
            const target = event.target.getAttribute("data-target");
            portfolioItems.forEach((item) =>{
                if(target === item.getAttribute("data-category") || target === 'all'){
                    item.classList.remove("hide");
                    item.classList.add("show");
                }
                else{
                    item.classList.remove("show");
                    item.classList.add("hide");
                }
            })
            
        }
        
    })
    // portfolioItemsContainer.addEventListener("click", (event) =>{
    //     if(event.target.closest(".portfolio-item-inner")){
    //         const portfolioItem = event.target.closest(".portfolio-item-inner").parentElement;
    //         itemIndex = Array.from(portfolioItem.parentElement.children).indexOf(portfolioItem);
    //         screenshots = portfolioItems[itemIndex].querySelector(".portfolio-item-img img").getAttribute("data-screenshots");
    //         screenshots = screenshots.split(",");
    //         slideIndex = 0;
    //         popupToggle()
            
    //     }
    // })
    // function popupToggle(){
    //     popup.classList.toggle("open");
    // }
    projectDetailsBtn.addEventListener("click",() =>{
        popupDetailsToggle();
    })
    
    
    function popupDetailsToggle(){
        if(projectDetailsContainer.classList.contains("active")){
            projectDetailsBtn.querySelector("i").classList.remove("fa-minus");
            projectDetailsBtn.querySelector("i").classList.add("fa-plus");
            projectDetailsContainer.classList.remove("active");
            projectDetailsContainer.style.maxHeight = 0 + "px";
        }
        else{
            projectDetailsBtn.querySelector("i").classList.remove("fa-plus");
            projectDetailsBtn.querySelector("i").classList.add("fa-minus");
            projectDetailsContainer.classList.add("active");
            projectDetailsContainer.style.maxHeight = projectDetailsContainer.scrollHeight + "px";
        }
    }
    
})();
let popUp = document.getElementById("portfolioPopup");
let popupUni = document.getElementById("portfolioPopupUni");
let popupTravel = document.getElementById("portfolioPopupTravel");
let popupFoods = document.getElementById("portfolioPopupFoods");
let popupPortfolio = document.getElementById("portfolioPopupPortfolio");
let closePopupBtn = document.getElementById("closePop");

function openPopup(){
    popUp.style.visibility = "visible";
    popUp.style.opacity = 1;
}

function openPopupTravel(){
    popupTravel.style.visibility = "visible";
    popupTravel.style.opacity = 1;
}

function openPopupUni(){
    popupUni.style.visibility = "visible"
    popupUni.style.opacity = 1
}

function openPopupFoods(){
    popupFoods.style.visibility = "visible"
    popupFoods.style.opacity = 1
}
function openPopupPortfolio(){
    popupPortfolio.style.visibility = "visible";
    popupPortfolio.style.opacity = 1
}

function closePopup(){
    popUp.style.visibility = "hidden";
    popupTravel.style.visibility = "hidden";
    popUp.style.opacity = 0;
    popupTravel.style.opacity = 0;
    popupUni.style.visibility = "hidden"
    popupUni.style.opacity = 0
    popupFoods.style.visibility = "hidden"
    popupFoods.style.opacity = 0
    popupPortfolio.style.visibility = "hidden";
    popupPortfolio.style.opacity = 0
}


// hide all sections except active

(() =>{
    const sections = document.querySelectorAll(".section");
    sections.forEach((section) =>{
        if(!section.classList.contains("active")){
            section.classList.add("hide");
        }
    })
})();

