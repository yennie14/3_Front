const dubuBtn = document.querySelector("#dubuBtn");
const mochaBtn = document.querySelector("#mochaBtn");
const aegiBtn = document.querySelector("#aegiBtn");

const catImage = document.querySelector("#catImage");
const catName = document.querySelector("#catName");
const catKor = document.querySelector("#catKor");
const catBreed = document.querySelector("#catBreed");
const catDescription = document.querySelector("#catDescription");
const catFavorite = document.querySelector("#catFavorite");

const buttons = [dubuBtn, mochaBtn, aegiBtn];

function removeActive() {
    buttons.forEach(function (btn) {
        btn.classList.remove("active");
    });
}

dubuBtn.addEventListener("click", function () {

    removeActive();
    dubuBtn.classList.add("active");

    catImage.src = "images/dubu.jpg";
    catImage.alt = "두부";

    catName.innerHTML = "DUBU";
    catKor.innerHTML = "두부";
    catBreed.innerHTML = "White Scottish Fold";

    catDescription.innerHTML =
        "우리 집 첫째. 하얀 털을 가진 스코티시 폴드. 차분하지만 은근히 애교가 많은 고양이.";

    catFavorite.innerHTML = `
        <li>🤍 좋아하는 것 : 츄르</li>
        <li>😴 취미 : 낮잠</li>
        <li>🧸 특징 : 차분한 성격</li>
    `;

});

mochaBtn.addEventListener("click", function () {

    removeActive();
    mochaBtn.classList.add("active");

    catImage.src = "images/mocha.jpg";
    catImage.alt = "모카";

    catName.innerHTML = "MOCHA";
    catKor.innerHTML = "모카";
    catBreed.innerHTML = "Gray Calico Cat";

    catDescription.innerHTML =
        "호기심이 정말 많은 둘째. 집안 탐험을 좋아하고 간식 봉지 소리에는 누구보다 빠르게 달려온다.";

    catFavorite.innerHTML = `
        <li>🤎 좋아하는 것 : 간식</li>
        <li>🐾 취미 : 집안 탐험</li>
        <li>✨ 특징 : 호기심 많음</li>
    `;

});

aegiBtn.addEventListener("click", function () {

    removeActive();
    aegiBtn.classList.add("active");

    catImage.src = "images/aegi.jpg";
    catImage.alt = "애기";

    catName.innerHTML = "AEGI";
    catKor.innerHTML = "애기";
    catBreed.innerHTML = "Tuxedo Cat";

    catDescription.innerHTML =
        "막내답게 가장 활발한 고양이. 하루 종일 뛰어다니며 집안 분위기를 책임지는 에너자이저.";

    catFavorite.innerHTML = `
        <li>🖤 좋아하는 것 : 장난감</li>
        <li>⚡ 취미 : 뛰어다니기</li>
        <li>🎈 특징 : 에너지 넘침</li>
    `;

});