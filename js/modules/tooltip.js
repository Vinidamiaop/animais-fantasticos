export default function initTooltip() {
  const tooltips = document.querySelectorAll("[data-tooltip]");

  const onMouseMove = {
    handleEvent(event) {
      this.tooltipBox.style.top = `${event.pageY + 30}px`;
      this.tooltipBox.style.left = `${event.pageX + 30}px`;
    },
  };

  const onMouseLeave = {
    handleEvent() {
      this.tooltipBox.remove();
      this.element.removeEventListener("mouseleave", onMouseLeave);
      this.element.removeEventListener("mousemove", onMouseMove);
    },
  };

  function criarTooltipBox(element) {
    const text = element.getAttribute("aria-label");
    const tooltipBox = document.createElement("div");
    tooltipBox.classList.add("tooltip");
    tooltipBox.innerText = text;
    document.body.appendChild(tooltipBox);
    return tooltipBox;
  }

  function onMouseOver(event) {
    const tooltipBox = criarTooltipBox(this);
    tooltipBox.style.top = `${event.pageY}px`;
    tooltipBox.style.left = `${event.pageX}px`;

    this.addEventListener("mouseleave", onMouseLeave);
    onMouseMove.tooltipBox = tooltipBox;

    onMouseLeave.tooltipBox = tooltipBox;
    onMouseLeave.element = this;
    this.addEventListener("mousemove", onMouseMove);
  }

  if (tooltips) {
    tooltips.forEach((item) => {
      item.addEventListener("mouseover", onMouseOver);
    });
  }
}
