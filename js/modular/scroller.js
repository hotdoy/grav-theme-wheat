const scroller = document.querySelector('.scroller');
const scrollerContainer = scroller.querySelector('.container');
const step = scroller.querySelector('.slide').clientWidth;

console.log(step);

scroller.querySelector('.next').addEventListener('click', scrollToNextPage);
scroller.querySelector('.prev').addEventListener('click', scrollToPrevPage);

// For paginated scrolling, simply scroll the gallery one item in the given
// direction and let css scroll snaping handle the specific alignment.
function scrollToNextPage() {
  scrollerContainer.scrollBy(step, 0);
}
function scrollToPrevPage() {
  scrollerContainer.scrollBy(-step, 0);
}

function updateAlignment(event) {
  const alignment = event.target.value;
  for (item of scroller.querySelectorAll('.slide'))
    item.style.scrollSnapAlign = alignment;

  // Currently changing scroll alignment does not force a re-snap in Chrome.
  // This is a bug: http://crbug.com/866127
  // In meantime, if desired a scroll snap can be triggered using a small 
  // scripted scroll e.g.: `scrollerContainer.scrollBy(1, 0);`
}