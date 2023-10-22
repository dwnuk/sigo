document.addEventListener('DOMContentLoaded', function () {
    const copyElements = document.querySelectorAll('.copy-el');

    copyElements.forEach(function (element) {
        element.addEventListener('click', function () {
            var textToCopy = element.textContent;
            copyToClipboard(textToCopy);
           element.classList.add('is-copied');

           setTimeout(function () {
            element.classList.remove('is-copied');
        }, 2000);
        });
    });

    function copyToClipboard(text) {
        var textarea = document.createElement('textarea');
        textarea.value = text;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
    }
});