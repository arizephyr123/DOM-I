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
logo.setAttribute('src', siteContent["nav"]["img-src"]);
//end example

//for other 2 images
let round = document.getElementById("cta-img");
round.setAttribute('src', siteContent["cta"]["img-src"]);

let banner = document.getElementById("middle-img");
banner.setAttribute('src', siteContent["main-content"]["middle-img-src"]);
//end images


//navBarlinks
const services = document.getElementsByTagName("a")[0];
services.textContent = `${siteContent['nav']['nav-item-1']}`;

const product = document.getElementsByTagName("a")[1];
product.textContent = `${siteContent['nav']['nav-item-2']}`;

const vision = document.getElementsByTagName("a")[2];
vision.textContent = `${siteContent['nav']['nav-item-3']}`;

const features = document.getElementsByTagName("a")[3];
features.textContent = `${siteContent['nav']['nav-item-4']}`;

const about = document.getElementsByTagName("a")[4];
about.textContent = `${siteContent['nav']['nav-item-5']}`;

const contact = document.getElementsByTagName("a")[5];
contact.textContent = `${siteContent['nav']['nav-item-6']}`;


//here tried setting text with setAttr first
//let links = document.getElementsByTagName('a');
//links[0].setAttribute ('text', siteContent["nav"]["nav-item-1"]);
// links[0].textContent(siteContent["nav"]["nav-item-1"]);

//===================
//Call to action area
//image above
const awesome = document.querySelector('.cta-text h1');
console.log(awesome);
 
awesome.textContent = 
`${siteContent["cta"]["h1"]}`;

 const button = document.querySelector('.cta-text button');
 //console.log(button);

 button.textContent = `${siteContent["cta"]["button"]}`;