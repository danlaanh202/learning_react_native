import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Button,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";
// StyleSheet is the same as styledcomponent, Text means <p></p> , View is the same as <div></div> but non-scrolling
export default function App() {
  const [input, setInput] = useState("");
  const [goals, setGoals] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const handleShowModal = () => {
    setIsModalVisible(true);
  };
  const goalInputHandler = (enteredText) => {
    setInput(enteredText);
  };
  const addGoalHandler = () => {
    setGoals((prev) => [
      {
        text: input,
        id: Math.random().toString(),
      },
      ...prev,
    ]);
    setInput("");
    setIsModalVisible(false);
  };
  const deleteGoal = (index) => {
    setGoals((prev) => {
      return prev.filter((elem) => elem.id !== index);
    });
  };
  return (
    <View style={styles.appContainer}>
      <Button title="Nhấp vào để thêm mục đích" onPress={handleShowModal} />
      <GoalInput
        isModalVisible={isModalVisible}
        input={input}
        onChangeText={goalInputHandler}
        onPress={addGoalHandler}
      />

      <View style={styles.goalListContainer}>
        <Text style={{ paddingHorizontal: 8 }}>Danh sách mục đích:</Text>
        <FlatList
          alwaysBounceVertical={false}
          data={goals}
          renderItem={(itemData) => {
            return (
              <GoalItem
                deleteGoal={() => {
                  deleteGoal(itemData.item.id);
                }}
                itemData={itemData}
                key={itemData.item.id}
              />
            );
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    flex: 1,
  },
  goalScrollView: {
    paddingHorizontal: 8,
  },
  goalListContainer: {
    flex: 1,
  },
});
