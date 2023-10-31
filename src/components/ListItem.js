import React, { PureComponent } from "react";
import { TouchableOpacity, View, Text } from "react-native";

class ListItem extends PureComponent {
  render() {
    const { item, navigation } = this.props;

    return (
      <TouchableOpacity onPress={() => navigation.navigate('WeaponDetails', { id: item.id, name: item.name })}>
        <View style={{ height: 80, backgroundColor: "#85858500"}}>
          <Text style={{ color: "#FFFFFF", paddingHorizontal: 10, paddingTop: 10 }}>{item.name}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

export default ListItem;