document.addEventListener("snipcart.ready", () => {
  Snipcart.events.on("item.added", (cartItem) => {
    console.log("Item Added!");
    let snipcartPulses = document.getElementsByClassName("snipcart-pulse");

    for (let snipcartPulse of snipcartPulses) {
      snipcartPulse.classList.add("active");
      snipcartPulse.addEventListener("animationend", () => {
        snipcartPulse.classList.remove("active");
      });
    }
    return;
  });
});
