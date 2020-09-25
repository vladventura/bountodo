export const LOCAL_STORAGE_KEY_NAME = "BOUNTODO_LOCAL_DATA";
export const ROUTES = {
  home: {
    name: "Todos",
    path: "/",
  },
  shop: {
    name: "Shop",
    path: "/shop",
  },
};

export const META = {
  nameMaxChars: 30,
  nameMinChars: 3,
  descriptionMaxChars: 500,
  descriptionMinChars: 5,
};

export const ERRORS = {
  emptyName: "The ToDo's name cannot be empty!",
  nameOver: `The ToDo's name cannot be over ${META.nameMaxChars} characters`,
  nameUnder: `The ToDo's name cannot be under ${META.nameMinChars} characters`,
  emptyDescription: "The ToDo's description cannot be empty!",
  descriptionOver: `The ToDo's description cannot be over ${META.descriptionMaxChars} characters`,
  descriptionUnder: `The ToDo's description cannot be under ${META.descriptionMinChars} characters`,
  noRarity: "Please choose a rarity from the Rarity dropdown!",
};

export const PLAYER_ATTRS = {
  gold: "gold",
  fame: "fame",
  purchased: "purchased"
};
