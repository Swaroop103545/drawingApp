import { View, Text } from 'react-native'
import React from 'react'
import { styles } from './Styles'

interface Props {
  label: string
}

const Button = ({label}: Props) => {
  return (
    <View style={styles.functionButton}><Text style={styles.label}>{label}</Text></View>
  )
}

export default Button