/*

=================================
* Feedify - Admin Dashboard
=================================

*/

"use strict";
const d = document;
d.addEventListener("DOMContentLoaded", function (event) {

  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: 'btn btn-primary me-3 px-5',
      cancelButton: 'btn btn-gray'
    },
    buttonsStyling: false
  });

  // options
  const breakpoints = {
    sm: 540,
    md: 720,
    lg: 960,
    xl: 1140
  };

  var sidebar = document.getElementById('sidebarMenu')
  if (sidebar && d.body.clientWidth < breakpoints.lg) {
    sidebar.addEventListener('shown.bs.collapse', function () {
      document.querySelector('body').style.position = 'relative';
    });
    sidebar.addEventListener('hidden.bs.collapse', function () {
      document.querySelector('body').style.position = 'relative';
    });
  }

  var iconNotifications = d.querySelector('.notification-bell');
  if (iconNotifications) {
    iconNotifications.addEventListener('shown.bs.dropdown', function () {
      iconNotifications.classList.remove('unread');
    });
  }

  [].slice.call(d.querySelectorAll('[data-background]')).map(function (el) {
    el.style.background = 'url(' + el.getAttribute('data-background') + ')';
  });

  [].slice.call(d.querySelectorAll('[data-background-lg]')).map(function (el) {
    if (document.body.clientWidth > breakpoints.lg) {
      el.style.background = 'url(' + el.getAttribute('data-background-lg') + ')';
    }
  });

  [].slice.call(d.querySelectorAll('[data-background-color]')).map(function (el) {
    el.style.background = 'url(' + el.getAttribute('data-background-color') + ')';
  });

  [].slice.call(d.querySelectorAll('[data-color]')).map(function (el) {
    el.style.color = 'url(' + el.getAttribute('data-color') + ')';
  });

  //Tooltips
  var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
  })


  // Popovers
  var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
  var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
    return new bootstrap.Popover(popoverTriggerEl)
  })


  // Datepicker
  var datepickers = [].slice.call(d.querySelectorAll('[data-datepicker]'))
  var datepickersList = datepickers.map(function (el) {
    return new Datepicker(el, {
      buttonClass: 'btn'
    });
  })

  if (d.querySelector('.input-slider-container')) {
    [].slice.call(d.querySelectorAll('.input-slider-container')).map(function (el) {
      var slider = el.querySelector(':scope .input-slider');
      var sliderId = slider.getAttribute('id');
      var minValue = slider.getAttribute('data-range-value-min');
      var maxValue = slider.getAttribute('data-range-value-max');

      var sliderValue = el.querySelector(':scope .range-slider-value');
      var sliderValueId = sliderValue.getAttribute('id');
      var startValue = sliderValue.getAttribute('data-range-value-low');

      var c = d.getElementById(sliderId),
        id = d.getElementById(sliderValueId);

      noUiSlider.create(c, {
        start: [parseInt(startValue)],
        connect: [true, false],
        //step: 1000,
        range: {
          'min': [parseInt(minValue)],
          'max': [parseInt(maxValue)]
        }
      });
    });
  }

  if (d.getElementById('input-slider-range')) {
    var c = d.getElementById("input-slider-range"),
      low = d.getElementById("input-slider-range-value-low"),
      e = d.getElementById("input-slider-range-value-high"),
      f = [d, e];

    noUiSlider.create(c, {
      start: [parseInt(low.getAttribute('data-range-value-low')), parseInt(e.getAttribute('data-range-value-high'))],
      connect: !0,
      tooltips: true,
      range: {
        min: parseInt(c.getAttribute('data-range-value-min')),
        max: parseInt(c.getAttribute('data-range-value-max'))
      }
    }), c.noUiSlider.on("update", function (a, b) {
      f[b].textContent = a[b]
    });
  }

  //Chartist

  if (d.querySelector('.chart-subscribers')) {
    //Chart 5
    new Chartist.Line('.chart-subscribers', {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sep', 'Oc', 'Nov', 'Dec'],
      series: [{
        name: 'Subscriber Gain',
        data: [5, 5, 10, 10, 15, 10, 15, 25, 30, 20, 25, 15]
      }]
    }, {
      lineSmooth: Chartist.Interpolation.cardinal({
        tension: 0.0
      }),
      low: 0,
      // high: 100, 
      onlyInteger: true,
      // scaleMinSpace: 5,
      // referenceValue: 5,
      // divisor: 5,
      // ticks: [5, 10, 15, 20, 25, 30],

      showLine: true,
      areaBase: 0,

      lineSmooth: false,
      showGridBackground: false,
      showArea: true,
      showPoint: true,
      fullWidth: true,
      plugins: [
        Chartist.plugins.tooltip()
      ],
      axisX: {
        // On the x-axis start means top and end means bottom
        offset: 30,
        position: 'end',
        showLabel: true,
        showGrid: false
      },
      axisY: {
        // On the y-axis start means left and end means right
        offset: 30,
        showGrid: true,
        showLabel: true,
        // offset: 10,
        // scaleMinSpace: 5,
        labelInterpolationFnc: function (value) {
          return '' + value + '';
          // return '$' + (value / 1) + 'k';
        }
      },
      chartPadding: {
        top: 15,
        right: 15,
        bottom: 15,
        left: 15
      },
      classNames: {
        chart: 'ct-chart-line',
        label: 'ct-label',
        labelGroup: 'ct-labels',
        series: 'ct-series',
        line: 'ct-line',
        point: 'ct-point',
        area: 'ct-area',
        grid: 'ct-grid',
        gridGroup: 'ct-grids',
        gridBackground: 'ct-grid-background',
        vertical: 'ct-vertical',
        horizontal: 'ct-horizontal',
        start: 'ct-start',
        end: 'ct-end'
      }
    });
  }
  if (d.querySelector('.ct-chart-sales-value')) {
    //Chart 5
    new Chartist.Line('.ct-chart-sales-value', {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sep', 'Oc', 'Nov', 'Dec'],
      series: [{
        name: 'Subscriber Gain',
        data: [5, 5, 10, 10, 15, 10, 15, 25, 30, 20, 25, 15]
      }]
    }, {
      lineSmooth: Chartist.Interpolation.cardinal({
        tension: 0.0
      }),
      lineSmooth: false,
      minHeight: '200px',
      low: 0,
      onlyInteger: true,
      // high: 100, 
      areaBase: 5,
      referenceValue: 5,
      divisor: 5,
      scaleMinSpace: 5,
      stretch: true,
      // ticks: [5, 10, 15, 20, 25, 30],
      showLine: true,
      showGridBackground: false,
      showArea: true,
      showPoint: true,
      fullWidth: true,
      plugins: [
        Chartist.plugins.tooltip()
      ],
      axisX: {
        // On the x-axis start means top and end means bottom
        offset: 15,
        position: 'end',
        showLabel: true,
        showGrid: false
      },
      axisY: {
        // On the y-axis start means left and end means right
        offset: 15,
        showGrid: true,
        showLabel: true,
        // offset: 10,
        // scaleMinSpace: 5,
        labelInterpolationFnc: function (value) {
          return '' + value + '';
          // return '$' + (value / 1) + 'k';
        }
      },
      chartPadding: {
        top: 10,
        right: 10,
        bottom: 15,
        left: 10
      },
      classNames: {
        chart: 'ct-chart-line',
        label: 'ct-label',
        labelGroup: 'ct-labels',
        series: 'ct-series',
        line: 'ct-line',
        point: 'ct-point',
        area: 'ct-area',
        grid: 'ct-grid',
        gridGroup: 'ct-grids',
        gridBackground: 'ct-grid-background',
        vertical: 'ct-vertical',
        horizontal: 'ct-horizontal',
        start: 'ct-start',
        end: 'ct-end'
      }
    });
  }

  if (d.querySelector('.ct-chart-ranking')) {
    var chart = new Chartist.Bar('.ct-chart-ranking', {
      labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
      series: [
        [1, 5, 2, 5, 4, 3],
        [2, 3, 4, 8, 1, 2],
      ]
    }, {
      low: 0,
      showArea: true,
      plugins: [
        Chartist.plugins.tooltip()
      ],
      axisX: {
        // On the x-axis start means top and end means bottom
        position: 'end'
      },
      axisY: {
        // On the y-axis start means left and end means right
        showGrid: false,
        showLabel: false,
        offset: 0
      }
    });

    chart.on('draw', function (data) {
      if (data.type === 'line' || data.type === 'area') {
        data.element.animate({
          d: {
            begin: 2000 * data.index,
            dur: 2000,
            from: data.path.clone().scale(1, 0).translate(0, data.chartRect.height()).stringify(),
            to: data.path.clone().stringify(),
            easing: Chartist.Svg.Easing.easeOutQuint
          }
        });
      }
    });
  }

  if (d.querySelector('.subscribers-pie-graph')) {
    var data = {
      series: [
        //   {
        //   value: 10000,
        //   name: 'Total ',
        //   className: 'total-path',
        //   meta: 'Total '
        // },
        {
          value: 4000,
          name: 'Web ',
          className: 'web-path',
          meta: 'Web '
        }, {
          value: 6000,
          name: 'Mobile ',
          className: 'mobile-path',
          meta: 'Mobile '
        }]
    };

    var sum = function (a, b) { return a + b };

    new Chartist.Pie('.subscribers-pie-graph', data, {
      labelInterpolationFnc: function (value) {
        return '$' + Math.round(value) + ``;
        // return Math.round(value / data.series.reduce(sum) * 100) + '$';
      },
      // low: 0,
      // high: 8,
      chartPadding: 20,
      labelOffset: 10,
      labelPosition: 'outside',
      // labelPosition: 'inside',
      // labelDirection: 'explode',
      // labelDirection: 'neutral',
      donut: true,
      donutWidth: 20,
      startAngle: 90,
      donutSolid: true,
      fullWidth: false,
      showLabel: true,
      plugins: [
        Chartist.plugins.tooltip()
      ],
      classNames: {
        chartPie: 'ct-chart-pie',
        chartDonut: 'ct-chart-donut',
        series: 'ct-series',
        slicePie: 'ct-slice-pie',
        sliceDonut: 'ct-slice-donut',
        sliceDonutSolid: 'ct-slice-donut-solid',
        label: 'ct-label text-primary'
      },
    });
  }

  if (d.getElementById('loadOnClick')) {
    d.getElementById('loadOnClick').addEventListener('click', function () {
      var button = this;
      var loadContent = d.getElementById('extraContent');
      var allLoaded = d.getElementById('allLoadedText');

      button.classList.add('btn-loading');
      button.setAttribute('disabled', 'true');

      setTimeout(function () {
        loadContent.style.display = 'block';
        button.style.display = 'none';
        allLoaded.style.display = 'block';
      }, 1500);
    });
  }

  if (d.querySelector('.current-year')) {
    d.querySelector('.current-year').textContent = new Date().getFullYear();
  }

  // Glide JS

  if (d.querySelector('.glide')) {
    new Glide('.glide', {
      type: 'carousel',
      startAt: 0,
      perView: 3
    }).mount();
  }

  if (d.querySelector('.glide-testimonials')) {
    new Glide('.glide-testimonials', {
      type: 'carousel',
      startAt: 0,
      perView: 1,
      autoplay: 2000
    }).mount();
  }

  if (d.querySelector('.glide-clients')) {
    new Glide('.glide-clients', {
      type: 'carousel',
      startAt: 0,
      perView: 5,
      autoplay: 2000
    }).mount();
  }

  if (d.querySelector('.glide-news-widget')) {
    new Glide('.glide-news-widget', {
      type: 'carousel',
      startAt: 0,
      perView: 1,
      autoplay: 2000
    }).mount();
  }

  if (d.querySelector('.glide-autoplay')) {
    new Glide('.glide-autoplay', {
      type: 'carousel',
      startAt: 0,
      perView: 3,
      autoplay: 2000
    }).mount();
  }

});


// DATA change 

function trackChange(value, eleID) {
  let elTarget = document.querySelector(`[${eleID}]`);
  if (value.length > 1) {
    elTarget.innerHTML = value;
  }
}
function trackChangeClr(value, type, clr_type, eleID) {
  let elTarget = document.querySelector(`[${eleID}]`);
  if (value.length > 1) {
    // elTarget.innerHTML = value;
    if (clr_type == 'txt') {
      elTarget.setAttribute("style", `color: ${value};`);
      elTarget.style.color = `${value}`;
    }
    if (clr_type == 'bg') {
      elTarget.style.backgroundColor = `${value}`;
    }
  }
}

// Image Upload 
const inputEl = document.querySelector('[image-preview]');
if (inputEl === null) {
  console.log('element does NOT exist in DOM');
} else {
  console.log('element exists in DOM');
  inputEl.addEventListener('change', function () {
    var dataUpdateEl = inputEl.getAttribute("image-preview");
    if (this.files[0]) {
      var picture = new FileReader();
      picture.readAsDataURL(this.files[0]);
      picture.addEventListener('load', function (event) {
        document.getElementById(dataUpdateEl).setAttribute('src', event.target.result);
        document.getElementById(dataUpdateEl).style.display = 'block';
      });
    }
  });
}
// if (document.querySelector('[image-preview]')) {
//   console.log("Element exists!");
// } else {
//   console.log("Element DOES NOT exist!");
// }
// if (inputEl) {
//   console.log("Element exists!");
// } else {
//   console.log("Element DOES NOT exist!");
// }

/* Bootstrap 5 JS included */
/* vanillajs-datepicker 1.1.4 JS included */

const getDatePickerTitle = elem => {
  // From the label or the aria-label
  const label = elem.nextElementSibling;
  let titleText = '';
  if (label && label.tagName === 'LABEL') {
    titleText = label.textContent;
  } else {
    titleText = elem.getAttribute('aria-label') || '';
  }
  return titleText;
}

const elems = document.querySelectorAll('.datepicker_input');
for (const elem of elems) {
  const datepicker = new Datepicker(elem, {
    'format': 'dd/mm/yyyy', // UK format
    title: getDatePickerTitle(elem)
  });
}