((Drupal, once) => {
  Drupal.behaviors.cardSDC = {
    attach(context) {
      once("card-processed", ".card", context).forEach((card) => {
        card.setAttribute("data-card-clicked", false);
        card.addEventListener("click", (e) => {
          card.setAttribute(
            "data-card-clicked",
            e.currentTarget.getAttribute("data-card-clicked") === "false"
          );
        });
      });
    },
  };
})(Drupal, once);
