function calculate() {
    const sizeInput = document.getElementById("size");
    const size = parseInt(sizeInput.value, 10);

    const ageInput = document.getElementById("age");
    const age = parseInt(ageInput.value, 10);

    const weightInput = document.getElementById("weight");
    const weight = parseInt(weightInput.value, 10);

    const activityInput = document.getElementById("activity");
    const activity = parseFloat(activityInput.value);

    let gender;

    if (document.getElementById("female").checked) {
        gender = "female";
    } else if (document.getElementById("male").checked) {
        gender = "male";
    }

    if (gender === "female") {
        let kcal = (655.1 + (9.6 * weight) + (1.8 * size) - (4.7 * age)).toFixed(2);
        let kcalActivity = (kcal * activity).toFixed(2);
        console.log(kcalActivity);
        kcal_result.textContent = kcal;
        kcal_result_activity.textContent = kcalActivity;

        let kj = (kcal * 4.184).toFixed(2);
        let kjActivity = (kj * activity).toFixed(2);
        console.log(kjActivity);
        kj_result.textContent = kj;
        kj_result_activity.textContent = kjActivity;

    } else if (gender === "male") {
        let kcal = (66.47 + (13.7 * weight) + (5 * size) - (6.8 * age)).toFixed(2);
        let kcalActivity = (kcal * activity).toFixed(2);
        console.log(kcalActivity);
        kcal_result.textContent = kcal;
        kcal_result_activity.textContent = kcalActivity;

        let kj = (kcal * 4.184).toFixed(2);
        let kjActivity = (kj * activity).toFixed(2);
        console.log(kjActivity);
        kj_result.textContent = kj;
        kj_result_activity.textContent = kjActivity;

    }
}

const result = document.getElementById("result");
result.addEventListener("click", calculate);


function scrollToHeader() {
    const scroll = document.getElementById("scroll");
    scroll.scrollIntoView({ behavior: "smooth" });
}


function activePlan(active) {
    let monthlyButton = document.querySelector(".monthly");
    let yearlyButton = document.querySelector(".yearly");

    if (active === "monthly") {
        monthlyButton.classList.add("active");
        yearlyButton.classList.remove("active");
    } else if (active === "yearly") {
        yearlyButton.classList.add("active");
        monthlyButton.classList.remove("active");
    }
}