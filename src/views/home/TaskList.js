import { View, StyleSheet, Text } from 'react-native';
import React from 'react';
import colors from '../../constants/colors';
import fontSize from '../../constants/fontSize';
import spacing from '../../constants/spacing';

const TaskList = ({ taskList }) => (
  <View style={styles.taskListContainer}>
    <Text style={styles.taskListHeader}>Completed Tasks</Text>
    {taskList.length > 0 ? (
      taskList.map(task => <Text>{task}</Text>)
    ) : (
      <Text style={styles.taskListEmptyText}>No tasks completed yet</Text>
    )}
  </View>
);

export default TaskList;

const styles = StyleSheet.create({
  taskListContainer: {
    paddingTop: spacing.lg,
    paddingBottom: spacing.lg,
  },
  taskListHeader: {
    fontSize: fontSize.lg,
    fontWeight: 'bold',
    paddingBottom: spacing.lg,
  },
  taskListEmptyText: {
    fontSize: fontSize.md,
    color: colors.cyberSpace,
  },
});
