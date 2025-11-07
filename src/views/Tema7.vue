<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero(data-aos="fade-right")
        span 7
      h1 Herramientas tecnológicas para el control de inventario

    .row.justify-content-center.mb-0(data-aos="flip-up")
      .col-12
        .row.justify-content-center(style="display: flex; width: 100%; margin: auto;")
          .col-lg-7.col-12.order-lg-1.order-2
            p(data-aos="fade-down") En un entorno donde el margen de error debe ser mínimo, especialmente por los riesgos que implican los errores en la gestión de medicamentos, la tecnología se convierte en un aliado esencial para garantizar precisión, eficiencia y seguridad. Aunque el registro manual sigue vigente en algunos contextos rurales o pequeños establecimientos, este método presenta limitaciones importantes como inconsistencias en los datos, demoras en los procesos y vulnerabilidades en la trazabilidad. Por el contrario, las soluciones tecnológicas permiten automatizar procesos, acceder a información en tiempo real, generar alertas, y mantener un control exhaustivo del inventario.
            .cajon.cajon.C01.color-primario.p-4
              p.mb-0 Estas herramientas no solo optimizan la operación diaria, sino que también facilitan el cumplimiento de estándares de calidad, ya que posibilitan una documentación oportuna y confiable de todos los movimientos de los productos. Adicionalmente, mejoran la coordinación entre las áreas administrativas, clínicas y logísticas, al centralizar la información en plataformas compartidas y accesibles para el personal autorizado.
          .col-lg-5.col-md-7.col-12.mb-3.order-lg-2.order-1.mb-lg-0
            .row.justify-content-center(data-aos="flip-up")
              .col
                figure
                  img(src='@/assets/curso/temas/tema7/img01.png', alt='Imagen decorativa')
    
    separador
    #t_7_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 7.1 Tecnologías aplicadas al inventario farmacéutico
    
    p.mb-5(data-aos="fade-down") En el contexto de los servicios farmacéuticos, la implementación de tecnologías especializadas permite optimizar la gestión del inventario, asegurar la trazabilidad de los productos y garantizar la disponibilidad oportuna de medicamentos. Estas herramientas no solo automatizan procesos clave como el registro, seguimiento y control de insumos, sino que también fortalecen la seguridad del paciente, reducen errores humanos y facilitan la toma de decisiones basada en datos. A continuación, se presenta una tabla con algunas de las tecnologías más utilizadas y sus aplicaciones prácticas en el entorno farmacéutico:

    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 3.
          span <em>Tecnologías aplicadas al inventario farmacéutico</em>          
        .tabla-a.color-acento-contenido
          table
            thead
              tr(style="background-color: #FDEEE0")
                th(data-aos="fade-down")(style= "width: 30%") Tecnología
                th(data-aos="fade-down")(style= "width: 35%") Descripción funcional
                th(data-aos="fade-down")(style= "width: 35%") Aplicación en servicios farmacéuticos
            tbody
              tr
                td.text-bold(data-aos="fade-down") <em>Software</em> de gestión de inventarios (ERP y módulos de farmacia)
                td(data-aos="fade-down") Registra ingresos, egresos, ajustes, devoluciones, transferencias; calcula <em>stock</em> mínimo y genera alertas.
                td(data-aos="fade-down") Gestión integral del inventario, integración con prescripción, dispensación y facturación.
              tr
                td.text-bold(data-aos="fade-down")(style="background-color: #F6F6F6") Kardex digital
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Controla cada producto por lote, fecha de vencimiento y movimientos.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Sustituye registros manuales, facilita auditorías y conciliaciones.
              tr
                td.text-bold(data-aos="fade-down") Lectores de código de barras y QR
                td(data-aos="fade-down") Automatizan el registro y validación de productos mediante escaneo.
                td(data-aos="fade-down") Evitan errores de digitación, agilizan ingresos y salidas de inventario.
              tr
                td.text-bold(data-aos="fade-down")(style="background-color: #F6F6F6") Etiquetado electrónico
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Conserva la información del lote tras fraccionamiento o reempaque.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Garantiza trazabilidad en la dispensación unitaria o parcial.
              tr
                td.text-bold(data-aos="fade-down") Sistemas de monitoreo ambiental digital
                td(data-aos="fade-down") Controlan temperatura, humedad y otras variables ambientales en tiempo real.
                td(data-aos="fade-down") Aseguran condiciones de almacenamiento en cadena de frío o ambientes especiales.
              tr
                td.text-bold(data-aos="fade-down")(style="background-color: #F6F6F6") Bases de datos en la nube
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Permiten acceso remoto, respaldos automáticos, control por perfiles y recuperación de datos.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Favorecen la gestión centralizada entre sedes y mejoran la seguridad de la información.
              tr
                td.text-bold(data-aos="fade-down") Tableros de control y analítica de datos
                td(data-aos="fade-down") Visualizan indicadores clave como vencimientos, consumos, <em>stock</em> crítico y rotación.
                td(data-aos="fade-down") Facilitan la toma de decisiones estratégicas y presentación de informes.
              tr
                td.text-bold(data-aos="fade-down")(style="background-color: #F6F6F6") RFID (Identificación por radiofrecuencia)
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Utiliza etiquetas electrónicas que permiten identificar, rastrear y actualizar datos sin contacto visual.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Control automático de inventario en tiempo real, útil para hospitales y mayoristas.
              tr
                td.text-bold(data-aos="fade-down") Aplicaciones móviles de inventario
                td(data-aos="fade-down") Apps que permiten gestionar inventario desde dispositivos móviles mediante sincronización con <em>software</em> central.
                td(data-aos="fade-down") Útiles para conteos físicos, validaciones rápidas y gestión en campo.
              tr
                td.text-bold(data-aos="fade-down")(style="background-color: #F6F6F6") Sistemas de trazabilidad integrados
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Enlazan los movimientos del producto con su historia clínica, prescripción y dispensación.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Aseguran trazabilidad completa desde la recepción hasta el paciente.
    
    .row.justify-content-center.mb-0(data-aos="flip-up")
      .col-12.col-lg-10
        p.mb-0(data-aos="fade-down") El aprovechamiento de estas tecnologías no solo responde a una necesidad operativa, sino que se convierte en un componente estratégico para mejorar la eficiencia, la trazabilidad y la calidad en la prestación del servicio farmacéutico. Su correcta implementación y uso contribuyen a minimizar riesgos, optimizar recursos y garantizar la disponibilidad continua de medicamentos, elementos fundamentales para brindar una atención segura y oportuna a los usuarios. Por ello, el personal involucrado en los procesos de inventario debe estar capacitado para comprender y aplicar estas herramientas con criterio técnico y responsabilidad ética.
    
    separador
    #t_7_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 7.2 Implementación de herramientas tecnológicas y sus desafíos
    
    p.mb-5(data-aos="fade-down") La implementación de herramientas tecnológicas para el control de inventarios farmacéuticos requiere una planificación cuidadosa que considere tanto las condiciones del servicio como las necesidades del equipo. Este proceso puede abordarse mediante los siguientes pasos:

    .row.justify-content-center.align-items-center.mb-5(data-aos="flip-up")
      SlyderF(columnas="col-lg-6 col-xl-4")
        .tarjeta.tarjeta--BG08.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/tema7/img02.svg' alt='AvatarTop')
          h4.text-center Diagnóstico inicial
          p Identificar las necesidades específicas del servicio farmacéutico, evaluar los procesos actuales y definir los objetivos que se esperan alcanzar con la tecnología.

        .tarjeta.tarjeta--BG08.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/tema7/img03.svg' alt='AvatarTop')
          h4.text-center Selección de la herramienta tecnológica
          p Escoger el <em>software</em> o sistema más adecuado según el tipo de institución, el volumen del inventario, la compatibilidad con otros sistemas y el presupuesto disponible.

        .tarjeta.tarjeta--BG08.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/tema7/img04.svg' alt='AvatarTop')
          h4.text-center Plan de capacitación
          p Diseñar un plan para formar al personal en el uso correcto y responsable de las herramientas tecnológicas, promoviendo la apropiación del sistema.

        .tarjeta.tarjeta--BG08.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/tema7/img05.svg' alt='AvatarTop')
          h4.text-center Adaptación de la infraestructura tecnológica
          p Verificar que se cuente con los equipos, la conectividad y las condiciones técnicas necesarias para el correcto funcionamiento de la herramienta.

        .tarjeta.tarjeta--BG08.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/tema7/img06.svg' alt='AvatarTop')
          h4.text-center Implementación gradual y acompañamiento
          p Aplicar la tecnología de forma progresiva, haciendo seguimiento cercano al proceso y resolviendo dificultades que puedan surgir en la fase inicial.

        .tarjeta.tarjeta--BG08.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/tema7/img07.svg' alt='AvatarTop')
          h4.text-center Evaluación y mejora continua
          p Medir el desempeño del sistema con base en indicadores, retroalimentación del equipo y revisión periódica de la base de datos para asegurar su efectividad y actualización.

    p.mb-5(data-aos="fade-down") Una vez implementado el sistema, es posible enfrentar diversos desafíos que pueden afectar su sostenibilidad. Entre los más comunes se encuentran:

    .row.justify-content-center.mb-5
      .col-lg-4.col-12
        .d-flex.align-items-stretch.h-100.w
          .cajon.cajon.C03.p-0.d-flex.align-items-center.justify-content-center(style="width:50%;")
            img(src='@/assets/curso/temas/tema7/img11.svg' alt="Imagen decorativa" style="max-width:100%; height:auto;")(data-aos="fade-up")
          .cajon.cajon.C01.p-4.w-100.align-items-center
            h5.mb-0(data-aos="fade-down") Los costos iniciales de adquisición

      .col-lg-4.col-12
        .d-flex.align-items-stretch.h-100.w
          .cajon.cajon.C03.p-0.d-flex.align-items-center.justify-content-center(style="width:50%;")
            img(src='@/assets/curso/temas/tema7/img12.svg' alt="Imagen decorativa" style="max-width:100%; height:auto;")(data-aos="fade-up")
          .cajon.cajon.C01.p-4.w-100.align-items-center
            h5.mb-0(data-aos="fade-down") Las limitaciones en conectividad e infraestructura tecnológica, especialmente en zonas rurales.

      .col-lg-4.col-12
        .d-flex.align-items-stretch.h-100.w
          .cajon.cajon.C03.p-0.d-flex.align-items-center.justify-content-center(style="width:50%;")
            img(src='@/assets/curso/temas/tema7/img13.svg' alt="Imagen decorativa" style="max-width:100%; height:auto;")(data-aos="fade-up")
          .cajon.cajon.C01.p-4.w-100.align-items-center
            h5.mb-0(data-aos="fade-down") La necesidad constante de actualización para evitar la obsolescencia.

    p(data-aos="fade-down") Además, es fundamental establecer mecanismos de respaldo y contingencias ante fallas técnicas.
    p.mb-0(data-aos="fade-down") A pesar de estos retos, los beneficios superan ampliamente las dificultades. La implementación de estas herramientas permite una mayor precisión en los datos, evita duplicidades y pérdidas, mejora la eficiencia operativa, facilita la realización de auditorías, incrementa la trazabilidad, optimiza la compra de medicamentos y brinda acceso a información en tiempo real. Todo esto contribuye a una gestión más segura, transparente y centrada en la calidad del servicio farmacéutico.

</template>

<script>
export default {
  name: 'Tema7',
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
