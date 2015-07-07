/* Formatting function for row details - modify as you need */
function format ( d ) {
    // `d` is the original data object for the row

    var url='';
    if(d[4] == 'NBT'){
    url =  'https://blockexplorer.nu/transactions/'+d[9];
    }else if(d[4] == 'BTC')
    {
    url =  'https://blockchain.info/tx/'+d[9];
    }

    return '<table class="table table-bordered table-striped">'+
        '<tr>'+
            '<td>Block Height:</td>'+
            '<td>'+d[8]+'</td>'+
        '</tr>'+
        '<tr>'+
            '<td>Pool Address:</td>'+
            '<td>'+d[7]+'</td>'+
        '</tr>'+
        '<tr>'+
            '<td>TX Hash:</td>'+
            '<td>'+d[9]+'</td>'+
        '</tr>'+
        '<tr>'+
            '<td></td>'+
            '<td><a target="_blank" href="'+url+'">View It On Blockexplorer</a></td>'+
        '</tr>'+
    '</table>';
}

$(document).ready(function() {
    //$('#main').html( '<table class="table table-bordered table-striped" id="example">    </table>' );

    $('#nav_a').DataTable( {
        "lengthMenu": [[15, 25, 50, -1], [15, 25, 50, "All"]],
        "ajax": jpath+'nav.json',
        "columns": [{"data":"0"},
        {"data":"1"},
        {"data":"4"},
        {"data":"5"},
        {"data":"11"},
        {"data":"12"},
        {"data":"13"},
        {"data":"14"},
        {"data":"15"},
        {"data":"16"},
        {"data":"17"}],
        "order": [[ 0, "desc" ]]
    } );


     var tncd = $('#nav_cd').DataTable( {
            "lengthMenu": [[15, 25, 50, -1], [15, 25, 50, "All"]],
            "ajax": jpath+'nav.json',
            "columns": [{"data":"0"},
            {"data":"2"},
            {"data":"3"},
            {"data":"6"},
            {"data":"7"},
            {"data":"8"},
            {"data":"9"},
            {"data":"10"},
            {"data":"15"},
            {"data":"18"},
            {"data":"19"}],
            "order": [[ 0, "desc" ]]
        } );
    $.fn.dataTable.ext.search.push(
        function( settings, data, dataIndex ) {
            var nav = parseFloat( data[1] ) || 0;
            if ( settings.sTableId == 'nav_cd' && nav < 1 ){return false;}
            return true;
        }
    );

    $('#position').DataTable( {
        "ajax": jpath+'position.json',
        "lengthMenu": [[15, 25, 50, -1], [15, 25, 50, "All"]],
        "columnDefs": [
        {"data":"0"},
        {"data":"1"},
        {"data":"2"},
        {
                "render": function ( data, type, row ) {
                    if(data=='A'){return '<span class="badge bg-yellow">A</span>';}
                    else if(data=='C'){return '<span class="badge label-success">C</span>';}
                    else if(data=='D'){return '<span class="badge label-info">D</span>';}
                },
                "targets": 3
            },
        {"data":"4"},
        {"data":"5"},
        {"data":"6"},

        ],
        "order": [[ 6, "desc" ]]
    } );

    var table = $('#transaction').DataTable( {
        "lengthMenu": [[15, 25, 50, -1], [15, 25, 50, "All"]],
        "ajax": jpath+"transaction.json",
        "columns": [
            {"data":"0"},
            {"data":"1"},
            {"data":"2"},
            {   "render": function ( data, type, row ) {
                    if(data=='A'){return '<span class="badge bg-yellow">A</span>';}
                    else if(data=='C'){return '<span class="badge label-success">C</span>';}
                    else if(data=='D'){return '<span class="badge label-info">D</span>';}
                },
                "targets": 3
            },
            {"data":"4"},
            {"data":"5"},
            {"data":"6"},
            {
                "className":      'details-control',
                "orderable":      false,
                "data":           null,
                "defaultContent": ''
            },
        ],
        "order": [[1, 'desc']]
    } );

    // Add event listener for opening and closing details
    $('#transaction tbody').on('click', 'td.details-control', function () {
        var tr = $(this).closest('tr');
        var row = table.row( tr );

        if ( row.child.isShown() ) {
            // This row is already open - close it
            row.child.hide();
            tr.removeClass('shown');
        }
        else {
            // Open this row
            row.child( format(row.data()) ).show();
            tr.addClass('shown');
        }
    } );
} );


