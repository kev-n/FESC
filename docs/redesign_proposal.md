# **FESC Redesign Proposal**

## Purpose of FESC site redesign:
* make the site more mobile-friendly
* ensure that the navigation menu is easily accessible across various viewports
* improve loading time and accessibility

## Current State
- **Accessibility Audit using [WAVE Evaluation Tool](https://chrome.google.com/webstore/detail/wave-evaluation-tool/jbbplnpkjmmeebjpijfedlgcdilocofh) Chrome extension**
  - many of the images are missing alt text
  - missing form label for the e-mail sign-up input
  - empty h1 above the social media icons on home page
- **Mobile Friendliness**
  - navigation menu and main body have too small of a font size for mobile devices
  - unresponsive images and layouts
- **Performance**  
  - [WebPagetest](https://www.webpagetest.org/) for floridaenergy.ufl.edu using Chrome - Cable setting from Dulles, VA:
  - First Byte Time: F
  - Keep-alive Enabled: A
  - Compress Transfer: A
  - Compress Images: C
  - Cache static content: F
  - Effective use of CDN: X
  - Load time: 4.097s
  - First Byte: 0.873s
  - Start Render: 1.600s
- **Functionality**
  - Footer icons could use a redesign
  - home page: the e-mail sign up input doesn't have a submit button 
  - home page: the letter icon above the e-mail sign up links to envelope.png
- **Ease of Use**
  - confusing menu layout
  - lacks color contrast in navigation menu
  - uses static map images on the [Visit Us](http://floridaenergy.ufl.edu/about/visit-us/) instead of Google Maps

## User Research
- the main audience for this site would be students and professors
- the site serves as a hub for collaboration between various universities located in Florida
- their objective is to discover innovative and efficient energy conservation strategies

## Device Support Necessary
- Desktop
- Laptop
- Mobile
- Tablet

## Recommendations
- remove empty headers
- have an alternative text for images
- improve color scheme
- externalize styles and scripts

## Deliverables
- Optimize images: media queries based on viewport size
- Consistent color scheme across pages: style guide
- Improve navigation menu: collapsible menu
- Responsive text: make text readable on smaller viewports
- Make use of CDN, put stylesheets on top, put scripts at bottom, make JavaScript and CSS external, minify JavaScript and CSS