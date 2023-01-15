let lastScrollY = 0;

addEventListener("scroll", (e) => {
  const scrollY = window.scrollY;

  // 이전의 스크롤 위치와 비교하기
  const direction = scrollY > lastScrollY ? "Scroll Down" : "Scroll Up";

  // 현재의 스크롤 값을 저장
  lastScrollY = scrollY;

  console.log(direction);
});

const gnb = document.querySelector(".header_default__header-center");
const gnbUl = document.querySelector(".menu-main");

gnbUl.addEventListener("mouseenter", function () {
  gnb.classList.add("on");
});
gnbUl.addEventListener("mouseleave", function () {
  gnb.classList.remove("on");
});

const btnScroll = document.querySelector(".btn-scroll");

btnScroll.addEventListener("click", function () {
  window.scrollTo(0, 1000);
});
