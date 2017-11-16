const baseSettings = {
    modules: {
        datetime: true,
        weather: false,
        currency: true,
        thought: true
    },
    datetime: {
        locale: "en"
    },
    weather: {
        key: "",
        location: "",
        units: ""
    },
    currency: {
        base: "GBP",
        target: "USD,JPY"
    }
}

function settings(state = baseSettings, action) {
    switch (action.type) {
        case 'UPDATE_SETTING':
            const area = action.area;
            const section = action.section;
            const content = action.content;
            return Object.assign({}, state, {
                [area]: Object.assign({}, state[area], {
                    [section]: content
                })
            });
        default:
            return state
    }
}

export default settings