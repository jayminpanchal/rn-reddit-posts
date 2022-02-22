import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  authorLabel: {
    marginLeft: 8,
    fontSize: 10,
  },
  bottomWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 12,
  },
  container: {
    borderBottomColor: '#efefef',
    borderBottomWidth: 0.5,
    flexDirection: 'row',
    marginBottom: 16,
    paddingBottom: 8,
    width: '100%',
  },
  dateLabel: {
    fontSize: 10,
    alignSelf: 'flex-end',
  },
  imageStyle: {
    width: 100,
    height: 100,
    marginRight: 16,
    borderRadius: 4,
  },
  iconInfoWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  infoWrapper: {
    flex: 1,
  },
  titleLabel: {
    flex: 1,
    fontSize: 12,
    marginVertical: 8,
  },
});
