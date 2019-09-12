$(function () {
  let str = 'dist/js/transactionListPageComponent.js'
  var element = document.querySelector('[src=\'' + str + '\']')
  // var one = element.getAttribute('data-one')
  // var one = $('#myscript').attr("one");
  console.log(JSON.parse(window.localStorage['persist:root'])['login'])
    // $('#example1').DataTable({
    //   'searching'   : false,
    //   'paging'      : false,
    //   'info'        : false,
    //   'ordering'    : true
    // })
    // $('#example1').DataTable({
    //   data: dataSet,
    //   columns: [
    //       { title: "Name" },
    //       { title: "Position" },
    //       { title: "Office" },
    //       { title: "Extn." },
    //       { title: "Start date" },
    //       { title: "Salary" }
    //   ]
    // })
    $('#example2').DataTable({
      'paging'      : true,
      'lengthChange': false,
      'searching'   : false,
      'ordering'    : true,
      'info'        : true,
      'autoWidth'   : false
    })
  })