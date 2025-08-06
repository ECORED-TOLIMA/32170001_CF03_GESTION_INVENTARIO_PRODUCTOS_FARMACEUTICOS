<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="fade-right")
      .titulo-principal__numero
        span 6
      h1 Elementos y momentos de la trazabilidad
    
    separador
    #t_6_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 6.1 Elementos clave de un sistema de trazabilidad

    separador
    #t_6_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 6.2 Momentos críticos de la trazabilidad

    separador
    #t_6_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 6.3 Ventajas operativas de la trazabilidad

    separador
    #t_6_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 6.4 Aplicación según tipo de servicio farmacéutico

    separador
    #t_6_5.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 6.5 Buenas prácticas complementarias


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
