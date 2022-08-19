import React from 'react';
import {View, Text, ScrollView, TouchableOpacity, Image} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';

const Stories = () => {
  
  // Toplam 5 adet örnek story mevcut.
  const storyInfo = [
    {
      id: 1,
      name: 'Your Story',
      image: require('../../storage/images/astronaut.jpg'),
    },
    {
      id: 0,
      name: 'patika.dev',
      image: require('../../storage/images/patikaLogo.png'),
    },
    {
      id: 0,
      name: 'tesla',
      image: require('../../storage/images/car.jpg'),
    },
    {
      id: 0,
      name: 'lifeofcats',
      image: require('../../storage/images/cat.jpg'),
    },
    {
      id: 0,
      name: 'guitarhero',
      image: require('../../storage/images/guitar.jpg'),
    },
    {
      id: 0,
      name: 'wildone',
      image: require('../../storage/images/lion.jpg'),
    }
  ];

  return (
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      style={{paddingVertical: 20}}>
      {storyInfo.map((data, index) => {
        return (
          <TouchableOpacity
            key={index}
            >
            <View
              style={{
                flexDirection: 'column',
                paddingHorizontal: 8,
                position: 'relative',
              }}>
              {data.id == 1 ? (
                <View
                  style={{
                    position: 'absolute',
                    bottom: 15,
                    right: 10,
                    zIndex: 1,
                  }}>
                  <Entypo
                    name="circle-with-plus"
                    style={{
                      fontSize: 20,
                      color: '#405de6',
                      backgroundColor: 'white',
                      borderRadius: 100,
                    }}
                  />
                </View>
              ) :null}
              <View
                style={{
                  width: 68,
                  height: 68,
                  backgroundColor: 'white',
                  borderWidth: 1.8,
                  borderRadius: 100,
                  borderColor: '#c13584',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  source={data.image}
                  style={{
                    resizeMode: 'cover',
                    width: '95%',
                    height: '95%',
                    borderRadius: 100,
                    backgroundColor: 'white',
                  }}
                />
              </View>
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 12,
                  opacity: data.id == 0 ? 1 : 0.6,
                }}>
                {data.name}
              </Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
};

export default Stories;