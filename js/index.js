const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])
//update img for header 
let headerImg = document.getElementById("cta-img");
headerImg.setAttribute('src', siteContent["cta"]["img-src"] )
//image for middle content
let middleImg = document.getElementById("middle-img");
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);
//nav 

// let nav = document.querySelector('nav');
let navItem = document.querySelectorAll('nav a');
let nav = document.querySelector('nav');
let newNavItem = document.createElement('a');
let newNavItem2 = document.createElement('a');
newNavItem.style.color = 'green';
newNavItem2.style.color = 'green';
// const newNavItem = document.createElement('nav a');
newNavItem.textContent = "Testimonials";
nav.appendChild(newNavItem); 
newNavItem2.textContent = "Careers";
nav.appendChild(newNavItem2);
//change it to be green
navItem.forEach(function(item){
  item.style.color = 'green';
  
})
navItem[0].textContent = siteContent.nav["nav-item-1"];
navItem[1].textContent = siteContent.nav["nav-item-2"];
navItem[2].textContent = siteContent.nav["nav-item-3"];
navItem[3].textContent = siteContent.nav["nav-item-4"];
navItem[4].textContent = siteContent.nav["nav-item-5"];
navItem[5].textContent = siteContent.nav["nav-item-6"];
//cta
let ctaH1 = document.querySelector(".cta h1");
ctaH1.textContent = siteContent.cta.h1;
let btn = document.querySelector(".cta button");
btn.textContent = siteContent.cta.button;

//main content
let paraContent = document.querySelectorAll('.text-content p');
let paraH4 = document.querySelectorAll('.text-content h4');
// let featuresTitle = document.querySelector('.main-content h4');
// featuresTitle.textContent = siteContent["main-content"]["features-h4"];

//paragraph h4's 
paraH4[0].textContent = siteContent["main-content"]["features-h4"];
paraH4[1].textContent = siteContent["main-content"]["about-h4"];
paraH4[2].textContent = siteContent["main-content"]["services-h4"];
paraH4[3].textContent = siteContent["main-content"]["product-h4"];
paraH4[4].textContent = siteContent["main-content"]["vision-h4"];
//paragraph content
paraContent[0].textContent = siteContent["main-content"]["features-content"];
paraContent[1].textContent = siteContent["main-content"]["about-content"];
paraContent[2].textContent = siteContent["main-content"]["services-content"];
paraContent[3].textContent = siteContent["main-content"]["product-content"];
paraContent[4].textContent = siteContent["main-content"]["vision-content"];
//contact
let contactHeader = document.querySelector('.contact h4');
contactHeader.textContent = siteContent.contact["contact-h4"];
let contactAddress = document.querySelectorAll('.contact p');
contactAddress[0].textContent = siteContent.contact.address;
contactAddress[1].textContent = siteContent.contact.phone;
contactAddress[2].textContent = siteContent.contact.email;