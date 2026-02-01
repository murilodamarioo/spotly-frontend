import Entypo from '@expo/vector-icons/Entypo'

import { View, Text, StatusBar } from 'react-native'
import { styles } from './styles'

import { Button } from '../components/Button'
import { Input } from '../components/Input'

import { colors } from '../themes/colors'
import { ButtonText } from '../components/ButtonText'

export function SignIn() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle='light-content' />

      <Entypo name='location-pin' size={100} color={colors.Red} />

      <View style={{ alignItems: 'center', gap: 8 }}>
        <Text style={styles.title}>Welcome to Spotly</Text>
        <Text style={styles.subtitle}>Sign in to explore amazing spots</Text>
      </View>

      <Input
        placeholder='johndoe@example.com'
        placeholderTextColor={colors.Subtext0}
        inputMode='email'
        iconName='email'
      />
      <Input
        placeholder='•••••••••'
        placeholderTextColor={colors.Subtext0}
        secureTextEntry={true}
        iconName='lock'
      />

      <ButtonText style={styles.forgotPassword} name='Forgot password?' />

      <Button
        title='Sign In'
        onPress={() => { console.log('Sign In pressed') }}
      />

      <ButtonText
        name='Create an account'
        onPress={() => { console.log('Create an account pressed') }}
      />

    </View>
  )
}