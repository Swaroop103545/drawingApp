import React from 'react';
import {
  Platform,
  View,
  Alert,
} from 'react-native';
import { Button } from '../../Components';
import {styles} from './Styles'

import RNSketchCanvas from '@terrylinla/react-native-sketch-canvas';
import { Colors } from '../../../Colors';

const DrawingScreen = () => {
  return (
    <View style={styles.container}>
        <View style={styles.canvasContainer}>
          <RNSketchCanvas
            containerStyle={styles.wrapper}
            canvasStyle={styles.wrapper}
            defaultStrokeIndex={0}
            defaultStrokeWidth={5}
            closeComponent={<Button label='Close' />}
            undoComponent={<Button label='Undo' />}
            clearComponent={<Button label='Clear' />}
            eraseComponent={<Button label='Eraser' />}
            strokeComponent={color => (
              <View style={[{ backgroundColor: color }, styles.strokeColorButton]} />
            )}
            strokeSelectedComponent={(color, index, changed) => {
              return (
                <View style={[{ backgroundColor: color, borderWidth: 2 }, styles.strokeColorButton]} />
              )
            }}
            strokeWidthComponent={(w) => {
              return (<View style={styles.strokeWidthButton}>
                <View style={{
                  backgroundColor: Colors.white, marginHorizontal: 2.5,
                  width: Math.sqrt(w / 3) * 10, height: Math.sqrt(w / 3) * 10, borderRadius: Math.sqrt(w / 3) * 10 / 2
                }} />
              </View>
            )}}
            saveComponent={<Button label='Save' />}
            savePreference={() => {
              return {
                folder: 'RNSketchCanvas',
                filename: String(Math.ceil(Math.random() * 100000000)),
                transparent: false,
                imageType: 'png'
              }
            }}
            onSketchSaved={(success, filePath) => { success && Alert.alert('filePath: ' + filePath); }}
          />
        </View>
      </View>
  )
}

export default DrawingScreen