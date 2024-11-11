import { Text, View, ScrollView, TouchableOpacity, StyleSheet } from "react-native"
import { EvilIcons } from "@expo/vector-icons"
import { useRecoilValue, useSetRecoilState } from "recoil"
import { listNoteState, themeState, updateNoteState } from "../stores/atom"
import React from "react"
import { NavigationProp, useNavigation } from "@react-navigation/native"
import { HomeNativeStackParamList } from "../Navigation/Type"
import hooksNote from "../hooks/hookNote/hooksNote"

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

export const ListItemNoteScreenComponent = () => {
  const { state, contents } = useRecoilValue(listNoteState)
  return (
    <ScrollView style={styles.scrollView}>
      {state === "hasValue" && (
        <>
          {contents.map((item) => (
            <ItemNoteScreenComponent
              key={item.id}
              id={item.id}
              title={item.title}
              note={item.note}
            />
          ))}
        </>
      )}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  touchable: {
    marginTop: 16,
  },
  noteContainer: {
    padding: 16,
    borderWidth: 1,
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textContainer: {
    flexDirection: "column",
    width: "80%",
    marginRight: 8,
  },
  titleText: {
    fontWeight: "800",
    marginBottom: 8,
  },
  noteText: {
    fontWeight: "400",
  },
  scrollView: {
    flexDirection: "column",
    width: "100%",
    paddingHorizontal: 16,
  },
})
