let list = document.querySelector('.carousel')
let items = document.querySelectorAll('.item');
const leftBtn = document.querySelector('.left-arrow')
const rightBtn = document.querySelector('.right-arrow')


let heroes = [];
const cardsToShow = 8

async function fetchHeroes() {
    try {
        const resp = await fetch('https://api.opendota.com/api/heroes');
        const data = await resp.json();
        heroes = data.slice(0, cardsToShow);

        displayHeroes()
    } catch (error) {
        throw error;
    }
}

function displayHeroes() {
    const list = document.querySelector('.carousel')
    heroes.forEach(elem => {
        const element = document.createElement('li')
        element.className = 'item'
        const img = document.createElement('img')
        const title = document.createElement('div')
        title.textContent = elem.localized_name;
        img.src = `https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/${elem.name.replace("npc_dota_hero_", "").toLowerCase()}.png`
        console.log(elem);

        element.appendChild(img)
        element.appendChild(title)
        list.appendChild(element)
    })
}

fetchHeroes()


let left = 0
let showed = 3
leftBtn.addEventListener('click', () => {
    console.log(left);

    if (showed === 3) return

    left += 130
    showed - 1;
    list.style.marginLeft = left + 'px';

})


rightBtn.addEventListener('click', () => {
    console.log(left);

    if (showed === cardsToShow) return

    left -= 130
    showed += 1;

    list.style.marginLeft = left + 'px';

})





///////////////////////////////////////////////////////////////////////////

const button = document.querySelector("#main-btn");
const inputName = document.querySelector("#input-name");
const inputPW = document.querySelector("#input-password");

const alerts = document.querySelectorAll(".form__alert");
const inputs = document.querySelectorAll(".form__input");

const inputHandler = () => {
    for (let el of alerts) {
        el.classList.remove("text-wrong");
    }

    for (let el of inputs) {
        el.classList.remove("wrong");
    }
};

const buttonHandler = (e) => {
    e.preventDefault();

    if (
        !/^[A-Za-zА-Яа-яЁё\s]+$/.test(inputName.value) ||
        /[-*\/\\_]/.test(inputPW.value)
    ) {
        for (let el of alerts) {
            el.classList.add("text-wrong");
        }

        for (let el of inputs) {
            el.classList.add("wrong");
        }
    }
};

button.addEventListener("click", buttonHandler);

inputName.addEventListener("input", inputHandler);
inputPW.addEventListener("input", inputHandler);

///////////////////////////////////////////////////////////////////////////

const namesArray = [
    "Александр",
    "Екатерина",
    "Максим",
    "Анна",
    "Дмитрий",
    "Ольга",
    "Иван",
    "София",
    "Артем",
    "Алиса",
    "Кирилл",
    "Виктория",
    "Михаил",
    "Полина",
    "Даниил",
    "Арина",
    "Сергей",
    "Елена",
    "Алексей",
    "Мария",
];

let filteredList = namesArray;

const inputFilter = document.querySelector("#input-filter");

function debounce(func, ms) {
    let timeout;
    return function (...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func(...args), ms);
    };
}

function performFiltering(value) {
    filteredList = namesArray.filter((elem) =>
        elem.toLowerCase().includes(value.toLowerCase())
    );
    renderNames();
}

const debouncedFilter = debounce(performFiltering, 300);

function filterHandler(e) {
    debouncedFilter(e.target.value);
}

inputFilter.addEventListener("input", filterHandler);

function renderNames() {
    const container = document.getElementById("names-list");
    container.innerHTML = "";
    const list = document.createElement("ul");
    filteredList.forEach((name) => {
        const item = document.createElement("li");
        item.classList.add("list__item");
        item.textContent = name;
        list.appendChild(item);
    });

    container.appendChild(list);
}

window.onload = renderNames;
inputFilter.addEventListener("input", renderNames);

/////////////////////////////////////////////////////////////////////

async function fetchCurrencyData() {
    try {
        const response = await fetch(
            "https://api.currencyapi.com/v3/latest?apikey=cur_live_7sdww4ZUYaqyAWlAfxyLdw5G76TXj90nsJFNw69e"
        );
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Ошибка при получении данных:", error);
        throw error;
    }
}

const values = {
    currentNames: {
        byn: document.querySelector("#rubName"),
        usd: document.querySelector("#usdName"),
        eur: document.querySelector("#eurName"),
        chf: document.querySelector("#chfName"),
        cny: document.querySelector("#cnyName"),
        gbp: document.querySelector("#gbpName"),
    },
    currents: {
        byn: document.querySelector("#rub"),
        usd: document.querySelector("#usd"),
        eur: document.querySelector("#eur"),
        chf: document.querySelector("#chf"),
        cny: document.querySelector("#cny"),
        gbp: document.querySelector("#gbp"),
    }
}


const date = document.querySelector("#metaDate");


async function updateData() {
    const currencyData = await fetchCurrencyData();
    const roubleCource = currencyData.data.RUB.value.toFixed(3)

    Object.keys(values.currentNames).forEach(elem => {
        values.currents[elem].innerHTML = (roubleCource / currencyData.data[elem.toUpperCase()].value).toFixed(3)
    })

    Object.keys(values.currents).forEach(elem => {
        values.currentNames[elem].innerHTML = currencyData.data[elem.toUpperCase()].code
    })

    const newDate = new Date(currencyData.meta.last_updated_at)
    date.innerHTML = newDate.toLocaleString()
}

function startUpdating() {
    updateData()

    setInterval(updateData, 900000)
}

startUpdating()


/////////////////////////////////////////////////////////////////////

const scrollable = document.querySelector('.scrollable')
const scrollBtn = document.querySelector('#scrollBtn')

scrollable.addEventListener('scroll', () => {
    scrollBtn.style.top = `${scrollable.scrollTop + 175}px`;
    console.log(scrollable.scrollTop);
    scrollBtn.style.display = 'block'
    if (scrollable.scrollTop < 30) scrollBtn.style.display = 'none'

})

scrollBtn.addEventListener('click', () => {
    // scrollable.style.top = `${scrollable.scrollTop + 175}px`;
    scrollable.scrollTop = 0
})