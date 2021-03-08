import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableHighlight,
  Platform,
} from "react-native";
//Imports de componentes
import Cita from "./componentes/Cita";
import Formulario from "./componentes/Formulario";
//====================================

const App = () => {
  // define State de citas
  const [citas, setCitas] = useState([
    { id: "1", paciente: "hook", propietario: "hernan", sintomas: "no come" },
    { id: "2", paciente: "jack", propietario: "juan", sintomas: "no duerme" },
    { id: "3", paciente: "morn", propietario: "avelo", sintomas: "no canta" },
  ]);
  // State para mostrar form
  const [mostrarForm, guardarMostrarForm] = useState(false);

  // Elimina los pacientes del state
  const eliminarPaciente = (id) => {
    setCitas((citasActuales) => {
      return citasActuales.filter((cita) => cita.id !== id);
    });
  };

  // Muestra u oculta el formulario
  const mostrarFormulario = () => {
    guardarMostrarForm(!mostrarForm);
  };

  return (
    <>
      <View style={styles.contenedor}>
        <Text style={styles.titulo}>APP CITAS MÉDICAS</Text>
        <View>
          <TouchableHighlight
            onPress={() => mostrarFormulario()}
            style={styles.button}
          >
            <Text style={styles.btnText}>Crear Paciente</Text>
          </TouchableHighlight>
        </View>

        <View style={styles.contenido}>
          {mostrarForm ? (
            <>
              <Text style={styles.subtitulo}>Crear nueva cita</Text>
              <Formulario
                citas={citas}
                setCitas={setCitas}
                guardarMostrarForm={guardarMostrarForm}
              />
            </>
          ) : (
            <>
              <Text style={styles.subtitulo}>
                {citas.length > 0 ? "Administra tus citas" : "No existen citas"}
              </Text>
              <FlatList
                style={styles.listado}
                data={citas}
                renderItem={({ item }) => (
                  <Cita cita={item} eliminarPaciente={eliminarPaciente} />
                )}
                keyExtractor={(cita) => cita.id}
              />
            </>
          )}
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    backgroundColor: "#FF481F",
    flex: 1,
  },
  contenido: {
    flex: 1,
    marginHorizontal: "2.5%",
  },
  listado: {
    flex: 1,
  },
  titulo: {
    color: "#191919",
    textAlign: "center",
    marginTop: Platform.OS === "ios" ? 40 : 30,
    marginBottom: 20,
    fontSize: 24,
    fontWeight: "bold",
  },
  subtitulo: {
    color: "#191919",
    textAlign: "center",
    marginBottom: 10,
    fontWeight: "bold",
    fontSize: 20,
  },
  button: {
    marginHorizontal: 20,
    padding: 10,
    backgroundColor: "#FFF05A",
    marginTop: 30,
    marginBottom: 30,
  },
  btnText: {
    textAlign: "center",
    fontWeight: "bold",
    color: "#191919",
    fontSize: 15,
  },
});

export default App;
