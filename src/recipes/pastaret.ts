import type { Recipe } from "$lib/types/recipe";

export const pastaret: Recipe = {
    slug: "sorens-pastaret",
    title: "Sørens Pastaret",
    image: "",
    shortDesc: "Lav indsats, pisse lækker pastaret.",
    longDesc: "Nem ret. Smid det hele i et fad og bland. Tager ingen tid at forbedrede og skal bare glemmes i ovnen i alt mellem 30 minutter og 24 timer. Bliver nice.",
    ingredients: [
        {name: "Fyldt pasta", amount: "400g"},
        {name: "Hakkede tomater", amount: "2-3 dåser"},
        {name: "Løg", amount: "2-20 stk"},
        {name: "Fløde", amount: "1/4 liter fløde"},
        {name: "Havarti ost (revet)", amount: "200g"},
        {name: "Grønsag", amount: "Nok"},
        {name: "Salt og peber", amount: ""},
    ],
    steps: [
        {
            title: "Åbn, hak og bland",
            desc: "Hak grønsager og riv osten. Bland grønsager og pasta. " +
                "Gem osten til sidst. Hæld tomaterne i så det kun lige dækker."
        },
        {
            title: "Ost - selvfølgelig",
            desc: "Osten fordeles nøjsomt ovenpå. Når osten er fordelt, " +
                "smider du fingerne i fadet og begynder skødesløst at blande det hele."
        },
        {
            title: "Ovnen klarer resten",
            desc: "Det skal næppe have mindre end 30 minutter, men nok mere." +
                "Kig på den hver 20. minut og tænk dig om."
        },
        {
            title: "Du er der næsten!",
            desc: "Nu skal den bare have til du ikke tør mere. " +
                "I stræberversionen kan man også røre i den under inspektionerne"
        },
    ],
};