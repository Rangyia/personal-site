export default function parse(view) {
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