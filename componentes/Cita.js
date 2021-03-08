import React from 'react';
import {StyleSheet, Text, View, TouchableHighlight} from 'react-native';

const Cita = ({cita, eliminarPaciente}) => {
  const dialogoEliminar = (id) => {
    console.log('Eliminando...');
    eliminarPaciente(id);
  };

  return (
    <View style={styles.cita}>
      <View>
        <Text style={styles.label}>Paciente:</Text>
        <Text style={styles.texto}>{cita.paciente}</Text>
      </View>
      <View>
        <Text style={styles.label}>Propietario: </Text>
        <Text style={styles.texto}>{cita.propietario}</Text>
      </View>
      <View>
        <Text style={styles.label}>Síntomas: </Text>
        <Text style={styles.texto}>{cita.sintomas}</Text>
      </View>
      <View>
        <TouchableHighlight
          onPress={() => dialogoEliminar(cita.id)}
          style={styles.btnEliminar}>
          <Text style={styles.btnText}>Eliminar</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cita: {
    backgroundColor: '#FF481F',
    borderStyle: 'solid',
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderColor: '#FFF05A',
    paddingVertical: 20,
    paddingHorizontal: 10,
    marginHorizontal: 10,
    marginVertical: 6,
  },
  label: {
    fontWeight: 'bold',
    fontSize: 19,
    marginTop: 20,
  },
  texto: {
    fontSize: 17,
  },
  btnEliminar: {
    padding: 10,
    backgroundColor: '#FFF05A',
    marginTop: 30,
  },
  btnText: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#191919',
    fontSize: 15,
  },
});

export default Cita;
