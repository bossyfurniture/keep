"use strict";(globalThis.blocksyJsonP=globalThis.blocksyJsonP||[]).push([[798],{798:function(e,t,r){r.r(t),r.d(t,{mount:function(){return c}});var o=r(194),n=r.n(o);const c=function(e,t){let{event:r}=t;n()&&(ctEvents.trigger("ct:header:update"),function(e){if(!n())return;var t=e.closest("form"),r=t.find("button.button"),o=n()(t)[0].action,c=t.attr("method");void 0!==c&&""!=c||(c="POST");var a=new FormData(t[0]);a.append(r.attr("name"),r.val());const d=[...a.entries()].reduce((function(e,t){return e+(t[0].indexOf("quantity")>-1?parseInt(t[1],10):0)}),0);t.closest(".quick-view-modal").length&&(t.closest(".quick-view-modal").find(".ct-quick-add").removeClass("added"),t.closest(".quick-view-modal").find(".ct-quick-add").addClass("loading")),r.removeClass("added"),r.addClass("loading"),n()(document.body).trigger("adding_to_cart",[r,{}]),fetch(o,{method:c,body:a}).then((function(e){return e.text()})).then((function(e,o,c){const a=document.createElement("div");a.innerHTML=e;let i=a.querySelector(".woocommerce-error");if(i&&i.innerHTML.length>0){let e=document.querySelector(".woocommerce-notices-wrapper");return e.querySelector(".woocommerce-error")&&e.querySelector(".woocommerce-error").remove(),void(e&&e.appendChild(i))}n()(document.body).trigger("wc_fragment_refresh"),n()(document.body).trigger("added_to_cart",[{},e.cart_hash,r,d]),n().ajax({url:wc_cart_fragments_params.wc_ajax_url.toString().replace("%%endpoint%%","get_refreshed_fragments"),type:"POST",success:function(e){e&&e.fragments&&(n().each(e.fragments,(function(e,t){n()(e).replaceWith(t)})),n()(document.body).trigger("wc_fragments_refreshed")),t.closest(".quick-view-modal").length&&(t.closest(".quick-view-modal").find(".ct-quick-add").addClass("added"),t.closest(".quick-view-modal").find(".ct-quick-add").removeClass("loading"))}})})).catch((function(){return r.removeClass("loading")})).finally((function(){return r.removeClass("loading")}))}(n()(e)))}}}]);
//# sourceMappingURL=798.941ec8ef78eb0fd13c05.js.map