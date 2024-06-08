import Toastify from 'toastify-js';
import "toastify-js/src/toastify.css";

function showToast(message, type = "info") {
    Toastify({
        text: message,
        duration: 3000,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        backgroundColor: type === "error" ? "#FF0000" : "#00FF00",
        stopOnFocus: true, // Prevents dismissing of toast on hover
    }).showToast();
}

export default showToast;
