import React, { useContext, useState } from 'react';
import {
  View,
  StyleSheet,
  ActivityIndicator,
  Image,
  TouchableOpacity,
  Text,
} from 'react-native';

import { useFormik } from 'formik';
import * as yup from 'yup';

import { TextInput } from 'react-native-paper';

import { AuthContext } from '../context/AuthContext';

const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);
  const { isLoading, register } = useContext(AuthContext);

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: yup.object(validationSchema()),
    validateOnChange: false,
    onSubmit: form => {
      register(form.email, form.password);
    },
  });
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../images/logo.png')}
      />
      <ActivityIndicator size="large" color="blue" animating={isLoading} />
      <View style={styles.wrapper}>
        <Text style={styles.textError}>{formik.errors.email}</Text>
        <TextInput
          mode="outlined"
          label="Enter Email"
          value={formik.values.email}
          style={styles.input}
          onChangeText={text => formik.setFieldValue('email', text)}
        />
        <Text style={styles.textError}>{formik.errors.password}</Text>
        <TextInput
          style={styles.input}
          mode="outlined"
          value={formik.values.password}
          label="Enter password"
          onChangeText={text => formik.setFieldValue('password', text)}
          secureTextEntry
        />

        <TextInput
          style={styles.input}
          mode="outlined"
          value={formik.values.confirmPassword}
          label="Confirm password"
          onChangeText={text => formik.setFieldValue('confirmPassword', text)}
          secureTextEntry
        />


        <TouchableOpacity
          onPress={formik.handleSubmit}
          style={styles.registerButton}>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

function initialValues() {
  return {
    email: '',
    password: '',
    confirmPassword: '',
  };
}

function validationSchema() {
  return {
    email: yup
      .string()
      .email('Email format is invalid')
      .required('Email is required'),
    password: yup
      .string()
      .required('Please enter your password.')
      .min(8, 'Your password is too short.'),
    confirmPassword: yup
      .string()
      .required('Please retype your password.')
      .oneOf([yup.ref('password')], 'Your passwords do not match.')
  };
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f2f2f2',
  },
  wrapper: {
    width: '80%',
  },
  input: {
    marginBottom: 20,
  },
  registerButton: {
    elevation: 6,
    backgroundColor: '#13b7dc',
    borderRadius: 30,
    paddingVertical: 6,
    paddingHorizontal: 6,
    paddingVertical: 15,
    marginTop: 10,
  },
  buttonText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
  },
  textError: {
    color: '#ab0000',
    fontSize: 12,
  },
  logo: {
    width: 180,
    height: 32,
    resizeMode: 'stretch',
  },
});

export default RegisterScreen;
