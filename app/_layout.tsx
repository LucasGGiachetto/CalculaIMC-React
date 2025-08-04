import { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#efefef",
  },
  title: {  
    fontSize: 30,
    fontFamily: "Arial",
    color: "#167408ff",
    fontWeight: "bold",
  },
  text: {
    fontSize: 20,
    fontFamily: "Arial",
    color: "#121212",
  },
  input: {
    width: "80%",
    borderColor: "#000",
    borderWidth: 1,
    padding: 16,
    borderRadius: 12,
    backgroundColor: "#fff"
  }
});

export default function Index() {

  const [Altura, setAltura] = useState("");
  const [Peso, setPeso] = useState("");
  const [imc, setImc] = useState("");
  const [mensagem, setMensagem] = useState("");

  const mensagemimc = (imc: number) => {
    if (imc < 18.5) {
      setMensagem("Abaixo do peso");
    } else if (imc >= 18.5 && imc < 24.9) {
      setMensagem("Peso normal");
    } else if (imc >= 25 && imc < 29.9)
    {
      setMensagem("Sobrepeso");
    } else if (imc >= 30 && imc < 34.9) {
      setMensagem("Obesidade grau 1");
    } else if (imc >= 35 && imc < 39.9) {
      setMensagem("Obesidade grau 2");
    }
  }

  const calcularImc = () => {
    const imcCalculado = ((Number(Peso) / (Number(Altura) * Number(Altura))).toFixed(2));
    setImc(imcCalculado);
    mensagemimc(Number(imcCalculado));
  }
  

return (
  <View style={styles.container}>
    <Text style={styles.title}>Calculadora de IMC</Text>
    <Text style={styles.text}>Digite sua altura em metros:</Text>
    <TextInput
      style={styles.input}
      placeholder="Ex: 1.75"
      value={Altura}
      onChangeText={setAltura}
      keyboardType="numeric"
    />
    <Text style={styles.text}>Digite seu peso em kg:</Text>
    <TextInput
      style={styles.input}
      placeholder="Ex: 70"
      value={Peso}
      onChangeText={setPeso}
      keyboardType="numeric"
    />
    <Button title="Calcular IMC" onPress={calcularImc} />
    {imc ? <Text style={styles.text}>Seu IMC é: {imc}</Text> : null}
    {mensagem ? <Text style={styles.text}>{mensagem}</Text> : null}
  </View>
);
}
