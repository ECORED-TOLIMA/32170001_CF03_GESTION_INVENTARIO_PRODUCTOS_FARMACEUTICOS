<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p El control de inventario de productos farmacéuticos es un proceso clave para asegurar la disponibilidad oportuna de medicamentos, optimizar recursos y cumplir con la normativa vigente. Este contenido aborda desde la estructuración del inventario y la definición de políticas operativas hasta la aplicación de métodos de control, trazabilidad y análisis de reportes. Además, incorpora herramientas tecnológicas que apoyan la gestión eficiente y documentada del inventario, fortaleciendo la toma de decisiones en los servicios farmacéuticos y garantizando la calidad en la atención a los usuarios.
    

    .row.justify-content-center
      .col-lg-10.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="En esta síntesis se presenta la estructura del control de inventario farmacéutico, el cual garantiza la disponibilidad, eficiencia y cumplimiento normativo. Incluye políticas, métodos de control, trazabilidad, tecnología y análisis de reportes para una gestión segura y eficaz en los servicios farmacéuticos.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
