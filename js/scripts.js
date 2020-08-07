$(function () {
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
    var table = $(".js-dataTable02").DataTable({
      scrollY: "400px",
      paging: true,
      ordering: true,
      searching: false,
      info: true,
      scrollX: true,
      // fixedColumns: {
      //   leftColumns: 2,
      //   rightColumns: 0,
      // },
      dom:
        'rt<"container-fluid c-tableFooter"<"row"<"col-4"i><"col-8 text-right"pl>>>',
      columnDefs: [{ targets: "no-sort", orderable: false }],
      language: {
        paginate: {
          previous: '<i class="icon ocr-angle-left"></i>',
          next: '<i class="icon ocr-angle-right"></i>',
        },
      },
      // fnInitComplete: function () {
      //   setCustomeScrollerForTable();
      // },
      // fnDrawCallback: function (oSettings) {
      //   setCustomeScrollerForTable();
      // },
    });
    $(".js-dataTable02 th:first-child .chkBox").on("change", function () {
      var rows, checked;
      rows = $(".js-dataTable02").find("tr");
      checked = $(this).prop("checked");
      $.each(rows, function () {
        $($(this).find(".selectable")).find(".chkBox").prop("checked", checked);
      });
    });

    $(".c-showTableColums .c-chkBox .chkBox").on("change", function (e) {
      if ($(this).is(":checked")) {
        console.log($(this).attr("data-column"));

        // Get the column API object
        var column = table.column($(this).attr("data-column"));

        // Toggle the visibility
        column.visible(true);
      } else {
        var column = table.column($(this).attr("data-column"));
        column.visible(false);
      }
      e.preventDefault();
    });
  }

  // ----- Data Table - Type 02
  if ($(".js-dataTable").length) {
    var table = $(".js-dataTable").DataTable({
      scrollY: "400px",
      paging: false,
      ordering: true,
      searching: false,
      info: false,
      scrollX: true,
      fixedColumns: {
        leftColumns: 4,
        rightColumns: 0,
      },
      columnDefs: [{ targets: "no-sort", orderable: false }],
      fnInitComplete: function () {
        // setCustomeScrollerForTable();
      },
      fnDrawCallback: function (oSettings) {
        // setCustomeScrollerForTable();
      },
    });
    $(".c-showTableColums .c-chkBox .chkBox").on("change", function (e) {
      if ($(this).is(":checked")) {
        console.log($(this).attr("data-column"));

        // Get the column API object
        var column = table.column($(this).attr("data-column"));

        // Toggle the visibility
        column.visible(true);
      } else {
        var column = table.column($(this).attr("data-column"));
        column.visible(false);
      }
      e.preventDefault();
    });
  }

  // ----- Data Table - For Graph
  if ($(".graph").length) {
    $(".graph.type-02 .table").DataTable({
      scrollY: "200px",
      paging: false,
      ordering: false,
      searching: false,
      info: false,
      fnInitComplete: function () {
        setCustomeScrollerForTable();
      },
      fnDrawCallback: function () {
        setCustomeScrollerForTable();
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

  // --- Call Webcam start function
  if ($(".c-cropImage").length) {
    startWebcamForCapturePicture();
  }

  $(".daterangepicker .ranges li").on("click", function () {
    $(this).addClass("active").siblings().removeClass("active");
  });
});

// custome scrollbar for table
function setCustomeScrollerForTable() {
  $(".dataTables_scrollBody").mCustomScrollbar({
    theme: "dark",
    autoHideScrollbar: true,
    axis: "y",
    advanced: { updateOnContentResize: true },
    mouseWheel: { enable: true },
    scrollButtons: { enable: true },
  });
}

// Function for web cam
function startWebcamForCapturePicture() {
  // Grab elements, create settings, etc.
  const imgDiv = document.querySelector(".cropImage");
  const video = document.querySelector(".cropVideo");
  const canvas = document.querySelector(".cropPhoto");
  const context = canvas.getContext("2d");

  // Trigger photo take
  document.getElementById("startCamera").addEventListener("click", function () {
    imgDiv.classList.add("hide");
    video.classList.add("show");
    let liveStream;

    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices
        .getUserMedia({ video: true, audio: false })
        .then(function (stream) {
          video.srcObject = stream;
          liveStream = stream;
          video.play();
        });
      document
        .getElementById("capturePhoto")
        .addEventListener("click", function () {
          video.classList.add("hide");
          context.drawImage(video, 0, 0, 640, 480, 0, 0, 320, 240);
          canvas.classList.add("show");
          stopStream(liveStream);
        });
      function stopStream(stream) {
        stream.getVideoTracks().forEach(function (track) {
          track.stop();
        });
      }
    }
  });
}
