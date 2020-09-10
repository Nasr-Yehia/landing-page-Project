/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
 */

/**
 * Define Global Variables
 * 
 */

// sections variables 
const sections = document.querySelectorAll('section');

// Global variables for the navigation menu
const navbarList = document.getElementById('navbar__list');

// build the navigation bar 
const buildNavbar = () => {
    // Build Menu by new DocumentFragment interface.
    let menuList = new DocumentFragment();

    for (const section of sections) {
        // Create new Li elements.
        let li = document.createElement('li');
        // Get section id.
        const sectionId = section.id;
        // Get attribute 'data-nav' for section.
        const dataNavSection = section.dataset.nav;
        // Create links for navigation list.
        const navigationList = `<a class="menu__link" href="#${sectionId}">${dataNavSection}</a>`;
        // Append links to Li Elements.
        li.innerHTML = navigationList;
        // Append LI elements to UL menu interface.
        menuList.appendChild(li);
    };
    // Append UL menu to UL element in document.
    navbarList.appendChild(menuList);
};

buildNavbar();


// Add class 'active' to section when near top of viewport
const classActivation = () => {

sections.forEach(element => {
    const itemNavId = element.id.slice(7,8) -1;
    // Get element offset in view port.
    const elementOffst = Math.floor(element.getBoundingClientRect().top);
    // Add / Remove 'active' class based on the offset of the element in view port.
    if (elementOffst < 250 && elementOffst >= -200) {
        element.classList.add('your-active-class')
        // Add CSS style to navigation items list.
        navbarList.childNodes[itemNavId].firstChild.style.cssText = 'background-color: #fff; color: #000';
    } else {
        element.classList.remove('your-active-class')
        // Remove CSS style to navigation items list.
        navbarList.childNodes[itemNavId].firstChild.style.cssText = '';
    }
});};
// Add an event to call the 'classActivation' function when scrolling.
window.addEventListener('scroll', classActivation);


// Scroll to anchor ID using scrollIntoView event
const scrollToAnchor = () => {
    // Get navigation list links.
    const linksNav = document.querySelectorAll('.navbar__menu a');
    // Get the link the user anchor from the navigation list.
    linksNav.forEach(anchorLink => {
        anchorLink.addEventListener('click', (e) => {
            e.preventDefault();
            // slice the href for section id.
            const idHref = anchorLink.getAttribute('href').slice(1,9);
            // Get the element using the section's id.
            const sctionID = document.getElementById(idHref);
            // Scroll to the element using scrollIntoView event.
            sctionID.scrollIntoView({
                behavior:'smooth',
                block: 'center'
            });
        });
    });
};

scrollToAnchor();

/**
 * End Main Functions
 * Begin Events
 * 
 */

// Scroll to the top button.

// Get 'BUTTON' element by ID.
const tbnTop = document.getElementById('tbnTop');

// The Top 'button' show or hide using an event onscroll.
window.onscroll = () => {        
    if (window.pageYOffset >= 600) {
        // Top button show when scrolling.
        tbnTop.style.cssText = "display: block";
    }else{
        // Hide the top button.
        tbnTop.style.cssText = "display: none";
    };
};
// Go up when 'Click' the button.
tbnTop.onclick = () => {window.scrollTo(0,0)};

