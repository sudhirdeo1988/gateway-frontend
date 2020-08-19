$(function () {
  $('[data-toggle="tooltip"]').tooltip();
  // -- Open close sidebar interaction
  if ($(".c-sidebar").length > 0) {
    $("body").delegate(".closeSidebar,.sidebarHamb", "click", function () {
      $(this).parents(".c-pageBody").toggleClass("isCloseSidebar");
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
      console.log($(this).val());
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
  // ----  Multi select
  if ($(".js-multiSelect").length) {
    $(".js-multiSelect").select2();
  }

  // ----- Data Table - Type 01 - With all Features
  if ($(".js-dataTable02").length) {
    $(".js-dataTable02").DataTable({
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
          previous: '<i class="icon ocr-angle-left"></i>',
          next: '<i class="icon ocr-angle-right"></i>',
        },
      },
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

  $(".daterangepicker .ranges li").on("click", function () {
    $(this).addClass("active").siblings().removeClass("active");
  });
  if ($("#upload-file-zone").length) {
    Dropzone.options.uploadFileZone = {
      paramName: "file", // The name that will be used to transfer the file
      maxFilesize: 2, // MB
      dictDefaultMessage: "Drop",
    };
  }
});
