// Variables
const headerLinkCloseBtns = document.querySelectorAll('.dv-header-link-close-btn');

// Adding Event Listener On Each Init Link Close Buttons That Listens TO Click And Class Of 'dv-closed' To Init Link Holder
// And Adds Event Listener Of Mouseover To Its Link Holder In Nav And Removes  'dv-closed' From Init Link Holder.
headerLinkCloseBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const initLinks = btn.parentElement.parentElement.parentElement;
        initLinks.classList.add('dv-closed');
        initLinks.parentElement.addEventListener('mouseover', () => initLinks.classList.remove('dv-closed'))
    })
})