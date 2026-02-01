import Entypo from '@expo/vector-icons/Entypo'
import { LinearGradient } from 'expo-linear-gradient'
import MaskedView from '@react-native-masked-view/masked-view'
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

      <View style={{ alignItems: 'center', gap: 8, width: '100%' }}>
        <MaskedView
          style={{ height: 32, width: '100%' }}
          maskElement={
            <Text style={[styles.title, { textAlign: 'center' }]}>
              Welcome to Spotly
            </Text>
          }
        >
          <LinearGradient
            colors={[colors.Mauve, colors.Red]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={{ flex: 1 }} // O gradiente agora preenche o espaço da máscara
          />
        </MaskedView>

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