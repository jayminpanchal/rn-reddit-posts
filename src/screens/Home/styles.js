import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 16,
  },
  loaderContainer: {
    position: 'absolute',
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    bottom: 0,
    left: 0,
    right: 0,
    top: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  listContainer: {
    position: 'relative',
  },
  searchContainer: {
    marginBottom: 12,
  },
  searchInput: {
    borderWidth: 1,
    borderColor: '#cdcdcd',
    borderRadius: 4,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
});
