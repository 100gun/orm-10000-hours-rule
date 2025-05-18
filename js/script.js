// 모달 스크립트

document.addEventListener("DOMContentLoaded", function () {
  // DOM 요소 선택
  const openModalBtn = document.querySelector(".btn-modal");
  const modal = document.querySelector(".modal");
  const closeModalBtn = document.querySelector(".btn-gogo");

  // 모달 열기 이벤트
  openModalBtn.addEventListener("click", function () {
    modal.showModal();
  });

  // 모달 닫기 이벤트
  closeModalBtn.addEventListener("click", function () {
    modal.close();
  });
});
