let valida_forma = () => {
    let js_identificacion = getTextInputById('f_identificacion');
    let js_nombres = getTextInputById('f_nombres');
    let js_apellidos = getTextInputById('f_apellidos');
    let js_telefono = getTextInputById('f_telefono');
    let js_habitacion = getSelectValueById('f_habitacion');
    let js_tipo_sangre = getSelectValueById('f_tipo_sangre');
    let js_fecha_ingreso = getTextInputById('f_fecha_ingreso');
    let js_fecha_salida = getTextInputById('f_fecha_salida');

    if (js_identificacion.length === 0 ||
        js_nombres.length === 0 ||
        js_apellidos.length === 0 ||
        js_telefono.length === 0 ||
        js_habitacion === '' ||
        js_tipo_sangre === '' ||
        js_fecha_ingreso.length === 0 ||
        js_fecha_salida.length === 0) {
        alert("Todos los campos son obligatorios.");
        return false;
    }
    return true;
}

let getTextInputById = (id) => {
    return document.getElementById(id).value.trim();
}

let getSelectValueById = (id) => {
    return document.getElementById(id).value;
}
