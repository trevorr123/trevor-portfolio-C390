const filterButtons = document.querySelectorAll(".filter-btn");
const cards = document.querySelectorAll(".portfolio-card");

filterButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    // active button style
    filterButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    const filter = btn.dataset.filter;

    cards.forEach((card) => {
      const categories = card.dataset.category.split(" ");

      const show =
        filter === "all" || categories.includes(filter);

      if (show) {
        card.classList.remove("hide");
        card.style.display = "block";
      } else {
        card.classList.add("hide");
        card.style.display = "none";
      }
    });
  });
});
