$(function(){$("#fileupload").fileupload({url:"server/php/"});$("#fileupload").fileupload("option","redirect",window.location.href.replace(/\/[^\/]*$/,"/cors/result.html?%s"));if(window.location.hostname==="blueimp.github.io"){$("#fileupload").fileupload("option",{url:"//jquery-file-upload.appspot.com/",disableImageResize:/Android(?!.*Chrome)|Opera/.test(window.navigator.userAgent),maxFileSize:20000000,acceptFileTypes:/(\.|\/)(doc|docx|xls|xlsx|ppt|pptx|pdf|zip|rar)$/i});if($.support.cors){$.ajax({url:"//jquery-file-upload.appspot.com/",type:"HEAD"}).fail(function(){$('<span class="alert alert-error"/>').text("Upload server currently unavailable - "+new Date()).appendTo("#fileupload")})}}else{}});