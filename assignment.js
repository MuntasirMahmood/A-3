//https://github.com/MuntasirMahmood/A-3

// PROBLEM-1: KILOMETER TO METER
function kilometerToMeter(kilometer) {
    if (typeof kilometer == "number" && kilometer >= 0) {
        return kilometer * 1000;
    }
    else {
        return "Invalid Input. Kilometer Value Must Be A Non-negative Number."
    }
}


// PROBLEM-2: BUDGET CALCULATOR
function budgetCalculator(watch, phone, laptop) {
    if (typeof watch == "number" && typeof phone == "number" && typeof laptop == "number" && watch >= 0 && phone >= 0 && laptop >= 0) {
        if (Math.floor(watch) == watch && Math.floor(phone) == phone && Math.floor(laptop) == laptop) {
            return watch * 50 + phone * 100 + laptop * 500;
        }
        else {
            return "Invalid Input. You Cannot Buy Fractions Of A Device";
        }
    }
    else {
        return "Invalid Input. Please Enter A Positive Integer.";
    }
}

// PROBLEM-3: HOTEL COST CALCULATOR 
function hotelCost(days) {
    if (days < 0 || Math.floor(days) != days) {
        return "Invalid Input. A Day Is A Non-negative Integer.";
    }
    else if (days <= 10) {
        return days * 100;
    }
    else if (days <= 20) {
        return 10 * 100 + (days - 10) * 80;
    }
    else {
        return 10 * 100 + 10 * 80 + (days - 20) * 50;
    }
}

// PROBLEM-4: MEGA FRIEND
function megaFriend(friendList) {
    if (Array.isArray(friendList) == true) {
        if (friendList.length == 0) {
            return "Invalid Input. Go Make Some Friends And Try Again.";
        }
        else {
            var biggest = "";
            for (var i = 0; i < friendList.length; i++) {
                if (typeof (friendList[i]) != "string") {
                    biggest = "Invalid Input. Please Put Strings In The Array."
                    break;
                }
                else {
                    if (friendList[i].length > biggest.length) {
                        biggest = friendList[i];
                    }
                    else {
                        continue
                    }
                }
            }
            return biggest;
        }
    }
    else {
        return "Invalid Input. Please Enter an Array."
    }
}

