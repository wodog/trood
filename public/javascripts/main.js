$(function () {

    /**
     * add listener on #add_btn, for add api
     */
    $('#add_btn button:eq(0)').on('click', function () {
        var add_input = $('<tr id="add_input"><td><input id="add_input_name" placeholder="Input Api Name"></td><td><select id="add_input_type"><option value="GET">GET</option><option value="POST">POST</option><option value="PUT">PUT</option><option value="DELETE">DELTE</option></select></td></td><td><textarea id="add_input_desc" placeholder="Input Api Desc"></textarea></td><td><input id="add_input_impl" placeholder="Input Api Impl"></td></tr>');
        $('#api_view table tbody').append(add_input);

        $('#add_btn button:eq(0)').css('display', 'none');
        $('#add_btn button:eq(1)').css('display', 'inline');
        $('#add_btn button:eq(2)').css('display', 'inline');
    });

    /**
     * send inputs's value to add api
     */
    $('#add_btn button:eq(1)').on('click', function () {
        var name = $('#add_input_name').val();
        var type = $('#add_input_type').val();
        var desc = $('#add_input_desc').val();
        var impl = $('#add_input_impl').val();

        if (!name || !type || !desc || !impl) {
            alert('Please Complet');
            return false;
        }

        $.ajax({
            type: 'GET',
            url: '/api/add?name=' + name + '&type=' + type + '&desc=' + desc + '&impl=' + impl,
            success: function (data) {
                $('#add_input').remove();
                location.reload();
            }
        });
    });

    /**
     * add_btn reset
     */
    $('#add_btn button:eq(2)').on('click', function () {
        $('#add_input').remove();
        location.reload();
    })


    /**
     * delete one api
     */
    $('.api_del').on('click', function () {

        var r = confirm('您确定要删除这条api吗?');
        if (!r) {
            return false;
        }
        var _id = $(this).attr('api_id');
        $.ajax({
            type: 'GET',
            url: '/api/delete?_id=' + _id,
            success: function (data) {
                location.reload();
            }
        })
    });

    $('.api_update').on('click', function () {
        /**
         * get value
         * @type {*|jQuery}
         */
        var name = $($(this).parent().siblings()[0]).text();
        var type = $($(this).parent().siblings()[1]).text();
        var desc = $($(this).parent().siblings()[2]).text();
        var impl = $($(this).parent().siblings()[3]).text();


        /**
         * set value
         */
        $('#update_name input').val(name);
        $('#update_type select').val(type);
        $('#update_desc textarea').text(desc);
        $('#update_impl input').val(impl);

        console.log(name);
        console.log(type);
        console.log(desc);
        console.log(impl);

        $('#modal_update').modal();
    });

});