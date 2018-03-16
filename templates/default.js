    $(function () {
        $.ajax({
            type:"GET",
            url:"../../static/data.json",
            dataType:"json",
            success:function (data) {
                console.log(data);
                genRow(data);
                genPageNav(data);
            },
            error:function (e) {
                console.log(e);
            }
        })
        searchMcc=function () {
            mccCode = $("#mcc-code").val();
            $.ajax({
                type:"GET",
                url:"#",
                dataType:"json",
                success:function (data) {
                    console.log(data);
                    genRow(data);
                },
                error:function (e) {
                    console.log(e);
                }
            })
        }
        pageButton=function (data) {
            $.ajax({
                type:"GET",
                url:"../../static/data01.json",
                dataType:"json",
                success:function (data) {
                    console.log(data);
                    genRow(data);
                }
            })
        }

        add = function () {
            var shhadd = $("#shhadd").val();
            var hydladd = $("#hydladd").val();
            var hyxfadd = $("#hyxfadd").val();
            var mccCodeadd = $("#mccCodeadd").val();
            var mccNameadd = $("#mccNameadd").val();
            var product1add = $("#product1add").val();
            var product2add = $("#product2add").val();
            var product3add = $("#product3add").val();
            var product4add = $("#product4add").val();
            var product5add = $("#product5add").val();
            var product6add = $("#product6add").val();
            var product7add = $("#product7add").val();
            var product8add = $("#product8add").val();
            var product9add = $("#product9add").val();
            var product10add = $("#product10add").val();
            $.ajax({
                type:"GET",
                url:"#",
                dataType:"json",
                data:{"shanghushu":shhadd,"hangyedalei":hydladd,"hangyexifen":hyxfadd,"num":mccCodeadd,"name":mccNameadd,
                "product1":product1add,"prodct2":product2add,
                    "product3":product3add,"product4":product4add,
                    "product5":product5add,"product6":product6add,
                    "product7":product7add,"product8":product8add,
                    "product9":product9add,"product10":product10add
                },
                success:function (data) {
                    console.log(data);
                    if(data.message=="新增成功"){
                        $("#alertMsg").text("新增成功");
                        $("#alertb").addClass("alert-success");
                        $("#alertd").removeClass("hide");
                    }
                    //新增成功后刷新当前页面
                    location.reload();
                },
                error:function (e) {
                    console.log(e);
                    $("#alertMsg").text("新增失败");
                    $("#alertb").addClass("alert-warning");
                    $("#alertd").removeClass("hide");
                }
            })
        }
        var genRow = function (data) {
            mcc = data;
            //每次清空table内body
            $("#mcc-body").empty();
            for(i=0;i<mcc.length;i++){
                var shanghushu = mcc[i].shanghushu;
                var hangyedalei = mcc[i].hangyedalei;
                var hangyexifen = mcc[i].hangyexifen;
                var mccCode = mcc[i].num;
                var mccName = mcc[i].name;
                var product1 = mcc[i].product1;
                var product2 = mcc[i].product2;
                var product3 = mcc[i].product3;
                var product4 = mcc[i].product4;
                var product5 = mcc[i].product5;
                var product6 = mcc[i].product6;
                var product7 = mcc[i].product7;
                var product8 = mcc[i].product8;
                var product9 = mcc[i].product9;
                var product10 = mcc[i].product10;
                var oneRow = '<tr id='+mccCode+'><td>'+shanghushu+'</td><td>'+hangyedalei+'</td><td>'+hangyexifen+'</td>'
                    +'<td>'+mccCode+'</td><td>'+mccName+'</td><td>'
                    +product1+'</td><td>'+
                        product2+'</td><td>'+
                        product3+'</td><td>'+
                        product4+'</td><td>'+
                        product5+'</td><td>'+
                        product6+'</td><td>'+
                        product7+'</td><td>'+
                        product8+'</td><td>'+
                        product9+'</td><td>'+
                        product10+'</td><td>'+
                        '<a href="#" onclick="update('+mccCode+')"><span class="glyphicon glyphicon-pencil"></span></a>' +
                    '<a href="#" onclick="del('+mccCode+')"><span class="glyphicon glyphicon-trash"></span></a>'
                    +'</td></tr>';
                $("#mcc-body").append(oneRow);
            }
        }

        del = function (mccCode) {
            $.ajax({
                url:"",
                dataType:"json",
                data:{"num":mccCode},
                success:function (data) {
                    console.log(data);
                    if(data.message=="删除成功"){
                        $("#alertMsg").text("删除成功");
                        $("#alertb").addClass("alert-success");
                        $("#alertd").removeClass("hide");
                    }
                    //删除成功后刷新当前页面
                    location.reload();
                },
                error:function (e) {
                    console.log(e);
                     $("#alertMsg").text("删除失败");
                     $("#alertb").addClass("alert-warning");
                     $("#alertd").removeClass("hide");
                }
            })
        }


        update = function (mccCode) {
            trArr = $("#"+mccCode).children();
                var shsud = trArr.eq(0).text();
                $("#shhadd").val(shsud);
                var hydlud = trArr.eq(1).text();
                $("#hydladd").val(hydlud);
                var hyxfud = trArr.eq(2).text();
                $("#hyxf").val(hyxfud);
                var mcccodeud = trArr.eq(3).text();
                $("#mccCodeadd").val(mcccodeud);
                var mccnameud = trArr.eq(4).text();
                $("#mccNameadd").val(mccnameud);
                var product1 = trArr.eq(5).text();
                $("#product1add").val(product1);
                var product2 = trArr.eq(6).text();
                $("#product2add").val(product2);
                var product3 = trArr.eq(7).text();
                $("#product3add").val(product3);
                var product4 = trArr.eq(8).text();
                $("#product4add").val(product4);
                var product5 = trArr.eq(9).text();
                $("#product5add").val(product5);
                var product6 = trArr.eq(10).text();
                $("#product6add").val(product6);
                var product7 = trArr.eq(11).text();
                $("#product7add").val(product7);
                var product8 = trArr.eq(12).text();
                $("#product8add").val(product8);
                var product9 = trArr.eq(13).text();
                $("#product9add").val(product9);
                var product10 = trArr.eq(14).text();
                $("#product10add").val(product10);
                $("#addButton").attr("onclick","realupdate()");
            $("#addModal").modal("show");
        }

        realupdate = function () {
            var mcccode = $("#mccCodeadd").val();
            var product1 = $("#product1add").val();
            var product2 = $("#product2add").val();
            var product3 = $("#product3add").val();
            var product4 = $("#product4add").val();
            var product5 = $("#product5add").val();
            var product6 = $("#product6add").val();
            var product7 = $("#product7add").val();
            var product8 = $("#product8add").val();
            var product9 = $("#product9add").val();
            var product10 = $("#product10add").val();
            $.ajax({
                type:"GET",
                url:"",
                data:{"num":mcccode,"product1":product1,"product2":product2,
                "product3":product3,"product4":product4,"product5":product5,
                    "product6":product6,"product7":product7,"product8":product8,
                    "product9":product9,"product10":product10
                },
                dataType:"json",
                success:function (data) {
                    console.log(data);
                    $("#alertMsg").text("修改成功");
                    $("#alertb").addClass("alert-success");
                    $("#alertd").removeClass("hide");
                    location.reload();
                },
                error:function(e){
                    console.log(e);
                     $("#alertMsg").text("修改失败");
                     $("#alertb").addClass("alert-warning");
                     $("#alertd").removeClass("hide");
                }
            })
        }

        var genPageNav = function (data) {
            for(i=1;i<=parseInt(data.pages);i++){
                var onePage = '<li><a href="#" onclick=pageButton('+i+');return false;>'+i+'</a></li>';
                $("#pagenav").append(onePage);
            }
        }
    })

    function setCookie(cname,cvalue) {
        document.cookie = cname + "=" + cvalue + "; "
    }

    function getCookie(cname)
{
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for(var i=0; i<ca.length; i++)
  {
    var c = ca[i].trim();
    if (c.indexOf(name)==0) return c.substring(name.length,c.length);
  }
  return "";
}
