/*王雯洁*/
/*文本框*/
$(".input-coruse").val("您想学习什么课程？");
$(".input-position").val("您的位置（比如：人民广场）");
$(".input-coruse").click(function() {
  if ($(this).val()=="您想学习什么课程？") {
    $(this).val("");
  };
});
$(".input-coruse").blur(function() {
  if ($(this).val()=="") {
    $(this).val("您想学习什么课程？");
  };
});
$(".input-position").click(function() {
  if ($(this).val()=="您的位置（比如：人民广场）") {
    $(this).val("");
  };
});
$(".input-position").blur(function() {
  if ($(this).val()=="") {
    $(this).val("您的位置（比如：人民广场）");
  };
});
/*课程详情页面的弹出框*/
$(".organization_lightboxTips").val("您想学习什么课程？");
$(".input-coruse").click(function() {
  if ($(this).val()！="") {
    $(this).val("");
  };
});
$(".input-coruse").blur(function() {
  if ($(this).val()=="") {
    $(this).val("您想学习什么课程？");
  };
});
/*侧边栏*/
$(function () {
    $("#box-out li").mouseover(function () {
        $(this).css("background", "#989898").siblings().css("background", "#fff");
        var index = $("#box-ul ul li").index(this);
        $("#box-li-ul1>div").eq(index).show().siblings("div").hide();
    });
  });
$(function () {
  $(".big-box").mouseleave(function () {
      $(".li-ul1").hide();
      $("#box-out li").css("background", "#fff");
    });
  });
$(function (){
  $(".slide-menu").click(function(){
    $("#box-ul").toggle();
    });
  }); 
/*弹出层*/
/*登录*/
$(function(){
  $("#login-content").click(function(){
  $("#login-alert").slideDown();
    var h=$(document).height();
    $("#bg-login").css("height",h)
    $("#bg-login").css("width","100%")
    $("#bg-login").show();
    });
     $(".button-group-btn1").click(function(){
      $("#login-alert").hide();
      $("#bg-login").hide();
     });
});
/*登录*/
/*注册*/
$(function(){
  $("#register-content").click(function(){
  $("#register-alert").slideDown();
    var h=$(document).height();
    $("#bg-register").css("height",h)
    $("#bg-register").css("width","100%")
    $("#bg-register").show();
    });
     $(".button-group-btn1").click(function(){
      $("#register-alert").hide();
      $("#bg-register").hide();
     });
});
/*注册*/
/*保存修改*/
$(function(){
  $("#save-content").click(function(){
  $("#save-alert").slideDown();
    var h=$(document).height();
    $("#bg-save").css("height",h)
    $("#bg-save").css("width","100%")
    $("#bg-save").show();
    });
     $(".save-btn1").click(function(){
      $("#save-alert").hide();
      $("#bg-save").hide();
     });
});
/*保存修改*/
/*弹出层*/
/*帮助下拉列表*/
$(function () {
    $(".box-help-out li").mouseover(function () {
        $(this).css("background", "#ea6d65").siblings().css("background", "#fff");
    });
});
$(function () {
  $("#box-help-ul").mouseleave(function () {
      $("#box-help-ul").hide();
    });
});
$(function (){
  $("#help-box").click(function(){
    $("#box-help-ul").toggle();
    });
});
/*帮助下拉列表*/
/*王雯洁*/
/*宁家伟*/
$(function(){
  $("#more-btn").click(function(){
    $("#box-type-more-all").css("display","block");
    $(".box-type-more").css("display","none")
    });
  });
/*宁家伟*/