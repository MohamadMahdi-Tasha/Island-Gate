// Variables
const headerLinkCloseBtns = document.querySelectorAll('.dv-header-link-close-btn');
const openOnLoadModals = new bootstrap.Modal(document.getElementById("dv-open-on-load"), {});

// Scripts Of Nav Bars Close Button
// Adding Event Listener On Each Init Link Close Buttons That Listens TO Click And Class Of 'dv-closed' To Init Link Holder
// And Adds Event Listener Of Mouseover To Its Link Holder In Nav And Removes  'dv-closed' From Init Link Holder.
headerLinkCloseBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const initLinks = btn.parentElement.parentElement.parentElement;
        initLinks.classList.add('dv-closed');
        initLinks.parentElement.addEventListener('mouseover', () => initLinks.classList.remove('dv-closed'))
    })
})

// Scripts Of Second Section (Home) Images
// A Function That Removes Class Of 'dv-current' From Current Showing Image (In Second Section) And Checks IF Next Element Of It
// Exists . If It Exists Then Shows It. Otherwise Shows First Image
function showNextItem() {
    const currentSecondSectionItem = document.querySelector('.dv-second-section-bottom-item.dv-current');
    const firstBottomSecondSection = document.querySelector('.dv-second-section-bottom-item.dv-first');
    const nextElementOfCurrent = currentSecondSectionItem.nextElementSibling;

    currentSecondSectionItem.classList.remove('dv-current');
    (nextElementOfCurrent !== null) ?
        nextElementOfCurrent.classList.add('dv-current') :
        firstBottomSecondSection.classList.add('dv-current');
}

// Calling 'showNextItem' Function Over And Over Again In 5 Seconds (5000ms)
setInterval(showNextItem, 5000);

// Scripts Of Open On Load Modals (Bootstrap)
// Adding Event Listener Of Ready (Its When Page Is Loaded) Then Show openingModal.
document.onreadystatechange = () => openOnLoadModals.show();