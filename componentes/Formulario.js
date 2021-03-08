import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  Alert,
  ScrollView,
} from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import shortid from "shortid";

const Formulario = ({ citas, setCitas, guardarMostrarForm }) => {
  // State de inputs
  const [paciente, guardarPaciente] = useState("");
  const [telefono, guardarTelefono] = useState("");
  const [email, guardarEmail] = useState("");
  const [sintomas, guardarSintomas] = useState("");

  // State de pickers
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);
  const [fecha, guardarFecha] = useState("");
  const [hora, guardarHora] = useState("");
  // Mostrar fecha
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  // Esconder fecha
  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  // Confirmar fecha
  const handleConfirm = (date) => {
    const opciones = { year: "numeric", month: "long", day: "2-digit" };
    guardarFecha(date.toLocaleDateString("es-ES", opciones));
    hideDatePicker();
  };

  // Mostrar hora
  const showTimePicker = () => {
    setTimePickerVisibility(true);
  };

  // Esconder hora
  const hideTimePicker = () => {
    setTimePickerVisibility(false);
  };

  // Confirmar hora
  const handleConfirmTime = (time) => {
    const opciones = { hour: "numeric", minute: "2-digit", hour12: false };
    guardarHora(time.toLocaleDateString("en_US", opciones));
    hideTimePicker();
  };

  // Funcion crear paciente
  const crearPaciente = (e) => {
    // Validación
    if (
      paciente.trim() === "" ||
      telefono.trim() === "" ||
      email.trim() === "" ||
      fecha.trim() === "" ||
      hora.trim() === "" ||
      sintomas.trim() === ""
    ) {
      // falla la validación
      mostrarAlerta();
    }

    // Crear una nueva cita
    const cita = { paciente, email, telefono, sintomas, fecha, hora };

    cita.id = shortid.generate();

    // Agregar al State
    const actualizacionCitas = [...citas, cita];
    setCitas(actualizacionCitas);

    // Ocultar el formulario
    guardarMostrarForm(false);
  };

  // Muestra alerta si falla la validación
  const mostrarAlerta = () => {
    Alert.alert(
      "Error", // Título
      "Todos los campos son obligatorios",
      [
        // Mensaje,
        {
          text: "OK", // Arreglo de botones
        },
      ]
    );
  };

  return (
    <>
      <ScrollView style={styles.formulario}>
        <View>
          <Text style={styles.label}>Paciente</Text>
          <TextInput
            onChangeText={(e) => guardarPaciente(e)}
            style={styles.input}
            keyboardType="default"
          />
        </View>
        <View>
          <Text style={styles.label}>Email</Text>
          <TextInput
            onChangeText={(e) => guardarEmail(e)}
            style={styles.input}
            keyboardType="email-address"
          />
        </View>
        <View>
          <Text style={styles.label}>Teléfono</Text>
          <TextInput
            onChangeText={(e) => guardarTelefono(e)}
            style={styles.input}
            keyboardType="numeric"
          />
        </View>
        <View>
          <TouchableHighlight onPress={showDatePicker} style={styles.button}>
            <Text style={styles.btnText}>Fecha Cita</Text>
          </TouchableHighlight>
          <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="date"
            onConfirm={handleConfirm}
            onCancel={hideDatePicker}
            locale="es_ES"
            headerTextIOS="Elige una fecha"
            cancelTextIOS="Cancelar"
            confirmTextIOS="Confirmar"
          />
          <Text>{fecha}</Text>
        </View>
        <View>
          <TouchableHighlight onPress={showTimePicker} style={styles.button}>
            <Text style={styles.btnText}>Hora Cita</Text>
          </TouchableHighlight>
          <DateTimePickerModal
            isVisible={isTimePickerVisible}
            mode="time"
            onConfirm={handleConfirmTime}
            onCancel={hideTimePicker}
            locale="es_ES"
            headerTextIOS="Elige una hora"
            cancelTextIOS="Cancelar"
            confirmTextIOS="Confirmar"
            is24Hour
          />
          <Text>{hora}</Text>
        </View>
        <View>
          <Text style={styles.label}>Síntomas</Text>
          <TextInput
            multiline
            onChangeText={(e) => guardarSintomas(e)}
            style={styles.input}
            keyboardType="default"
          />
          <TouchableHighlight onPress={crearPaciente} style={styles.btnCrearP}>
            <Text style={styles.btnText}>Crear Paciente</Text>
          </TouchableHighlight>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  formulario: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginHorizontal: "2.5%",
  },
  label: {
    fontWeight: "bold",
    fontSize: 19,
    marginTop: 15,
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
  button: {
    marginHorizontal: 20,
    padding: 10,
    backgroundColor: "#FFF05A",
    marginTop: 30,
  },
  btnText: {
    textAlign: "center",
    fontWeight: "bold",
    color: "#191919",
    fontSize: 15,
  },
  btnCrearP: {
    marginHorizontal: 20,
    padding: 10,
    backgroundColor: "#FFF05A",
    marginTop: 30,
    marginBottom: 30,
  },
});
export default Formulario;
