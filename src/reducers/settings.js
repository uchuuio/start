const baseSettings = {
    modules: {
        datetime: true,
        weather: false,
        currency: true,
        thought: true
    },
    datetime: {
        locale: "EN"
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

            // while (id < state.links.length) {
            //     id++;
            // }
            // return Object.assign({}, state, {
            //     links: [
            //         ...state.links,
            //         {
            //             id: id,
            //             group: action.group,
            //             color: action.color,
            //             text: action.text,
            //             link: action.link
            //         }
            //     ]
            // });
        default:
            return state
    }
}

export default settings