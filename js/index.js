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
const logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]['img-src'])

// Do the 'a' attributes in the nav bar first
const navOne = document.querySelectorAll('a');
navOne[0].textContent = siteContent['nav']['nav-item-1'];
navOne[1].textContent = siteContent['nav']['nav-item-2'];
navOne[2].textContent = siteContent['nav']['nav-item-3'];
navOne[3].textContent = siteContent['nav']['nav-item-4'];
navOne[4].textContent = siteContent['nav']['nav-item-5'];

// cta section

// h1
const header = document.querySelector('h1');
header.textContent = siteContent['cta']['h1'];

// cta button
const ctaButton = document.querySelector('button');
ctaButton.textContent = siteContent['cta']['button'];

// cta image
const ctaLogo = document.getElementById('cta-img');
ctaLogo.setAttribute('src', siteContent['cta']['img-src']);

// main content

// h4 titles
const mainContent = document.querySelectorAll('.text-content h4');
mainContent[0].textContent = siteContent['main-content']['features-h4'];
mainContent[1].textContent = siteContent['main-content']['about-h4'];
mainContent[2].textContent = siteContent['main-content']['services-h4'];
mainContent[3].textContent = siteContent['main-content']['product-h4'];
mainContent[4].textContent = siteContent['main-content']['vision-h4'];

// main content image
const mainContentImg = document.getElementById('middle-img');
mainContentImg.setAttribute('src', siteContent['main-content']['middle-img-src']);

// main content paragraphs
const mainContentParagraphs = document.querySelectorAll('.text-content p');
mainContentParagraphs[0].textContent = siteContent['main-content']['features-content'];
mainContentParagraphs[1].textContent = siteContent['main-content']['about-content'];
mainContentParagraphs[2].textContent = siteContent['main-content']['services-content'];
mainContentParagraphs[3].textContent = siteContent['main-content']['product-content'];
mainContentParagraphs[4].textContent = siteContent['main-content']['vision-content'];

// Contact section

// contact h4
const contactTitle = document.querySelector('.contact h4');
contactTitle.textContent = siteContent['contact']['contact-h4'];

// contact info
const contactParagraphs = document.querySelectorAll('.contact p');
contactParagraphs[0].textContent = siteContent['contact']['address'];
contactParagraphs[1].textContent = siteContent['contact']['phone'];
contactParagraphs[2].textContent = siteContent['contact']['email'];

// footer
const footerCopyright = document.querySelector('footer p');
footerCopyright.textContent = siteContent['footer']['copyright'];

// change the nav text to green
navOne.forEach(x => {
  x.style.color = 'green';
})

// add two new items to the nav
const newContentOne = document.createElement('a');
newContentOne.textContent = 'new1';

const newContentTwo = document.createElement('a');
newContentTwo.textContent = 'new2';

const parent = document.querySelector('nav');
parent.appendChild(newContentOne);
parent.appendChild(newContentTwo);

// why don't they change colors? Because the nodelist is created (and the color is changed) before the content is added. If it was an html list, it would have worked. But then we wouldn't have been able to use foreach on the the elements. So, if anything should change, it is the order in which the work was run. Why the elements are not evenly spaced, I do not understand.


