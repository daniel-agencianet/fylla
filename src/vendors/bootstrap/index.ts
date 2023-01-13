import { Dropdown, Modal } from "bootstrap";

window.addEventListener("load", function () {
  //
  //
  // Dropdown

  const dropdownElementList = [].slice.call(document.querySelectorAll(".dropdown-toggle"));
  dropdownElementList.map(function (dropdownToggleEl) {
    return new Dropdown(dropdownToggleEl);
  });

  //
  //
  // Modal

  const modalElement = <HTMLElement>document.querySelector(".modal");

  function handleModal() {
    const modals = document.querySelectorAll(".modal") as NodeListOf<HTMLElement>;

    modals.forEach((modal) => {
      modal.hasAttribute("show") ? new Modal(modal).show() : null;
    });
  }

  modalElement ? handleModal() : null;
});
