import React from "react";
import { useState, useEffect } from "react";
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  ScrollView,
  ActivityIndicator,
  Image,
} from "react-native";
import StandardDetailField from "../components/StandardDetailField";
import AmmoDetailField from "../components/AmmoDetailField";
import WeaponDamageDetail from "../components/WeaponDamageDetail";
import CyclingTimeDetailField from "../components/CyclingTimeDetailField";
import ShotgunBowDamageDetail from "../components/ShotgunBowDamageDetail";
import { getDamageModifiers, getWeaponList } from "../apiCalls/weaponApis";

const WeaponDetails = ({ route }) => {
  const [list, setList] = useState([]);
  const [damageModifiers, setDamageModifiers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const damageModifiersData = require("../../data/HuntDamageModifiers.json");
  useEffect(() => {
    getWeaponList().then((response) => {
      setList(response);
      getDamageModifiers().then((response) => {
        setDamageModifiers(response);
        setIsLoading(false);
      });
    });
    setDamageModifiers(damageModifiersData);
  }, []);

  if (isLoading) {
    // Mostra un indicatore di caricamento o uno stato di "dati in attesa" fino a quando list non è pronto
    console.log("im loading");
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#fff" />
      </View>
    );
  }

  const { id, name } = route.params;

  let weapon;
  let weaponName;
  let weaponAmmoType;
  weapon = list[id - 1];

  weaponName = weapon ? weapon.name : "nd";

  weaponAmmoType = weapon ? weapon.ammo : "nd";
  console.log(weaponAmmoType);

  /*return(

      <SafeAreaView style={{flex:1}}>
        <View style={{flex:1}}>
          <Text>{weaponAmmoType}</Text>
        </View>
      </SafeAreaView>
    )*/
  if (weaponAmmoType == "melee") {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: "#393939" }}>
        <Image style={styles.weaponImage} source={{ uri: weapon.image }} />
        <View style={styles.infoPart}>
          <StandardDetailField
            content={weapon.stats.melee_damage.toString()}
            icon={require("../../assets/lMelee.png")}
            label={"Light melee damage"}
          ></StandardDetailField>
          <View style={{ flex: 1 }}></View>
          <StandardDetailField
            content={weapon.stats.heavy_melee_damage.toString()}
            icon={require("../../assets/hMelee.png")}
            label={"Heavy melee damage"}
          ></StandardDetailField>
        </View>
      </SafeAreaView>
    );
  } else if (weaponAmmoType.startsWith("shot")) {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <Image style={styles.weaponImage} source={{ uri: weapon.image }} />
          <View style={styles.infoPart}>
            <StandardDetailField
              content={weaponAmmoType}
              icon={require("../../assets/genericAmmo.png")}
              label={"Ammo type"}
            ></StandardDetailField>
            <View style={{ flex: 1 }}></View>
            <AmmoDetailField
              content={weapon.stats.capacity + "/" + weapon.stats.spare_ammo}
              firstIcon={require("../../assets/drum.png")}
              secondIcon={require("../../assets/spare.png")}
              label={"Ammo type"}
            ></AmmoDetailField>
          </View>
          <ShotgunBowDamageDetail
            content={weapon.stats.damage}
            icon={require("../../assets/damage.png")}
          ></ShotgunBowDamageDetail>
          <View style={styles.infoPart}>
            <StandardDetailField
              content={weapon.stats.effective_range.toString() + " m"}
              icon={require("../../assets/effectiveRange.png")}
              label={"Range"}
            ></StandardDetailField>
            <View style={{ flex: 1 }}></View>
            <StandardDetailField
              content={weapon.stats.rate_of_fire.toString() + " rpm"}
              icon={require("../../assets/rof.png")}
              label={"Rate of fire"}
            ></StandardDetailField>
          </View>
          <View style={styles.infoPart}>
            <CyclingTimeDetailField
              cyclingTime={weapon.stats.cycling_time}
              content={weapon.stats.cycling_time.toString() + " s"}
              icon={require("../../assets/cycling.png")}
              label={"Cycling time"}
            ></CyclingTimeDetailField>
            <View style={{ flex: 1 }}></View>
            <StandardDetailField
              content={weapon.stats.spread.toString()}
              icon={require("../../assets/spread.png")}
              label={"Bullet spread"}
            ></StandardDetailField>
          </View>
          <View style={styles.infoPart}>
            <StandardDetailField
              content={weapon.stats.recoil.toString() + " °"}
              icon={require("../../assets/recoil.png")}
              label={"Recoil"}
            ></StandardDetailField>
            <View style={{ flex: 1 }}></View>
            <StandardDetailField
              content={weapon.stats.sway.toString()}
              icon={require("../../assets/sway.png")}
              label={"Aim sway"}
            ></StandardDetailField>
          </View>
          <View style={styles.infoPart}>
            <StandardDetailField
              content={weapon.stats.reload_speed.toString() + " s"}
              icon={require("../../assets/reload.png")}
              label={"Reload time"}
            ></StandardDetailField>
            <View style={{ flex: 1 }}></View>
            <StandardDetailField
              content={weapon.stats.muzzle_velocity.toString() + " m/s"}
              icon={require("../../assets/velocity.png")}
              label={"Muzzle velocity"}
            ></StandardDetailField>
          </View>
          <View style={styles.infoPart}>
            <StandardDetailField
              content={weapon.stats.melee_damage.toString()}
              icon={require("../../assets/lMelee.png")}
              label={"Light melee damage"}
            ></StandardDetailField>
            <View style={{ flex: 1 }}></View>
            <StandardDetailField
              content={weapon.stats.heavy_melee_damage.toString()}
              icon={require("../../assets/hMelee.png")}
              label={"Heavy melee damage"}
            ></StandardDetailField>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  } else {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <Image style={styles.weaponImage} source={{ uri: weapon.image }} />
          <View style={styles.infoPart}>
            <StandardDetailField
              content={weapon.ammo}
              icon={require("../../assets/genericAmmo.png")}
              label={"Ammo type"}
            ></StandardDetailField>
            <View style={{ flex: 1 }}></View>
            <AmmoDetailField
              content={weapon.stats.capacity + "/" + weapon.stats.spare_ammo}
              firstIcon={require("../../assets/drum.png")}
              secondIcon={require("../../assets/spare.png")}
              label={"Ammo type"}
            ></AmmoDetailField>
          </View>
          <WeaponDamageDetail
            damageModifiers={damageModifiers}
            ammoType={weapon.ammo}
            content={weapon.stats.damage}
            icon={require("../../assets/damage.png")}
            label={"Ammo type"}
          ></WeaponDamageDetail>
          <View style={styles.infoPart}>
            <StandardDetailField
              content={weapon.stats.effective_range.toString() + " m"}
              icon={require("../../assets/effectiveRange.png")}
              label={"Range"}
            ></StandardDetailField>
            <View style={{ flex: 1 }}></View>
            <StandardDetailField
              content={weapon.stats.rate_of_fire.toString() + " rpm"}
              icon={require("../../assets/rof.png")}
              label={"Rate of fire"}
            ></StandardDetailField>
          </View>
          <View style={styles.infoPart}>
            <CyclingTimeDetailField
              cyclingTime={weapon.stats.cycling_time}
              content={weapon.stats.cycling_time.toString() + " s"}
              icon={require("../../assets/cycling.png")}
              label={"Cycling time"}
            ></CyclingTimeDetailField>
            <View style={{ flex: 1 }}></View>
            <StandardDetailField
              content={weapon.stats.spread.toString()}
              icon={require("../../assets/spread.png")}
              label={"Bullet spread"}
            ></StandardDetailField>
          </View>
          <View style={styles.infoPart}>
            <StandardDetailField
              content={weapon.stats.recoil.toString() + " °"}
              icon={require("../../assets/recoil.png")}
              label={"Recoil"}
            ></StandardDetailField>
            <View style={{ flex: 1 }}></View>
            <StandardDetailField
              content={weapon.stats.sway.toString()}
              icon={require("../../assets/sway.png")}
              label={"Aim sway"}
            ></StandardDetailField>
          </View>
          <View style={styles.infoPart}>
            <StandardDetailField
              content={weapon.stats.reload_speed.toString() + " s"}
              icon={require("../../assets/reload.png")}
              label={"Reload time"}
            ></StandardDetailField>
            <View style={{ flex: 1 }}></View>
            <StandardDetailField
              content={weapon.stats.muzzle_velocity.toString() + " m/s"}
              icon={require("../../assets/velocity.png")}
              label={"Muzzle velocity"}
            ></StandardDetailField>
          </View>
          <View style={styles.infoPart}>
            <StandardDetailField
              content={weapon.stats.melee_damage.toString()}
              icon={require("../../assets/lMelee.png")}
              label={"Light melee damage"}
            ></StandardDetailField>
            <View style={{ flex: 1 }}></View>
            <StandardDetailField
              content={weapon.stats.heavy_melee_damage.toString()}
              icon={require("../../assets/hMelee.png")}
              label={"Heavy melee damage"}
            ></StandardDetailField>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
};

export default WeaponDetails;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#393939",
    flex: 1,
    justifyContent: "center",
  },
  image: {
    width: 100,
    height: 100,
  },
  infoPart: {
    flexDirection: "row",
    marginHorizontal: 5,
    marginVertical: 5,
  },
  weaponImage: {
    marginTop: 10,
    width: 384,
    height: 150,
    alignSelf: "center",
    borderRadius: 10,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
});
