<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero(data-aos="fade-right")
        span 8
      h1 Gestión documental y análisis de reportes
    
    .row.justify-content-center.mb-5
      .col-12(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/tema8/img01.png', alt='Imagen decorativa')

    .row.justify-content-center.mb-0
      .col-lg-10.col-12
        p.mb-0(data-aos="fade-down") La gestión documental es una herramienta esencial en los servicios farmacéuticos, ya que permite registrar, organizar, verificar y transformar la información generada por cada proceso del inventario. Esta información, debidamente documentada y validada, es la base para garantizar la trazabilidad, seguridad y calidad en el manejo de medicamentos. Al mismo tiempo, el análisis de los reportes derivados de esta documentación facilita la toma de decisiones estratégicas y la mejora continua del servicio.

    separador
    #t_8_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 8.1 Verificación de formatos de control

    p.mb-5(data-aos="fade-down") Los formatos de control, ya sean físicos o digitales, son instrumentos que aseguran el cumplimiento de los procedimientos normativos, técnicos y administrativos. Su correcta verificación permite:

    .row.justify-content-center.mb-0(style="display: flex; width: 100%; margin: auto;")
      .col-lg-10.col-12
        .row.justify-content-center.mb-5
          .col-lg-8.col-12.order-lg-2.order-2
            .cajon.cajon.C01.p-4.mb-3
              ol.lista-ol--cuadro.lista-ol--separador(data-aos="fade-down")
                li 
                  .lista-ol--cuadro__vineta
                    span.text-bold 1
                  | Construir la trazabilidad del producto desde su ingreso hasta la disposición final.
                li 
                  .lista-ol--cuadro__vineta
                    span.text-bold 2
                  | Establecer responsabilidades claras sobre cada etapa del proceso.
                li 
                  .lista-ol--cuadro__vineta
                    span.text-bold 3
                  | Detectar errores, pérdidas o desviaciones.
                li 
                  .lista-ol--cuadro__vineta
                    span.text-bold 4
                  | Cumplir con las exigencias regulatorias del INVIMA y otras autoridades sanitarias.
                li 
                  .lista-ol--cuadro__vineta
                    span.text-bold 5
                  | Respaldar decisiones clínicas, administrativas y de mejora continua.
          .col-lg-4.col-md-7.col-12.mb-3.order-lg-1.order-1.mb-lg-0
            .row.justify-content-center(data-aos="flip-up")
              .col
                figure
                  img(src='@/assets/curso/temas/tema8/img02.png', alt='Imagen decorativa')
        p.mb-5(data-aos="fade-down") Actualmente existen algunos tipos de formatos que pueden ser útiles para la verificación:

        .row.justify-content-center
          .col-12
            .row.justify-content-center.mb-5(style="display: flex; width: 100%; margin: auto;")
              .col-lg-8.col-12.order-lg-1.order-2
                .cajon.cajon.C02.p-3
                  .row.justify-content-center
                    .col-lg-6.col-12
                      ul.lista-ul--color.mb-0(data-aos="fade-down")
                        li.mb-2
                          i.fas.fa-chevron-right
                          | Recepción de productos farmacéuticos.
                        li.mb-2
                          i.fas.fa-chevron-right
                          | Almacenamiento.
                        li.mb-2
                          i.fas.fa-chevron-right
                          | Registro de temperatura y humedad.
                        li.mb-2
                          i.fas.fa-chevron-right
                          | Kardex (físico o digital).
                    .col-lg-6.col-12
                      ul.lista-ul--color.mb-0(data-aos="fade-down")
                        li.mb-2
                          i.fas.fa-chevron-right
                          | Control de vencimientos.
                        li.mb-2
                          i.fas.fa-chevron-right
                          | Medicamentos de uso controlado.
                        li.mb-2
                          i.fas.fa-chevron-right
                          | Dispensación.
                        li.mb-2
                          i.fas.fa-chevron-right
                          | Disposición final.
              .col-lg-4.col-md-7.col-12.mb-3.order-lg-2.order-1.mb-lg-0
                .row.justify-content-center(data-aos="flip-up")
                  .col
                    figure
                      img(src='@/assets/curso/temas/tema8/img03.svg', alt='Imagen decorativa')
          
    p.mb-5(data-aos="fade-down") Para garantizar que el proceso de trazabilidad cumpla con los estándares de calidad y seguridad exigidos en los servicios farmacéuticos, es necesario aplicar criterios clave que permitan verificar la validez y utilidad de los registros realizados. Estos criterios no solo aseguran el control del inventario y de los procesos, sino que también respaldan la toma de decisiones clínicas y administrativas. Entre los principales criterios de verificación se encuentran:

    .row.justify-content-center.align-items-center.mb-5(data-aos="flip-up")
      SlyderF(columnas="col-lg-6 col-xl-4")
        .tarjeta.tarjeta--BG08.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/tema8/img04.svg' alt='AvatarTop')
          h4.text-center Completitud
          p Todos los campos diligenciados correctamente.

        .tarjeta.tarjeta--BG08.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/tema8/img05.svg' alt='AvatarTop')
          h4.text-center Consistencia
          p Coherencia con otros registros o sistemas.

        .tarjeta.tarjeta--BG08.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/tema8/img06.svg' alt='AvatarTop')
          h4.text-center Legibilidad
          p Claridad en la información escrita o digital.

        .tarjeta.tarjeta--BG08.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/tema8/img07.svg' alt='AvatarTop')
          h4.text-center Actualización
          p Reflejo del estado real del proceso o producto.

        .tarjeta.tarjeta--BG08.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/tema8/img08.svg' alt='AvatarTop')
          h4.text-center Respaldo
          p Existencia de soportes verificables.

        .tarjeta.tarjeta--BG08.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/tema8/img09.svg' alt='AvatarTop')
          h4.text-center Firma y responsabilidad
          p Identificación de quien diligencia el formato.
    
    .row.justify-content-center.mb-0
      .col-lg-10.col-12
        p.mb-0(data-aos="fade-down") Entre las buenas prácticas recomendadas para fortalecer la verificación de formatos en los servicios farmacéuticos, se encuentra el establecimiento de frecuencias claras de revisión que garanticen la oportunidad del control. Es fundamental utilizar listas de chequeo específicas para cada tipo de formato, capacitar de manera continua al personal involucrado en el diligenciamiento, implementar controles cruzados y respaldos digitales para minimizar errores, y mantener todos los formatos estandarizados y actualizados conforme a la normativa vigente y a las necesidades del proceso.

    separador
    #t_8_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 8.2 Análisis de reportes de inventario

    p.mb-5(data-aos="fade-down") Una vez registrados los datos en los formatos, estos se transforman en reportes que deben analizarse periódicamente para extraer conclusiones útiles. Este análisis fortalece la toma de decisiones, la planeación, la detección de riesgos y la mejora continua del sistema de inventario. Entre los reportes más relevantes se encuentran:

    .row.justify-content-center.mb-4
      .col-xl-4.col-lg-6.col-md-6.col-12.mb-xl-0
        .crd_hover_txt.mb-4(data-aos="flip-left")(@mouseover="mostrarIndicador = true")
          .indicador--hover(v-if="mostrarIndicador")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema8/img10.jpg", alt="Imagen decorativa")
          .crd_hover_txt--body
            h5.t1.mb-3 Inventario general
            h5.t2.mb-2 Inventario general
            p.mb-0 Muestra el <em>stock</em> actualizado, incluyendo unidades disponibles y comprometidas.

      .col-xl-4.col-lg-6.col-md-6.col-12.mb-xl-0
        .crd_hover_txt.mb-4(data-aos="flip-left")(@mouseover="mostrarIndicador = true")
          .indicador--hover(v-if="mostrarIndicador")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema8/img11.jpg", alt="Imagen decorativa")
          .crd_hover_txt--body
            h5.t1.mb-3 Vencimientos
            h5.t2.mb-2 Vencimientos
            p.mb-0 Identifica productos próximos a expirar, permitiendo tomar acciones preventivas.

      .col-xl-4.col-lg-6.col-md-6.col-12.mb-xl-0
        .crd_hover_txt.mb-4(data-aos="flip-left")(@mouseover="mostrarIndicador = true")
          .indicador--hover(v-if="mostrarIndicador")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema8/img12.jpg", alt="Imagen decorativa")
          .crd_hover_txt--body
            h5.t1.mb-3 Entradas y salidas
            h5.t2.mb-2 Entradas y salidas
            p.mb-0 Permite analizar la rotación de inventario, verificar el cumplimiento de la metodología PEPS y detectar posibles inconsistencias.

      .col-xl-4.col-lg-6.col-md-6.col-12.mb-xl-0
        .crd_hover_txt.mb-4(data-aos="flip-left")(@mouseover="mostrarIndicador = true")
          .indicador--hover(v-if="mostrarIndicador")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema8/img13.jpg", alt="Imagen decorativa")
          .crd_hover_txt--body
            h5.t1.mb-3 Temperatura y humedad
            h5.t2.mb-2 Temperatura y humedad
            p.mb-0 Asegura la estabilidad de las condiciones ambientales en las zonas de almacenamiento.

      .col-xl-4.col-lg-6.col-md-6.col-12.mb-xl-0
        .crd_hover_txt.mb-4(data-aos="flip-left")(@mouseover="mostrarIndicador = true")
          .indicador--hover(v-if="mostrarIndicador")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema8/img14.jpg", alt="Imagen decorativa")
          .crd_hover_txt--body
            h5.t1.mb-3 Medicamentos controlados
            h5.t2.mb-2 Medicamentos controlados
            p.mb-0 Permite un control estricto sobre psicotrópicos y estupefacientes.

    .row.justify-content-center
      .col-lg-10.col-12
        .row.justify-content-center.mb-5(style="display: flex; width: 100%; margin: auto;")
          p.mb-5(data-aos="fade-down") Para finalizar el proceso, es indispensable aplicar los resultados del análisis mediante acciones como:
          .col-lg-8.col-12.order-lg-2.order-2
            .cajon.cajon.C01.p-3
              .row.justify-content-center
                ul.lista-ul--color.mb-0(data-aos="fade-down")
                  li.mb-3
                    i.fas.fa-chevron-right
                    | Identificación de desviaciones o alertas tempranas.
                  li.mb-3
                    i.fas.fa-chevron-right
                    | Generación de indicadores clave (por ejemplo: vencimientos evitados, cumplimiento del PEPS y pérdidas detectadas).
                  li.mb-3
                    i.fas.fa-chevron-right
                    | Planeación de compras basada en evidencia.
                  li.mb-3
                    i.fas.fa-chevron-right
                    | Apoyo en auditorías y elaboración de reportes de calidad.
                  li.mb-0
                    i.fas.fa-chevron-right
                    | Retroalimentación en comités de gestión, reuniones clínicas y procesos de capacitación.
          .col-lg-4.col-md-7.col-12.mb-3.order-lg-1.order-1.mb-lg-0
            .row.justify-content-center(data-aos="flip-up")
              .col
                figure
                  img(src='@/assets/curso/temas/tema8/img15.svg', alt='Imagen decorativa')
        
        p.mb-5(data-aos="fade-down") El análisis riguroso de los reportes de inventario no solo permite mantener el control operativo del <em>stock</em>, sino que también se convierte en una herramienta estratégica para garantizar la eficiencia, seguridad y calidad del servicio farmacéutico. Aplicar correctamente esta información fortalece la trazabilidad, mejora la toma de decisiones y contribuye significativamente al cumplimiento normativo, al uso racional de los recursos y a la satisfacción del usuario.

</template>

<script>
export default {
  name: 'Tema8',
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
