let comando;
while (comando !='Salir'){
comando = prompt('Ingrese el comando:\n\n- Asesor Natura\n- Enviar consulta\n- Mostrar productos\n- Salir');
switch (comando) {
    case 'Salir':
        alert("Usted esta saliendo de la consola de comandos de Natura");
        break;
    case 'Enviar consulta':
        let remitente = prompt('Ingrese el nombre del Remitente');
        let consulta = prompt('Ingrese la consulta que desea enviar');
        alert("La Consulta es  '" + consulta + "' fue enviada correctamente por " + remitente);
        break;
        case 'Mostrar productos':
            for (let i = 1; i <= 11; i++){
                alert('Producto Nº ' + i);
            }
            break;
            case 'Asesor Natura':
                alert('Conectandose A Natura ... Aguarde un momento por favor');
            let clave = prompt('Ingrese la clave de asesor por favor:');
        if (clave == 2566) {
            alert('Conectado a la base de datos de la Natura . Obteniendo información ...');
            comando = 'Salir';
        }
    break;
default:
    alert('Comando inválido.');
break;            }
}