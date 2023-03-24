import { Dimensions } from 'react-native';
// screen sizing
const { width, height } = Dimensions.get('window');
// orientation must fixed
const SCREEN_WIDTH = width < height ? width : height;

const recipeNumColums = 2;
// item size
const RECIPE_ITEM_HEIGHT = 150;
const RECIPE_ITEM_MARGIN = 20;

//colors
const PRIMARY_COLOR = '#2cd18a';

export {
    SCREEN_WIDTH,recipeNumColums,RECIPE_ITEM_HEIGHT,RECIPE_ITEM_MARGIN,
    PRIMARY_COLOR
};