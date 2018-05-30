(function(window, document) {
  var layout = document.getElementById('layout'),
    menu = document.getElementById('menu'),
    menuLink = document.getElementById('menuLink'),
    content = document.getElementById('main');

  function toggleClass(element, className) {
    var classes = element.className.split(/\s+/),
      length = classes.length,
      i = 0;
    for (; i < length; i++) {
      if (classes[i] === className) {
        classes.splice(i, 1);
        break;
      }
    }
    // The className is not found
    if (length === classes.length) {
      classes.push(className);
    }
    element.className = classes.join(' ');
  }

  function toggleAll(e) {
    var active = 'active';
    e.preventDefault();
    toggleClass(layout, active);
    toggleClass(menu, active);
    toggleClass(menuLink, active);
  }
  menuLink.onclick = function(e) {
    toggleAll(e);
  };
  content.onclick = function(e) {
    if (menu.className.indexOf('active') !== -1) {
      toggleAll(e);
    }
  };
}(this, this.document));

//Vue.js
var app = new Vue({
  el: '#header-logo'
})

var app = new Vue({
  el: '#FooterUniversities'
})

var app = new Vue({
  el: '#social-icons'
})

var app = new Vue({
  el: '#research-list',
  data: {
    items: [
      { message: 'Understanding Florida’s Energy Systems (Overarching)' },
      { message: 'Enhancing Energy Efficiency and Conservation' },
      { message: 'Developing Florida’s Biomass Resources' },
      { message: 'Harnessing Florida’s Solar Resources' },
      { message: 'Ensuring Nuclear Energy & Carbon Constrained Technologies for Electric Power in Florida' },
      { message: 'Exploiting Florida’s Ocean Energy Resources' },
      { message: 'Securing our Energy Storage and Delivery Infrastructure' }
    ]
  }
})

var app = new Vue({
  el: '#hover-message',
  data: {
    message: 'Bringing Energy Solutions to Florida, the Nation and the World '
  }
})

var app = new Vue({
  el: '#button-message',
  data: {
    message: 'Please download our informational brochure'
  }
})