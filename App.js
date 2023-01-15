import React, { useState } from 'react';
import {
  StyleSheet,
  Platform,
  StatusBar,
  SafeAreaView,
  Text,
} from 'react-native';
import colors from './src/constants/colors';
import fontSize from './src/constants/fontSize';
import spacing from './src/constants/spacing';
import Home from './src/views/home/Home';

const App = () => {
  const [currentTask, setCurrentTask] = useState(null);
  const [taskList, setTaskList] = useState([]);

  const onComplete = () => {
    if (currentTask) {
      const newTaskList = taskList;
      newTaskList.push(currentTask);
      setTaskList(newTaskList);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Home taskList={taskList} setCurrentTask={setCurrentTask} />
    </SafeAreaView>
  );
};

export default App;

// SafeAreaView only works for ISO,
// this ensures content is not cut off by the status bar on android
const ANDROID_STATUS_BAR_HEIGHT = StatusBar.currentHeight || 0;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin:
      Platform.OS === 'android'
        ? ANDROID_STATUS_BAR_HEIGHT + spacing.lg
        : spacing.xl,
  },
});
