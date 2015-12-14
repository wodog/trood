$(function () {

    /**
     * add listener on #add_btn, for add api
     */
    $('#add_btn button:eq(0)').on('click', function () {
        var add_input = $('<tr id="add_input"><td><input id="add_input_name" placeholder="Input Api Name"></td><td><select id="add_input_type"><option value="GET">GET</option><option value="POST">POST</option></select></td></td><td><textarea id="add_input_desc" placeholder="Input Api Desc"></textarea></td><td><input id="add_input_impl" placeholder="Input Api Impl"></td></tr>');
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

});