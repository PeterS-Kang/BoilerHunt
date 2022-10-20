import { View, Text } from 'react-native'
import React from 'react'
import { Marker } from 'react-native-maps'

const Markers = (props) => {
  return (
    <Marker coordinate={
        props.coordinates
      } title={props.name}/>  
        )
}

export default Markers