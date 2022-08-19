import React from 'react'
import { View, Text, StatusBar, ScrollView } from 'react-native'
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";
import Fontisto from "react-native-vector-icons/Fontisto";
import Stories from '../screenComponents/Stories';
import Post from '../screenComponents/Post';


const Home = () => {
  return (
    <View style={{backgroundColor: 'white', height: '100%'}}>
        <StatusBar backgroundColor="white" barStyle="dark-content" animated={true}/>
        <View style={{
            justifyContent: 'space-between',
            flexDirection: 'row',
            paddingHorizontal: 15,
            alignItems: 'center',
            paddingTop: 15,
        }}>
            {/* App ismi ve sağ üsteki ikonlar burada. SVG yerine font-family değiştirilip text kullanıldı. */}
            <View>
                <Text style={{color:"black", fontFamily: "Lobster-Regular", fontSize: 25, fontWeight: '500', marginLeft: 15}}>
                    Instagram
            </Text>
            </View>
            <View style={{flexDirection: 'row', justifyContent:'space-between'}}>
                {/* 3 farklı ikon kütüphanesi kullanıldı. */}
                <FontAwesome name="plus-square-o" style={{color:"black", fontSize: 24, marginRight:25}}/>
                <Feather name="heart" style={{color:"black", fontSize: 24, marginRight: 25}}/>
                <Fontisto name='messenger' style={{color:"black", fontSize: 24, marginRight: 10}}/>
            </View>
        </View>

        {/* Sırayla scrollview özelliği ile gösterilecek olan bileşenler */}
        <ScrollView>
            <Stories/>
            <Post/>
        </ScrollView>
    </View>
  )
}

export default Home