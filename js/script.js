// Heart icon count 
// declare variables
let heartCount = 0;
const heartIcon = document.querySelectorAll(".main-love-icon-container");
const heartBtn = document.getElementById("love-btn");

heartIcon.forEach(function (icon) {
    icon.addEventListener("click", function () {
        heartCount++;
        heartBtn.innerText = heartCount;
    })
})

// call button

let userCoin = parseInt(document.getElementById("coin-btn").innerText);

document.querySelectorAll(".call-btn").forEach(function (btn) {
    btn.addEventListener("click", function (e) {
        e.preventDefault();

        // Show an **alert** with a message including the service name and number
        const card = btn.closest(".card-container");
        const serviceName = card.querySelector(".card-title-container h4").innerText;
        const serviceNum = card.querySelector(".service-num").innerText;

        // coin validation & reduction conditions
        if (userCoin > 20) {
            userCoin -= 20;
            document.getElementById("coin-btn").innerText = userCoin;

            callHistoryDataAdd(card);

            alert(`\n        ⚠️ ${serviceName}
                \n       📞 Number: ${serviceNum}`);

            callHistoryContentAdd();
        }
        else {
            alert("❗ At least 20 coins needed in the account.\n💰 Please recharge to continue using the service.");
        }

    })
})

// call history data addition function 
const callHistoryData = [];
function callHistoryDataAdd(card) {
    // declare variables
    const serviceName = card.querySelector(".card-title-container h4").innerText;
    const serviceNum = card.querySelector(".service-num").innerText;
    const serviceTime = new Date().toLocaleTimeString();
    const data = {
        name: serviceName,
        number: serviceNum,
        time: serviceTime
    }

    const newData = callHistoryData.push(data);
    return newData;
}

// call history content addition function 
function callHistoryContentAdd() {
    // Call History Section
    const callHistoryContainer = document.getElementById("call-history-container");
    callHistoryContainer.innerText = "";

    for (const data of callHistoryData) {
        const div = document.createElement("div");
        div.innerHTML =
            `
            <div class="history-info-container p-4 bg-[#FAFAFA] rounded-lg mt-3 flex justify-between items-center">
                <div class="history-info">
                    <h4 class="inter-title-2 text-[18px] font-semibold text-[#111] capitalize">${data.name}</h4>
                    <p class="hind-madurai-title text-[18px] font-normal text-[#5C5C5C]">${data.number}</p>
                </div>

                <div class="history-time hind-madurai-title text-[18px] font-normal text-[#111] uppercase">
                    ${data.time}
                </div>
            </div>
        `

        callHistoryContainer.appendChild(div);
    }
}

// clear button functionality
document.getElementById("clear-btn")
    .addEventListener("click", function (e) {
        e.preventDefault();
        callHistoryData.length = 0;
        callHistoryContentAdd();
    })
