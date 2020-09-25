import { ENHANCEMENT_RATE_ALTER as type } from "../types";
import { EnhRateAlter, Item } from "../../models";
import { PLAYER_ATTRS } from "../../constants";

const GOLD_PLUS_25 = {
  ...Item(
    "Gold Rate +25%",
    type,
    3500,
    EnhRateAlter(PLAYER_ATTRS.gold, (value) => Math.floor(value + value * 0.25))
  ),
};

const GOLD_PLUS_50 = {
  ...Item(
    "Gold Rate +50%",
    type,
    7000,
    EnhRateAlter(PLAYER_ATTRS.gold, (value) => Math.floor(value + value * 0.5))
  ),
};

const GOLD_PLUS_75 = {
  ...Item(
    "Gold Rate +75%",
    type,
    10500,
    EnhRateAlter(PLAYER_ATTRS.gold, (value) => Math.floor(value + value * 0.75))
  ),
};
const FAME_PLUS_10 = {
  ...Item(
    "Fame Rate +10%",
    type,
    3000,
    EnhRateAlter(PLAYER_ATTRS.fame, (value) => Math.floor(value + value * 0.1))
  ),
};

const FAME_PLUS_15 = {
  ...Item(
    "Fame Rate +15%",
    type,
    6000,
    EnhRateAlter(PLAYER_ATTRS.fame, (value) => Math.floor(value + value * 0.15))
  ),
};

const FAME_PLUS_20 = {
  ...Item(
    "Fame Rate +20%",
    type,
    9000,
    EnhRateAlter(PLAYER_ATTRS.fame, (value) => Math.floor(value + value * 0.2))
  ),
};

export default [
  GOLD_PLUS_25,
  GOLD_PLUS_50,
  GOLD_PLUS_75,
  FAME_PLUS_10,
  FAME_PLUS_15,
  FAME_PLUS_20,
];
