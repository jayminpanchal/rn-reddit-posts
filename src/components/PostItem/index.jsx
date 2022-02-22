import React from 'react';
import {Image, Linking, Text, TouchableOpacity, View} from 'react-native';
import Feather from 'react-native-vector-icons/dist/Feather';
import format from 'date-fns/format';

import styles from './styles';

const DEFAULT_IMAGE_URL = 'https://via.placeholder.com/100?text=reddit';

const PostItem = ({
  author,
  createdDate,
  comments,
  imageUrl,
  link,
  score,
  title,
}) => {
  const onPostPress = () => {
    Linking.openURL(`https://www.reddit.com${link}`);
  };
  return (
    <TouchableOpacity onPress={onPostPress}>
      <View style={styles.container}>
        <Image
          source={{uri: imageUrl || DEFAULT_IMAGE_URL}}
          style={styles.imageStyle}
        />
        <View style={styles.infoWrapper}>
          <Text style={styles.dateLabel}>
            {format(createdDate * 1000, 'dd MMM, yyyy')}
          </Text>
          <Text style={styles.titleLabel}>{title}</Text>
          <View style={styles.bottomWrapper}>
            <View style={styles.iconInfoWrapper}>
              <Feather name="user" size={12} />
              <Text style={styles.authorLabel}>{author}</Text>
            </View>
            <View style={styles.iconInfoWrapper}>
              <Feather name="activity" size={12} />
              <Text style={styles.authorLabel}>{score}</Text>
            </View>
            <View style={styles.iconInfoWrapper}>
              <Feather name="message-square" size={12} />
              <Text style={styles.authorLabel}>{comments}</Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default PostItem;
