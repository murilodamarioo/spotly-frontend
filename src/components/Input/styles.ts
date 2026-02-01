import { StyleSheet } from 'react-native'
import { colors } from '../../themes/colors'

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    width: '100%',
    gap: 8,
  },
  label: {
    fontSize: 14,
    color: colors.Text,
    marginBottom: 4,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 55,
    borderWidth: 1,
    borderColor: colors.Subtext0,
    borderRadius: 12,
    paddingHorizontal: 12,
    gap: 10,
  },
  input: {
    flex: 1,
    height: '100%',
    color: colors.Text,
  }
})