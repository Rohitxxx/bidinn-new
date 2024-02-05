import React, { useEffect, useRef } from 'react';
import { View, StyleSheet, BackHandler, StatusBar } from 'react-native';
import { WebView } from 'react-native-webview';

const App = () => {
  const webViewRef = useRef(null);

  useEffect(() => {
    const handleBackPress = () => {
      if (webViewRef.current) {
        webViewRef.current.goBack();
        return true; // Prevent default behavior (closing the app)
      }
      return false; // Let the default behavior happen (close the app)
    };

    const backHandler = BackHandler.addEventListener('hardwareBackPress', handleBackPress);

    return () => {
      backHandler.remove(); // Cleanup the event listener on component unmount
    };
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'transparent'} barStyle={'dark-content'} />
      <WebView
        ref={webViewRef}
        source={{ uri: 'https://bidinn.in' }}
        style={styles.webview}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  webview: {
    flex: 1,
  },
});

export default App;
