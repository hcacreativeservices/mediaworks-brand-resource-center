const navHTML = `
<div class="nav-item">
<a
  href="https://hcamediaworks.saepio.com/marketport/marketinghub.xhtml?go=openCategory_1557"
  class="nav-primary"
  >Home</a
>
</div>
<div class="nav-item">
<a
  href="https://hcamediaworks.saepio.com/marketport/marketinghub.xhtml?go=openCategory_1563"
  class="nav-primary"
  >Our Lexicon</a
>
</div>
<div class="nav-item">
<a
  href="https://hcamediaworks.saepio.com/marketport/marketinghub.xhtml?go=openCategory_3275"
  class="nav-primary"
  >Our Brand Architecture</a
>
</div>
<div class="nav-item">
<a
  href="https://hcamediaworks.saepio.com/marketport/marketinghub.xhtml?go=openCategory_2295"
  class="nav-primary design-system-nav-item"
  >Our Design System</a
>
</div>
<!-- Nav Item -->

<div class="nav-item">
<a
  href="https://hcamediaworks.saepio.com/marketport/marketinghub.xhtml?go=openCategory_1777"
  class="nav-primary"
  >Our Templates</a
>
</div>
<!-- Nav Item -->

<div class="nav-item">
<a
  href="https://hcamediaworks.saepio.com/marketport/marketinghub.xhtml?go=openCategory_2387"
  class="nav-primary"
  >Brand Essentials</a
>
</div>

<div class="nav-item">
<a
  href="https://hcamediaworks.saepio.com/marketport/marketinghub.xhtml?go=openCategory_2291"
  class="nav-primary"
  >FAQ</a
>
</div>

`;

const designSubNav = `
<div class="nav-item">
<a
  href="https://hcamediaworks.saepio.com/marketport/marketinghub.xhtml?go=openCategory_2295"
  class="nav-primary logo-menu-item"
  >Logo</a
>
</div>

<div class="nav-item">
<a
  href="https://hcamediaworks.saepio.com/marketport/marketinghub.xhtml?go=openCategory_3820"
  class="nav-primary typography-menu-item"
  >Typography</a
>
</div>

<div class="nav-item">
<a
  href="https://hcamediaworks.saepio.com/marketport/marketinghub.xhtml?go=openCategory_2299"
  class="nav-primary"
  >Color</a
>
</div>

<div class="nav-item">
<a
  href="https://hcamediaworks.saepio.com/marketport/marketinghub.xhtml?go=openCategory_3822"
  class="nav-primary"
  >Graphic shapes</a
>
</div>

<div class="nav-item">
<a
  href="https://hcamediaworks.saepio.com/marketport/marketinghub.xhtml?go=openCategory_2298"
  class="nav-primary"
  >Patterns</a
>
</div>

<div class="nav-item">
<a
  href="https://hcamediaworks.saepio.com/marketport/marketinghub.xhtml?go=openCategory_2296"
  class="nav-primary"
  >Icons</a
>
</div>

<div class="nav-item">
<a
  href="https://hcamediaworks.saepio.com/marketport/marketinghub.xhtml?go=openCategory_1796"
  class="nav-primary"
  >Photography</a
>
</div>

<div class="nav-item">
<a
  href="https://hcamediaworks.saepio.com/marketport/marketinghub.xhtml?go=openCategory_2297"
  class="nav-primary"
  >Maps</a
>
</div>

<div class="nav-item">
<a
  href="https://hcamediaworks.saepio.com/marketport/marketinghub.xhtml?go=openCategory_3821"
  class="nav-primary"
  >Digital design</a
>
</div>

<div class="nav-item">
<a
  href="https://hcamediaworks.saepio.com/marketport/marketinghub.xhtml?go=openCategory_2329"
  class="nav-primary"
  >Designer resources</a
>
</div>

`;

const templatesSubNav = `
<div class="nav-item">

<a
  href="https://hcamediaworks.saepio.com/marketport/marketinghub.xhtml?go=openCategory_1777"
  class="nav-primary"
  >Stationary</a
>
</div>

<div class="nav-item">
<a
  href="https://hcamediaworks.saepio.com/marketport/marketinghub.xhtml?go=openCategory_1788"
  class="nav-primary"
  >Digital templates</a
>
</div>

<div class="nav-item">
<a
  href="https://hcamediaworks.saepio.com/marketport/marketinghub.xhtml?go=openCategory_1787"
  class="nav-primary"
  >Print templates</a
>
</div>

`;

const footerHTML = `
<div class="footer-content">
  <p>
    Questions? Concerns?
    <a href="https://hca.my.workfront.com/requests?projectID=5e3c40b6004eeffdfc20ed48ebe73067&path=&activeTab=tab-new-helpRequest">Contact.</a>
  </p>
</div>

<div class="footer-logo">
  <img src="../../img/logo.png" alt="HCA Logo" />
</div>
`;

// Insert nav items on all pages
document.getElementById('nav').innerHTML = navHTML;

// insert designs sub nav on all designs pages
if(document.getElementById('designsSubNav')) {
  document.getElementById('designsSubNav').innerHTML = designSubNav;
}

// insert templates subnav on all templates pages
if(document.getElementById('templatesSubNav')) {
  document.getElementById('templatesSubNav').innerHTML = templatesSubNav;
}

//insert footer content on all pages
document.getElementById('footer').innerHTML = footerHTML;