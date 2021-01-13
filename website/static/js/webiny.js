document.addEventListener("DOMContentLoaded", function(event) {
    // user feedback widget
    Userback = window.Userback || {};
    Userback.access_token = "10887|22415|nkZ1NKbPefDMyUaY9cVGNufGj";
    (function(id) {
        var s = document.createElement("script");
        s.async = 1;
        s.src = "https://static.userback.io/widget/v1.js";
        var parent_node = document.head || document.body;
        parent_node.appendChild(s);
    })("userback-sdk");
});
