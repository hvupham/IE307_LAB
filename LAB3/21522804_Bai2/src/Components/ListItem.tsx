import { Text, View, ScrollView, TouchableOpacity, StyleSheet } from "react-native"
import { useRecoilValue, useSetRecoilState } from "recoil"
import { listNoteState, themeState, updateNoteState } from "../stores/atom"
import React from "react"
import { ItemNoteScreenComponent } from "./Item"
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
