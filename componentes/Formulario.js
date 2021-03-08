import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";

const Formulario = () => {
  // Funcion crear paciente
  const crearPaciente = (e) => {
    console.log(e);
  };

  return (
    <>
      <View>
        <Text style={styles.label}>Paciente</Text>
        <TextInput
          onChangeText={(e) => crearPaciente}
          style={styles.input}
          keyboardType="default"
        />
        <Text style={styles.label}>Email</Text>
        <TextInput
          onChangeText={(e) => crearPaciente}
          style={styles.input}
          keyboardType="email-address"
        />
        <Text style={styles.label}>Teléfono</Text>
        <TextInput
          onChangeText={(e) => crearPaciente}
          style={styles.input}
          keyboardType="numeric"
        />
        <Text style={styles.label}>Síntomas</Text>
        <TextInput
          multiline
          onChangeText={(e) => crearPaciente}
          style={styles.input}
          keyboardType="default"
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  label: {
    fontWeight: "bold",
    fontSize: 19,
    marginTop: 20,
    marginHorizontal: 20,
  },
  input: {
    marginTop: 10,
    height: 50,
    borderColor: "#FFF05A",
    borderWidth: 2,
    borderStyle: "solid",
    marginHorizontal: 20,
  },
});
export default Formulario;
