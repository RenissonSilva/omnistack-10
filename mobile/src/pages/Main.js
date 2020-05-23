import React, { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import MapView from 'react-native-maps';
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

  return <MapView initialRegion={currentRegion} style={styles.map}/>
}

const styles = StyleSheet.create({
  map:{
    flex: 1
  },
})

export default Main;