import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Input from '../../ui/Input';
import Button from '../../ui/Button';
import spacing from '../../constants/spacing';
import TaskList from './TaskList';
import fontSize from '../../constants/fontSize';

const Home = ({ setCurrentTask, taskList }) => {
  const [focusTask, setFocusTask] = useState('');

  return (
    <View style={styles.container}>
      <>
        <Text style={styles.header}>Focus Time</Text>
        <View style={styles.inputContainer}>
          <Input
            value={focusTask}
            onChangeText={setFocusTask}
            placeholder="What do you want to focus on?"
          />
          <Button onPress={() => setCurrentTask(focusTask)} title="Start" />
        </View>
        <TaskList taskList={taskList} />
      </>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  header: {
    fontSize: fontSize.xxl,
    fontWeight: 'bold',
    paddingBottom: spacing.lg,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: spacing.lg,
    paddingBottom: spacing.lg,
  },
});

export default Home;
