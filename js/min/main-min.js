Parse.initialize("vc59bNX5cbtFv4Upaz4y31IJ6zOH5uKqJbRqoSgy","jbMROx6VuQ6wVWRur29gYcQ7o3ucD4VYdh7DoFHj"),$(document).ready(function(){"use strict";function e(e,t,o,a,n,i,s){e.append("<tr class='repoList'><td><a href='"+t+"' target='_blank'><h4>"+o+"</h4><p class='repoDescription'>"+a+"</p></td><td class='language metadata'>"+s+"</a></td><td class='metadata'><img src='img/starsDark.svg' alt='' class='icon'>"+i+"</td><td class='metadata'><img src='img/forksDark.svg' alt='' class='icon'>"+n+"</td></tr>")}function t(e,t,o){$("section.community").append("<div class='repo'><div class='repoTitle'><h4>"+e+"</h4></div><div class='repoDescription'><p>"+t+"</p></div><div class='repoButton'><a href="+o+" target='_blank'><button class='outline'>View on GitHub</button></a></div></div>")}function o(){function e(){var e=1;x>=1480?(e=.75,$(".wheelsContainer, .hoist, .hoistParts").velocity({scale:[e,e]},{queue:!1,duration:0})):$(".wheelsContainer, .hoist, .hoistParts").velocity({scale:[e,e]},{queue:!1,duration:0})}$(".craneLine").velocity({translateY:[0,"-25%"]},{queue:!1,duration:600,easing:[.4,0,.2,1],complete:function(){$(".craneLine").velocity({translateX:["13%",0],translateY:["-14.8%",0]},{queue:!1,duration:600,delay:200,easing:[.4,0,.2,1]}),$(".cranePivot").velocity({translateX:["13%",0]},{queue:!1,duration:600,delay:200,easing:[.4,0,.2,1]}),$(".craneVideo").velocity({translateY:["-14.8%",0],translateX:["13.4%",0]},{queue:!1,duration:600,delay:200,easing:[.4,0,.2,1],complete:function(){$(".craneLine").velocity({translateY:["-30%","-14.8%"]},{queue:!1,duration:800,easing:[.4,0,.2,1]});for(var e=$(".appRect"),t=$(".appSquare"),o=0;o<t.length;o++)t.eq(o).velocity({opacity:1,scale:[1,.45],translateY:0,rotateZ:[0,"90deg"]},{queue:!1,duration:600,delay:100*o+400,easing:[.175,.885,.32,1.275]});for(var a=0;a<e.length;a++)e.eq(a).velocity({opacity:1,scale:[1,.45],translateY:0,rotateZ:0},{queue:!1,duration:600,delay:100*a+100*o+400,easing:[.175,.885,.32,1.275]});$(".phone1ScreenContainer").velocity({backgroundColor:"#EF3F61"},{queue:!1,duration:600,easing:[.4,0,.2,1]})}})}});var t="-"+$(".middleLineOne").height()/$(".pushOne").height()*100+"%";$(".middleLineOne").velocity({translateY:[0,"-105%"]},{queue:!1,duration:1200,delay:800,easing:[300,28],complete:function(){$(".pushOne").velocity({translateY:[t,0]},{queue:!1,duration:800,easing:[.4,0,.2,1]}).velocity({rotateZ:["12deg","0deg"]},{queue:!1,duration:300,easing:[.4,0,.2,1]}),$(".middleLineOne").velocity({translateY:["-100%",0]},{queue:!1,duration:800,easing:[.4,0,.2,1],complete:function(){$(".middleLine2, .push2").velocity({y:[0,"-125%"]},{queue:!1,duration:1e3,delay:200,easing:[300,28],complete:function(){$(".middleLine2").velocity({y:["-125%",0]},{queue:!1,duration:1e3,delay:200,easing:[300,28]}),$(".phone2Screen .phoneCircle").velocity({scale:[1,0]},{queue:!1,duration:350,easing:[.25,.46,.45,.94]}),$(".phone2Screen").velocity({backgroundColor:"#4BBC6E"},{queue:!1,duration:150,delay:200,easing:[.4,0,.2,1]}),$(".push2 path").velocity({fill:"#40a05b"},{queue:!1,duration:200,easing:[.4,0,.2,1]})}})}})}}),$(window).resize(function(){e()}),e(),$(".wheelsContainer").velocity({translateX:[0,"100%"]},{queue:!1,duration:4400,easing:[.39,.575,.565,1]}),$(".hoist, .hoistParts").velocity({translateX:[0,"100%"]},{queue:!1,duration:4400,easing:[.39,.575,.565,1],complete:function(){$(".phone3Screen .phoneCircle").velocity({scale:[1,0]},{queue:!1,duration:350,easing:[.25,.46,.45,.94]}),$(".phone3Screen").velocity({backgroundColor:"#555574"},{queue:!1,duration:150,delay:200,easing:[.4,0,.2,1]}),$(".analytics path").velocity({fill:"#3A3A59"},{queue:!1,duration:200,easing:[.4,0,.2,1]}),$(".hoistLineInner").velocity({y:["-22%",0]},{queue:!1,duration:800,easing:[.4,0,.2,1]})},begin:function(){$(".hoistWheel").velocity({rotateZ:["-=720deg"]},{queue:!1,duration:4400,easing:[.39,.575,.565,1]})}})}function a(){var e=$("img.headerRight").width(),t=$("img.headerLeft").width(),o=$("img.headerCenter").width();$(".headerRightContainer").css({width:e+"px"}),$(".headerLeftContainer").css({width:t+"px"}),$(".headerCenterContainer").css({width:o+"px"})}function n(){var e=$(window).scrollTop();if(C===e)return!1;C=e;var t=$(".header").height();e>=0&&w>=e&&x>960&&($(".heroText").css({transform:"translateY(-"+e/1.6+"px)",opacity:1-e/t}),$(".skyline").css({transform:"translateY("+.135*e+"px)"}));var o=$(".secondaryNav");e>=$(".header").height()?o.addClass("shown"):o.removeClass("shown");for(var a=$("section"),n=0;n<a.length;n++){var i=a.eq(n).offset().top,s=a.eq(n).height();e>i-64&&i+s-64>e&&b===!1&&($(".secondaryNav ul a").removeClass("active"),$(".secondaryNav ul a").eq(n).addClass("active"))}}var i=0,s=0,r=0;if("undefined"!=typeof gitJson)for(var d=0;d<gitJson.length;d++){var l=gitJson[d].name,c=l.toLowerCase(),u=gitJson[d].html_url,p=gitJson[d].has_issues,h=gitJson[d].description,g=parseInt(gitJson[d].stargazers_count),v=parseInt(gitJson[d].forks_count),y=gitJson[d].language,f;if(null!==h&&""!==h&&(f=h.toLowerCase()),null!==y&&""!==y){var m=y.toLowerCase();"javascript"===m?y="JS":"objective-c"===m&&(y="Obj-C"),"null"===m&&(y="")}else(null===y||""===y)&&(y="");r++,i+=g,s+=v,c.indexOf("sdk")>=0||c.indexOf("cli")>=0?c.includes("ios")===!0?($(".iosRepo .sdkRepoStar").text(g),$(".iosRepo .sdkRepoFork").text(v)):c.includes("android")===!0?($(".androidRepo .sdkRepoStar").text(g),$(".androidRepo .sdkRepoFork").text(v)):c.includes("javascript")===!0||c.includes("js")===!0?($(".javascriptRepo .sdkRepoStar").text(g),$(".javascriptRepo .sdkRepoFork").text(v)):c.includes("php")===!0?($(".phpRepo .sdkRepoStar").text(g),$(".phpRepo .sdkRepoFork").text(v)):c.includes("net")===!0?($(".xamarinRepo .sdkRepoStar").text(g),$(".xamarinRepo .sdkRepoFork").text(v),$(".unityRepo .sdkRepoStar").text(g),$(".unityRepo .sdkRepoFork").text(v)):c.includes("arduino")===!0?($(".arduinoRepo .sdkRepoStar").text(g),$(".arduinoRepo .sdkRepoFork").text(v)):c.includes("embedded")===!0?($(".embeddedRepo .sdkRepoStar").text(g),$(".embeddedRepo .sdkRepoFork").text(v)):c.includes("cli")===!0&&($(".cloudCodeRepo .sdkRepoStar").text(g),$(".cloudCodeRepo .sdkRepoFork").text(v)):p!==!1&&(c.includes("facebook")===!0||c.includes("twitter")===!0?e($("section.socialRepos table"),u,l,h,v,g,y):c.includes("tutorial")===!0||f.includes("tutorial")?e($("section.tutorials table"),u,l,h,v,g,y):c.includes("todo")===!0||c.includes("demo")===!0||c.includes("any")===!0||c.includes("store")===!0||c.includes("f8")===!0||c.includes("internetcar")===!0||f.includes("example")||f.includes("sample")?e($("section.sampleApps table"),u,l,h,v,g,y):e($("section.other table"),u,l,h,v,g,y))}$(".heroText .repoCount").text(r),$(".heroText .starCount").text(i),$(".heroText .forkCount").text(s);var R=Parse.Object.extend("CommunityRepos"),k=new Parse.Query(R);k.ascending("repoName"),k.find({success:function(e){for(var o=0;o<e.length;o++){var a=e[o],n=a.get("repoName"),i=a.get("repoDescription"),s=a.get("repoURL");t(n,i,s)}},error:function(e){console.log("Error: "+e.code+" "+e.message)}}),$(".expandableRepoLink").click(function(){var e=$(this);$(".expandableRepoLink").not(e).removeClass("expanded"),e.toggleClass("expanded")});var w=$(window).height(),x=$(window).width();$(window).resize(function(){w=$(window).height(),x=$(window).width()}),$(window).load(function(){a(),o()}),$(window).resize(function(){a()});var q=0,C,b=!1;$(window).on("mousewheel",function(){n(),q=1,clearTimeout($.data(this,"timer")),$.data(this,"timer",setTimeout(function(){q=0},100))}).scroll(function(){return 1===q?!1:void n()}),$("a[href*=#]:not([href=#])").click(function(){var e=$(this),t=e.attr("href");location.pathname.replace(/^\//,"")===this.pathname.replace(/^\//,"")&&location.hostname===this.hostname&&$(t).velocity("scroll",{duration:600,easing:[.4,0,.2,1],begin:function(){$(".secondaryNav ul a").removeClass("active"),e.addClass("active"),b=!0},complete:function(){b=!1}})})});