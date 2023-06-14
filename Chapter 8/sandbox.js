const clock = document.querySelector('.clock')

const tick = () => {
    const now = new Date();// create a new date at every second

    const h = now.getHours();
    const m = now.getMinutes();
    const s = now.getSeconds();

    const html = `<span>${h}</span>
    : <span>${m}</span> : <span>${s}</span>`; // format the time

    clock.innerHTML = html;
};

setInterval(tick, 1000);