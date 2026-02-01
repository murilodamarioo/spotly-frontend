import { StyleSheet } from 'react-native'
import { colors } from '../themes/colors'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 32,
    backgroundColor: colors.Base,
    gap: 48
  },
  form: {
    width: '100%',
    gap: 16
  },
  gradientTitle: {
    borderRadius: 8,
    padding: 4
  },
  title: {
    marginBottom: 32,
    fontSize: 22,
    fontWeight: 'bold',
    color: colors.Subtext1,
    textAlign: 'left',
    lineHeight: 22
  },
  backIcon: {
    position: 'absolute',
    top: 54,
    left: 24
  }
})