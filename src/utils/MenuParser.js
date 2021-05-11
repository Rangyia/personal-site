exports.parse = function (view) {
    const option = view.toLowerCase();

    switch(option) {
        case "home": 
            return 0;
        case "frontend":
            return 1;
        case "backend":
            return 2;
        case "hacking":
            return 3;
        case "devops":
            return 4;
        default:
            console.error("Invalid view selection")
    }

    return 0;
};

exports.parseNumContent = function (num) {
    const option = num.toLowerCase();
    console.log(option)

    switch (option) {
        case "01":
            return "Home";
        case "02":
            return "Frontend";
        case "03":
            return "Backend";
        case "04":
            return "Hacking";
        case "05":
            return "DevOps";
        default:
            console.error("Invalid view selection")
    }

    return 0;
};
