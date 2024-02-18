$(document).ready(function () {
    
    $(function () {
        $('.head-btn').on("click", function () {
            $('.right-nav').addClass('cbp-spmenu-open')
        })
        $('.close-btn').on("click", function () {
            $('.right-nav').removeClass('cbp-spmenu-open')
        })

    })
})

function saveApply() {
    const url = "http://120.53.104.37:8091/carwash/main/saveApply?name=" + $("#name").val() + "&phone=" + $("#phone").val() + "&country=" + $("#country").val() + "&major=" + $("#major").val() + "";
    $.ajax({
        type: "GET",
        dataType: "json",
        contentType: 'application/json;charset=utf-8',
        url: url,
        success: function (datas) {
            // layer.msg('报名成功', {}, function () {
            //     window.location.reload();
            // })
            alert('报名成功')
        }
    });
}