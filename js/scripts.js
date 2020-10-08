$(function () {
  $('[data-toggle="tooltip"]').tooltip();

  $("#themeSwitch").change(function () {
    const theme = $(this).val();
    if ($(this).is(":checked")) {
      $("body").addClass("theme-dark").removeClass("theme-light");
    } else {
      $("body").removeClass("theme-dark").addClass("theme-light");
    }
  });

  // popover
  $(".selector")
    .popover({ trigger: "manual", html: true, animation: false })
    .on("mouseenter", function () {
      var _this = this;
      $(this).popover("show");
      $(".popover").on("mouseleave", function () {
        $(_this).popover("hide");
      });
    })
    .on("mouseleave", function () {
      var _this = this;
      setTimeout(function () {
        if (!$(".popover:hover").length) {
          $(_this).popover("hide");
        }
      }, 200);
    });

  // ---- Toast Messages :: show Toast messages
  if ($(".c-toast").length > 0) {
    $(".c-toast").toast("show");
  }

  // -- Open close sidebar interaction
  if ($(".c-sidebar").length > 0) {
    $(".c-sidebar").hover(function () {
      $(this).parents(".c-pageBody").toggleClass("js-sidebarOpen");
    });
  }

  // ----- Dropdown Settings
  $(document).on("click", ".js-preventClick .dropdown-menu", function (e) {
    e.stopPropagation();
  });
  $(document).on(
    "click",
    ".js-selectable .dropdown-menu .dropdown-item",
    function () {
      $(this)
        .parents(".js-selectable")
        .find(".dropdown-toggle .value")
        .text($(this).val());
    }
  );

  // ---- Form Datepicker
  if ($(".c-dtPicker").length) {
    $(".c-dtPicker .form-control").daterangepicker({
      singleDatePicker: true,
      showDropdowns: true,
      autoApply: true,
      minDate: moment(),
      locale: {
        format: "MMM D, YYYY",
      },
    });
  }

  // ---- Date Range picker
  if ($(".c-dateRangePicker").length) {
    // ---- Date Range picker without range
    $(".c-dateRangePicker .form-control").daterangepicker({
      startDate: moment().subtract(29, "days"),
      endDate: moment(),
      minDate: moment(),
      buttonClasses: "c-btn",
      applyButtonClasses: "sm",
      cancelButtonClasses: "sm col-gray",
      showDropdowns: true,
      locale: {
        format: "MMM DD, YYYY",
      },
    });

    // ---- Date Range picker wih custome Range
    $(".c-dateRangePicker.withRange .form-control").daterangepicker({
      autoUpdateInput: false,
      startDate: moment().subtract(29, "days"),
      endDate: moment(),
      ranges: {
        Today: [moment()],
        Tomorrow: [moment(), moment().add(1, "days")],
        "Next 7 Days": [moment(), moment().add(6, "days")],
        "Next 15 Days": [moment(), moment().add(15, "days")],
        "Next 1 Month": [moment(), moment().add(30, "days")],
        Yesterday: [moment().subtract(1, "days")],
        "Previous 7 Days": [moment().subtract(6, "days"), moment()],
        "Previous 15 Days": [moment().subtract(15, "days"), moment()],
        "Previous 1 Month": [moment().subtract(30, "days"), moment()],
      },
      buttonClasses: "c-btn",
      applyButtonClasses: "sm",
      cancelButtonClasses: "sm col-gray",
      showDropdowns: true,
      locale: {
        format: "MMM DD, YYYY",
      },
    });
  }

  // ----  TimePicker
  if ($(".c-timePicker").length) {
    $(".c-timePicker .form-control").timepicker({
      template: false,
      showInputs: false,
      showMeridian: true,
      minuteStep: 1,
    });
  }

  // ----- Data Table - Type 01 - With all Features
  if ($(".js-dataTable02").length) {
    var table = $(".js-dataTable02").DataTable({
      scrollY: "350px",
      paging: true,
      ordering: true,
      searching: false,
      info: true,
      dom:
        'rt<"container-fluid c-tableFooter"<"row"<"col-4"i><"col-8 text-right"pl>>>',
      columnDefs: [{ targets: "no-sort", orderable: false }],
      language: {
        paginate: {
          previous: "Previous",
          next: "Next",
        },
      },
    });

    function format() {
      return (
        '<table class="table childTableTd">' +
        "<tr>" +
        "<td style='width:15%'></td>" +
        "<td style='width:20%'>Sent To Custom</td>" +
        "<td style='width:10%'>CA</td>" +
        "<td style='width:15%'>2020-07-16 11:55:17.0</td>" +
        "<td style='width:20%'>CA-Req2020-07-16-11-55-16-633.xm</td>" +
        "<td style='width:20%'>	rccececpt_edf_0172801957.txt</td>" +
        "</tr>" +
        "<tr>" +
        "<td style='width:15%'></td>" +
        "<td style='width:20%'>Sent To Custom</td>" +
        "<td style='width:10%'>CA</td>" +
        "<td style='width:15%'>2020-07-16 11:55:17.0</td>" +
        "<td style='width:20%'>CA-Req2020-07-16-11-55-16-633.xm</td>" +
        "<td style='width:20%'>	rccececpt_edf_0172801957.txt</td>" +
        "</tr>" +
        "</table>"
      );
    }

    $("body").on("click", "td .expandRow", function () {
      var tr = $(this).closest("tr");
      var row = table.row(tr);

      if (row.child.isShown()) {
        // This row is already open - close it
        row.child.hide();
        tr.removeClass("shown");
      } else {
        // Open this row
        row.child(format()).show();
        tr.addClass("shown");
      }
    });
  }

  // ---- Toast Messages :: show Toast messages
  $(".showToast").on("click", function () {
    $(".c-toast").toast("show");
  });

  // --- Custome scrollbar
  if ($(".js-customScroll").length) {
    $(".js-customScroll").mCustomScrollbar({
      theme: "dark",
      autoHideScrollbar: true,
      axis: "y",
      advanced: { updateOnContentResize: true },
      mouseWheel: { enable: true },
      scrollButtons: { enable: false },
    });
  }

  if ($("#upload-file-zone").length) {
    Dropzone.options.uploadFileZone = {
      paramName: "file", // The name that will be used to transfer the file
      maxFilesize: 2, // MB
      dictDefaultMessage: "Drop",
    };
  }

  // ---- Select 2 dropdown - single option select
  if ($(".c-customDropdown.selectOne").length) {
    var $disabledResults = $(".c-customDropdown.selectOne .c-select");
    $disabledResults.select2({
      dropdownCssClass: "customeDropdown",
    });
  }

  // ----  Select 2 dropdown - Multi select
  if ($(".js-multiSelect").length) {
    $(".js-multiSelect").select2();
  }

  if ($(".js-dataSlider").length) {
    $(".js-dataSlider").owlCarousel({
      loop: true,
      mouseDrag: true,
      nav: true,
      dots: false,
      items: 1,
      autoplay: true,
      autoplaySpeed: 1500,
    });
  }
});
