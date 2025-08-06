<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="fade-right")
      .titulo-principal__numero
        span 5
      h1 Cálculo de stock en inventarios farmacéuticos

    separador
    #t_5_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.1 Tipos de stock y su cálculo

    separador
    #t_5_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.2 Ejemplo práctico de cálculo de stock


</template>

<script>
export default {
  name: 'Tema5',
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
