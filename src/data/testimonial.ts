import star from "../assets/icons/star.svg?url";

export interface Testimony {
  id: number;
  name: string;
  comment: string;
  score: string;
}

export const testimonies: Testimony[] = [
  {
    id: 1,
    name: "Maria Paz",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit conubia, massa facilisi lectus ullamcorper ridiculus potenti iaculis nibh, interdum faucibus ad diam vivamus vehicula fames.",
    score: star,
  },

  {
    id: 2,
    name: "Andres Gomez",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit conubia, massa facilisi lectus ullamcorper ridiculus potenti iaculis nibh, interdum faucibus ad diam vivamus vehicula fames.",
    score: star,
  },

  {
    id: 3,
    name: "Carlos Ramirez",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit conubia, massa facilisi lectus ullamcorper ridiculus potenti iaculis nibh, interdum faucibus ad diam vivamus vehicula fames.",
    score: star,
  },

  {
    id: 4,
    name: "Luisa Fernanda",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit conubia, massa facilisi lectus ullamcorper ridiculus potenti iaculis nibh, interdum faucibus ad diam vivamus vehicula fames.",
    score: star,
  },

  {
    id: 5,
    name: "Javier Torres",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit conubia, massa facilisi lectus ullamcorper ridiculus potenti iaculis nibh, interdum faucibus ad diam vivamus vehicula fames.",
    score: star,
  },

  {
    id: 6,
    name: "Ana Lucia",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit conubia, massa facilisi lectus ullamcorper ridiculus potenti iaculis nibh, interdum faucibus ad diam vivamus vehicula fames.",
    score: star,
  },
];
