
let counter = 0;
const fetchData = () => {
    console.log("fecthing data", counter++);
}


const Debounce = function (fn, delay) {
    let timer;
    return function () {
        let context = this,
            args = arguments;

        clearTimeout(timer);
        timer = setTimeout(() => {
            fetchData.apply(context, arguments)
        }, delay);
    }
}

const Optimized = Debounce(fetchData, 400);