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