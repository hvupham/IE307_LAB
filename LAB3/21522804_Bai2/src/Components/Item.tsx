import { Text, View, ScrollView, TouchableOpacity, StyleSheet } from "react-native"
import { EvilIcons } from "@expo/vector-icons"
import { useRecoilValue, useSetRecoilState } from "recoil"
import {  themeState, updateNoteState } from "../stores/atom"
import React from "react"
import { NavigationProp, useNavigation } from "@react-navigation/native"
import { HomeNativeStackParamList } from "../Navigation/navigation"
import hooksNote from "../hooks/Note"

type TItemNoteScreenComponentProps = {
  id: string
  title: string
  note: string
}

export const ItemNoteScreenComponent: React.FC<TItemNoteScreenComponentProps> = (props) => {
  const { title, note, id } = props
  const navigation = useNavigation<NavigationProp<HomeNativeStackParamList, "NoteApp">>()
  const { theme, fontSize } = useRecoilValue(themeState)
  const setUpdateNote = useSetRecoilState(updateNoteState)
  const { handleDeleteNote } = hooksNote.useDeleteNote()
  const { handleGetListNote } = hooksNote.useGetListNote()

  const handleSetUpdateNote = () => {
    setUpdateNote({
      state: "hasValue",
      content: { id, title, note },
    })
  }

  return (
    <TouchableOpacity
      style={styles.touchable}
      onPress={() => {
        handleSetUpdateNote()
        navigation.navigate("NoteApp", { id })
      }}
    >
      <View
        style={[styles.noteContainer, { borderColor: theme === "Dark" ? "#ffffff" : "#A0A0A0" }]}
      >
        <View style={styles.textContainer}>
          <Text style={[styles.titleText, { fontSize, color: theme === "Dark" ? "white" : "black" }]}>
            {title}
          </Text>
          <Text style={[styles.noteText, { fontSize, color: theme === "Dark" ? "white" : "black" }]}>
            {note}
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            handleDeleteNote(id)
            handleGetListNote()
          }}
        >
          <View>
            <EvilIcons name="trash" size={42} color={theme === "Dark" ? "white" : "black"} />
          </View>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  touchable: {
    marginVertical: 10,
    paddingHorizontal: 12,
  },
  noteContainer: {
    padding: 20,
    borderWidth: 2,
    borderRadius: 12,
    backgroundColor: "#f5f5f5",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textContainer: {
    flexDirection: "column",
    width: "75%",
    marginRight: 10,
  },
  titleText: {
    fontWeight: "bold",
    fontSize: 18,
    color: "#333",
    marginBottom: 6,
  },
  noteText: {
    fontWeight: "300",
    fontSize: 16,
    color: "#666",
  },
  scrollView: {
    flexDirection: "column",
    width: "100%",
    paddingVertical: 12,
    paddingHorizontal: 20,
  },
})
