import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const { width, height } = Dimensions.get("screen")


const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ backgroundColor: 'yellow', flex: 1.6 }}>
        <View style={{ flex: 1, overflow: "hidden" }}>
          <Image source={require('./src/assets/images/1.png')} style={{ width, height }} resizeMode={"cover"} />
        </View>
        <View style={{ width, position: 'absolute', bottom: -20, overflow: 'visible', zIndex: 999, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ color: '#000000', fontSize: 15, backgroundColor: '#FFCC35', paddingVertical: 10, paddingHorizontal: 20, borderRadius: 50 }}>Popüler ve Yeni</Text>
        </View>
        <View style={{ position: 'absolute', right: 15, top: 15 }}>
          <View style={{ flexDirection: 'row', marginTop: 5 }}>
            <TouchableOpacity style={{ marginRight: 10, }} onPress={() => { console.log('favorite clicked'); }}>
              <View style={{ backgroundColor: '#E53935', padding: 10, borderRadius: 50 }}>
                <Icon name="heart" size={20} color={"#FFFFFF"} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={{}} onPress={() => { console.log('favorite clicked'); }}>
              <View style={{ backgroundColor: '#FFCC35', padding: 10, borderRadius: 50 }}>
                <Icon name="shopping-basket" size={20} color={"#FFFFFF"} />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={{ flex: 1 }}>
        <View style={{ marginTop: 25, width: width, justifyContent: 'center', alignItems: 'center' }}>
          <View style={{ justifyContent: 'center', alignItems: 'center', width: width / 1.5 }}>
            <Text style={{ fontSize: 36, lineHeight: 30, paddingTop: 15, fontWeight: 'bold', color: '#2C2C2C', textAlign: 'center' }}>{"Raspberry Pi 4"}</Text>
          </View>
        </View>
        <View style={{ marginTop: 7.5, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ fontSize: 25, color: '#000000' }}>{"150.00 ₺"}</Text>
        </View>
        <View style={{ marginTop: 10, justifyContent: 'center', alignItems: 'center' }}>
          <View style={{ flexDirection: 'row' }}>
            <Icon name="star" size={20} color={"#F1B800"} style={{ padding: 1 }} />
            <Icon name="star" size={20} color={"#F1B800"} style={{ padding: 1 }} />
            <Icon name="star" size={20} color={"#F1B800"} style={{ padding: 1 }} />
            <Icon name="star" size={20} color={"#F1B800"} style={{ padding: 1 }} />
            <Icon name="star" size={20} color={"#F1B800"} style={{ padding: 1 }} />
          </View>
        </View>
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <TouchableOpacity onPress={() => { console.log('clicked'); }}>
            <View style={{ flexDirection: 'row', marginTop: 15, justifyContent: 'center', alignItems: 'center', paddingVertical: 15, paddingHorizontal: 100, borderColor: '#FFCC35', borderWidth: 3, borderRadius: 50 }}>
              <Icon name="shopping-cart" size={20} color={"#000000"} style={{ marginRight: 15 }} />
              <Text style={{ fontSize: 16, fontWeight: 'bold', textTransform: 'uppercase' }}>Sepete Ekle</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({

});

export default App;
