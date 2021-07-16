const liteslider = document.querySelector('.liteslider');
const litesliderContainer = liteslider.querySelector('.liteslider-container');
const step = liteslider.querySelector('.liteslider-slide').clientWidth;

console.log(step);

liteslider.querySelector('.liteslider-next').addEventListener('click', scrollToNextPage);
liteslider.querySelector('.liteslider-prev').addEventListener('click', scrollToPrevPage);

// For paginated scrolling, simply scroll the gallery one item in the given
// direction and let css scroll snaping handle the specific alignment.
function scrollToNextPage() {
  litesliderContainer.scrollBy(step, 0);
}
function scrollToPrevPage() {
  litesliderContainer.scrollBy(-step, 0);
}

function updateAlignment(event) {
  const alignment = event.target.value;
  for (item of liteslider.querySelectorAll('.liteslider-container > .liteslider-slide'))
    item.style.scrollSnapAlign = alignment;

  // Currently changing scroll alignment does not force a re-snap in Chrome.
  // This is a bug: http://crbug.com/866127
  // In meantime, if desired a scroll snap can be triggered using a small 
  // scripted scroll e.g.: `litesliderContainer.scrollBy(1, 0);`
}