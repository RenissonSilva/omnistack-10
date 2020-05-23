import React, { useState, useEffect } from 'react';
import { StyleSheet, Image } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { requestPermissionsAsync, getCurrentPositionAsync } from 'expo-location';

function Main(){
  const [currentRegion, setCurrentRegion] = useState(null);

  useEffect(() => {
    async function loadInitialPosition(){
      const { granted } = await requestPermissionsAsync();//Pede permissão pra pegar a lcalização do usuário
      
      if(granted){
        const { coords } = await getCurrentPositionAsync({
          enableHighAccuracy :true,
        });

        const { latitude, longitude } = coords;

        setCurrentRegion({
          latitude,
          longitude,
          latitudeDelta:0.04,
          longitudeDelta:0.04,
        })
      }
    }
    loadInitialPosition();
  }, []);

  if(!currentRegion){//Isso é necessário porque o mapa só é carregado quando pega info da localização
    return null;
  }

  return (
    <MapView initialRegion={currentRegion} style={styles.map}>
      <Marker coordinate={{ latitude: -7.9067864, longitude: -34.826833}}>
      <Image style={styles.avatar} source={{ uri: 'https://avatars1.githubusercontent.com/u/40182898?s=460&u=c6da2d327059b417b818e0b123764b0165cca24e&v=4'}}/>
      </Marker>
    </MapView>
  );
}

const styles = StyleSheet.create({
  map:{
    flex: 1,
  },
  avatar: {
    width:54,
    height:54,
    borderRadius:4,
    borderWidth:4,
    borderColor:'#FFF',
  },
})

export default Main;