<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-12
        .row.justify-content-center(style="display: flex; width: 100%; margin: auto;")
          .col-lg-7.col-12.order-lg-2.order-2
            p(data-aos="fade-down") El control de inventario en los servicios farmacéuticos es un proceso fundamental que permite garantizar la disponibilidad, trazabilidad y adecuada rotación de los productos, contribuyendo así a la eficiencia operativa, la seguridad del paciente y el cumplimiento de la normatividad vigente.
            .cajon.cajon.C01.color-primario.p-4
              p.mb-0 Este componente formativo tiene como propósito desarrollar en el aprendiz las competencias necesarias para gestionar de manera adecuada los inventarios, identificando sus tipos, objetivos, parámetros operativos y políticas de control. Así mismo, busca fortalecer el análisis de métodos de control, el cálculo de stock, la trazabilidad de los productos y el uso de herramientas tecnológicas que facilitan el registro, seguimiento y generación de reportes confiables.
          .col-lg-5.col-md-7.col-12.mb-3.order-lg-1.order-1.mb-lg-0
            .row.justify-content-center(data-aos="flip-up")
              .col
                figure
                  img(src='@/assets/curso/temas/intro/img01.png', alt='Imagen decorativa')
    
    p(data-aos="fade-down") Para lograrlo, se abordarán contenidos estructurados en torno a los conceptos clave del inventario farmacéutico, los sistemas de control existentes, el uso de tecnologías aplicadas y la interpretación de formatos y reportes. A través del estudio de estos temas, el aprendiz podrá aplicar procedimientos técnicos alineados con la normativa del sector, optimizando los recursos y mejorando los procesos de almacenamiento y dispensación de medicamentos.
    p.mb-5(data-aos="fade-down") Para comprender la importancia del contenido y los temas abordados, se recomienda acceder al siguiente video:
    
    .row.justify-content-center.align-items-center.mb-0      
      .col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/vdPrCjWJSHo?si=X4NxENRo3LLXAua_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
