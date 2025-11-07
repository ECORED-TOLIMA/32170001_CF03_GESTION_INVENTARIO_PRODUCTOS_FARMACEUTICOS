<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="fade-right")
      .titulo-principal__numero
        span 6
      h1 Elementos y momentos de la trazabilidad
    
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="flip-down")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema6/img01.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La trazabilidad en los inventarios de productos farmacéuticos es un proceso fundamental que permite identificar, registrar y seguir cada producto desde su ingreso al sistema hasta su dispensación o disposición final. Este seguimiento abarca no solo el control físico del inventario, sino también el historial completo de movimientos, condiciones y responsables, asegurando la calidad del producto, la seguridad del paciente y el cumplimiento normativo.
    
    .row.justify-content-center.mb-0
      .col-lg-10.col-12
        p.mb-0(data-aos="fade-down") El objetivo principal de un sistema de trazabilidad es preservar la integridad y seguridad de los productos a lo largo de su ciclo de vida. Además, facilita una respuesta oportuna frente a eventos críticos como retiros del mercado, errores en la dispensación o reportes de eventos adversos. Su implementación también fortalece la eficiencia operativa, la toma de decisiones basada en datos confiables y la transparencia institucional.
    
    separador
    #t_6_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 6.1 Elementos clave de un sistema de trazabilidad
    
    p.mb-5(data-aos="fade-down") Un sistema eficaz de trazabilidad en inventarios farmacéuticos debe integrar componentes estructurales que garanticen el control, la transparencia y la seguridad en todas las etapas del ciclo del producto. Estos elementos son:

    .tarjeta.tarjeta--BG04.p-4.p-md-5.mb-0
      LineaTiempoC.color-acento-botones(text-small)(data-aos="flip-up")
        .row(titulo="1")
          .col-lg-7.mb-4.mb-md-0.order-lg-2.order-2
            h4 Identificación del producto
            p Cada producto debe estar claramente identificado mediante datos como nombre, concentración, forma farmacéutica, presentación, número de lote, fecha de vencimiento y cantidad. En servicios con capacidad tecnológica, se recomienda el uso de códigos de barras, códigos QR o identificadores únicos para facilitar el rastreo automatizado. En casos de fraccionamiento o reempaque, debe conservarse la información del lote original para asegurar la trazabilidad.
          .col-lg-5.order-lg-1.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema6/img02.jpg', alt='Imagen decorativa')

        .row(titulo="2")
          .col-lg-7.mb-4.mb-md-0.order-lg-2.order-2
            h4 Registro de operaciones
            p Toda acción que implique movimiento o modificación del estado del producto debe registrarse de forma precisa. Entre estas se incluyen la recepción, ingreso, traslado, ajuste, devolución, dispensación y disposición final. Cada registro debe contener al menos la fecha, hora, cantidad, motivo, responsable y observaciones pertinentes.
          .col-lg-5.order-lg-1.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema6/img03.jpg', alt='Imagen decorativa')

        .row(titulo="3")
          .col-lg-7.mb-4.mb-md-0.order-lg-2.order-2
            h4 Seguimiento de ubicación interna
            p Es necesario llevar un control riguroso de la ubicación física del producto dentro del área de almacenamiento. Esto incluye zonas como cuarentena, productos en uso, vencidos, bajo investigación o pendientes de destrucción. Los movimientos deben reflejarse de manera inmediata y verificable en los registros o el sistema de información.
          .col-lg-5.order-lg-1.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema6/img04.jpg', alt='Imagen decorativa')

        .row(titulo="4")
          .col-lg-7.mb-4.mb-md-0.order-lg-2.order-2
            h4 Vínculo con el personal responsable
            p Toda operación debe estar asociada al colaborador que la realiza, mediante firma, clave personal o usuario autorizado. Este vínculo asegura la trazabilidad del recurso humano, facilita las auditorías, fortalece el control interno y permite resolver inconsistencias con mayor rapidez.
          .col-lg-5.order-lg-1.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema6/img05.jpg', alt='Imagen decorativa')

        .row(titulo="5")
          .col-lg-7.mb-4.mb-md-0.order-lg-2.order-2
            h4 Trazabilidad documental
            p Debe conservarse de manera íntegra y organizada toda la documentación que respalde los movimientos del inventario. Esto incluye remisiones, facturas, actas de entrega o devolución, Kardex, registros de temperatura, informes de inventario y documentos de disposición final, entre otros. La documentación debe ser fácilmente accesible y cumplir con los lineamientos institucionales y normativos aplicables.
          .col-lg-5.order-lg-1.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema6/img06.jpg', alt='Imagen decorativa')

        .row(titulo="6")
          .col-lg-7.mb-4.mb-md-0.order-lg-2.order-2
            h4 Sistema de información
            p Aunque el control puede realizarse manualmente, el uso de sistemas informáticos mejora sustancialmente la eficiencia y confiabilidad de la trazabilidad. El <em>software</em> debe permitir búsquedas por código de producto, lote, ubicación o responsable, y garantizar respaldo, seguridad, trazabilidad de accesos y actualización permanente.
          .col-lg-5.order-lg-1.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema6/img07.jpg', alt='Imagen decorativa')

    separador
    #t_6_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 6.2 Momentos críticos de la trazabilidad
    
    p.mb-5(data-aos="fade-down") La trazabilidad debe implementarse de manera rigurosa en los distintos momentos del ciclo de vida del producto dentro del inventario, garantizando así la integridad, seguridad y legalidad en la gestión. Los principales momentos críticos son:

    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--C05")
      .row.justify-content-center.p-4(titulo="Recepción")
        .col-lg-5.order-lg-1.order-2
          p En esta etapa se realiza el primer punto de control. Es indispensable registrar al proveedor, fecha de ingreso, cantidad recibida, número de lote, fecha de vencimiento, condiciones de transporte y estado del empaque. Se debe verificar que los productos coincidan con la orden de compra y estén en condiciones adecuadas. En caso de inconformidades o dudas, los productos deben ingresarse en cuarentena hasta resolver las inconsistencias.
        .col-lg-7.col-10.order-lg-2.order-1.mb-lg-0.mb-4
          figure
            img(src='@/assets/curso/temas/tema6/img08.jpg', alt='Imagen decorativa')
      .row.justify-content-center(titulo="Almacenamiento")
        .col-lg-5.order-lg-1.order-2
          p Durante esta etapa se controla la ubicación interna del producto, respetando las condiciones ambientales necesarias (temperatura, humedad, luz, etc.). También se gestionan los traslados internos, ajustes por diferencias encontradas, y rotación de inventario bajo principios como PEPS (Primero en entrar, primero en salir). Es fundamental mantener registros actualizados y zonas debidamente organizadas, señalizadas y diferenciadas (por ejemplo, productos vencidos, en cuarentena o próximos a vencer).
        .col-lg-7.col-10.order-lg-2.order-1.mb-lg-0.mb-4
          figure
            img(src='@/assets/curso/temas/tema6/img09.jpg', alt='Imagen decorativa')
      .row.justify-content-center(titulo="Dispensación")
        .col-lg-5.order-lg-1.order-2
          p Aquí se registra la entrega del producto, incluyendo fecha y hora, cantidad dispensada, número de lote, unidad o paciente receptor y nombre del responsable que efectúa la entrega. Esta etapa es esencial para garantizar la trazabilidad directa con el usuario final y permite, en caso de errores, reacciones adversas o retiros de producto, una respuesta oportuna y precisa.
        .col-lg-7.col-10.order-lg-2.order-1.mb-lg-0.mb-4
          figure
            img(src='@/assets/curso/temas/tema6/img10.jpg', alt='Imagen decorativa')
      .row.justify-content-center(titulo="Devolución y disposición final")
        .col-lg-5.order-lg-1.order-2
          p Toda devolución debe quedar registrada indicando el estado del producto, causa de devolución, cantidad, fecha y responsable. En caso de destrucción o disposición final, se debe elaborar un acta firmada por personal autorizado, anexando soportes del procedimiento utilizado (por ejemplo, incineración, devolución al proveedor o recolección por gestor autorizado). Esta documentación es clave para cumplir con normativas sanitarias y ambientales.
        .col-lg-7.col-10.order-lg-2.order-1.mb-lg-0.mb-4
          figure
            img(src='@/assets/curso/temas/tema6/img11.jpg', alt='Imagen decorativa')

    p.mb-0(data-aos="fade-down") La adecuada gestión de cada uno de estos momentos críticos permite mantener un control detallado y transparente del inventario, minimizando riesgos sanitarios, logísticos y legales. Implementar un sistema de trazabilidad efectivo no solo fortalece la seguridad y la calidad del servicio, sino que también facilita auditorías, inspecciones y procesos de mejora continua, garantizando la confianza de los usuarios y el cumplimiento normativo.

    separador
    #t_6_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 6.3 Ventajas operativas de la trazabilidad

    p.mb-5(data-aos="fade-down") La trazabilidad representa una herramienta clave para garantizar la seguridad, eficiencia y transparencia en la gestión de productos farmacéuticos. Su adecuada implementación impacta positivamente en diversos aspectos operativos, al permitir un control riguroso sobre cada movimiento del inventario, desde la recepción hasta la disposición final. Entre sus principales ventajas se destacan:
    
    .row.justify-content-center.align-items-center.mb-0(data-aos="flip-up")
      .col-lg-10.col-12
        .row.justify-content-center.align-items-center.mb-5(style="display: flex; width: 100%; margin: auto;")
          .col-lg-7.col-12.mb-5.mb-md-0.order-lg-2.order-2.mb-lg-0
            LineaTiempoD.color-acento-botones.especial
              .row(numero="1" titulo="Seguridad del paciente")
                .col-12.mb-4.mb-md-0
                  p.mb-0 Facilita el seguimiento preciso del producto administrado, identificando lote, fecha, condiciones de conservación y destinatario, lo cual es crucial para prevenir reacciones adversas, errores de medicación y garantizar una atención segura y personalizada.

              .row(numero="2" titulo="Gestión más precisa del inventario")
                .col-12.mb-4.mb-md-0
                  p.mb-0 Optimiza el control de existencias al detectar a tiempo pérdidas, productos próximos a vencer o inconsistencias, lo que permite realizar ajustes correctivos con base en datos confiables y reducir el desperdicio de medicamentos.

              .row(numero="3" titulo="Reducción de errores")
                .col-12.mb-4.mb-md-0
                  p.mb-0 Disminuye significativamente los riesgos de fallas en el almacenamiento, la dispensación y la disposición final, gracias a la trazabilidad de cada movimiento y a la identificación inmediata de desviaciones en el proceso.

              .row(numero="4" titulo="Soporte para auditorías y control institucional")
                .col-12.mb-4.mb-md-0
                  p.mb-0 Proporciona evidencia documental verificable que facilita la evaluación del cumplimiento normativo, tanto en auditorías internas como por parte de entes de control, fortaleciendo la transparencia y la rendición de cuentas.

              .row(numero="5" titulo="Respuesta rápida ante alertas sanitarias")
                .col-12.mb-4.mb-md-0
                  p.mb-0 Permite actuar de forma inmediata frente a retiros del mercado, alertas sanitarias o reportes de fallas en calidad, ya que se puede localizar con exactitud el producto afectado y tomar decisiones oportunas para evitar riesgos mayores.
          .col-lg-5.col-sm-4.col-5.order-lg-1.order-1.mb-lg-0.mb-4.d-none.d-lg-block
            figure
              img(src='@/assets/curso/temas/tema6/img12.png', alt='Imagen decorativa')
        
        p.mb-0(data-aos="fade-down") En conjunto, estas ventajas posicionan la trazabilidad como un componente esencial para la gestión eficiente y segura de los productos farmacéuticos, contribuyendo a la mejora continua de los procesos y a la protección integral de la salud.

    separador
    #t_6_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 6.4 Aplicación según tipo de servicio farmacéutico
    
    p.mb-5(data-aos="fade-down") La implementación de la trazabilidad varía según la naturaleza, tamaño y complejidad del servicio farmacéutico. Cada nivel requiere enfoques y herramientas acordes a sus condiciones operativas, pero todos deben garantizar el cumplimiento de los principios fundamentales del seguimiento de productos. A continuación, se presentan las consideraciones según el tipo de servicio:

    TabsC.color-acento-botones.mb-5(data-aos="flip-up")
      .py-3.py-md-4(titulo="Farmacias comunitarias o pequeñas droguerías")
        .row.justify-content-center.p-4
          .col-lg-7.col-10.order-lg-1.order-1.mb-lg-0.mb-4
            figure(data-aos="fade-right")
              img(src='@/assets/curso/temas/tema6/img13.jpg', alt='Imagen decorativa')
          .col-lg-5.order-lg-2.order-2
            p Estos establecimientos pueden aplicar una trazabilidad básica utilizando herramientas de bajo costo, como registros manuales, hojas de cálculo (Excel) y etiquetas impresas. Aunque manejan volúmenes menores y menos complejidad logística, es fundamental mantener el control de la información mínima requerida: lote, fecha de vencimiento, proveedor y datos del paciente o cliente, cuando aplique.

      .py-3.py-md-4(titulo="Farmacias hospitalarias o institucionales")
        .row.justify-content-center.p-4
          .col-lg-7.col-10.order-lg-1.order-1.mb-lg-0.mb-4
            figure(data-aos="fade-right")
              img(src='@/assets/curso/temas/tema6/img14.jpg', alt='Imagen decorativa')
          .col-lg-5.order-lg-2.order-2
            p Requieren sistemas de trazabilidad más robustos, debido a la alta rotación de productos, el riesgo clínico asociado y la necesidad de control estricto. Se recomienda el uso de sistemas informáticos integrados con el historial clínico, monitoreo de condiciones ambientales (temperatura, humedad) y registros digitales que garanticen la trazabilidad desde la recepción hasta la administración del medicamento al paciente.

      .py-3.py-md-4(titulo="Distribuidores y mayoristas")
        .row.justify-content-center.p-4
          .col-lg-7.col-10.order-lg-1.order-1.mb-lg-0.mb-4
            figure(data-aos="fade-right")
              img(src='@/assets/curso/temas/tema6/img15.jpg', alt='Imagen decorativa')
          .col-lg-5.order-lg-2.order-2
            p Como primer eslabón de la cadena de suministro, tienen la responsabilidad de asegurar la trazabilidad desde el origen del producto (fabricante o importador) hasta el servicio farmacéutico final. Deben cumplir con normativas de buenas prácticas de distribución, garantizar el control de lotes, fechas de vencimiento y condiciones de transporte, así como mantener registros electrónicos que permitan auditorías y trazabilidad inversa.

    p.mb-0(data-aos="fade-down") La trazabilidad, adaptada a cada tipo de servicio farmacéutico, es un componente esencial para asegurar la calidad, seguridad y eficacia de los medicamentos. Independientemente de la escala o complejidad del servicio, su correcta implementación permite mantener el control sobre los productos, facilitar la toma de decisiones y responder de manera eficiente ante riesgos sanitarios. Por tanto, constituye una práctica indispensable en la gestión farmacéutica responsable y alineada con los estándares regulatorios.

    separador
    #t_6_5.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 6.5 Buenas prácticas complementarias

    p.mb-5(data-aos="fade-down") Para fortalecer la trazabilidad y asegurar su eficacia en los servicios farmacéuticos, se recomienda adoptar las siguientes buenas prácticas:
    
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10.col-12.order-lg-2.order-2.mb-lg-0
        .row.justify-content-center.mb-0(data-aos="flip-up")
          .col-12.mb-3
            .tarjeta-avatar-b.h-100
              .tarjeta-avatar-b__img
                img(data-aos="fade-down")(src='@/assets/curso/temas/tema6/img16.svg' alt='AvatarTop')(style= "width: 80%")
              .tarjeta.tarjeta--C02.py-4
                .p-4
                  p.mb-0(data-aos="fade-down") Elaborar y aplicar Procedimientos Normalizados de Operación (PNO) que detallen los pasos para el registro, control, verificación y seguimiento de los productos, desde la recepción hasta la disposición final. Estos procedimientos deben estar actualizados y disponibles para todo el personal involucrado.

      .col-lg-10.col-12.order-lg-2.order-2.mb-lg-0
        .row.justify-content-center.mb-0(data-aos="flip-up")
          .col-12.mb-3
            .tarjeta-avatar-b.h-100
              .tarjeta-avatar-b__img
                img(data-aos="fade-down")(src='@/assets/curso/temas/tema6/img17.svg' alt='AvatarTop')(style= "width: 80%")
              .tarjeta.tarjeta--C02.py-4
                .p-4
                  p.mb-0(data-aos="fade-down") Capacitar de forma continua al personal en el uso correcto de los sistemas de trazabilidad, el manejo de herramientas tecnológicas, la detección de inconsistencias y la importancia del cumplimiento normativo. La formación debe adaptarse a las funciones específicas de cada rol.

      .col-lg-10.col-12.order-lg-2.order-2.mb-lg-0
        .row.justify-content-center.mb-0(data-aos="flip-up")
          .col-12.mb-3
            .tarjeta-avatar-b.h-100
              .tarjeta-avatar-b__img
                img(data-aos="fade-down")(src='@/assets/curso/temas/tema6/img18.svg' alt='AvatarTop')(style= "width: 80%")
              .tarjeta.tarjeta--C02.py-4
                .p-4
                  p.mb-0(data-aos="fade-down") Realizar auditorías internas y externas periódicas con el fin de verificar la efectividad del sistema de trazabilidad, identificar oportunidades de mejora y garantizar el cumplimiento de los estándares de calidad y normativas vigentes.

      .col-lg-10.col-12.order-lg-2.order-2.mb-lg-0
        .row.justify-content-center.mb-0(data-aos="flip-up")
          .col-12.mb-3
            .tarjeta-avatar-b.h-100
              .tarjeta-avatar-b__img
                img(data-aos="fade-down")(src='@/assets/curso/temas/tema6/img19.svg' alt='AvatarTop')(style= "width: 80%")
              .tarjeta.tarjeta--C02.py-4
                .p-4
                  p.mb-0(data-aos="fade-down") Documentar y analizar las inconsistencias detectadas, tales como errores en los registros, pérdidas de productos, fallas en la identificación de lotes o trazas incompletas. Esta información debe utilizarse para la mejora continua del sistema y para prevenir la repetición de fallos.

    .row.justify-content-center.align-items-center.mb-0
      .col-lg-10.col-12
        p.mb-0(data-aos="fade-down") Asegurar el respaldo físico o digital de la información registrada, implementando sistemas de almacenamiento seguros y confiables. Además, se debe establecer un control de acceso que limite la manipulación de los datos únicamente a personal autorizado, preservando así la integridad de la trazabilidad.


</template>

<script>
export default {
  name: 'Tema6',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
