import { StatusBar, Text, View } from 'react-native'
import { ChevronLeft } from 'lucide-react-native/icons'

import { styles } from './styles'

import { Input } from '../components/Input'

import { colors } from '../themes/colors'
import { Button } from '../components/Button'
import { LinearGradient } from 'expo-linear-gradient'
import MaskedView from '@react-native-masked-view/masked-view'

export function SignUp() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle='light-content' />
      <ChevronLeft
        style={styles.backIcon}
        color={colors.Subtext0}
        size={32}
        onPress={() => { console.log('Back pressed') }}
      />

      <View style={styles.form}>
        <MaskedView
          maskElement={
            <Text style={styles.title}>Create your account</Text>
          }
        >
          <LinearGradient
            colors={[colors.Mauve, colors.Red]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={{ height: 60 }}
          />
        </MaskedView>
        <Input
          label='Name'
          placeholder='e. g. John Doe'
          placeholderTextColor={colors.Surface2}
        />
        <Input
          label='Email'
          placeholder='johndoe@example.com'
          placeholderTextColor={colors.Surface2}
          inputMode='email'
        />
        <Input
          label='Password'
          placeholder='•••••••••'
          secureTextEntry
          placeholderTextColor={colors.Surface2}
        />
        <Input
          label='Confirm Password'
          placeholder='•••••••••'
          secureTextEntry
          placeholderTextColor={colors.Surface2}
        />
      </View>

      <Button title='Sign Up' onPress={() => { console.log('Sign Up pressed') }} />
    </View>
  )
}