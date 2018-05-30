Vue.component('headerlogo', {
  template: `<div class="header">
               <img alt="FESC Logo" class="pure-img-responsive" src="img/header_logo.png">
             </div>`
})

Vue.component('footer-section', {
  template: `<ul class="uni_net">
              <li class="uni_logo">
                <a href="http://www.ufl.edu" target="_blank"><img src="img/logo_01.jpg"  alt="University of Florida"></a>
              </li>
              <li class="uni_logo">
                <a href="http://www.fsu.edu" target="_blank"><img src="img/logo_02.jpg" alt="Florida State University" ></a>
              </li>
              <li class="uni_logo">
                <a href="http://www.ucf.edu" target="_blank"><img src="http://floridaenergy.ufl.edu/wp-content/themes/fesc/images/logo_03.jpg" alt="University of Central Florida"/></a>
              </li>
              <li class="uni_logo">
                <a href="http://www.usf.edu" target="_blank"><img src="img/logo_04.jpg" alt="University of South Florida"></a>
              </li>
              <li class="uni_logo">
                <a href="http://www.famu.edu" target="_blank"><img src="img/logo_05.jpg" alt="Florida A & M University"></a>
              </li>
              <li class="uni_logo">
                <a href="http://www.fau.edu" target="_blank"><img src="img/logo_06.jpg"  alt="Florida Atlantic University"></a>
              </li>
              <li class="uni_logo">
                <a href="http://www.fgcu.edu" target="_blank"><img src="img/logo_07.jpg" alt="Florida Gulf Coast University" ></a>
              </li>
              <li class="uni_logo">
                <a href="http://www.fiu.edu" target="_blank"><img src="img/logo_08.jpg" alt="Florida International University"></a>
              </li>
              <li class="uni_logo">
                <a href="http://www.ncf.edu" target="_blank"><img src="img/logo_09.jpg" alt="New College of Florida"></a>
              </li>
              <li class="uni_logo">
                <a href="http://www.unf.edu" target="_blank"><img src="img/logo_10.jpg" alt="University of North Florida"/></a>
              </li>
              <li class="uni_logo">
                <a href="http://www.uwf.edu" target="_blank"><img src="img/logo_11.jpg" alt="University of West Florida"></a>
              </li>
              <li class="uni_logo">
                <a href="https://floridapolytechnic.org/" target="_blank"><img src=img/logo_12.jpg alt="Florida Polytechnic University"/></a>
              </li>
            </ul>`
})

Vue.component('social-menu', {
  template: `<div class="socialIcons">
              <p>- Follow Us -</p>
              <a href="#"><i id="social-fb" class="fab fa-facebook-square fa-3x social"></i></a>
              <a href="#"><i id="social-tw" class="fab fa-twitter-square fa-3x social"></i></a>
              <a href="#"><i id="social-li" class="fab fa-linkedin fa-3x social"></i></a>
            </div>`
})