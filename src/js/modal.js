import MicroModal from "micromodal";

// const modals = ["modal-1", "modal-3", "modal-3", "modal-4"];

MicroModal.init({
  //   onShow: (modal) => {
  //     if (modals.includes(modal.id)) {
  //       document.body.classList.add("is-open");
  //     }
  //   },
  //   onClose: (modal) => {
  //     if (modals.includes(modal.id)) {
  //       document.body.classList.remove("is-open");
  //     }
  //   },
  openTrigger: "data-custom-open",
  closeTrigger: "data-custom-close",
  disableScroll: true,
  awaitOpenAnimation: true,
  debugMode: false,
  disableOverlayClose: true,
});
