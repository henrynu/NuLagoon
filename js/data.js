
$(document).ready(function() {
    //$('#main').html( '<table class="table table-bordered table-striped" id="example">    </table>' );

    $('#nav_a').DataTable( {
        "lengthMenu": [[15, 25, 50, -1], [15, 25, 50, "All"]],
        "ajax": jpath+'nav.json',
        responsive: true,
        "bRetrieve": true,
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
} );
$("#litab12").click(function(){
     var tncd = $('#nav_cd').DataTable( {
            "lengthMenu": [[15, 25, 50, -1], [15, 25, 50, "All"]],
            "ajax": jpath+'nav.json',
            responsive: true,
            "bRetrieve": true,
            "columns": [{"data":"0"},
            {"data":"2"},
            {"data":"3"},
            {"data":"6"},
            {"data":"7"},
            {"data":"8"},
            {"data":"9"},
            {
                "render": function ( data, type, row ) {
                    return row[10]+' %';
                },
                "targets": 8
            },

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
});
$("#litab2").click(function(){
    $('#position').DataTable( {
        "ajax": jpath+'position.json',
        "responsive": true,
        "bRetrieve": true,
        "lengthMenu": [[15, 25, 50, -1], [15, 25, 50, "All"]],
        "columns": [
        {"data":"4"},
        {
                "render": function ( data, type, row ) {
                    if(row[3]=='A'){return '<span class="badge bg-yellow">A</span>';}
                    else if(row[3]=='C'){return '<span class="badge label-success">C</span>';}
                    else if(row[3]=='D'){return '<span class="badge label-info">D</span>';}
                },
                "targets": 3
            },
        {"data":"6"},
        {"data":"1"},
        {
                "render": function ( data, type, row ) {
                    var pl = row[6]-row[7]*row[4];
                    sign = '';
                    if (row[4]==0){
                        return ' ';
                    }
                    if (Math.round(pl*100) == 0){
                        return ' 0 ';
                    }
                    if (pl>0){
                        textclass = "text-green";
                        sign = '+';
                    }else if(pl<0){
                        textclass = "text-red";
                        sign = '';
                    }
                    res =  '<span class="'+textclass+'"> ' + sign + (Math.round(pl*100)/100).toString()
                        +'</span>';
                    return res;
                },
                "targets": 7
            },
            {
                "render": function ( data, type, row ) {
                    var pl = row[6]-row[7]*row[4];
                    sign = '';
                    if (row[4]==0){
                        return ' ';
                    }
                    if (Math.round(pl*100) == 0){
                        return ' 0% '
                    }
                    if (pl>0){
                        textclass = "text-green";
                        sign = '+';
                    }else if(pl<0){
                        textclass = "text-red";
                        sign = '';
                    }
                    res =  '<span class="'+textclass+'"> ' + sign+Math.round(pl*10000/(row[7]*row[4]))/100+'%</span>';
                    return res;
                },
                "targets": 8
            },
        {
            "render": function ( data, type, row ) {
                if(row[2]=='BTC'){return '<span class="badge bg-yellow ccy" title="Bitcoin">B</span>';}
                else if(row[2]=='NBT'){return '<span class="badge bg-black ccy" title="Nubits">N</span>';}
            },
            "targets": 2
        },
        {"data":"5"},
        {"data":"7"},
        {"data":"0"}
        ],

        "order": [[ 2, "desc" ]]
    } );
});

$("#litab3").click(function(){
var table = $('#transaction').DataTable( {
        "lengthMenu": [[15, 25, 50, -1], [15, 25, 50, "All"]],
        "ajax": jpath+"transaction.json",
        "bRetrieve": true,
        "responsive": true,
        "columnDefs": [
    { className: "dt-body-center", "targets": [ 3,5 ] }
  ],
        "columns": [
            {"data":"1"},
            {
                "render": function ( data, type, row ) {
                    if(row[2]=='Deposit'){return '<span class="text-green"><i class="fa fa-sign-in fa-rotate-90"></i> Deposit</span>';}
                    else if(row[2]=='Convert'){return '<span class=" text-blue"><i class="fa fa-retweet fa-rotate-90"></i> Convert</span>';}
                    else if(row[2]=='Withdraw1' || row[2]=='Withdraw2'){return '<span class="text-red"><i class="fa fa-sign-out fa-rotate-270 "></i> '+row[2]+'</span>';}
                    else if(row[2]=='WdOrder1' || row[2]=='WdOrder2'){return '<span class="text-maroon"><i class="fa fa-sign-out fa-rotate-270"></i> '+row[2]+'</span>';}
                    else if(row[2]=='Invalid' || row[2]=='InvalidWd'){return '<span class="text-yellow"><i class="fa fa-frown-o"></i> '+row[2]+'</span>';}
                    else {return row[2];}
                },
                "targets": 2
            },
            {"data":"5"},

            {   "render": function ( data, type, row ) {
                    if(row[3]=='A'){return '<span class="badge bg-yellow">A</span>';}
                    else if(row[3]=='C'){return '<span class="badge label-success">C</span>';}
                    else if(row[3]=='D'){return '<span class="badge label-info">D</span>';}
                },
                "targets": 3
            },
            {"data":"6"},
            {
                "render": function ( data, type, row ) {
                    if(row[4]=='BTC'){return '<span class="badge bg-yellow ccy" title="Bitcoin">B</span>';}
                    else if(row[4]=='NBT'){return '<span class="badge bg-black ccy" title="Nubits">N</span>';}
                },
                "targets": 4
            },
            {"data":"0"},
            {"data":"8"},
            {"data":"7"},
            {"data":"9"},
            {   "render": function ( data, type, row ) {
                    var url='';
                    if(row[4] == 'NBT'){
                    url =  'https://blockexplorer.nu/transactions/'+row[9];
                    }else if(row[4] == 'BTC')
                    {
                    url =  'https://blockchain.info/tx/'+row[9];
                    }

                    return '<a target="_blank" href="'+url+'">View It On Blockexplorer</a>';
                },
                "targets": 10
            },
        ],
        "order": [[6, 'desc']]
    } );

});


 