import { CurrentRenderContext } from '@react-navigation/native';
import { StyleSheet, Dimensions } from 'react-native';
import {SCREEN_WIDTH, recipeNumColums,RECIPE_ITEM_HEIGHT,RECIPE_ITEM_MARGIN} from './utils/constants';
//Colors

// 2 photos per width
export const RecipeCard = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: RECIPE_ITEM_MARGIN,
    marginTop: 20,
    width: (SCREEN_WIDTH - (recipeNumColums + 1) * RECIPE_ITEM_MARGIN) / recipeNumColums,
    height: RECIPE_ITEM_HEIGHT + 64,
    borderColor: '#cccccc',
    borderWidth: 0.5,
    borderRadius: 15
  },
  textContainer:{
    paddingVertical: 10
  },
  photo: {
    width: (SCREEN_WIDTH - (recipeNumColums + 1) * RECIPE_ITEM_MARGIN) / recipeNumColums,
    height: RECIPE_ITEM_HEIGHT,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#444444',
  },
  category: {
    marginTop: 5,
    textAlign:'center',
    color: '#120b73'
  }
});
