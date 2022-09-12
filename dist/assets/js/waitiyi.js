/*

=================================
* Waitiyi - Admin Dashboard
=================================

*/

"use strict";
const d = document;
d.addEventListener("DOMContentLoaded", function (event) {

  // const swalWithBootstrapButtons = Swal.mixin({
  //   customClass: {
  //     confirmButton: 'btn btn-primary me-3 px-5',
  //     cancelButton: 'btn btn-gray'
  //   },
  //   buttonsStyling: false
  // });

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

  //Chartist

  if (d.querySelector('.chart-subscribers')) {
    //Chart 5
    new Chartist.Line('.chart-subscribers', {
      labels: [1, 2, 3, 4, 5, 6, 7, 8],
      series: [
        [5, 9, 7, 8, 5, 3, 5, 4]
      ]
    }, {
      lineSmooth: Chartist.Interpolation.simple({
        // divisor: 1,
        tension: 1.0,
        // fillHoles: false
      }),
      // width: '120px',
      height: '60px',
      low: 0,
      onlyInteger: true,
      showArea: true,
      axisX: {
        offset: 0,
        position: 'end',
        showLabel: false,
        showGrid: false
      },
      axisY: {
        offset: 0,
        showGrid: true,
        showLabel: false,
        // offset: 10,
        // scaleMinSpace: 5,
        labelInterpolationFnc: function (value) {
          return '' + value + '';
          // return '$' + (value / 1) + 'k';
        }
      },
      chartPadding: {
        top: 1,
        right: 1,
        bottom: 1,
        left: 1
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
    //Chart 5
    new Chartist.Line('.ct-chart-ranking', {
      labels: [1, 2, 3, 4, 5, 6, 7, 8],
      series: [
        [5, 9, 7, 8, 5, 3, 5, 4]
      ]
    }, {
      lineSmooth: Chartist.Interpolation.simple({
        // divisor: 1,
        tension: 1.0,
        // fillHoles: false
      }),
      width: '120px',
      height: '60px',
      low: 0,
      onlyInteger: true,
      showArea: true,
      axisX: {
        offset: 0,
        position: 'end',
        showLabel: false,
        showGrid: false
      },
      axisY: {
        offset: 0,
        showGrid: true,
        showLabel: false,
        // offset: 10,
        // scaleMinSpace: 5,
        labelInterpolationFnc: function (value) {
          return '' + value + '';
          // return '$' + (value / 1) + 'k';
        }
      },
      chartPadding: {
        top: 1,
        right: 1,
        bottom: 1,
        left: 1
      },
    });
  }

  if (d.querySelector('.ct-chart-sales-value')) {
    new Chartist.Bar('.ct-chart-sales-value', {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      series: [
        [800000, 1200000, 1400000, 1300000, 1400000, 1300000, 1400000, 1300000, 1400000, 1300000, 1400000, 1300000],
        [200000, 400000, 500000, 300000, 1400000, 1300000, 1400000, 1300000, 1400000, 1300000, 1400000, 1300000],
      ]
    }, {
      stackBars: true,
      axisX: {
        showLabel: true,
        // offset: 0,
        position: 'end',
      },
      axisY: {
        // labelInterpolationFnc: function (value) {
        //   return (value / 1000) + 'k';
        // },
        showLabel: false,
        offset: 0,
        position: 'end'
      }
    }).on('draw', function (data) {
      if (data.type === 'bar') {
        data.element.attr({
          style: 'stroke-width: 10px'
        });
      }
    });
  }

  if (d.querySelector('.ct-chart-filter-earning')) {
    new Chartist.Bar('.ct-chart-filter-earning', {
      labels: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
      series: [
        [800000, 1200000, 1400000, 1300000, 1400000, 1300000, 1400000],
      ]
    }, {
      stackBars: true,
      axisX: {
        showLabel: true,
        // offset: 0,
        position: 'end',
      },
      axisY: {
        // labelInterpolationFnc: function (value) {
        //   return (value / 1000) + 'k';
        // },
        showLabel: false,
        offset: 0,
        position: 'end'
      },
    }).on('draw', function (data) {
      if (data.type === 'bar') {
        data.element.attr({
          style: 'stroke-width: 10px'
        });
      }
    });
  }

  if (d.querySelector('.ct-chart-filter-earning1')) {
    new Chartist.Line('.ct-chart-filter-earning1', {
      labels: ['0h', '3h', '6h', '9h', '12h'],
      series: [
        [10, 5, 5, 2, 10],
      ]
    }, {
      low: -20,
      showArea: true,
      showPoint: true,
      fullWidth: true,
      lineSmooth: Chartist.Interpolation.cardinal({
        // fillHoles: false,
        // divisor: 2,
        tension: 9
      }),
      chartPadding: {
        left: 10,
        right: 10,
      },
      axisX: {
        showLabel: true,
        offset: 12,
        position: 'end',
        // labelInterpolationFnc: function (value) {
        //   return (value / 1000) + 'k';
        // }
      },
      axisY: {
        // labelInterpolationFnc: function (value) {
        //   return (value / 1000) + 'k';
        // },
        showLabel: false,
        offset: 15,
        position: 'end',
        showGrid: false
      },
      plugins: [
        Chartist.plugins.ctPointLabels({
          textAnchor: 'middle',
          labelClass: 'ct-label',
          labelInterpolationFnc: function (value) { return '$' + value.toFixed(0) },
          labelOffset: {
            x: 0,
            y: -15
          },
        })
      ]
    }).on('draw', function (data) {
      if (data.type === 'bar') {
        data.element.attr({
          style: 'stroke-width: 10px'
        });
      }
    });
  }
  if (d.querySelector('.ct-chart-filter-earning3')) {
    var chart = new Chartist.Line('.ct-chart-filter-earning3', {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      series: [
        [34000, 50500, 82000, 105000, 114000, 150300, 185000, 200050, 215000, 240050, 260000, 280030],
        [75000, 100000, 100500, 110500, 130500, 165000, 170500, 200000, 200005, 215000, 210400, 218000],
      ]
    }, {
      low: 0,
      showArea: true,
      showPoint: false,
      fullWidth: true,
      axisX: {
        showLabel: true,
        // offset: 0,
        position: 'end',
      },
      axisY: {
        labelInterpolationFnc: function (value) {
          return (value / 1000) + 'k';
        },
        showLabel: true,
        // offset: 0,
        position: 'start'
      },
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

  if (d.querySelector('.ct-chart-calls')) {
    new Chartist.Pie('.ct-chart-calls',
      {
        labels: ['20%', '40%', '60%'],
        series: [20, 40, 60]
      },
      {
        donut: true,
        donutWidth: 30,
        donutSolid: true,
        startAngle: 270,
        showLabel: true,
        // total: 100,
        chartPadding: 1,
        labelOffset: 40,
        // maxHeight: '150px',
        // minWidth: '150px',
        // height: '150px',
        labelDirection: 'explode'
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

});

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