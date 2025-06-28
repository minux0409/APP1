/**
 * APP1 - React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  useColorScheme,
} from 'react-native';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? '#0D1117' : '#FFFFFF',
  };

  return (
    <View style={[styles.container, backgroundStyle]}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Text
        style={[styles.text, { color: isDarkMode ? '#FFFFFF' : '#000000' }]}
      >
        🎉 첫 번째 React Native 앱 성공! 🎉
      </Text>
      <Text
        style={[styles.subtitle, { color: isDarkMode ? '#8B949E' : '#6A737D' }]}
      >
        이 텍스트를 수정하고 저장하면 에뮬레이터에서 바로 변경됩니다!
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    lineHeight: 24,
  },
});

export default App;
