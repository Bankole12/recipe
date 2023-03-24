import React, { useLayoutEffect } from "react";
import { FlatList, Text, View, TouchableHighlight, Image } from "react-native";
import styles from "./styles";
import { recipes } from "../../data/dataArrays";
import MenuImage from "../../components/MenuImage/MenuImage";
import { getCategoryName } from "../../data/MockDataAPI";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";

export default function HomeScreen({navigation}) {
  // const { navigation } = props;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <MenuImage
          onPress={() => {
            navigation.openDrawer();
          }}
        />
      ),
      headerRight: () => <View />,
    });
  }, []);

  const onPressRecipe = (item) => {
    navigation.navigate("Recipe", { item });
  };

  const renderRecipes = ({ item }) => (
    <View>
      <Pressable onPress={() => onPressRecipe(item)}>
        <View style={styles.mainContainer}>
          <Image style={styles.photo} source={{ uri: item.photo_url }} />
          <View style={styles.textContainer}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.category}>{getCategoryName(item.categoryId)}</Text>
          </View>
        </View>
      </Pressable>
    </View>
  );

  return (
    <View>
      <FlatList 
        vertical 
        showsVerticalScrollIndicator={false} 
        numColumns={2} 
        data={recipes} 
        renderItem={renderRecipes} 
        keyExtractor={(item) => `${item.recipeId}`} 
      />
    </View>
  );
}
