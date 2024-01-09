export const aliasValidator = (input) => {
  const errors = {};

  let aliasRegex = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü]+$/;

  if (!input.trim()) {
    errors.alias = "Ingresa un alias sin espacios";
  } else if (/\s$/.test(input)) {
    errors.alias = "No se permiten espacios al final del alias";
  } else if (!aliasRegex.test(input.trim())) {
    errors.alias = "El campo alias solo acepta letras sin espacios";
  } else if (input.length < 4) {
    errors.alias = "El campo alias debe tener minimo 4 caracteres";
  } else if (input.length > 6) {
    errors.alias = "El campo alias debe tener maximo 6 caracteres";
  }

  return errors;
};

export const roomValidator = (input) => {
  const errors = {};
  let roomRegex = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü]+$/;

  if (!input.trim()) {
    errors.room = "Ingresa una sala sin espacios";
  } else if (/\s$/.test(input)) {
    errors.room = "No se permiten espacios al final del sala";
  } else if (!roomRegex.test(input.trim())) {
    errors.room = "El campo sala solo acepta letras sin espacios";
  } else if (input.length < 4) {
    errors.room = "El campo sala debe tener minimo 4 caracteres";
  } else if (input.length > 6) {
    errors.room = "El campo sala debe tener maximo 6 caracteres";
  }

  return errors;
};
