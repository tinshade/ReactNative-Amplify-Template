import {StyleSheet} from 'react-native';

export const global_styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  inputContainer: {
    width: '100%',
    backgroundColor: 'white',
    borderColor: '#e8e8e8',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginVertical: 5,
  },
  small: {
    fontSize: 13,
  },
  link: {
    color: 'orange',
  },
});

export const primaryButton = StyleSheet.create({
  container: {
    backgroundColor: '#2f70fa',
    alignItems: 'center',
    padding: 15,
    fontWeight: 'bold',
    borderRadius: 5,
    marginVertical: 5,
    width: '99%',
  },
  text: {
    fontWeight: 'bold',
    color: 'white',
  },
});

export const secondaryButton = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    alignItems: 'center',
    padding: 15,
    fontWeight: 'bold',
    borderRadius: 5,
    marginVertical: 5,
    borderColor: '#2f70fa',
    borderWidth: 1,
    width: '99%',
  },
  text: {
    fontWeight: 'bold',
    color: '#2f70fa',
  },
});

export const tertiaryButton = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    alignItems: 'center',
    padding: 15,
    fontWeight: 'bold',
    borderRadius: 5,
    marginVertical: 5,
    borderColor: 'transparent',
    borderWidth: 1,
    width: '99%',
  },
  text: {
    fontWeight: 'bold',
    color: 'gray',
  },
});

export const iconButton = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'transparent',
    alignItems: 'center',
    paddingHorizontal: 25,
    paddingVertical: 5,
    borderRadius: 5,
    marginVertical: 5,
    borderColor: 'transparent',
    borderWidth: 1,
    width: '99%',
  },
});
