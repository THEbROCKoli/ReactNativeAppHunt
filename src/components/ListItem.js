import React, { PureComponent } from "react";
import { TouchableOpacity, View, Text, Image, StyleSheet } from "react-native";

class ListItem extends PureComponent {
  render() {
    const { item, navigation } = this.props;

    return (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("WeaponDetails", { id: item.id, name: item.name })
        }
      >
        <View style={{ flex:1, backgroundColor: "#85858500" }}>
          <Text
            style={{ color: "#FFFFFF", paddingHorizontal: 10, paddingTop: 10 }}
          >
            {item.name}
          </Text>
          <Image style={styles.weaponImage} source={{ uri: item.image }} />
        </View>
      </TouchableOpacity>
    );
  }
}

export default ListItem;

const styles = StyleSheet.create({
  weaponImage: {
    marginTop: 10,
    width: 384*0.75,
    height: 150*0.75,
    alignSelf: "center",
    borderRadius:10,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
});
