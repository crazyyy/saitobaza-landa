jQuery(function(t){var n={message:null,init:function(){t("#contact-form input.contact, #contact-form a.contact").click(function(c){c.preventDefault(),t.get("data/contact.php",function(c){t(c).modal({closeHTML:"<a href='#' title='Close' class='modal-close'>x</a>",position:["15%"],overlayId:"contact-overlay",containerId:"contact-container",onOpen:n.open,onShow:n.show,onClose:n.close})})})},open:function(n){var c=280;t("#contact-subject").length&&(c+=26),t("#contact-cc").length&&(c+=22);var a=t("#contact-container .contact-title").html();t("#contact-container .contact-title").html("Loading..."),n.overlay.fadeIn(200,function(){n.container.fadeIn(200,function(){n.data.fadeIn(200,function(){t("#contact-container .contact-content").animate({height:c},function(){t("#contact-container .contact-title").html(a),t("#contact-container form").fadeIn(200,function(){t("#contact-container #contact-name").focus(),t("#contact-container .contact-cc").click(function(){var n=t("#contact-container #contact-cc");n.is(":checked")?n.attr("checked",""):n.attr("checked","checked")})})})})})})},show:function(c){t("#contact-container .contact-send").click(function(c){if(c.preventDefault(),n.validate()){var a=t("#contact-container .contact-message");a.fadeOut(function(){a.removeClass("contact-error").empty()}),t("#contact-container .contact-title").html("Sending..."),t("#contact-container form").fadeOut(200),t("#contact-container .contact-content").animate({height:"80px"},function(){t("#contact-container .contact-loading").fadeIn(200,function(){t.ajax({url:"data/contact.php",data:t("#contact-container form").serialize()+"&action=send",type:"post",cache:!1,dataType:"html",success:function(n){t("#contact-container .contact-loading").fadeOut(200,function(){t("#contact-container .contact-title").html("Thank you!"),a.html(n).fadeIn(200)})},error:n.error})})})}else if(t("#contact-container .contact-message:visible").length>0){var a=t("#contact-container .contact-message div");a.fadeOut(200,function(){a.empty(),n.showError(),a.fadeIn(200)})}else t("#contact-container .contact-message").animate({height:"30px"},n.showError)})},close:function(n){t("#contact-container .contact-message").fadeOut(),t("#contact-container .contact-title").html("Goodbye..."),t("#contact-container form").fadeOut(200),t("#contact-container .contact-content").animate({height:40},function(){n.data.fadeOut(200,function(){n.container.fadeOut(200,function(){n.overlay.fadeOut(200,function(){t.modal.close()})})})})},error:function(t){alert(t.statusText)},validate:function(){n.message="",t("#contact-container #contact-name").val()||(n.message+="Name is required. ");var c=t("#contact-container #contact-email").val();return c?n.validateEmail(c)||(n.message+="Email is invalid. "):n.message+="Email is required. ",t("#contact-container #contact-message").val()||(n.message+="Message is required."),n.message.length>0?!1:!0},validateEmail:function(t){var n=t.lastIndexOf("@");if(1>n||n+1===t.length)return!1;if(/(\.{2,})/.test(t))return!1;var c=t.substring(0,n),a=t.substring(n+1);return c.length<1||c.length>64||a.length<4||a.length>255?!1:/(^\.|\.$)/.test(c)||/(^\.|\.$)/.test(a)?!1:(/^"(.+)"$/.test(c)||/^[-a-zA-Z0-9!#$%*\/?|^{}`~&'+=_\.]*$/.test(c))&&/^[-a-zA-Z0-9\.]*$/.test(a)&&-1!==a.indexOf(".")?!0:!1},showError:function(){t("#contact-container .contact-message").html(t('<div class="contact-error"></div>').append(n.message)).fadeIn(200)}};n.init()});