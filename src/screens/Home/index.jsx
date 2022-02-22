import React, {useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, TextInput, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import styles from './styles';
import PostItem from '../../components/PostItem';
import {
  getPostsSelector,
  isLoadingSelector,
  nextPageKeySelector,
} from '../../store/selectors/posts';
import {fetchPosts} from '../../store/actions';
import useDebounce from '../../utils/useDebounce';

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const dispatch = useDispatch();
  const posts = useSelector(getPostsSelector);
  const nextPageKey = useSelector(nextPageKeySelector);
  const isLoading = useSelector(isLoadingSelector);
  const debouncedSearchTerm = useDebounce(searchQuery, 500);

  useEffect(() => {
    if (debouncedSearchTerm) {
      dispatch(fetchPosts({q: debouncedSearchTerm}));
    } else {
      dispatch(fetchPosts());
    }
  }, [debouncedSearchTerm, dispatch]);

  const renderItem = ({item}) => {
    return (
      <PostItem
        key={`POST_${item.data.id}`}
        author={item.data.author_fullname}
        comments={item.data.num_comments}
        createdDate={item.data.created}
        imageUrl={item.data.thumbnail}
        link={item.data.permalink}
        score={item.data.score}
        title={item.data.title}
      />
    );
  };

  const onLoadMoreData = () => {
    console.log('onLoadMoreData', nextPageKey);
    if (nextPageKey && !isLoading) {
      dispatch(fetchPosts({after: nextPageKey, q: searchQuery}));
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          placeholder="Search"
          value={searchQuery}
          onChangeText={value => setSearchQuery(value)}
          style={styles.searchInput}
        />
      </View>
      <View style={styles.listContainer}>
        <FlatList
          data={posts}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
          onEndReached={onLoadMoreData}
          onEndReachedThreshold={0.2}
        />
        {isLoading && (
          <View style={styles.loaderContainer}>
            <ActivityIndicator />
          </View>
        )}
      </View>
    </View>
  );
};

export default Home;
